
export class Buffable {
  private value: number = 1;

  public raise(amount: number) {
    const delta = amount > 0 ? 1 : -1;
    for (let i = 0; i < amount; i++) {
      this.value += delta;
      if (this.value == 0) {
        this.value += delta;
      }
    }
  }

  public get(): number {
    return this.value;
  }
}

export class Buffs {
  public defense: Buffable = new Buffable();
  public hit_evade: Buffable = new Buffable();
  public magic_attack: Buffable = new Buffable();
  public physical_attack: Buffable = new Buffable();
}
