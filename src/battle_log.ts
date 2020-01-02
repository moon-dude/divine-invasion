// oneof

const tag = "/battle/ "

export class BattleLog {
  static info_div: HTMLElement = document.getElementById("battle_info")!;

  static log_lines: string[] = [""];

  public static add(s: string, new_line: boolean = true) {
    if (new_line) {
      this.log_lines.push(tag);
    }
    const latest = this.log_lines.length - 1;
    this.log_lines[latest] += s;
    if (!new_line) {
      this.log_lines[latest] += ";";
    }
  }

  public static flush(): string {
    let inner_html = "";
    for (let i = 0; i < this.log_lines.length; i++) {
      inner_html += "<br />" + this.log_lines[i];
      console.log(this.log_lines[i]);
    }
    this.log_lines = [];
    return inner_html;
  }
}