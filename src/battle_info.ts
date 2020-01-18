// oneof
export class BattleInfo {
  static actor_name: string;
  static description: string;
  static result: string;

  public static clear(): void {
    this.actor_name = "";
    this.description = "";
    this.result = "";
  }
}
