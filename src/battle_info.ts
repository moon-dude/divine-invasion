// oneof
export class BattleInfo {
  static actor_name: string;
  static description: string;
  static result: string;

  public static set(name: string, description: string, result: string) {
    this.actor_name = name;
    this.description = description;
    this.result = result;
  }

  public static clear(): void {
    this.actor_name = "";
    this.description = "";
    this.result = "";
  }
}
