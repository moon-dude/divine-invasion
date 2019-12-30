import * as DEMON_LIST_JSON from '../raw/demon_list.json';
import { Demon } from '../demon.js';

let map: Map<string, Demon> = new Map();

DEMON_LIST_JSON.demon_list.forEach((val) => {
  map.set(val.name, val);
});

export const DEMON_MAP = map; 

console.log(DEMON_LIST_JSON);
console.log(DEMON_MAP);