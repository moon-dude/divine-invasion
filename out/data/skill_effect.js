"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkillEffect;
(function (SkillEffect) {
    SkillEffect[SkillEffect["Damage"] = 0] = "Damage";
    SkillEffect[SkillEffect["Heal"] = 1] = "Heal";
    SkillEffect[SkillEffect["BuffDefense"] = 2] = "BuffDefense";
    SkillEffect[SkillEffect["DebuffDefense"] = 3] = "DebuffDefense";
    SkillEffect[SkillEffect["BuffHitEvade"] = 4] = "BuffHitEvade";
    SkillEffect[SkillEffect["DebuffHitEvade"] = 5] = "DebuffHitEvade";
    SkillEffect[SkillEffect["BuffAllStats"] = 6] = "BuffAllStats";
    SkillEffect[SkillEffect["DebuffAllStats"] = 7] = "DebuffAllStats";
    SkillEffect[SkillEffect["BuffMagicAttack"] = 8] = "BuffMagicAttack";
    SkillEffect[SkillEffect["BuffPhysAttack"] = 9] = "BuffPhysAttack";
    SkillEffect[SkillEffect["Charm"] = 10] = "Charm";
    SkillEffect[SkillEffect["Bind"] = 11] = "Bind";
    SkillEffect[SkillEffect["Sick"] = 12] = "Sick";
    SkillEffect[SkillEffect["Sleep"] = 13] = "Sleep";
    SkillEffect[SkillEffect["Panic"] = 14] = "Panic";
    SkillEffect[SkillEffect["Mute"] = 15] = "Mute";
    SkillEffect[SkillEffect["Poison"] = 16] = "Poison";
    SkillEffect[SkillEffect["CurePoisonSick"] = 17] = "CurePoisonSick";
    SkillEffect[SkillEffect["CuresAllAilments"] = 18] = "CuresAllAilments";
    SkillEffect[SkillEffect["NextMagicAttackX2AndHalfDamage"] = 19] = "NextMagicAttackX2AndHalfDamage";
    SkillEffect[SkillEffect["NextPhysGunAttackGuaranteedCrit"] = 20] = "NextPhysGunAttackGuaranteedCrit";
    SkillEffect[SkillEffect["RemoveAllBuffs"] = 21] = "RemoveAllBuffs";
    SkillEffect[SkillEffect["RemoveAllDebuffs"] = 22] = "RemoveAllDebuffs";
    SkillEffect[SkillEffect["RemoveAllBuffsAndDebuffs"] = 23] = "RemoveAllBuffsAndDebuffs";
    SkillEffect[SkillEffect["ReviveWithHalfHP"] = 24] = "ReviveWithHalfHP";
    SkillEffect[SkillEffect["ReviveWithFullHP"] = 25] = "ReviveWithFullHP";
    SkillEffect[SkillEffect["ReviveWithFullHPCuredUserDies"] = 26] = "ReviveWithFullHPCuredUserDies";
})(SkillEffect = exports.SkillEffect || (exports.SkillEffect = {}));
var SkillElement;
(function (SkillElement) {
    SkillElement[SkillElement["Phys"] = 0] = "Phys";
    SkillElement[SkillElement["Gun"] = 1] = "Gun";
    SkillElement[SkillElement["Fire"] = 2] = "Fire";
    SkillElement[SkillElement["Ice"] = 3] = "Ice";
    SkillElement[SkillElement["Elec"] = 4] = "Elec";
    SkillElement[SkillElement["Force"] = 5] = "Force";
    SkillElement[SkillElement["Dark"] = 6] = "Dark";
    SkillElement[SkillElement["Light"] = 7] = "Light";
    SkillElement[SkillElement["Support"] = 8] = "Support";
    SkillElement[SkillElement["Recovery"] = 9] = "Recovery";
    SkillElement[SkillElement["Ailment"] = 10] = "Ailment";
    SkillElement[SkillElement["Almighty"] = 11] = "Almighty";
    SkillElement[SkillElement["Other"] = 12] = "Other";
    SkillElement[SkillElement["Passive"] = 13] = "Passive";
})(SkillElement = exports.SkillElement || (exports.SkillElement = {}));
var SkillResist;
(function (SkillResist) {
    SkillResist[SkillResist["Weak"] = 0] = "Weak";
    SkillResist[SkillResist["Resist"] = 1] = "Resist";
})(SkillResist = exports.SkillResist || (exports.SkillResist = {}));
var SkillPower;
(function (SkillPower) {
    SkillPower[SkillPower["Weak"] = 0] = "Weak";
    SkillPower[SkillPower["Medium"] = 1] = "Medium";
    SkillPower[SkillPower["Heavy"] = 2] = "Heavy";
    SkillPower[SkillPower["Severe"] = 3] = "Severe";
})(SkillPower = exports.SkillPower || (exports.SkillPower = {}));
var SkillTarget;
(function (SkillTarget) {
    SkillTarget[SkillTarget["Single"] = 0] = "Single";
    SkillTarget[SkillTarget["All"] = 1] = "All";
    SkillTarget[SkillTarget["AllEnemies"] = 2] = "AllEnemies";
    SkillTarget[SkillTarget["AllAllies"] = 3] = "AllAllies";
    SkillTarget[SkillTarget["Multi"] = 4] = "Multi";
    SkillTarget[SkillTarget["Self"] = 5] = "Self";
})(SkillTarget = exports.SkillTarget || (exports.SkillTarget = {}));
var SkillHits;
(function (SkillHits) {
    SkillHits[SkillHits["X1"] = 0] = "X1";
    SkillHits[SkillHits["X1To2"] = 1] = "X1To2";
    SkillHits[SkillHits["X1To3"] = 2] = "X1To3";
    SkillHits[SkillHits["X1To4"] = 3] = "X1To4";
    SkillHits[SkillHits["X1To5"] = 4] = "X1To5";
    SkillHits[SkillHits["X2"] = 5] = "X2";
    SkillHits[SkillHits["X2To3"] = 6] = "X2To3";
    SkillHits[SkillHits["X2To4"] = 7] = "X2To4";
    SkillHits[SkillHits["X4To6"] = 8] = "X4To6";
    SkillHits[SkillHits["X4To12"] = 9] = "X4To12";
})(SkillHits = exports.SkillHits || (exports.SkillHits = {}));
function damage_power(power) {
    switch (power) {
        case SkillPower.Severe:
            return 5;
        case SkillPower.Heavy:
            return 3;
        case SkillPower.Medium:
            return 2;
        case SkillPower.Weak:
        default:
            return 1;
    }
}
function buff_power(power) {
    switch (power) {
        case SkillPower.Severe:
            return 4;
        case SkillPower.Heavy:
            return 3;
        case SkillPower.Medium:
            return 2;
        case SkillPower.Weak:
        default:
            return 1;
    }
}
function resolve_skill_effect(fighter, skill, target) {
    switch (skill.effect) {
        case SkillEffect.Damage:
            var damage = 1;
            if (skill.element == SkillElement.Phys) {
                damage = Math.floor(fighter.data.modded_base_stats().st * damage_power(skill.power));
            }
            else if (skill.element == SkillElement.Gun) {
                damage = Math.floor(fighter.data.modded_base_stats().dx * damage_power(skill.power));
            }
            else if (skill.element == SkillElement.Light || skill.element == SkillElement.Dark) {
                damage = Math.floor(fighter.data.modded_base_stats().lu * damage_power(skill.power));
            }
            else {
                damage = Math.floor(fighter.data.modded_base_stats().ma * damage_power(skill.power));
            }
            var success = target.data.will_take_hit(fighter.data.modded_base_stats().dx, fighter.data.buffs.defense.get(), 1.0); // TODO: Pipe in hit/miss chance for skills here.
            if (success) {
                BattleLog.add(target.name + ": ");
                target.data.take_damage(damage);
            }
            else {
                BattleLog.add(target.name + ": dodged");
            }
            break;
        case SkillEffect.Heal:
            var power = Math.floor(fighter.data.modded_base_stats().ma) * damage_power(skill.power);
            console.log(target.name + ": " +
                target.data.heal_for(power));
            break;
        case SkillEffect.BuffDefense:
            handy_buff_handler(function (b) { return b.defense; }, target, true, skill.power);
            break;
        case SkillEffect.DebuffDefense:
            handy_buff_handler(function (b) { return b.defense; }, target, false, skill.power);
            break;
        case SkillEffect.BuffHitEvade:
            handy_buff_handler(function (b) { return b.hit_evade; }, target, true, skill.power);
            break;
        case SkillEffect.DebuffHitEvade:
            handy_buff_handler(function (b) { return b.hit_evade; }, target, false, skill.power);
            break;
        case SkillEffect.BuffMagicAttack:
            handy_buff_handler(function (b) { return b.magic_attack; }, target, true, skill.power);
            break;
        case SkillEffect.BuffPhysAttack:
            handy_buff_handler(function (b) { return b.physical_attack; }, target, true, skill.power);
            break;
        case SkillEffect.BuffAllStats:
            handy_buff_handler(function (b) { return b.defense; }, target, true, skill.power);
            handy_buff_handler(function (b) { return b.hit_evade; }, target, true, skill.power);
            handy_buff_handler(function (b) { return b.magic_attack; }, target, true, skill.power);
            handy_buff_handler(function (b) { return b.physical_attack; }, target, true, skill.power);
            break;
        case SkillEffect.DebuffAllStats:
            handy_buff_handler(function (b) { return b.defense; }, target, false, skill.power);
            handy_buff_handler(function (b) { return b.hit_evade; }, target, false, skill.power);
            handy_buff_handler(function (b) { return b.magic_attack; }, target, false, skill.power);
            handy_buff_handler(function (b) { return b.physical_attack; }, target, false, skill.power);
            break;
        case SkillEffect.Charm:
        case SkillEffect.Bind:
        case SkillEffect.Sick:
        case SkillEffect.Sleep:
        case SkillEffect.Panic:
        case SkillEffect.Mute:
        case SkillEffect.Poison:
            handy_ailment_handler(target, skill.effect, true);
            break;
    }
}
exports.resolve_skill_effect = resolve_skill_effect;
function handy_buff_handler(buffer, target, positive, skill_power) {
    var power = buff_power(skill_power) * (positive ? 1 : -1);
    buffer(target.data.buffs).raise(power);
    BattleLog.add(target.name + ": " + buffer(target.data.buffs) +
        (positive ? " raised" : " lowered"));
}
function handy_ailment_handler(target, effect, positive) {
    // positive in the medical way.
    if (positive) {
        BattleLog.add(target.name + ": is now " + effect);
        target.data.ailments.add(effect);
    }
    else if (target.data.ailments.has(effect)) {
        BattleLog.add(target.name + ": is no longer " + effect);
        target.data.ailments.delete(effect);
    }
}
