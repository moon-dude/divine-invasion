import { AreaData } from "../area_data";
import { level1_data } from "./cave_b1";
import { level2_data } from "./cave_b2";

export let cave_data: AreaData = new AreaData([level2_data, level1_data]);