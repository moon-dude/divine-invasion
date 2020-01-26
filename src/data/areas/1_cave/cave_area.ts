import { AreaData } from "../area_data";
import { level1_data } from "./cave_b1";
import { level2_data } from "./cave_b2";
import { level3_data } from "./cave_b3";

export let cave_data: AreaData = new AreaData([level3_data, level2_data, level1_data]);