import { mood_string as get_mood_string } from "./emotion";
import { BattleData } from "./battle_data";

export class ActorCard {
  public card_span: HTMLSpanElement;

  private name_btn: HTMLButtonElement;
  private mood_span: HTMLSpanElement;
  private level: HTMLSpanElement;
  private health: HTMLSpanElement;
  private mana: HTMLSpanElement;
  private name_btn_clicked: boolean = false;
  private show_stats: boolean;

  constructor(
    parent: HTMLElement,
    fighter_data: BattleData,
    show_stats: boolean,
  ) {
    this.card_span = document.createElement("span");
    this.card_span.className = "actor_card";
    parent.appendChild(this.card_span);
    this.name_btn = document.createElement("button");
    this.name_btn.innerHTML = fighter_data.name;
    this.name_btn.disabled = true;
    this.name_btn.onclick = () => { this.name_btn_clicked = true; };
    this.mood_span = document.createElement("span");
    if (fighter_data.mood != null) {
      this.mood_span.innerHTML = get_mood_string(fighter_data.mood);
    }
    this.card_span.appendChild(this.name_btn);
    this.name_btn.appendChild(this.mood_span);
    this.show_stats = show_stats;
    this.level = document.createElement("span");
    this.card_span.appendChild(this.level);
    this.health = document.createElement("span");
    this.card_span.appendChild(this.health);
    this.mana = document.createElement("span");
    this.card_span.appendChild(this.mana);
    this.update(fighter_data);
  }

  public set_name_btn_enabled(value: boolean) {
    this.name_btn.disabled = !value;
  }

  public update(fighter_data: BattleData) {
    if (fighter_data.mood == null) {
      this.mood_span.innerHTML = "";
    } else {
      this.mood_span.innerHTML = get_mood_string(fighter_data.mood);
    }
    this.level.innerHTML = "<span class=\"sub\"> lv.</span>" + fighter_data.get_level() + " ";
    if (this.show_stats) {
      this.health.innerHTML =
        fighter_data.modded_base_stats().hp +
        '<span class="sub">/' +
        fighter_data.base_stats.hp +
        " HP</span> ";
      this.mana.innerHTML =
        fighter_data.modded_base_stats().mp +
        '<span class="sub">/' +
        fighter_data.base_stats.mp +
        " MP</span> ";
    }
  }

  public was_clicked(): boolean {
    const result = this.name_btn_clicked;
    this.name_btn_clicked = false;
    return result;
  }
}