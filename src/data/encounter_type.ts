export class EncounterType {
  enemies: () => string[];
  constructor(enemies: () => string[]) {
    this.enemies = enemies;
  }
}