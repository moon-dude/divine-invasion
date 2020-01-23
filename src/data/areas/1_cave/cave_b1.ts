import { Grid, Coor } from "../../../jlib";
import { Actor, DEMON_MAT } from "../../../actor";
import { Dialogue } from "../../../dialogue";
import { flags } from "../../../globals";
import { TileMap } from "../../../map";
import { LevelData } from "../area_data";
import { BattleData } from "../../../battle_data";

var map_walkable: string =
  "####################" +
  "#     #@# B#####<  #" +
  "#     # ## #  C### #" +
  "#     #  A    I###F#" +
  "#     ####### ##$# #" +
  "#     #            #" +
  "### ###E###L#D#$#HG#" +
  "### ### #K##########" +
  "###  J        <#####" +
  "####################";

var level1_map = new TileMap(Grid.from_string(map_walkable, 20), [
  "Life Stone",
  "Life Stone"
]);

var npc_map: Map<string, Actor> = new Map([
  [
    "A",
    new Actor("Abel", [
      new Dialogue("Well, well, the new recruit is finally awake.")
        .set_info("<< SPACE: continue >>")
        .lock(),
      new Dialogue("You're expected in the Summoning Room.").lock(),
      new Dialogue("You know where that is right?")
    ])
  ],
  [
    "B",
    new Actor("Beth", [
      new Dialogue("My head hurts..."),
      new Dialogue("Think I'm possessed by a demon?")
    ])
  ],
  ["C", new Actor("Chloe", [new Dialogue("Isn't my Goblin beautiful?...")])],
  [
    "I",
    new Actor(
      "Goblin",
      [
        new Dialogue("Need demon blood?")
          .set_criteria(() => flags.has("demon_blood"))
          .lock(),
        new Dialogue(
          "Well I'm the only demon around, you gonna take it from me?"
        )
          .set_criteria(() => flags.has("demon_blood"))
          .lock(),
        new Dialogue("You are!?")
          .set_criteria(() => flags.has("demon_blood"))
          .lock(),
        new Dialogue("<< You attacked Goblin and damaged it! >>")
          .set_info(
            "TODO: Replace this with an actual battle sequence to give player a taste of it."
          )
          .set_criteria(() => flags.has("demon_blood"))
          .lock(),
        new Dialogue("<< Recieved demon blood! >>")
          .set_criteria(() => flags.has("demon_blood"))
          .flag("has_demon_blood"),
        new Dialogue("Hee hee hee...").set_criteria(
          () => !flags.has("demon_blood")
        )
      ],
      DEMON_MAT,
      BattleData.IDENTITY
    )
  ],
  [
    "D",
    new Actor("Daniel", [
      new Dialogue("I can't wait until we start the summoning ritual!"),
      new Dialogue("Have you practiced your rites?")
    ])
  ],
  [
    "E",
    new Actor("Eve", [
      new Dialogue("The Summoning Room? It's through here.")
        .set_criteria(() => !flags.has("has_demon_blood"))
        .lock()
        .set_actor_block(true),
      new Dialogue("Do you have your demon blood? You don't?")
        .set_criteria(() => !flags.has("has_demon_blood"))
        .lock(),
      new Dialogue("Well go find some demon blood!")
        .set_criteria(() => !flags.has("has_demon_blood"))
        .lock()
        .flag("demon_blood"),
      new Dialogue("Find some demon blood and I'll let you through.")
        .set_criteria(() => !flags.has("has_demon_blood"))
        .lock(),
      new Dialogue("Wow, you really just drew blood from Chloe's Goblin?")
        .set_criteria(() => flags.has("has_demon_blood"))
        .lock(),
      new Dialogue("You're a psychopath!")
        .set_criteria(() => flags.has("has_demon_blood"))
        .lock(),
      new Dialogue("Anyway, you got demon blood so come on through.")
        .set_criteria(() => flags.has("has_demon_blood"))
        .set_actor_block(false)
    ])
  ],
  [
    "F",
    new Actor("Frederick", [
      new Dialogue("Step back. New recruits aren't allowed any further.")
        .lock()
        .set_actor_block(true)
    ])
  ],
  [
    "G",
    new Actor("George", [
      new Dialogue(
        "You don't get it! Without our divine laws, our cult would collapse!"
      ).set_actor_block(true)
    ])
  ],
  [
    "H",
    new Actor("Hilde", [
      new Dialogue(
        "Let's see how your laws fare against my boot!"
      ).set_actor_block(true)
    ])
  ],
  [
    "J",
    new Actor("Jacques", [
      new Dialogue("Oh, it's you, the *NEW* recruit. what have you go there?")
        .lock()
        .set_actor_block(true),
      new Dialogue(
        "Imp's blood? No, no, no! It can't be any old demon blood!"
      ).lock(),
      new Dialogue(
        "It has to be the blood of Katakirauwa, the pig spirit!"
      ).lock(),
      new Dialogue(
        "You see, Taotie is very particular and much enjoys the taste of Katakirauwa!"
      ).lock(),
      new Dialogue(
        "You may be able to find Katakirauwa somewhere in the depths of the cave."
      ).lock(),
      new Dialogue("Hurry along!").lock()
    ])
  ],
  [
    "K",
    new Actor("Katherine", [
      new Dialogue("Hello, dear, what's the matter?"),
      new Dialogue("Are you hurt? Let me tend to your wounds.")
        .lock()
        .set_heal_player()
        .set_actor_block(true),
      new Dialogue(
        "Now you're looking sharp! Go kill some demons for me, sweetie!"
      ).lock()
    ])
  ],
  [
    "L",
    new Actor("Leo", [
      new Dialogue("You're outta cash? Then don't bother browsing.")
    ])
  ]
]);

var level1_actors: Actor[] = [];
npc_map.forEach((actor, key, _) => {
  for (let x = 0; x < level1_map.string_grid.width; x++) {
    for (let z = 0; z < level1_map.string_grid.depth; z++) {
      if (key == level1_map.string_grid.get(x, z)) {
        actor.coor = new Coor(x, z);
        actor.pos_index = 2;
        level1_actors.push(actor);
      }
    }
  }
});

export let level1_data: LevelData = new LevelData(
  level1_map,
  level1_actors,
  [],
  0
);
