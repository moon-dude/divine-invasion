export type MenuEntry = [string, () => void];

export class MenuFrame {
  public description: string = "";
  public entries: MenuEntry[] = [];
}

export class Menu {
  private parent: HTMLElement;
  private description: HTMLElement;
  private menu_stack: MenuFrame[] = [];
  private buttons: HTMLButtonElement[] = [];

  constructor(parent: string) {
    this.parent = document.getElementById(parent)!;
    this.description = document.createElement("div");
    this.parent.appendChild(this.description);
  }

  public push(description: string, entries: MenuEntry[]) {
    this.menu_stack.push({ description: description, entries: entries });
    this.set(description, entries);
  }

  public pop() {
    if (this.menu_stack.length > 0) {
      this.menu_stack.pop();
    }
    if (this.menu_stack.length > 0) {
      let current_frame = this.menu_stack[this.menu_stack.length - 1];
      this.set(current_frame.description, current_frame.entries);
    } else {
      this.set("", []);
    }
  }

  private set(description: string, entries: MenuEntry[]) {
    this.description.innerHTML = description;
    for (let i = 0; i < entries.length; i++) {
      if (i >= this.buttons.length) {
        let new_button = document.createElement("button");
        this.buttons.push(new_button);
        this.parent.appendChild(new_button);
      }
      this.buttons[i].innerHTML = entries[i][0];
      this.buttons[i].onclick = entries[i][1];
      this.buttons[i].style.display = "";
    }
    for (let i = entries.length; i < this.buttons.length; i++) {
      this.buttons[i].style.display = "none";
    }
  }

  public clear() {
    this.description.innerHTML = "";
    this.menu_stack = [];
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].style.display = "none";
    }
  }
}