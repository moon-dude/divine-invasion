export const LOG_INDENT_CHAR: string = "&#8619";

export class Log {
  private static lines: string[] = [];

  public static push(entry: string) {
    this.lines.unshift(entry);
  }

  public static as_string(): string {
    return this.lines.join("<br/>");
  }
}