"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skill_effect_1 = require("../skill_effect");
var DEMONS = [{
        "name": "Abaddon",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 2],
            [skill_effect_1.SkillElement.Elec, 3],
            [skill_effect_1.SkillElement.Fire, 1],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Support, 2]
        ],
        "ailments": [
            ["bind", "nu"],
            ["mute", "wk"]
        ],
        "level": 63,
        "race": "Tyrant",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "rp"]
        ],
        "skills": [
            ["Eat Whole", 66],
            ["Hades Blast", 0],
            ["Retaliate", 65],
            ["War Cry", 0]
        ],
        "stats": {
            "ag": 63,
            "dx": 60,
            "hp": 605,
            "lu": 73,
            "ma": 43,
            "mp": 184,
            "st": 96
        }
    },
    {
        "name": "Adramelech",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 6],
            [skill_effect_1.SkillElement.Ice, 5],
            [skill_effect_1.SkillElement.Phys, 1]
        ],
        "level": 68,
        "race": "Fallen",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Fire, "ab"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Bloody Glee", 71],
            ["Eat Whole", 69],
            ["Fire Pleroma", 70],
            ["Hellish Brand", 0],
            ["Madness Nails", 0]
        ],
        "stats": {
            "ag": 67,
            "dx": 60,
            "hp": 592,
            "lu": 82,
            "ma": 113,
            "mp": 386,
            "st": 86
        }
    },
    {
        "name": "Aeros",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Elec, 4],
            [skill_effect_1.SkillElement.Force, 3]
        ],
        "level": 12,
        "race": "Element",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Force, "rs"]
        ],
        "skills": [
            ["Force Pleroma", 0],
            ["Mana Bonus", 16],
            ["Shibaboo", 13]
        ],
        "stats": {
            "ag": 28,
            "dx": 22,
            "hp": 150,
            "lu": 21,
            "ma": 15,
            "mp": 86,
            "st": 17
        }
    },
    {
        "name": "Agathion",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 2],
            [skill_effect_1.SkillElement.Elec, 2],
            [skill_effect_1.SkillElement.Gun, 4],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "level": 12,
        "race": "Yoma",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "rs"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Dream Fist", 0],
            ["Mazio", 15],
            ["Pulinpa", 0],
            ["Zionga", 14]
        ],
        "stats": {
            "ag": 17,
            "dx": 19,
            "hp": 118,
            "lu": 20,
            "ma": 22,
            "mp": 101,
            "st": 12
        }
    },
    {
        "name": "Airavata",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Fire, -3],
            [skill_effect_1.SkillElement.Gun, 2],
            [skill_effect_1.SkillElement.Phys, 2],
            [skill_effect_1.SkillElement.Recovery, 1]
        ],
        "ailments": [
            ["mute", "wk"],
            ["panic", "rs"],
            ["sleep", "wk"]
        ],
        "evolves": "Girimehkala",
        "level": 44,
        "race": "Holy",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "rs"],
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Gun, "nu"],
            [skill_effect_1.SkillElement.Ice, "rs"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Chakra Walk", 45],
            ["Earthquake", 0],
            ["Life Surge", 46]
        ],
        "stats": {
            "ag": 46,
            "dx": 43,
            "hp": 446,
            "lu": 53,
            "ma": 32,
            "mp": 136,
            "st": 69
        }
    },
    {
        "name": "Alciel",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 3],
            [skill_effect_1.SkillElement.Dark, 2],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Light, -3],
            [skill_effect_1.SkillElement.Phys, -4],
            [skill_effect_1.SkillElement.Support, 2]
        ],
        "ailments": [
            ["mute", "rs"]
        ],
        "level": 67,
        "race": "Vile",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "ab"],
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Force, "nu"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Ice, "nu"],
            [skill_effect_1.SkillElement.Light, "wk"],
            [skill_effect_1.SkillElement.Phys, "wk"]
        ],
        "skills": [
            ["Magaon", 68],
            ["Poison Breath", 0],
            ["Tetrakarn", 0]
        ],
        "stats": {
            "ag": 69,
            "dx": 58,
            "hp": 472,
            "lu": 76,
            "ma": 86,
            "mp": 262,
            "st": 65
        }
    },
    {
        "name": "Alice",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 3],
            [skill_effect_1.SkillElement.Dark, 5],
            [skill_effect_1.SkillElement.Gun, 2],
            [skill_effect_1.SkillElement.Phys, -9],
            [skill_effect_1.SkillElement.Recovery, -5]
        ],
        "ailments": [
            ["bind", "nu"],
            ["charm", "nu"],
            ["mute", "nu"],
            ["panic", "nu"],
            ["poison", "nu"],
            ["sick", "nu"],
            ["sleep", "nu"]
        ],
        "level": 49,
        "race": "Undead",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rp"],
            [skill_effect_1.SkillElement.Gun, "nu"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Dekunda", 50],
            ["Die for Me!", 0],
            ["Dream Needle", 0],
            ["Energy Drain", 0],
            ["High Dark Pleroma", 53]
        ],
        "stats": {
            "ag": 56,
            "dx": 51,
            "hp": 385,
            "lu": 67,
            "ma": 82,
            "mp": 339,
            "st": 41
        }
    },
    {
        "name": "Alilat",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 4],
            [skill_effect_1.SkillElement.Recovery, 3],
            [skill_effect_1.SkillElement.Support, 3]
        ],
        "ailments": [
            ["bind", "nu"],
            ["charm", "nu"],
            ["panic", "nu"],
            ["poison", "nu"],
            ["sick", "nu"],
            ["sleep", "nu"]
        ],
        "level": 84,
        "race": "Entity",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Concentrate", 85],
            ["Diarahan", 0],
            ["Makarabreak", 86],
            ["Megidolaon", 0],
            ["Null Phys", 87]
        ],
        "stats": {
            "ag": 78,
            "dx": 63,
            "hp": 621,
            "lu": 108,
            "ma": 135,
            "mp": 440,
            "st": 64
        }
    },
    {
        "name": "Alraune",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 3],
            [skill_effect_1.SkillElement.Fire, -4],
            [skill_effect_1.SkillElement.Gun, 2]
        ],
        "ailments": [
            ["charm", "nu"],
            ["daze", "wk"],
            ["sick", "wk"]
        ],
        "level": 48,
        "race": "Wood",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Gun, "rs"]
        ],
        "skills": [
            ["Blast Arrow", 49],
            ["Madness Needle", 0],
            ["Mana Gain", 51],
            ["Sexy Dance", 0]
        ],
        "stats": {
            "ag": 51,
            "dx": 75,
            "hp": 499,
            "lu": 62,
            "ma": 39,
            "mp": 204,
            "st": 47
        }
    },
    {
        "name": "Amaterasu",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Fire, 5],
            [skill_effect_1.SkillElement.Ice, -2],
            [skill_effect_1.SkillElement.Light, 2],
            [skill_effect_1.SkillElement.Recovery, 2],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "level": 79,
        "race": "Amatsu",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "rp"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Mana Surge", 80],
            ["Mediarahan", 81],
            ["Null Light", 82],
            ["Trisagion", 0],
            ["Will of Flame", 0]
        ],
        "stats": {
            "ag": 77,
            "dx": 69,
            "hp": 493,
            "lu": 94,
            "ma": 118,
            "mp": 406,
            "st": 53
        }
    },
    {
        "name": "Ame no Uzume",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Light, 1],
            [skill_effect_1.SkillElement.Recovery, 2]
        ],
        "level": 22,
        "race": "Amatsu",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Force, "rs"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Light Mana Aid", 0],
            ["Media", 24],
            ["Sabbatma", 0],
            ["Scratch Dance", 0],
            ["Spring of Life", 25]
        ],
        "stats": {
            "ag": 29,
            "dx": 23,
            "hp": 174,
            "lu": 31,
            "ma": 41,
            "mp": 195,
            "st": 18
        }
    },
    {
        "name": "Ammut",
        "affinities": [
            [skill_effect_1.SkillElement.Ice, -3],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Support, 2]
        ],
        "ailments": [
            ["panic", "wk"],
            ["poison", "rs"]
        ],
        "level": 64,
        "race": "Beast",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Gun, "rs"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Energy Drain", 0],
            ["Nihil Claw", 65],
            ["Null Fire", 66],
            ["War Cry", 0]
        ],
        "stats": {
            "ag": 64,
            "dx": 60,
            "hp": 614,
            "lu": 74,
            "ma": 44,
            "mp": 187,
            "st": 97
        }
    },
    {
        "name": "Anat",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 1],
            [skill_effect_1.SkillElement.Ice, -3],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Recovery, 1],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "level": 63,
        "race": "Megami",
        "resists": [
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "nu"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Ally Retaliate", 65],
            ["Hades Blast", 64],
            ["Mortal Jihad", 0],
            ["Phys Pleroma", 66],
            ["Tarukaja", 0]
        ],
        "stats": {
            "ag": 70,
            "dx": 59,
            "hp": 635,
            "lu": 78,
            "ma": 48,
            "mp": 234,
            "st": 99
        }
    },
    {
        "name": "Angel",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Dark, -5],
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Light, 3],
            [skill_effect_1.SkillElement.Recovery, 2],
            [skill_effect_1.SkillElement.Support, 2]
        ],
        "ailments": [
            ["bind", "rs"]
        ],
        "evolves": "Archangel",
        "level": 10,
        "race": "Divine",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Light, "nu"]
        ],
        "skills": [
            ["Dia", 0],
            ["Hama", 0],
            ["Magaon", 12],
            ["Patra", 11],
            ["Rakukaja", 14]
        ],
        "stats": {
            "ag": 17,
            "dx": 14,
            "hp": 112,
            "lu": 18,
            "ma": 23,
            "mp": 112,
            "st": 11
        }
    },
    {
        "name": "Angel White Wings",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -6],
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Light, 5],
            [skill_effect_1.SkillElement.Recovery, 3],
            [skill_effect_1.SkillElement.Support, 4]
        ],
        "ailments": [
            ["bind", "nu"],
            ["charm", "nu"]
        ],
        "level": 82,
        "race": "Divine",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Force, "rs"],
            [skill_effect_1.SkillElement.Light, "nu"]
        ],
        "skills": [
            ["High Light Pleroma", 84],
            ["Judgment Light", 0],
            ["Luster Candy", 0],
            ["Mediarahan", 83]
        ],
        "stats": {
            "ag": 80,
            "dx": 71,
            "hp": 510,
            "lu": 97,
            "ma": 122,
            "mp": 420,
            "st": 54
        }
    },
    {
        "name": "Aniel",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Elec, 6],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Light, 6]
        ],
        "level": 90,
        "race": "Herald",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "rp"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Light, "ab"]
        ],
        "skills": [
            ["Dekunda", 91],
            ["Judgment Light", 92],
            ["Makajamaon", 0],
            ["Thunder Gods", 93],
            ["Thunder Reign", 0]
        ],
        "stats": {
            "ag": 94,
            "dx": 98,
            "hp": 743,
            "lu": 101,
            "ma": 103,
            "mp": 335,
            "st": 93
        }
    },
    {
        "name": "Anubis",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 4],
            [skill_effect_1.SkillElement.Light, 4],
            [skill_effect_1.SkillElement.Phys, -3],
            [skill_effect_1.SkillElement.Recovery, 1]
        ],
        "ailments": [
            ["mute", "nu"]
        ],
        "level": 60,
        "race": "Avatar",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Light, "nu"]
        ],
        "skills": [
            ["Dark Pleroma", 63],
            ["Dekunda", 61],
            ["Judgment Light", 0],
            ["Light Pleroma", 62],
            ["Mamudoon", 0]
        ],
        "stats": {
            "ag": 62,
            "dx": 54,
            "hp": 487,
            "lu": 70,
            "ma": 104,
            "mp": 379,
            "st": 44
        }
    },
    {
        "name": "Anzu",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -2],
            [skill_effect_1.SkillElement.Elec, 2],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Recovery, 1],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["mute", "rs"]
        ],
        "level": 49,
        "race": "Raptor",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Gun, "wk"]
        ],
        "skills": [
            ["Critical Eye", 52],
            ["Me Patra", 51],
            ["Nihil Claw", 0],
            ["Shock", 0]
        ],
        "stats": {
            "ag": 50,
            "dx": 43,
            "hp": 548,
            "lu": 54,
            "ma": 63,
            "mp": 228,
            "st": 71
        }
    },
    {
        "name": "Apis",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Light, 3],
            [skill_effect_1.SkillElement.Recovery, 1]
        ],
        "ailments": [
            ["panic", "rs"],
            ["sleep", "wk"]
        ],
        "level": 18,
        "race": "Holy",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Critical Wave", 0],
            ["Hama", 0],
            ["Media", 20],
            ["Tetraja", 19]
        ],
        "stats": {
            "ag": 20,
            "dx": 21,
            "hp": 227,
            "lu": 28,
            "ma": 16,
            "mp": 71,
            "st": 33
        }
    },
    {
        "name": "Apsaras",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, -3],
            [skill_effect_1.SkillElement.Ice, 2],
            [skill_effect_1.SkillElement.Recovery, 2]
        ],
        "ailments": [
            ["bind", "wk"],
            ["charm", "rs"],
            ["poison", "wk"],
            ["sleep", "rs"]
        ],
        "level": 15,
        "race": "Nymph",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "rs"]
        ],
        "skills": [
            ["Diarama", 0],
            ["Mabufu", 17],
            ["Marin Karin", 0],
            ["Posumudi", 16]
        ],
        "stats": {
            "ag": 20,
            "dx": 18,
            "hp": 150,
            "lu": 23,
            "ma": 27,
            "mp": 114,
            "st": 14
        }
    },
    {
        "name": "Apsu",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Ice, 5],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Recovery, -2]
        ],
        "level": 82,
        "race": "Deity",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Ice, "rp"]
        ],
        "skills": [
            ["Ice Age", 0],
            ["Repel Fire", 85],
            ["Smile Charge", 84],
            ["Titanomachia", 83],
            ["Victory Cry", 0]
        ],
        "stats": {
            "ag": 80,
            "dx": 71,
            "hp": 510,
            "lu": 97,
            "ma": 122,
            "mp": 420,
            "st": 54
        }
    },
    {
        "name": "Aquans",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Fire, -4],
            [skill_effect_1.SkillElement.Ice, 3]
        ],
        "level": 16,
        "race": "Element",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "rs"]
        ],
        "skills": [
            ["Ice Pleroma", 0],
            ["Life Bonus", 20],
            ["Poisma", 17]
        ],
        "stats": {
            "ag": 26,
            "dx": 24,
            "hp": 150,
            "lu": 24,
            "ma": 30,
            "mp": 128,
            "st": 15
        }
    },
    {
        "name": "Arachne",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Gun, 3],
            [skill_effect_1.SkillElement.Ice, -3]
        ],
        "ailments": [
            ["bind", "rs"]
        ],
        "level": 44,
        "race": "Vermin",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Gun, "nu"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Blast Arrow", 0],
            ["Stun Needles", 0],
            ["Sukunda", 45]
        ],
        "stats": {
            "ag": 73,
            "dx": 69,
            "hp": 409,
            "lu": 46,
            "ma": 36,
            "mp": 153,
            "st": 43
        }
    },
    {
        "name": "Arahabaki",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 3],
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Fire, -4],
            [skill_effect_1.SkillElement.Force, -3],
            [skill_effect_1.SkillElement.Ice, -2],
            [skill_effect_1.SkillElement.Support, 3]
        ],
        "level": 57,
        "race": "Kunitsu",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Gun, "rs"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Concentrate", 58],
            ["Energy Drain", 61],
            ["Makarakarn", 0],
            ["Null Ice", 62],
            ["Sea of Chaos", 0]
        ],
        "stats": {
            "ag": 63,
            "dx": 57,
            "hp": 430,
            "lu": 75,
            "ma": 93,
            "mp": 376,
            "st": 45
        }
    },
    {
        "name": "Aramisaki",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 2],
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Ice, 3]
        ],
        "ailments": [
            ["charm", "wk"],
            ["panic", "nu"]
        ],
        "level": 59,
        "race": "Zealot",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Blood Ritual", 61],
            ["Bufudyne", 0],
            ["Magaon", 0],
            ["Sea of Chaos", 60]
        ],
        "stats": {
            "ag": 84,
            "dx": 56,
            "hp": 451,
            "lu": 73,
            "ma": 94,
            "mp": 365,
            "st": 42
        }
    },
    {
        "name": "Archangel",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -5],
            [skill_effect_1.SkillElement.Fire, 1],
            [skill_effect_1.SkillElement.Light, 3],
            [skill_effect_1.SkillElement.Phys, 1]
        ],
        "evolves": "Principality",
        "level": 18,
        "race": "Divine",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "nu"]
        ],
        "skills": [
            ["Agilao", 19],
            ["Hama", 0],
            ["Heat Wave", 0],
            ["Tarukaja", 20]
        ],
        "stats": {
            "ag": 22,
            "dx": 21,
            "hp": 227,
            "lu": 26,
            "ma": 28,
            "mp": 121,
            "st": 33
        }
    },
    {
        "name": "Ares",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -3],
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Phys, 4],
            [skill_effect_1.SkillElement.Recovery, -2],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["panic", "wk"]
        ],
        "level": 32,
        "race": "Fury",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Charge", 33],
            ["Counter", 0],
            ["Javelin Rain", 34],
            ["Power Punch", 0]
        ],
        "stats": {
            "ag": 35,
            "dx": 40,
            "hp": 375,
            "lu": 40,
            "ma": 24,
            "mp": 106,
            "st": 57
        }
    },
    {
        "name": "Asherah",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 1],
            [skill_effect_1.SkillElement.Elec, -2],
            [skill_effect_1.SkillElement.Fire, 2],
            [skill_effect_1.SkillElement.Force, 3],
            [skill_effect_1.SkillElement.Gun, 2],
            [skill_effect_1.SkillElement.Ice, -5],
            [skill_effect_1.SkillElement.Recovery, 4]
        ],
        "level": 51,
        "race": "Lady",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Force, "nu"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Diarama", 52],
            ["Grand Tack", 0],
            ["Judgment", 53],
            ["Maragion", 0],
            ["Samarecarm", 54]
        ],
        "stats": {
            "ag": 45,
            "dx": 85,
            "hp": 462,
            "lu": 57,
            "ma": 75,
            "mp": 293,
            "st": 50
        }
    },
    {
        "name": "Asura",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 2],
            [skill_effect_1.SkillElement.Ice, -5],
            [skill_effect_1.SkillElement.Phys, 4],
            [skill_effect_1.SkillElement.Recovery, -2],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "attack": "Phys x1-3, 1 enemy",
        "level": 43,
        "race": "Fury",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Critical Eye", 44],
            ["Maragion", 0],
            ["Resist Gun", 45],
            ["Titanomachia", 0]
        ],
        "stats": {
            "ag": 45,
            "dx": 43,
            "hp": 557,
            "lu": 63,
            "ma": 31,
            "mp": 113,
            "st": 73
        }
    },
    {
        "name": "Atropos",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, 1],
            [skill_effect_1.SkillElement.Fire, -4],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Light, 1]
        ],
        "level": 46,
        "race": "Femme",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "nu"]
        ],
        "skills": [
            ["Bufudyne", 47],
            ["Eternal Rest", 0],
            ["Hamaon", 0],
            ["Ziodyne", 48]
        ],
        "stats": {
            "ag": 41,
            "dx": 43,
            "hp": 358,
            "lu": 57,
            "ma": 73,
            "mp": 256,
            "st": 32
        }
    },
    {
        "name": "Attis",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -4],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Recovery, 2]
        ],
        "ailments": [
            ["panic", "wk"],
            ["sleep", "wk"]
        ],
        "level": 74,
        "race": "Zealot",
        "resists": [
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Blood Ritual", 0],
            ["Enduring Soul", 0],
            ["Mabufudyne", 75],
            ["Recarmdra", 0],
            ["Victory Cry", 76]
        ],
        "stats": {
            "ag": 73,
            "dx": 69,
            "hp": 698,
            "lu": 84,
            "ma": 50,
            "mp": 212,
            "st": 111
        }
    },
    {
        "name": "Azazel",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, -5],
            [skill_effect_1.SkillElement.Fire, 4],
            [skill_effect_1.SkillElement.Gun, 3],
            [skill_effect_1.SkillElement.Light, -3],
            [skill_effect_1.SkillElement.Support, -3]
        ],
        "level": 69,
        "race": "Tyrant",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Force, "nu"],
            [skill_effect_1.SkillElement.Gun, "rp"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Fire Pleroma", 70],
            ["Grand Tack", 0],
            ["Gun Pleroma", 71],
            ["Maragidyne", 0],
            ["Samarecarm", 72]
        ],
        "stats": {
            "ag": 76,
            "dx": 54,
            "hp": 687,
            "lu": 73,
            "ma": 113,
            "mp": 345,
            "st": 64
        }
    },
    {
        "name": "Azrael",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 4],
            [skill_effect_1.SkillElement.Fire, 3],
            [skill_effect_1.SkillElement.Ice, -3],
            [skill_effect_1.SkillElement.Light, 4],
            [skill_effect_1.SkillElement.Phys, -5]
        ],
        "level": 77,
        "race": "Herald",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "rp"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Agidyne", 0],
            ["Blink of Death", 0],
            ["Makarakarn", 78],
            ["Null Dark", 80],
            ["Tetrakarn", 79]
        ],
        "stats": {
            "ag": 75,
            "dx": 67,
            "hp": 482,
            "lu": 91,
            "ma": 115,
            "mp": 398,
            "st": 51
        }
    },
    {
        "name": "Azumi",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Ice, 3]
        ],
        "level": 19,
        "race": "Brute",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Ice, "rs"]
        ],
        "skills": [
            ["Ice Breath", 0],
            ["Mabufu", 21],
            ["Posumudi", 20]
        ],
        "stats": {
            "ag": 32,
            "dx": 23,
            "hp": 152,
            "lu": 29,
            "ma": 26,
            "mp": 101,
            "st": 23
        }
    },
    {
        "name": "Baal",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, 4],
            [skill_effect_1.SkillElement.Fire, 3],
            [skill_effect_1.SkillElement.Ice, -4],
            [skill_effect_1.SkillElement.Phys, 4],
            [skill_effect_1.SkillElement.Support, -3]
        ],
        "level": 79,
        "race": "Deity",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "ab"],
            [skill_effect_1.SkillElement.Ice, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Ally Retaliate", 80],
            ["Maragidyne", 0],
            ["Mist Rush", 0],
            ["Null Fire", 82],
            ["Vengeful Thunder", 81]
        ],
        "stats": {
            "ag": 79,
            "dx": 90,
            "hp": 616,
            "lu": 82,
            "ma": 84,
            "mp": 280,
            "st": 90
        }
    },
    {
        "name": "Bai Suzhen",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -1],
            [skill_effect_1.SkillElement.Fire, -4],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Recovery, 2],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["poison", "wk"]
        ],
        "level": 21,
        "race": "Drake",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "rs"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Bufula", 0],
            ["Makakaja", 22],
            ["Me Patra", 23],
            ["Media", 0]
        ],
        "stats": {
            "ag": 25,
            "dx": 23,
            "hp": 168,
            "lu": 30,
            "ma": 37,
            "mp": 141,
            "st": 18
        }
    },
    {
        "name": "Baihu",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, 5],
            [skill_effect_1.SkillElement.Force, -7],
            [skill_effect_1.SkillElement.Phys, 1],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "level": 62,
        "race": "Holy",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"]
        ],
        "skills": [
            ["High Elec Pleroma", 65],
            ["Madness Nails", 63],
            ["War Cry", 0],
            ["Ziodyne", 0]
        ],
        "stats": {
            "ag": 75,
            "dx": 54,
            "hp": 627,
            "lu": 69,
            "ma": 55,
            "mp": 251,
            "st": 100
        }
    },
    {
        "name": "Baldur",
        "affinities": [
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Light, 2],
            [skill_effect_1.SkillElement.Phys, 1]
        ],
        "level": 28,
        "race": "Genma",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "rs"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Ally Counter", 32],
            ["Hamaon", 0],
            ["Head Crush", 0],
            ["Light Pleroma", 31],
            ["Resist Light", 30]
        ],
        "stats": {
            "ag": 31,
            "dx": 30,
            "hp": 311,
            "lu": 39,
            "ma": 22,
            "mp": 96,
            "st": 44
        }
    },
    {
        "name": "Balor",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -2],
            [skill_effect_1.SkillElement.Fire, 3],
            [skill_effect_1.SkillElement.Ice, -5],
            [skill_effect_1.SkillElement.Phys, 1]
        ],
        "ailments": [
            ["sick", "wk"]
        ],
        "level": 36,
        "race": "Tyrant",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Force, "rs"],
            [skill_effect_1.SkillElement.Gun, "rs"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Agidyne", 40],
            ["Agilao", 0],
            ["Mamudo", 37],
            ["Megaton Press", 0]
        ],
        "stats": {
            "ag": 34,
            "dx": 37,
            "hp": 402,
            "lu": 44,
            "ma": 32,
            "mp": 116,
            "st": 58
        }
    },
    {
        "name": "Baphomet",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 3],
            [skill_effect_1.SkillElement.Light, -3]
        ],
        "level": 25,
        "race": "Vile",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "nu"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Dark Pleroma", 26],
            ["Mamudo", 0],
            ["Sabbatma", 27],
            ["Spirit Drain", 0]
        ],
        "stats": {
            "ag": 24,
            "dx": 26,
            "hp": 291,
            "lu": 32,
            "ma": 43,
            "mp": 125,
            "st": 20
        }
    },
    {
        "name": "Barbatos",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Elec, -2],
            [skill_effect_1.SkillElement.Fire, -3],
            [skill_effect_1.SkillElement.Force, 2],
            [skill_effect_1.SkillElement.Gun, 5]
        ],
        "level": 69,
        "race": "Fallen",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Force, "nu"],
            [skill_effect_1.SkillElement.Gun, "rp"]
        ],
        "skills": [
            ["Heaven's Bow", 0],
            ["Hellish Mask", 70],
            ["Myriad Arrows", 72],
            ["Stun Needles", 0],
            ["Zandyne", 71]
        ],
        "stats": {
            "ag": 79,
            "dx": 104,
            "hp": 601,
            "lu": 68,
            "ma": 54,
            "mp": 224,
            "st": 65
        }
    },
    {
        "name": "Barong",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Elec, 3],
            [skill_effect_1.SkillElement.Force, -3],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["poison", "rs"],
            ["sick", "rs"]
        ],
        "level": 68,
        "race": "Avatar",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Light, "nu"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Endure", 70],
            ["Nihil Claw", 69],
            ["Tetrakarn", 0],
            ["Ziodyne", 0]
        ],
        "stats": {
            "ag": 87,
            "dx": 80,
            "hp": 533,
            "lu": 85,
            "ma": 59,
            "mp": 320,
            "st": 80
        }
    },
    {
        "name": "Basilisk",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 6],
            [skill_effect_1.SkillElement.Force, -3],
            [skill_effect_1.SkillElement.Recovery, 1],
            [skill_effect_1.SkillElement.Support, -2]
        ],
        "ailments": [
            ["bind", "nu"],
            ["poison", "nu"]
        ],
        "level": 28,
        "race": "Drake",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Bind Voice", 0],
            ["Me Patra", 29],
            ["Poison Breath", 0],
            ["Resist Ice", 30]
        ],
        "stats": {
            "ag": 44,
            "dx": 31,
            "hp": 247,
            "lu": 35,
            "ma": 29,
            "mp": 151,
            "st": 31
        }
    },
    {
        "name": "Beelzebub",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 4],
            [skill_effect_1.SkillElement.Elec, 4],
            [skill_effect_1.SkillElement.Gun, 4],
            [skill_effect_1.SkillElement.Light, -1]
        ],
        "level": 79,
        "race": "Tyrant",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Gun, "ab"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["High Dark Pleroma", 80],
            ["Mamudoon", 0],
            ["Null Force", 82],
            ["Riot Gun", 0],
            ["Thunder Gods", 81]
        ],
        "stats": {
            "ag": 84,
            "dx": 89,
            "hp": 616,
            "lu": 76,
            "ma": 85,
            "mp": 280,
            "st": 91
        }
    },
    {
        "name": "Beiji-Weng",
        "affinities": [
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Recovery, 1],
            [skill_effect_1.SkillElement.Support, -3]
        ],
        "level": 66,
        "race": "Fury",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "nu"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Cold World", 67],
            ["Glacial Blast", 0],
            ["Recarm", 0],
            ["Workaholic", 68]
        ],
        "stats": {
            "ag": 81,
            "dx": 73,
            "hp": 490,
            "lu": 79,
            "ma": 95,
            "mp": 377,
            "st": 45
        }
    },
    {
        "name": "Belial",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 6],
            [skill_effect_1.SkillElement.Ice, -7],
            [skill_effect_1.SkillElement.Phys, 3]
        ],
        "level": 70,
        "race": "Tyrant",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "nu"],
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Fire of Lethargy", 0],
            ["Mana Surge", 71],
            ["Mortal Jihad", 0],
            ["Will of Flame", 72]
        ],
        "stats": {
            "ag": 75,
            "dx": 84,
            "hp": 633,
            "lu": 67,
            "ma": 88,
            "mp": 272,
            "st": 82
        }
    },
    {
        "name": "Berserker",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Fire, -3],
            [skill_effect_1.SkillElement.Phys, 6],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["bind", "nu"]
        ],
        "level": 64,
        "race": "Brute",
        "resists": [
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Phys, "nu"]
        ],
        "skills": [
            ["Charge", 0],
            ["Dark Sword", 65],
            ["Enduring Soul", 66],
            ["Hades Blast", 0]
        ],
        "stats": {
            "ag": 64,
            "dx": 60,
            "hp": 514,
            "lu": 74,
            "ma": 44,
            "mp": 237,
            "st": 107
        }
    },
    {
        "name": "Bifrons",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 2],
            [skill_effect_1.SkillElement.Force, -3],
            [skill_effect_1.SkillElement.Recovery, 1]
        ],
        "level": 20,
        "race": "Fallen",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Agilao", 0],
            ["Healing Knowhow", 21],
            ["Posumudi", 0],
            ["Resist Dark", 22]
        ],
        "stats": {
            "ag": 24,
            "dx": 22,
            "hp": 163,
            "lu": 29,
            "ma": 36,
            "mp": 137,
            "st": 17
        }
    },
    {
        "name": "Bilwis",
        "affinities": [
            [skill_effect_1.SkillElement.Gun, -2],
            [skill_effect_1.SkillElement.Ice, 1],
            [skill_effect_1.SkillElement.Light, -3],
            [skill_effect_1.SkillElement.Recovery, 1],
            [skill_effect_1.SkillElement.Support, -1]
        ],
        "ailments": [
            ["panic", "wk"],
            ["poison", "rs"]
        ],
        "level": 9,
        "race": "Brute",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Bufu", 10],
            ["Dia", 0],
            ["Poison Claw", 0]
        ],
        "stats": {
            "ag": 13,
            "dx": 17,
            "hp": 126,
            "lu": 17,
            "ma": 13,
            "mp": 59,
            "st": 16
        }
    },
    {
        "name": "Bishamonten",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, -5],
            [skill_effect_1.SkillElement.Gun, 2],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Phys, 3],
            [skill_effect_1.SkillElement.Recovery, -2],
            [skill_effect_1.SkillElement.Support, 2]
        ],
        "level": 70,
        "race": "Kishin",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "nu"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Bufudyne", 0],
            ["Hades Blast", 71],
            ["Luster Candy", 73],
            ["War Cry", 0]
        ],
        "stats": {
            "ag": 64,
            "dx": 78,
            "hp": 704,
            "lu": 74,
            "ma": 37,
            "mp": 222,
            "st": 111
        }
    },
    {
        "name": "Black Frost",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -2],
            [skill_effect_1.SkillElement.Dark, 3],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Light, -3],
            [skill_effect_1.SkillElement.Recovery, -2],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["mute", "wk"]
        ],
        "level": 40,
        "race": "Jaki",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Ice, "nu"],
            [skill_effect_1.SkillElement.Light, "wk"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Dark Pleroma", 0],
            ["Endure", 42],
            ["Ice Breath", 0],
            ["Mamudo", 41],
            ["Taunt", 0]
        ],
        "stats": {
            "ag": 39,
            "dx": 40,
            "hp": 482,
            "lu": 44,
            "ma": 44,
            "mp": 126,
            "st": 64
        }
    },
    {
        "name": "Black Maria",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Almighty, 2],
            [skill_effect_1.SkillElement.Elec, 3],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Ice, 3],
            [skill_effect_1.SkillElement.Phys, -2],
            [skill_effect_1.SkillElement.Recovery, 3],
            [skill_effect_1.SkillElement.Support, 1]
        ],
        "ailments": [
            ["charm", "rs"]
        ],
        "level": 66,
        "race": "Lady",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Bufudyne", 0],
            ["Dekaja", 68],
            ["Mediarama", 0],
            ["Megidola", 67],
            ["Ziodyne", 0]
        ],
        "stats": {
            "ag": 70,
            "dx": 64,
            "hp": 580,
            "lu": 84,
            "ma": 113,
            "mp": 387,
            "st": 40
        }
    },
    {
        "name": "Black Rider",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 4],
            [skill_effect_1.SkillElement.Fire, -5],
            [skill_effect_1.SkillElement.Ice, 6]
        ],
        "level": 93,
        "race": "Fiend",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Fire, "wk"],
            [skill_effect_1.SkillElement.Ice, "ab"],
            [skill_effect_1.SkillElement.Light, "rs"]
        ],
        "skills": [
            ["Glacial Blast", 94],
            ["Ice Pierce", 96],
            ["Megidolaon", 95],
            ["Soul Divide", 0],
            ["Soul Drain", 0]
        ],
        "stats": {
            "ag": 132,
            "dx": 105,
            "hp": 687,
            "lu": 108,
            "ma": 122,
            "mp": 319,
            "st": 129
        }
    },
    {
        "name": "Botis",
        "affinities": [
            [skill_effect_1.SkillElement.Elec, 5],
            [skill_effect_1.SkillElement.Force, -7],
            [skill_effect_1.SkillElement.Phys, 3]
        ],
        "attack": "Phys x2, 1 enemy",
        "level": 83,
        "race": "Fallen",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Elec, "rp"],
            [skill_effect_1.SkillElement.Force, "wk"]
        ],
        "skills": [
            ["Dark Sword", 0],
            ["Maziodyne", 0],
            ["Mist Rush", 84],
            ["Null Gun", 86],
            ["Will of Thunder", 85]
        ],
        "stats": {
            "ag": 85,
            "dx": 67,
            "hp": 536,
            "lu": 111,
            "ma": 123,
            "mp": 439,
            "st": 53
        }
    },
    {
        "name": "Brigid",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 4],
            [skill_effect_1.SkillElement.Ice, -6],
            [skill_effect_1.SkillElement.Recovery, 2]
        ],
        "level": 33,
        "race": "Megami",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Agilao", 0],
            ["Makakaja", 34],
            ["Mana Gain", 35],
            ["Mediarama", 0]
        ],
        "stats": {
            "ag": 36,
            "dx": 32,
            "hp": 256,
            "lu": 45,
            "ma": 59,
            "mp": 226,
            "st": 25
        }
    },
    {
        "name": "Cabracan",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Elec, 2],
            [skill_effect_1.SkillElement.Fire, 2],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Ice, -2]
        ],
        "ailments": [
            ["poison", "wk"]
        ],
        "level": 59,
        "race": "Wilder",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Fire, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"]
        ],
        "skills": [
            ["Acid Breath", 61],
            ["Earthquake", 60],
            ["Mediarama", 0],
            ["Pandemic Bomb", 0]
        ],
        "stats": {
            "ag": 29,
            "dx": 51,
            "hp": 672,
            "lu": 66,
            "ma": 36,
            "mp": 134,
            "st": 90
        }
    },
    {
        "name": "Caladrius",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, -3],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Recovery, 2],
            [skill_effect_1.SkillElement.Support, -1]
        ],
        "ailments": [
            ["sick", "rs"]
        ],
        "attack": "Phys x2, 1 enemy",
        "level": 4,
        "race": "Flight",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Gun, "wk"]
        ],
        "skills": [
            ["Dia", 0],
            ["Posumudi", 6]
        ],
        "stats": {
            "ag": 13,
            "dx": 10,
            "hp": 71,
            "lu": 12,
            "ma": 11,
            "mp": 59,
            "st": 8
        }
    },
    {
        "name": "Camazotz",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Gun, -4],
            [skill_effect_1.SkillElement.Phys, 2],
            [skill_effect_1.SkillElement.Support, -2]
        ],
        "ailments": [
            ["daze", "wk"],
            ["sick", "nu"]
        ],
        "level": 25,
        "race": "Raptor",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Gun, "wk"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Axel Claw", 27],
            ["Frenzied Chomp", 26],
            ["Life Drain", 0],
            ["Tetanus Cut", 0]
        ],
        "stats": {
            "ag": 40,
            "dx": 29,
            "hp": 227,
            "lu": 33,
            "ma": 27,
            "mp": 121,
            "st": 29
        }
    },
    {
        "name": "Catoblepas",
        "affinities": [
            [skill_effect_1.SkillElement.Dark, 1],
            [skill_effect_1.SkillElement.Elec, 2],
            [skill_effect_1.SkillElement.Light, -3],
            [skill_effect_1.SkillElement.Phys, 3]
        ],
        "ailments": [
            ["mute", "wk"],
            ["sick", "wk"]
        ],
        "level": 52,
        "race": "Wilder",
        "resists": [
            [skill_effect_1.SkillElement.Light, "wk"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Eat Whole", 54],
            ["Life Surge", 53],
            ["Titanomachia", 0],
            ["Ziodyne", 0]
        ],
        "stats": {
            "ag": 53,
            "dx": 45,
            "hp": 583,
            "lu": 64,
            "ma": 64,
            "mp": 196,
            "st": 80
        }
    },
    {
        "name": "Centaur",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, -1],
            [skill_effect_1.SkillElement.Elec, -3],
            [skill_effect_1.SkillElement.Force, -3],
            [skill_effect_1.SkillElement.Gun, 2],
            [skill_effect_1.SkillElement.Ice, 1],
            [skill_effect_1.SkillElement.Support, -1]
        ],
        "ailments": [
            ["poison", "wk"]
        ],
        "level": 4,
        "race": "Yoma",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Fire, "rs"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Gun, "rs"]
        ],
        "skills": [
            ["Bufu", 0],
            ["Needle Shot", 5]
        ],
        "stats": {
            "ag": 16,
            "dx": 13,
            "hp": 111,
            "lu": 9,
            "ma": 10,
            "mp": 50,
            "st": 9
        }
    },
    {
        "name": "Cerberus",
        "affinities": [
            [skill_effect_1.SkillElement.Fire, 4],
            [skill_effect_1.SkillElement.Ice, -5],
            [skill_effect_1.SkillElement.Phys, 3]
        ],
        "ailments": [
            ["bind", "wk"],
            ["mute", "nu"],
            ["poison", "nu"]
        ],
        "level": 69,
        "race": "Beast",
        "resists": [
            [skill_effect_1.SkillElement.Fire, "rp"],
            [skill_effect_1.SkillElement.Ice, "wk"]
        ],
        "skills": [
            ["Agidyne", 0],
            ["Beastly Reaction", 70],
            ["Madness Nails", 0],
            ["War Cry", 71]
        ],
        "stats": {
            "ag": 82,
            "dx": 50,
            "hp": 726,
            "lu": 77,
            "ma": 85,
            "mp": 179,
            "st": 94
        }
    },
    {
        "name": "Cernunnos",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 6],
            [skill_effect_1.SkillElement.Dark, 3],
            [skill_effect_1.SkillElement.Elec, 2],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Support, -2]
        ],
        "ailments": [
            ["mute", "wk"]
        ],
        "level": 71,
        "race": "Reaper",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rp"],
            [skill_effect_1.SkillElement.Elec, "nu"],
            [skill_effect_1.SkillElement.Force, "wk"],
            [skill_effect_1.SkillElement.Phys, "rs"]
        ],
        "skills": [
            ["Cough", 0],
            ["Death's Door", 0],
            ["Mamudoon", 73],
            ["Megidola", 72]
        ],
        "stats": {
            "ag": 70,
            "dx": 58,
            "hp": 583,
            "lu": 85,
            "ma": 107,
            "mp": 390,
            "st": 68
        }
    },
    {
        "name": "Chagrin",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Fire, -3],
            [skill_effect_1.SkillElement.Gun, 1]
        ],
        "attack": "Phys x2, 1 enemy",
        "level": 11,
        "race": "Wilder",
        "resists": [
            [skill_effect_1.SkillElement.Elec, "rs"],
            [skill_effect_1.SkillElement.Fire, "wk"]
        ],
        "skills": [
            ["Stun Needle", 12],
            ["Sukukaja", 14],
            ["Toxic Sting", 0],
            ["Zio", 0]
        ],
        "stats": {
            "ag": 20,
            "dx": 23,
            "hp": 154,
            "lu": 15,
            "ma": 13,
            "mp": 60,
            "st": 14
        }
    },
    {
        "name": "Chernobog",
        "affinities": [
            [skill_effect_1.SkillElement.Ailment, 1],
            [skill_effect_1.SkillElement.Almighty, 2],
            [skill_effect_1.SkillElement.Dark, 2],
            [skill_effect_1.SkillElement.Light, -2],
            [skill_effect_1.SkillElement.Phys, 2],
            [skill_effect_1.SkillElement.Recovery, -3]
        ],
        "ailments": [
            ["poison", "rs"],
            ["sick", "rs"]
        ],
        "level": 50,
        "race": "Fury",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "rs"],
            [skill_effect_1.SkillElement.Light, "wk"]
        ],
        "skills": [
            ["Blight", 0],
            ["Critical Eye", 54],
            ["Dark Sword", 53],
            ["Sea of Chaos", 0]
        ],
        "stats": {
            "ag": 61,
            "dx": 56,
            "hp": 463,
            "lu": 51,
            "ma": 71,
            "mp": 259,
            "st": 71
        }
    },
    {
        "name": "Cherub",
        "affinities": [
            [skill_effect_1.SkillElement.Almighty, 3],
            [skill_effect_1.SkillElement.Elec, -5],
            [skill_effect_1.SkillElement.Force, -5],
            [skill_effect_1.SkillElement.Gun, 3],
            [skill_effect_1.SkillElement.Light, 4],
            [skill_effect_1.SkillElement.Support, -3]
        ],
        "ailments": [
            ["mute", "wk"]
        ],
        "evolves": "Angel White Wings",
        "level": 71,
        "race": "Divine",
        "resists": [
            [skill_effect_1.SkillElement.Dark, "wk"],
            [skill_effect_1.SkillElement.Elec, "wk"],
            [skill_effect_1.SkillElement.Force, "ab"],
            [skill_effect_1.SkillElement.Gun, "ab"],
            [skill_effect_1.SkillElement.Light, "nu"]
        ],
        "skills": [
            ["Gun Pleroma", 73],
            ["Heaven's Bow", 0],
            ["Makajamaon", 72],
            ["Megidola", 0]
        ],
        "stats": {
            "ag": 75,
            "dx": 105,
            "hp": 666,
            "lu": 75,
            "ma": 80,
            "mp": 290,
            "st": 66
        }
    },
];
exports.DEMON_MAP = new Map(DEMONS.map(function (x) { return [x.name, x]; }));
