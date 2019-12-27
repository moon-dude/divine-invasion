/// These are stored in a list in each actor.
export class Dialogue {
  public speech: string;
  public info: string = "";
  public trigger_criteria: () => boolean = () => true;
  public lock_player: boolean = false;
  public flags: string[] = [];

  constructor(speech: string) {
    this.speech = speech;
  }

  public flag(s: string): Dialogue {
    this.flags.push(s);
    return this;
  }

  public lock(): Dialogue {
    this.lock_player = true;
    return this;
  }

  public set_info(val: string): Dialogue {
    this.info = val;
    return this;
  }

  public set_criteria(trigger_criteria: () => boolean): Dialogue {
    this.trigger_criteria = trigger_criteria;
    return this;
  }
}