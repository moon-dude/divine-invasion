import { Skill, } from "../skill";
import { SkillEffect, SkillPower, SkillElement, SkillHits } from "../skill_effect";
import { Target } from "../util";

const SKILLS: Skill[] = [
    {
        "name": "5.67 Billion Hands", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: Increased power", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Acid Breath", 
        "cost": 65, 
        "element": SkillElement.Support, 
        "rank": 17, 
        "target": Target.AllEnemies,
        "also_cast": ["Rakunda", "Sukunda"],
    }, 
    // {
    //     "name": "Adaptive Tactics", 
    //     "cost": 36, 
    //     "effect": "Change weakness if exploited", 
    //     "element": SkillElement.Support, 
    //     "rank": 0, 
    //     "target": SkillTarget.Self
    // }, 
    {
        "name": "Agi", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Agidyne", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Agilao", 
        "cost": 10, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Akasha Arts", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 31, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Alluring Banter", 
        "cost": 36, 
        "effect": SkillEffect.Charm, 
        "element": SkillElement.Ailment, 
        "rank": 0, 
        "remark": "Minimize defense", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Ally Counter", 
    //     "effect": "May perform a weak attack when an ally is struck by a phys/gun attack", 
    //     "element": SkillElement.Passive, 
    //     "rank": 15
    // }, 
    // {
    //     "name": "Ally Retaliate", 
    //     "effect": "May perform a heavy attack when an ally is struck by a phys/gun attack", 
    //     "element": SkillElement.Passive, 
    //     "rank": 23
    // }, 
    // {
    //     "name": "Almighty Pleroma", 
    //     "effect": "Almighty damage +20%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 30
    // }, 
    {
        "name": "Amrita", 
        "cost": 20, 
        "effect": SkillEffect.CuresAllAilments, 
        "element": SkillElement.Recovery, 
        "rank": 23, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Andalusia", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X4To12, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Antichthon", 
        "cost": 110, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 31, 
        "remark": "Smirk: Debilitate", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Attack Knowhow", 
    //     "effect": "Enables use of attack items", 
    //     "element": SkillElement.Passive, 
    //     "rank": 7
    // }, 
    {
        "name": "Axel Claw", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 13, 
        "target": Target.Multi
    }, 
    {
        "name": "Babylon Goblet", 
        "cost": 70, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Panic,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Bad Company", 
    //     "cost": 11, 
    //     "effect": "Summons your highest level demons from stock", 
    //     "element": SkillElement.Other, 
    //     "rank": 6
    // }, 
    // {
    //     "name": "Beastly Reaction", 
    //     "effect": "Increase hit/evade rate", 
    //     "element": SkillElement.Passive, 
    //     "rank": 8
    // }, 
    {
        "name": "Berserker God", 
        "cost": 13, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 21, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Bind Voice", 
        "cost": 20, 
        "effect": SkillEffect.Bind, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Binding Claw", 
        "cost": 11, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Bind, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Blade of Terror", 
        "cost": 35, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To5, 
        "rank": 0, 
        "remark": "Pierce, Panic", 
        "target": Target.Multi
    }, 
    {
        "name": "Blank Bullet", 
        "cost": 22, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Panic, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X2, 
        "rank": 0, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Blast Arrow", 
        "cost": 19, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 17, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Blight", 
        "cost": 18, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Poison, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Blink of Death", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Rakunda, Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Blood Ritual", 
    //     "cost": 25, 
    //     "effect": "Buff all stats once, HP falls to 1", 
    //     "element": SkillElement.Support, 
    //     "rank": 21, 
    //     "target": SkillTarget.Self
    // }, 
    // {
    //     "name": "Bloody Glee", 
    //     "effect": "Increase critical hit rate", 
    //     "element": SkillElement.Passive, 
    //     "rank": 17
    // }, 
    {
        "name": "Bouncing Claw", 
        "cost": 4, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Breath", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1To5, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Bufu", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Bufudyne", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Bufula", 
        "cost": 10, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Chakra Walk", 
    //     "effect": "Regain MP while walking. Inactive while in stock.", 
    //     "element": SkillElement.Passive, 
    //     "rank": 13
    // }, 
    // {
    //     "name": "Charge", 
    //     "cost": 9, 
    //     "effect": "Next Phys/Gun attack x2.5 damage", 
    //     "element": SkillElement.Support, 
    //     "rank": 15, 
    //     "target": SkillTarget.Self
    // }, 
    {
        "name": "Chariot", 
        "cost": 60, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Sukunda", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Cold World", 
        "cost": 70, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 27, 
        "remark": "Instant kill", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Combat Tara", 
        "cost": 60, 
        "effect": SkillEffect.BuffAllStats, 
        "element": SkillElement.Support, 
        "rank": 0, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Concentrate", 
        "cost": 11, 
        "effect": SkillEffect.NextMagicAttackX2AndHalfDamage, 
        "element": SkillElement.Support, 
        "rank": 23, 
        "target": Target.Self
    }, 
    {
        "name": "Cough", 
        "cost": 4, 
        "effect": SkillEffect.Sick, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Counter", 
    //     "effect": "May perform a weak attack when struck by a phys/gun attack", 
    //     "element": SkillElement.Passive, 
    //     "rank": 6
    // }, 
    {
        "name": "Critical Eye", 
        "cost": 11, 
        "effect": SkillEffect.NextPhysGunAttackCrit, 
        "element": SkillElement.Support, 
        "rank": 17, 
        "target": Target.Self
    }, 
    {
        "name": "Critical Wave", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "remark": "High crit/low hit", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Damascus Claw", 
        "cost": 7, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Dance of Mara", 
        "cost": 20, 
        "effect": SkillEffect.Charm, 
        "element": SkillElement.Ailment, 
        "rank": 0, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Dark Grudge", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Dark Pierce", 
    //     "effect": "Dark attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Dark Pleroma", 
    //     "effect": "Dark damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Dark Sword", 
        "cost": 16, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Mute, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X2, 
        "rank": 21, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Dazzle Ray", 
        "cost": 35, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Deadly Wind", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 29, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Death Lust", 
        "cost": 70, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "secondary_effect": SkillEffect.Charm, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Death's Door", 
        "cost": 35, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 21, 
        "remark": "HP to 1 for sick targets", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Debilitate", 
        "cost": 100, 
        "effect": SkillEffect.DebuffAllStats,
        "element": SkillElement.Support, 
        "rank": 28, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Dekaja", 
        "cost": 30, 
        "effect": SkillEffect.RemoveAllBuffs, 
        "element": SkillElement.Support, 
        "rank": 23, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Dekunda", 
        "cost": 30, 
        "effect": SkillEffect.RemoveAllDebuffs, 
        "element": SkillElement.Support, 
        "rank": 23, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Desperate Hit", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1To5, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Dia", 
        "cost": 8, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Weak, 
        "element": SkillElement.Recovery, 
        "rank": 2, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Diarahan", 
        "cost": 30, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Severe, 
        "element": SkillElement.Recovery, 
        "rank": 20, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Diarama", 
        "cost": 16, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Heavy,
        "element": SkillElement.Recovery, 
        "rank": 8, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Die for Me!", 
        "cost": 56, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 80% kill", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Doping", 
    //     "cost": 100, 
    //     "effect": "+30% max HP", 
    //     "element": SkillElement.Support, 
    //     "rank": 28, 
    //     "target": SkillTarget.AllAllies
    // }, 
    {
        "name": "Dormina", 
        "cost": 4, 
        "effect": SkillEffect.Sleep, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Draconic Reaction", 
    //     "effect": SkillEffect.BuffHitEvade,
    //     "power": SkillPower.Heavy,
    //     "element": SkillElement.Passive, 
    //     "rank": 21
    // }, 
    // {
    //     "name": "Drain Dark", 
    //     "effect": "Absorbs dark damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Elec", 
    //     "effect": "Absorbs elec damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Fire", 
    //     "effect": "Absorbs fire damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Force", 
    //     "effect": "Absorbs force damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Gun", 
    //     "effect": "Absorbs gun damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Ice", 
    //     "effect": "Absorbs ice damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Light", 
    //     "effect": "Absorbs light damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Drain Phys", 
    //     "effect": "Absorbs physical damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    {
        "name": "Dream Fist", 
        "cost": 9, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Sleep, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Dream Needle", 
        "cost": 9, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Sleep, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Dream Raga", 
        "cost": 65, 
        "effect": SkillEffect.Sleep,
        "secondary_effect": SkillEffect.Panic,
        "tertiary_effect": SkillEffect.Charm,
        "element": SkillElement.Ailment, 
        "rank": 0, 
        "remark": "Rakunda x2", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Earthquake", 
        "cost": 25, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 20, 
        "remark": "Daze", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Eat Whole", 
        "cost": 14, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 23, 
        "remark": "Absorbs HP", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Elec Pierce", 
    //     "effect": "Elec attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Elec Pleroma", 
    //     "effect": "Elec damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    // {
    //     "name": "Endure", 
    //     "effect": "Revive from death once per battle with 1 HP", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    // {
    //     "name": "Enduring Cheer", 
    //     "cost": 30, 
    //     "effect": "Medium chance of Endure this turn.", 
    //     "element": SkillElement.Support, 
    //     "rank": 0, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Enduring Soul", 
    //     "effect": "Revive from death once per battle with full HP", 
    //     "element": SkillElement.Passive, 
    //     "rank": 28
    // }, 
    {
        "name": "Energy Drain", 
        "cost": 7, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 23, 
        "remark": "Absorbs HP/MP", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Enlightenment", 
    //     "cost": 8, 
    //     "effect": "Drain weaknesses, buff all stats if successful", 
    //     "element": SkillElement.Support, 
    //     "rank": 0, 
    //     "target": SkillTarget.Self
    // }, 
    // {
    //     "name": "Estoma", 
    //     "cost": 21, 
    //     "effect": "Avoid battles with low-level demons while skill is in effect", 
    //     "element": SkillElement.Other, 
    //     "rank": 6
    // }, 
    // {
    //     "name": "Eternal Rest", 
    //     "cost": 50, 
    //     "effect": SkillEffect.Damage,
	// 	"power": "N/A", 
    //     "element": SkillElement.Almighty, 
    //     "hits": SkillHits.X1, 
    //     "rank": 23, 
    //     "remark": "Instant kill sleeping targets", 
    //     "target": SkillTarget.AllEnemies
    // }, 
    {
        "name": "Evil Melody", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Evil Shine", 
        "cost": 110, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Panic, 
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Fang Breaker", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "remark": "Tarunda", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Fatal Sword", 
        "cost": 8, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Fear Darkness", 
        "cost": 35, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Fire Breath", 
        "cost": 21, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1To4, 
        "rank": 9, 
        "target": Target.Multi
    }, 
    // {
    //     "name": "Fire Pierce", 
    //     "effect": "Fire attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Fire Pleroma", 
    //     "effect": "Fire damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Fire of Lethargy", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Rakunda + Sukunda", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Fire of Sinai", 
        "cost": 55, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1To5, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Floral Gust", 
        "cost": 60, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1To4, 
        "rank": 27, 
        "target": Target.Multi
    }, 
    // {
    //     "name": "Fog Breath", 
    //     "cost": 65, 
    //     "effect": "Tarunda + Sukunda", 
    //     "element": SkillElement.Support, 
    //     "rank": 17, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    // {
    //     "name": "Force Pierce", 
    //     "effect": "Force attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Force Pleroma", 
    //     "effect": "Force damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Frenzied Chomp", 
        "cost": 6, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "remark": "Poison/Bind/Charm", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Glacial Blast", 
        "cost": 60, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1To4, 
        "rank": 28, 
        "target": Target.Multi
    }, 
    {
        "name": "God's Bow", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "100% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Gram Slice", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Grand Tack", 
        "cost": 11, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Great Logos", 
        "cost": 100, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 30, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Growing Hate", 
        "cost": 100, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Stronger vs dark resistance", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Gun Pierce", 
    //     "effect": "Gun attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Gun Pleroma", 
    //     "effect": "Gun damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    {
        "name": "Gungnir", 
        "cost": 22, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Hades Blast", 
        "cost": 42, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 23, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Hama", 
        "cost": 6, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "remark": "Smirk: 30% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Hamaon", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 13, 
        "remark": "Smirk: 55% kill", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Hard Worker", 
    //     "effect": "Gain more EXP from battles", 
    //     "element": SkillElement.Passive, 
    //     "rank": 6
    // }, 
    {
        "name": "Haunting Rhapsody", 
        "cost": 100, 
        "effect": SkillEffect.Panic, 
        "element": SkillElement.Ailment, 
        "rank": 0, 
        "remark": "Debilitate", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Head Crush", 
        "cost": 6, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "remark": "Daze", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Heal Pleroma", 
    //     "effect": "Healing +20%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    // {
    //     "name": "Healing Knowhow", 
    //     "effect": "Enables use of healing items", 
    //     "element": SkillElement.Passive, 
    //     "rank": 8
    // }, 
    {
        "name": "Heat Wave", 
        "cost": 13, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Heaven's Bow", 
        "cost": 33, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 22, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Hell Thrust", 
        "cost": 28, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X2To4, 
        "rank": 29, 
        "remark": "Smirk: Rakunda", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Hellish Brand", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Dekaja", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Hellish Mask", 
    //     "effect": "Resists all ailments", 
    //     "element": SkillElement.Passive, 
    //     "rank": 17
    // }, 
    // {
    //     "name": "High Dark Pleroma", 
    //     "effect": "Dark damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Elec Pleroma", 
    //     "effect": "Elec damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Fire Pleroma", 
    //     "effect": "Fire damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Force Pleroma", 
    //     "effect": "Force damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Gun Pleroma", 
    //     "effect": "Gun damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "High Heal Pleroma", 
    //     "effect": "Healing +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Ice Pleroma", 
    //     "effect": "Ice damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Light Pleroma", 
    //     "effect": "Light damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    // {
    //     "name": "High Phys Pleroma", 
    //     "effect": "Phys damage +50%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    {
        "name": "Holy Wrath", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 20, 
        "remark": "Strong vs Chaos", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Ice Age", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 29, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Ice Breath", 
        "cost": 21, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1To4, 
        "rank": 9, 
        "target": Target.Multi
    }, 
    // {
    //     "name": "Ice Pierce", 
    //     "effect": "Ice attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Ice Pleroma", 
    //     "effect": "Ice damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    // {
    //     "name": "Imposing Stance", 
    //     "cost": 50, 
    //     "effect": "Removes 1 Press Turn icon on foe's next turn", 
    //     "element": SkillElement.Other, 
    //     "rank": 23
    // }, 
    {
        "name": "Infernal Hail", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Sukunda", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Invitation", 
    //     "cost": 65, 
    //     "effect": "Revives, fully heals, and summons a demon from stock", 
    //     "element": SkillElement.Other, 
    //     "rank": 30
    // }, 
    {
        "name": "Iron Judgment", 
        "cost": 8, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Javelin Rain", 
        "cost": 25, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 17, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Judgment", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 20, 
        "remark": "Strong vs Neutral", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Judgment Light", 
        "cost": 56, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 23, 
        "remark": "Smirk: 80% kill", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "King Bufula", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: Rakunda", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Life Aid", 
    //     "effect": "Restore large amount of HP after battle", 
    //     "element": SkillElement.Passive, 
    //     "rank": 15
    // }, 
    // {
    //     "name": "Life Bonus", 
    //     "effect": "Maximum HP +10%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 2
    // }, 
    {
        "name": "Life Drain", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "remark": "Absorbs HP", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Life Gain", 
    //     "effect": "Maximum HP +20%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 13
    // }, 
    // {
    //     "name": "Life Surge", 
    //     "effect": "Maximum HP +30%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 20
    // }, 
    {
        "name": "Light Devourer", 
        "cost": 33, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Absorbs HP", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Light Life Aid", 
    //     "effect": "Restore slight HP after battle", 
    //     "element": SkillElement.Passive, 
    //     "rank": 4
    // }, 
    // {
    //     "name": "Light Mana Aid", 
    //     "effect": "Restore slight MP after battle", 
    //     "element": SkillElement.Passive, 
    //     "rank": 4
    // }, 
    // {
    //     "name": "Light Pierce", 
    //     "effect": "Light attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Light Pleroma", 
    //     "effect": "Light damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Loyalty Slash", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: 100% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Lullaby", 
        "cost": 11, 
        "effect": SkillEffect.Sleep, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Lunge", 
        "cost": 6, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "remark": "High crit/low hit", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Luster Candy", 
        "cost": 80, 
        "effect": SkillEffect.BuffAllStats, 
        "element": SkillElement.Support, 
        "rank": 27, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Mabufu", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mabufudyne", 
        "cost": 48, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 22, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mabufula", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 16, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Madness Nails", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 21, 
        "target": Target.Multi
    }, 
    {
        "name": "Madness Needle", 
        "cost": 11, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Panic, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Magaon", 
    //     "cost": 10, 
    //     "effect": "Removes Smirk", 
    //     "element": SkillElement.Support, 
    //     "rank": 7, 
    //     "target": "1 enemy"
    // }, 
    {
        "name": "Magic Torrent", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X4To6, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Mahama", 
        "cost": 14, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 9, 
        "remark": "Smirk: 30% kill", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mahamaon", 
        "cost": 28, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Light, 
        "hits": SkillHits.X1, 
        "rank": 18, 
        "remark": "Smirk: 55% kill", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Makajam", 
        "cost": 4, 
        "effect": SkillEffect.Mute, 
        "element": SkillElement.Ailment, 
        "rank": 15, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Makajamaon", 
        "cost": 15, 
        "effect": SkillEffect.Mute, 
        "element": SkillElement.Ailment, 
        "rank": 23, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Makakaja", 
        "cost": 20, 
        "effect": SkillEffect.BuffMagicAttack, 
        "element": SkillElement.Support, 
        "rank": 8, 
        "target": Target.AllAllies
    }, 
    // {
    //     "name": "Makarabreak", 
    //     "cost": 35, 
    //     "effect": "Removes Makarakarn", 
    //     "element": SkillElement.Support, 
    //     "rank": 30, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    // {
    //     "name": "Makarakarn", 
    //     "cost": 50, 
    //     "effect": "Reflects next non-almighty magic attack", 
    //     "element": SkillElement.Support, 
    //     "rank": 23, 
    //     "target": SkillTarget.AllAllies
    // }, 
    {
        "name": "Mamudo", 
        "cost": 14, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 9, 
        "remark": "Smirk: 30% kill", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mamudoon", 
        "cost": 28, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 18, 
        "remark": "Smirk: 55% kill", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Mana Aid", 
    //     "effect": "Restore large amount of MP after battle", 
    //     "element": SkillElement.Passive, 
    //     "rank": 15
    // }, 
    // {
    //     "name": "Mana Bonus", 
    //     "effect": "Maximum MP +10%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 2
    // }, 
    // {
    //     "name": "Mana Gain", 
    //     "effect": "Maximum MP +20%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 13
    // }, 
    // {
    //     "name": "Mana Surge", 
    //     "effect": "Maximum MP +30%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 20
    // }, 
    {
        "name": "Maragi", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Maragidyne", 
        "cost": 48, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 22, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Maragion", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 16, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Marin Karin", 
        "cost": 5, 
        "effect": SkillEffect.Charm, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Mazan", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mazandyne", 
        "cost": 48, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 22, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mazanma", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 16, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mazio", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Maziodyne", 
        "cost": 48, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 22, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mazionga", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 16, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Me Patra", 
        "cost": 18, 
        "effect": SkillEffect.CuresAllAilments, 
        "element": SkillElement.Recovery, 
        "rank": 15, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Media", 
        "cost": 24, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Weak,
        "element": SkillElement.Recovery, 
        "rank": 12, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Mediarahan", 
        "cost": 90, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Severe,
        "element": SkillElement.Recovery, 
        "rank": 27, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Mediarama", 
        "cost": 48, 
        "effect": SkillEffect.Heal,
        "power": SkillPower.Heavy,
        "element": SkillElement.Recovery, 
        "rank": 23, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Megaton Press", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 17, 
        "remark": "High crit/low hit", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Megiddo Ark", 
        "cost": 60, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Megido", 
        "cost": 25, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 18, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Megidola", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 23, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Megidolaon", 
        "cost": 70, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 28, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Mist Rush", 
        "cost": 28, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X2To4, 
        "rank": 27, 
        "remark": "Daze", 
        "target": Target.Multi
    }, 
    {
        "name": "Mortal Jihad", 
        "cost": 14, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 21, 
        "remark": "High crit/low hit", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Mudo", 
        "cost": 6, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "remark": "Smirk: 30% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Mudoon", 
        "cost": 12, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Dark, 
        "hits": SkillHits.X1, 
        "rank": 13, 
        "remark": "Smirk: 55% kill", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Myriad Arrows", 
        "cost": 28, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X2To4, 
        "rank": 27, 
        "target": Target.Multi
    }, 
    {
        "name": "Needle Shot", 
        "cost": 4, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Needlestorm", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Daze", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Nihil Claw", 
        "cost": 11, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Null Dark", 
    //     "effect": "Nullifies dark damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Elec", 
    //     "effect": "Nullifies elec damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Fire", 
    //     "effect": "Nullifies fire damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Force", 
    //     "effect": "Nullifies force damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Gun", 
    //     "effect": "Nullifies gun damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 28
    // }, 
    // {
    //     "name": "Null Ice", 
    //     "effect": "Nullifies ice damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Light", 
    //     "effect": "Nullifies light damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 24
    // }, 
    // {
    //     "name": "Null Mind", 
    //     "effect": "Grants immunity to sleep, panic, charm and mute", 
    //     "element": SkillElement.Passive, 
    //     "rank": 18
    // }, 
    // {
    //     "name": "Null Nerve", 
    //     "effect": "Grants immunity to poison, sick, bind and daze", 
    //     "element": SkillElement.Passive, 
    //     "rank": 18
    // }, 
    // {
    //     "name": "Null Phys", 
    //     "effect": "Nullifies physical damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 28
    // }, 
    {
        "name": "Oni-Kagura", 
        "cost": 14, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "remark": "High crit/low hit", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Pandemic Bomb", 
        "cost": 15, 
        "effect": SkillEffect.Sick, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Panic Voice", 
        "cost": 20, 
        "effect": SkillEffect.Panic, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Patra", 
        "cost": 6, 
        "effect": SkillEffect.CuresAllAilments,
        "element": SkillElement.Recovery, 
        "rank": 2, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Pestilence", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Pierce, Strong vs ailment", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Phys Pierce", 
    //     "effect": "Physical attacks bypass resistances", 
    //     "element": SkillElement.Passive, 
    //     "rank": 31
    // }, 
    // {
    //     "name": "Phys Pleroma", 
    //     "effect": "Phys damage +25%", 
    //     "element": SkillElement.Passive, 
    //     "rank": 25
    // }, 
    {
        "name": "Poisma", 
        "cost": 4, 
        "effect": SkillEffect.Poison, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Poison Breath", 
        "cost": 15, 
        "effect": SkillEffect.Poison, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Poison Claw", 
        "cost": 9, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Poison, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Posumudi", 
        "cost": 6, 
        "effect": SkillEffect.CurePoisonSick, 
        "element": SkillElement.Recovery, 
        "rank": 2, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Power Punch", 
        "cost": 9, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "remark": "Smirk: Daze", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Pulinpa", 
        "cost": 5, 
        "effect": SkillEffect.Panic, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Purple Smoke", 
        "cost": 22, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Panic, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 19, 
        "target": Target.Multi
    }, 
    {
        "name": "Raging Blizzard", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Ice, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Fire weakness", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Raging Hellfire", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Ice weakness", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Raging Lightning", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Force weakness", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Raging Tempest", 
        "cost": 45, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Elec weakness", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Ragnarok", 
        "cost": 60, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1To4, 
        "rank": 28, 
        "target": Target.Multi
    }, 
    {
        "name": "Rakukaja", 
        "cost": 20, 
        "effect": SkillEffect.BuffDefense,
        "element": SkillElement.Support, 
        "rank": 8, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Rakunda", 
        "cost": 25, 
        "effect": SkillEffect.DebuffDefense, 
        "element": SkillElement.Support, 
        "rank": 12, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Rapid Needle", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 5, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Recarm", 
        "cost": 20, 
        "effect": SkillEffect.ReviveWithHalfHP, 
        "element": SkillElement.Recovery, 
        "rank": 12, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Recarmdra", 
        "cost": 6, 
        "effect": SkillEffect.ReviveWithFullHPCuredUserDies, 
        "element": SkillElement.Recovery, 
        "rank": 20, 
        "target": Target.AllAllies,
    }, 
    {
        "name": "Rending Claws", 
        "cost": 15, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Repel Dark", 
    //     "effect": "Reflects dark damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Elec", 
    //     "effect": "Repels elec damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Fire", 
    //     "effect": "Reflects fire damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Force", 
    //     "effect": "Repels force damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Gun", 
    //     "effect": "Repels gun damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Ice", 
    //     "effect": "Repels ice damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Light", 
    //     "effect": "Repels light damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Repel Phys", 
    //     "effect": "Repels physical damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 29
    // }, 
    // {
    //     "name": "Resist Dark", 
    //     "effect": "Resists dark damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Elec", 
    //     "effect": "Resists elec damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Fire", 
    //     "effect": "Resist fire damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Force", 
    //     "effect": "Resists force damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Gun", 
    //     "effect": "Resist gun damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 15
    // }, 
    // {
    //     "name": "Resist Ice", 
    //     "effect": "Resists ice damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Light", 
    //     "effect": "Resists light damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    // {
    //     "name": "Resist Phys", 
    //     "effect": "Resists physical damage", 
    //     "element": SkillElement.Passive, 
    //     "rank": 20
    // }, 
    // {
    //     "name": "Retaliate", 
    //     "effect": "May perform a heavy attack when struck by a phys/gun attack", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Riot Gun", 
        "cost": 30, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 30, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Ruinous Brand", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Sabbatma", 
    //     "cost": 16, 
    //     "effect": "Summons an ally demon", 
    //     "element": SkillElement.Other, 
    //     "rank": 13
    // }, 
    // {
    //     "name": "Salvation", 
    //     "cost": 100, 
    //     "effect": "Restores all HP, Smirk: Cures all ailments", 
    //     "element": SkillElement.Recovery, 
    //     "rank": 30, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    {
        "name": "Samarecarm", 
        "cost": 40, 
        "effect": SkillEffect.ReviveWithFullHP, 
        "element": SkillElement.Recovery, 
        "rank": 23, 
        "target": Target.SingleAlly
    }, 
    {
        "name": "Scratch Dance", 
        "cost": 7, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1To3, 
        "rank": 9, 
        "target": Target.Multi
    }, 
    {
        "name": "Sea of Chaos", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 20, 
        "remark": "Strong vs Law", 
        "target": Target.AllEnemies
    }, 
    // {
    //     "name": "Self-Righteous Vow", 
    //     "effect": "Raises all stats once whenever own weakness is struck", 
    //     "element": SkillElement.Passive, 
    //     "rank": 0
    // }, 
    {
        "name": "Severe Judgment", 
        "cost": 50, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Smirk: Increased power", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Sexy Dance", 
        "cost": 20, 
        "effect": SkillEffect.Charm, 
        "element": SkillElement.Ailment, 
        "rank": 10, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Shibaboo", 
        "cost": 5, 
        "effect": SkillEffect.Bind, 
        "element": SkillElement.Ailment, 
        "rank": 2, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Shivering Taboo", 
    //     "cost": 40, 
    //     "effect": "Bind/Panic/Sleep/Sick/Poison", 
    //     "element": SkillElement.Ailment, 
    //     "rank": 0, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    {
        "name": "Shock", 
        "cost": 21, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1To4, 
        "rank": 9, 
        "target": Target.Multi
    }, 
    {
        "name": "Silent Prayer", 
        "cost": 25, 
        "effect": SkillEffect.RemoveAllBuffsAndDebuffs, 
        "element": SkillElement.Support, 
        "rank": 17, 
        "target": Target.All
    }, 
    // {
    //     "name": "Smile Charge", 
    //     "cost": 50, 
    //     "effect": "Gains Smirk, condition: no ailments", 
    //     "element": SkillElement.Support, 
    //     "rank": 27, 
    //     "target": SkillTarget.Self
    // }, 
    {
        "name": "Snake's Fangs", 
        "cost": 24, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Bind, 
		"power": SkillPower.Heavy, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X2To3, 
        "rank": 0, 
        "target": Target.Multi
    }, 
    {
        "name": "Soul Divide", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Mute, 
		"power": SkillPower.Heavy, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Soul Drain", 
        "cost": 7, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "remark": "Absorbs HP/MP, Smirk: Increased power", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Spirit Drain", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Almighty, 
        "hits": SkillHits.X1, 
        "rank": 13, 
        "remark": "Absorbs MP", 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Spring of Life", 
    //     "effect": "Regain HP while walking. Inactive while in stock.", 
    //     "element": SkillElement.Passive, 
    //     "rank": 11
    // }, 
    {
        "name": "Stun Needle", 
        "cost": 10, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Bind, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Stun Needles", 
        "cost": 22, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Bind, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1To3, 
        "rank": 13, 
        "target": Target.Multi
    }, 
    {
        "name": "Sukukaja", 
        "cost": 20, 
        "effect": SkillEffect.BuffHitEvade, 
        "element": SkillElement.Support, 
        "rank": 8, 
        "target": Target.AllAllies
    }, 
    {
        "name": "Sukunda", 
        "cost": 25, 
        "effect": SkillEffect.DebuffHitEvade, 
        "element": SkillElement.Support, 
        "rank": 12, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Tarukaja", 
        "cost": 20, 
        "effect": SkillEffect.BuffPhysAttack, 
        "element": SkillElement.Support, 
        "rank": 8, 
        "target": Target.AllAllies
    }, 
    // {
    //     "name": "Tarunda", 
    //     "cost": 25, 
    //     "effect": "Debuff phys/magic attack once", 
    //     "element": SkillElement.Support, 
    //     "rank": 12, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    {
        "name": "Tathlum Shot", 
        "cost": 7, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Taunt", 
    //     "cost": 20, 
    //     "effect": "Tarukaja x2 + Makakaja x2 + Rakunda x2", 
    //     "element": SkillElement.Support, 
    //     "rank": 15, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    {
        "name": "Tetanus Cut", 
        "cost": 11, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Sick, 
		"power": SkillPower.Medium, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Tetrabreak", 
    //     "cost": 35, 
    //     "effect": "Removes Tetrakarn", 
    //     "element": SkillElement.Support, 
    //     "rank": 30, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    // {
    //     "name": "Tetraja", 
    //     "cost": 11, 
    //     "effect": "Nulls one Light or Dark attack", 
    //     "element": SkillElement.Support, 
    //     "rank": 11, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Tetrakarn", 
    //     "cost": 50, 
    //     "effect": "Reflects next phys/gun attack", 
    //     "element": SkillElement.Support, 
    //     "rank": 21, 
    //     "target": SkillTarget.AllAllies
    // }, 
    {
        "name": "Thunder Gods", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 29, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Thunder Reign", 
        "cost": 70, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 28, 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Titanomachia", 
        "cost": 35, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Phys, 
        "hits": SkillHits.X1, 
        "rank": 21, 
        "remark": "High crit/low hit", 
        "target": Target.AllEnemies
    }, 
    {
        "name": "Toxic Sting", 
        "cost": 9, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Poison, 
		"power": SkillPower.Weak, 
        "element": SkillElement.Gun, 
        "hits": SkillHits.X1, 
        "rank": 3, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Trafuri", 
    //     "cost": 25, 
    //     "effect": "Guarantees escape from battle", 
    //     "element": SkillElement.Other, 
    //     "rank": 6
    // }, 
    {
        "name": "Trisagion", 
        "cost": 40, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Fire, 
        "hits": SkillHits.X1, 
        "rank": 29, 
        "remark": "Smirk: Pierce", 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "True Zandyne", 
        "cost": 32, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "True Ziodyne", 
        "cost": 32, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Severe, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Vengeful Thunder", 
        "cost": 25, 
        "effect": SkillEffect.Damage,
        "secondary_effect": SkillEffect.Bind, 
		"power": SkillPower.Heavy, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 0, 
        "target": Target.SingleEnemy
    }, 
    // {
    //     "name": "Venomous Raga", 
    //     "cost": 65, 
    //     "effect": "Poison/Sick/Bind", 
    //     "element": SkillElement.Ailment, 
    //     "rank": 0, 
    //     "remark": "Tarunda x2", 
    //     "target": SkillTarget.AllEnemies
    // }, 
    // {
    //     "name": "Victory Cry", 
    //     "effect": "Restore full HP/MP after battle", 
    //     "element": SkillElement.Passive, 
    //     "rank": 28
    // }, 
    // {
    //     "name": "War Cry", 
    //     "cost": 65, 
    //     "effect": "Tarunda + Rakunda", 
    //     "element": SkillElement.Support, 
    //     "rank": 17, 
    //     "target": SkillTarget.AllEnemies
    // }, 
    // {
    //     "name": "Warding Shout", 
    //     "cost": 30, 
    //     "effect": "Prevents all ailments this turn", 
    //     "element": SkillElement.Support, 
    //     "rank": 0, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Will of Flame", 
    //     "cost": 30, 
    //     "effect": "Fire pierce for this turn", 
    //     "element": SkillElement.Support, 
    //     "rank": 28, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Will of Frost", 
    //     "cost": 30, 
    //     "effect": "Ice pierce for this turn", 
    //     "element": SkillElement.Support, 
    //     "rank": 28, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Will of Thunder", 
    //     "cost": 30, 
    //     "effect": "Elec pierce for this turn", 
    //     "element": SkillElement.Support, 
    //     "rank": 28, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Will of Wind", 
    //     "cost": 30, 
    //     "effect": "Force pierce for this turn", 
    //     "element": SkillElement.Support, 
    //     "rank": 28, 
    //     "target": SkillTarget.AllAllies
    // }, 
    // {
    //     "name": "Wind Breath", 
    //     "cost": 21, 
    //     "effect": SkillEffect.Damage,
	// 	"power": SkillPower.Weak, 
    //     "element": SkillElement.Force, 
    //     "hits": SkillHits.X1To4, 
    //     "rank": 9, 
    //     "target": SkillTarget.Multi
    // }, 
    // {
    //     "name": "Workaholic", 
    //     "effect": "Gain even more EXP from battles", 
    //     "element": SkillElement.Passive, 
    //     "rank": 16
    // }, 
    {
        "name": "Zan", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Zandyne", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Zanma", 
        "cost": 10, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Medium, 
        "element": SkillElement.Force, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Zio", 
        "cost": 5, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Weak, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 1, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Ziodyne", 
        "cost": 20, 
        "effect": SkillEffect.Damage,
		"power": SkillPower.Heavy, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 19, 
        "target": Target.SingleEnemy
    }, 
    {
        "name": "Zionga", 
        "cost": 10, 
        "effect": SkillEffect.Damage,
        "power": SkillPower.Medium, 
        "element": SkillElement.Elec, 
        "hits": SkillHits.X1, 
        "rank": 7, 
        "target": Target.SingleEnemy
    }
];

export const SKILL_MAP: Map<string, Skill> = new Map(SKILLS.map(x => [x.name, x]))