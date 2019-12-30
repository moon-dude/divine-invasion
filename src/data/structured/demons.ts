import * as DEMON_LIST_JSON from '../raw/demon_list.json';
import { Demon } from '../demon.js';

let MAP_: Map<string, Demon> = new Map();

for (let i = 0; i < DEMON_LIST_JSON.length; i++) {
  MAP_.set(DEMON_LIST_JSON[i].name, DEMON_LIST_JSON[i]);
}

export const DEMON_MAP = MAP_; 