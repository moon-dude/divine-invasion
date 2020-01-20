import * as THREE from "three";
import { Coor, Dir, num_eq, num_lt, num_gt } from "./jlib";
import { Dialogue } from "./dialogue";
import { Player } from "./player";
import { TILE_SIZE } from "./constants";
import { Stats } from "./stats";
import { BattleData, BattleSide } from "./battle_data";
import { DEMON_MAP } from "./data/raw/demons";
import { SKILL_MAP } from "./data/raw/skills";
import { Demon } from "./data/demon";
import { Skill } from "./data/skill";
import { Mood } from "./emotion";
import { ActorTween } from "./actor_tween";

const ACTOR_OFFSET_FRONT = 0.4;
const ACTOR_OFFSET_SIDE = 0.3;

const cultist_texture = new THREE.TextureLoader().load("assets/cultist.png");
export const CULTIST_MAT = new THREE.MeshStandardMaterial({
  map: cultist_texture,
  transparent: true,
  roughness: 0.3
});

const demon_texture = new THREE.TextureLoader().load("assets/demon.png");
export const DEMON_MAT = new THREE.MeshStandardMaterial({
  map: demon_texture,
  transparent: true,
  roughness: 0.3
});

const geometry = new THREE.PlaneGeometry(2.5, 3.5);

export class Actor {
  public name: string;
  public coor: Coor | null;
  public pos_index: number = 0;
  public mesh: THREE.Mesh;
  public dialogue: Dialogue[];
  public is_blocking: boolean = false;
  public battle_data: BattleData;
  public position: THREE.Vector3 | null = null;

  private tween: ActorTween = new ActorTween();

  constructor(
    name: string,
    dialogue: Dialogue[],
    material: THREE.MeshStandardMaterial = CULTIST_MAT,
    battle_data: BattleData = BattleData.IDENTITY
  ) {
    this.name = name;
    this.coor = null;
    this.mesh = new THREE.Mesh(geometry, material);
    this.dialogue = dialogue;
    this.battle_data = battle_data;
  }

  public static from_demon(
    name: string,
    side: BattleSide,
    coor: Coor | null = null
  ) {
    let demon: Demon = DEMON_MAP.get(name)!;
    let skills: Skill[] = [];
    if (demon.level) {
      for (let i = 0; i < demon.skills.length; i++) {
        if (demon.skills[i][1] <= demon.level) {
          skills.push(SKILL_MAP.get(demon.skills[i][0])!);
        }
      }
    }
    let mood: Mood | null = null;
    if (side == BattleSide.Their) {
      mood = Mood.Aggressive;
    }
    let actor = new Actor(
      name,
      [],
      DEMON_MAT,
      new BattleData(
        name,
        side,
        demon.level || 1,
        demon.stats,
        Stats.new_mod(),
        skills,
        mood
      )
    );
    actor.coor = coor;
    return actor;
  }

  private need_to_be_placed() {
    if (this.coor == null) {
      return false;
    }
    if (this.position == null) {
      return true;
    }
    // player is on the same line (x or z) and facing towards me.
    if (
      !num_eq(Player.Instance.coor.x, this.coor.x) &&
      !num_eq(Player.Instance.coor.z, this.coor.z)
    ) {
      return false;
    }
    if (num_lt(Player.Instance.coor.x, this.coor.x)) {
      return Player.Instance.dir == Dir.E;
    }
    if (num_gt(Player.Instance.coor.x, this.coor.x)) {
      return Player.Instance.dir == Dir.W;
    }
    if (num_lt(Player.Instance.coor.z, this.coor.z)) {
      return Player.Instance.dir == Dir.S;
    }
    if (num_gt(Player.Instance.coor.z, this.coor.z)) {
      return Player.Instance.dir == Dir.N;
    }
    return false;
  }

  public update() {
    if (this.coor != null) {
      this.mesh.rotation.y = Player.Instance.body.rotation.y;

      if (this.need_to_be_placed()) {
        let offset_x = 0;
        let offset_z = 0;
        switch (Player.Instance.dir) {
          case Dir.W:
            offset_x = -this.get_pos_front_offset();
            offset_z = this.get_pos_side_offset();
            break;
          case Dir.E:
            offset_x = this.get_pos_front_offset();
            offset_z = -this.get_pos_side_offset();
            break;
          case Dir.N:
            offset_x = -this.get_pos_side_offset();
            offset_z = -this.get_pos_front_offset();
            break;
          case Dir.S:
            offset_x = this.get_pos_side_offset();
            offset_z = this.get_pos_front_offset();
            break;
        }
        this.position = new THREE.Vector3(
          (this.coor.x + offset_x) * TILE_SIZE,
          -0.7,
          (this.coor.z + offset_z) * TILE_SIZE
        );
      }
    }

    if (this.position != null) {
      if (this.battle_data.just_acted()) {
        this.tween.bump();
      }
      if (this.battle_data.just_got_damaged()) {
        this.tween.set_shake(0.1);
      }
      this.tween.update(this.mesh, this.position);
    }

    this.mesh.visible =
      this.battle_data.modded_base_stats().hp > 0 &&
      !this.battle_data.recruited;
  }

  public get_pos_front_offset(): number {
    if (this.pos_index < 3) {
      return ACTOR_OFFSET_FRONT * 0.9 + this.pos_index * 0.01;
    }
    return ACTOR_OFFSET_FRONT + this.pos_index * 0.01;
  }

  public get_pos_side_offset(): number {
    if (this.pos_index == 1) {
      return -ACTOR_OFFSET_SIDE;
    }
    if (this.pos_index == 2) {
      return ACTOR_OFFSET_SIDE;
    }
    if (this.pos_index == 3) {
      return -ACTOR_OFFSET_SIDE / 2;
    }
    if (this.pos_index == 4) {
      return ACTOR_OFFSET_SIDE / 2;
    }
    return 0;
  }
}
