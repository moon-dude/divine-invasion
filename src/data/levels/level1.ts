import { Grid, Coor } from "../../jlib";
import { Actor } from "../../actor";
import { Dialogue } from "../../dialogue";
import { flags } from "../../globals";
import { TileMap } from "../../map";

var map_walkable: string = 
  "1111111111" +
  "1001001CI1" +
  "11A1101101" +
  "1100B00001" +
  "1111111101" +
  "1D00000001" +
  "1DE1G111F1" +
  "1110000101" +
  "1111111101";

export var level1_map = new TileMap(Grid.from_string(map_walkable, 10));

var npc_map: Map<string, Actor> = new Map([
  [
    "A", new Actor("Abel", 
      [
        new Dialogue("Well, well, it looks like the new recruit is finally awake.")
          .set_info("<< SPACE: continue >>").lock(),
        new Dialogue("You're expected in the divination room.").lock(),
        new Dialogue("You know where that is right?"),
      ]
    )
  ],
  [ "B", new Actor("Beth", [
    new Dialogue("My head hurts..."),
    new Dialogue("Think I'm possessed by a demon?"),
  ])],
  [ "C", new Actor("Chloe", [
    new Dialogue("Isn't my incubus beautiful?..."),
  ])],
  ["I", new Actor("Incubus", [
    new Dialogue("Need demon blood?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("Well I'm the only demon around, you gonna take it from me?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("You are!?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("<< You attacked Incubus and damaged it! >>")
      .set_info("TODO: Replace this with an actual battle sequence to give player a taste of it.")
      .set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("<< Recieved demon blood! >>").flag("has_demon_blood"),
    new Dialogue("Hee hee hee...").set_criteria(() => !flags.has('demon_blood')),
  ])],
  ["D", new Actor("Daniel", [
    new Dialogue("I can't wait until we start the summoning ritual!"),
    new Dialogue("Have you practiced your rites?"),
  ])],
  ["E", new Actor("Eve", [
    new Dialogue("The divination room? It's through here.").set_criteria(() => !flags.has('has_demon_blood')).lock().set_actor_block(true),
    new Dialogue("Do you have your demon blood?").set_criteria(() => !flags.has('has_demon_blood')).lock(),
    new Dialogue("You don't?").set_criteria(() => !flags.has('has_demon_blood')).lock(),
    new Dialogue("Well you'll have to go find demon blood somewhere...").set_criteria(() => !flags.has('has_demon_blood')).flag('demon_blood'),
    new Dialogue("Go find some demon blood and I'll let you through.").set_criteria(() => !flags.has('has_demon_blood')),
    new Dialogue("I see you have found some demon blood!").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("Now before you pass, you'll have to smear it over yourself.").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("<< You smear demon blood all over yourself >>").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("Ha ha, wow you actually did it!").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("You sure smell now, haha!").set_criteria(() => flags.has('has_demon_blood')).set_actor_block(false),
  ])],
  ["F", new Actor("Frederick", [
    new Dialogue("New recruits aren't allowed any further.").set_actor_block(true),
  ])],
  ["G", new Actor("George", [
    new Dialogue("You don't get it! Without our divine laws, our cult would collapse!").set_actor_block(true),
  ])],
  ["H", new Actor("Harold", [
    new Dialogue("Let's see how your laws do against my fist?").set_actor_block(true),
  ])],
]);

export var level1_actors: Actor[] = [];
npc_map.forEach((actor, key, _) => {
  for (let x = 0; x < level1_map.walkable.width; x++) {
    for (let z = 0; z < level1_map.walkable.width; z++) {
      if (key == level1_map.walkable.get(x, z)) {
        actor.coor = new Coor(x, z);
        level1_actors.push(actor);
      }
    }
  }
});
