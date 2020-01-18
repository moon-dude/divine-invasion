import { Battle } from "./battle";
import { Skill } from "./data/skill";
import { BattleInfo } from "./battle_info";

export class BattleActionBtns {
  private battle_action_span: HTMLElement;
  private battle_action_btns: HTMLButtonElement[] = [];

  constructor() {
    this.battle_action_span = document.getElementById("battle_action_span")!;
    for (let i = 0; i < 10; i++) {
      const new_button = document.createElement("button");
      new_button.style.display = "none";
      this.battle_action_span.appendChild(new_button);
      this.battle_action_btns.push(new_button);
    }
  }

  public set_visible(value: boolean) {
    if (value) {
      this.battle_action_span.style.display = "";
    } else {
      this.battle_action_span.style.display = "none";
    }
  }

  public clear_button(idx: number) {
    this.battle_action_btns[idx].style.display = "none";
  }

  public clear_buttons(from: number = 0) {
    for (let i = from; i < this.battle_action_btns.length; i++) {
      this.clear_button(i);
    }
  }

  public set_button_skill(idx: number, value: Skill | "Attack") {
    this.battle_action_btns[idx].style.display = "";
    Battle.Instance!.current_action = value;
    if (value == "Attack") {
      this.battle_action_btns[idx].innerHTML = value;
      this.battle_action_btns[idx].onclick = () => {
        // show enemy targets
        Battle.Instance!.battle_table.set_their_btns_enabled(true);
        Battle.Instance!.battle_action_btns.clear_buttons();
        Battle.Instance!.set_back_btn(true);
        BattleInfo.description = "Attack (Choose Target)";
      };
    } else {
      this.battle_action_btns[idx].innerHTML = value.name;
      this.battle_action_btns[idx].onclick = () => {
        // TODO: show targets based on skill.
        Battle.Instance!.battle_table.set_all_btns_enabled(true);
      };
    }
  }
}
