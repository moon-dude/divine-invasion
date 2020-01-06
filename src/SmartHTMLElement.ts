export class SmartHTMLElement {
  private value: HTMLElement;

  constructor(id: string) {
    this.value = document.getElementById(id)!;
  }

  set_inner_html(s: string): void {
    if (this.value.innerHTML != s) {
      this.value.innerHTML = s;
    }
  }

  set_display(s: string): void {
    if (this.value.style.display != s) {
      this.value.style.display = s;
    }
  }
}