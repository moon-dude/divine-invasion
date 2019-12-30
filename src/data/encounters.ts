export class EncounterType {
  enemies: () => string[];
  constructor(enemies: () => string[]) {
    this.enemies = enemies;
  }
}

export const ENC_INCUBI: EncounterType = new EncounterType(() => {
  return ["Pixie", "Pixie", "Pixie"];
});