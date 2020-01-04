import { Demon } from "../demon";
import { SkillElement } from "../skill_effect";

const DEMONS: Demon[] = [{
    "name": "Abaddon",
    "affinities": [
        [SkillElement.Ailment, 2],
        [SkillElement.Elec, 3],
        [SkillElement.Fire, 1],
        [SkillElement.Phys, 3],
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["mute", "wk"]
    ], 
    "level": 63, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rp"]
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
        [SkillElement.Fire, 6],
        [SkillElement.Ice, 5],
        [SkillElement.Phys, 1]        
    ], 
    "level": 68, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "ab"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 4],
        [SkillElement.Force, 3]        
    ], 
    "level": 12, 
    "race": "Element", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"]
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
        [SkillElement.Ailment, 2],
        [SkillElement.Elec, 2],
        [SkillElement.Gun, 4],
        [SkillElement.Ice, 3], 
        [SkillElement.Support, 1]        
    ], 
    "level": 12, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Dark, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 1]
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
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ailment, 3], 
        [SkillElement.Dark, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, -4], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 67, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "wk"]
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
        [SkillElement.Ailment, 3], 
        [SkillElement.Dark, 5], 
        [SkillElement.Gun, 2], 
        [SkillElement.Phys, -9], 
        [SkillElement.Recovery, -5]
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
        [SkillElement.Dark, "rp"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Almighty, 4], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 3]
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
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ailment, 3], 
        [SkillElement.Fire, -4], 
        [SkillElement.Gun, 2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["daze", "wk"], 
        ["sick", "wk"]
    ], 
    "level": 48, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"]
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
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 5], 
        [SkillElement.Ice, -2], 
        [SkillElement.Light, 2], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 79, 
    "race": "Amatsu", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rp"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 1], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 22, 
    "race": "Amatsu", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["panic", "wk"], 
        ["poison", "rs"]
    ], 
    "level": 64, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Dark, 1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "level": 63, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, -5], 
        [SkillElement.Elec, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "evolves": "Archangel", 
    "level": 10, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Light, "nu"]
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
        [SkillElement.Dark, -6], 
        [SkillElement.Elec, -3], 
        [SkillElement.Light, 5], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 4]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["charm", "nu"]
    ], 
    "level": 82, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "nu"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 6], 
        [SkillElement.Force, -5], 
        [SkillElement.Light, 6]
    ], 
    "level": 90, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Elec, "rp"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "ab"]
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
        [SkillElement.Dark, 4], 
        [SkillElement.Light, 4], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 60, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "nu"]
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
        [SkillElement.Ailment, -2], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 49, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"]
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
        [SkillElement.Dark, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["panic", "rs"], 
        ["sleep", "wk"]
    ], 
    "level": 18, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, 2], 
        [SkillElement.Recovery, 2]
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
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
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
        [SkillElement.Elec, -3], 
        [SkillElement.Ice, 5], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 82, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "rp"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -4], 
        [SkillElement.Ice, 3]
    ], 
    "level": 16, 
    "race": "Element", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "level": 44, 
    "race": "Vermin", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Almighty, 3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -4], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -2], 
        [SkillElement.Support, 3]
    ], 
    "level": 57, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Almighty, 2], 
        [SkillElement.Dark, -3], 
        [SkillElement.Ice, 3]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["panic", "nu"]
    ], 
    "level": 59, 
    "race": "Zealot", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Dark, -5], 
        [SkillElement.Fire, 1], 
        [SkillElement.Light, 3], 
        [SkillElement.Phys, 1]
    ], 
    "evolves": "Principality", 
    "level": 18, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"]
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
        [SkillElement.Ailment, -3], 
        [SkillElement.Dark, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "level": 32, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Almighty, 1], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, 2], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Recovery, 4]
    ], 
    "level": 51, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 43, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, 1]
    ], 
    "level": 46, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
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
        [SkillElement.Ailment, -4], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["panic", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 74, 
    "race": "Zealot", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, 4], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, -3]
    ], 
    "level": 69, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "rp"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Dark, 4], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, 4], 
        [SkillElement.Phys, -5]
    ], 
    "level": 77, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rp"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Elec, -3], 
        [SkillElement.Ice, 3]
    ], 
    "level": 19, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "rs"]
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
        [SkillElement.Elec, 4], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -4], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, -3]
    ], 
    "level": 79, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Elec, "ab"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 21, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Elec, 5], 
        [SkillElement.Force, -7], 
        [SkillElement.Phys, 1], 
        [SkillElement.Support, 1]
    ], 
    "level": 62, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"]
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
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 2], 
        [SkillElement.Phys, 1]
    ], 
    "level": 28, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, -2], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 1]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "level": 36, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Dark, 3], 
        [SkillElement.Light, -3]
    ], 
    "level": 25, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, 5]
    ], 
    "level": 69, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "rp"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "rs"], 
        ["sick", "rs"]
    ], 
    "level": 68, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "nu"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, 6], 
        [SkillElement.Force, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["poison", "nu"]
    ], 
    "level": 28, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Dark, 4], 
        [SkillElement.Elec, 4], 
        [SkillElement.Gun, 4], 
        [SkillElement.Light, -1]
    ], 
    "level": 79, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "ab"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -3]
    ], 
    "level": 66, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Fire, 6], 
        [SkillElement.Ice, -7], 
        [SkillElement.Phys, 3]
    ], 
    "level": 70, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Phys, 6], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "level": 64, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Phys, "nu"]
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
        [SkillElement.Fire, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 20, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Gun, -2], 
        [SkillElement.Ice, 1], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["panic", "wk"], 
        ["poison", "rs"]
    ], 
    "level": 9, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Fire, -5], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 2]
    ], 
    "level": 70, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "wk"]
    ], 
    "level": 40, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Almighty, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -5], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "rs"]
    ], 
    "level": 66, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Almighty, 4], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 6]
    ], 
    "level": 93, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "ab"], 
        [SkillElement.Light, "rs"]
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
        [SkillElement.Elec, 5], 
        [SkillElement.Force, -7], 
        [SkillElement.Phys, 3]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 83, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "rp"], 
        [SkillElement.Force, "wk"]
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
        [SkillElement.Fire, 4], 
        [SkillElement.Ice, -6], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 33, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Ice, -2]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 59, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "wk"]
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
        [SkillElement.Dark, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["sick", "rs"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 4, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "wk"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["sick", "nu"]
    ], 
    "level": 25, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Dark, 1], 
        [SkillElement.Elec, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["mute", "wk"], 
        ["sick", "wk"]
    ], 
    "level": 52, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, -1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, 1], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 4, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"]
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
        [SkillElement.Fire, 4], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["mute", "nu"], 
        ["poison", "nu"]
    ], 
    "level": 69, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Fire, "rp"], 
        [SkillElement.Ice, "wk"]
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
        [SkillElement.Ailment, 6], 
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["mute", "wk"]
    ], 
    "level": 71, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "rp"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Phys, "rs"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 1]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 11, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"]
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
        [SkillElement.Ailment, 1], 
        [SkillElement.Almighty, 2], 
        [SkillElement.Dark, 2], 
        [SkillElement.Light, -2], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -3]
    ], 
    "ailments": [
        ["poison", "rs"], 
        ["sick", "rs"]
    ], 
    "level": 50, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "wk"]
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
        [SkillElement.Almighty, 3], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, -5], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, 4], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["mute", "wk"]
    ], 
    "evolves": "Angel White Wings", 
    "level": 71, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "ab"], 
        [SkillElement.Gun, "ab"], 
        [SkillElement.Light, "nu"]
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
{
    "name": "Chi You",
    "affinities": [
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Force, 3], 
        [SkillElement.Ice, 5], 
        [SkillElement.Phys, 5], 
        [SkillElement.Support, 2]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 87, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rp"], 
        [SkillElement.Ice, "rp"]
    ], 
    "skills": [
        ["Debilitate", 88], 
        ["Drain Gun", 90], 
        ["Hades Blast", 0], 
        ["Mabufudyne", 0], 
        ["Mist Rush", 89], 
        ["Will of Frost", 0]
    ], 
    "stats": {
        "ag": 94, 
        "dx": 75, 
        "hp": 857, 
        "lu": 100, 
        "ma": 74, 
        "mp": 194, 
        "st": 131
    }
}, 
{
    "name": "Chimera",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -4], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "evolves": "Orthrus", 
    "level": 46, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Elec Pleroma", 0], 
        ["Madness Nails", 50], 
        ["War Cry", 49], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 52, 
        "hp": 512, 
        "lu": 55, 
        "ma": 33, 
        "mp": 211, 
        "st": 75
    }
}, 
{
    "name": "Chironnupu",
    "affinities": [
        [SkillElement.Gun, 4], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 4], 
        [SkillElement.Support, 4]
    ], 
    "level": 26, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Enduring Cheer", 0], 
        ["Recarmdra", 27], 
        ["Warding Shout", 28]
    ], 
    "stats": {
        "ag": 43, 
        "dx": 32, 
        "hp": 258, 
        "lu": 47, 
        "ma": 36, 
        "mp": 137, 
        "st": 38
    }
}, 
{
    "name": "Chupacabra",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 3]
    ], 
    "level": 21, 
    "race": "Food", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dormina", 22], 
        ["Frenzied Chomp", 23], 
        ["Life Drain", 0], 
        ["Sukukaja", 0]
    ], 
    "stats": {
        "ag": 35, 
        "dx": 25, 
        "hp": 200, 
        "lu": 31, 
        "ma": 21, 
        "mp": 107, 
        "st": 25
    }
}, 
{
    "name": "Churel",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 32, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Dark Pleroma", 34], 
        ["Marin Karin", 0], 
        ["Mudoon", 33], 
        ["Shibaboo", 0]
    ], 
    "stats": {
        "ag": 40, 
        "dx": 31, 
        "hp": 230, 
        "lu": 42, 
        "ma": 52, 
        "mp": 192, 
        "st": 24
    }
}, 
{
    "name": "Cleopatra",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Dark, -3], 
        [SkillElement.Force, 5], 
        [SkillElement.Ice, 5], 
        [SkillElement.Light, 8], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, 4]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["poison", "wk"]
    ], 
    "level": 99, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "ab"]
    ], 
    "skills": [
        ["Adaptive Tactics", 0], 
        ["Alluring Banter", 0], 
        ["Dazzle Ray", 0], 
        ["Deadly Wind", 0], 
        ["Ice Age", 0], 
        ["Light Pierce", 0], 
        ["Mediarahan", 0]
    ], 
    "stats": {
        "ag": 125, 
        "dx": 83, 
        "hp": 616, 
        "lu": 126, 
        "ma": 176, 
        "mp": 788, 
        "st": 60
    }
}, 
{
    "name": "Clotho",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["sleep", "nu"]
    ], 
    "level": 35, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Diarahan", 38], 
        ["Diarama", 0], 
        ["Lullaby", 0], 
        ["Recarm", 36], 
        ["Workaholic", 37]
    ], 
    "stats": {
        "ag": 58, 
        "dx": 34, 
        "hp": 333, 
        "lu": 43, 
        "ma": 32, 
        "mp": 156, 
        "st": 38
    }
}, 
{
    "name": "Corpses",
    "affinities": [
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, 2], 
        [SkillElement.Light, -3]
    ], 
    "evolves": "Nebiros", 
    "level": 35, 
    "race": "Undead", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Life Drain", 0], 
        ["Mamudo", 36]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 36, 
        "hp": 470, 
        "lu": 38, 
        "ma": 26, 
        "mp": 113, 
        "st": 57
    }
}, 
{
    "name": "Cu Chulainn",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, -2], 
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 4], 
        [SkillElement.Phys, 4]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["mute", "rs"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 50, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Force, "nu"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Critical Eye", 54], 
        ["Dark Sword", 52], 
        ["Floral Gust", 0], 
        ["Force Pleroma", 51], 
        ["Javelin Rain", 0], 
        ["Mana Aid", 0]
    ], 
    "stats": {
        "ag": 46, 
        "dx": 51, 
        "hp": 533, 
        "lu": 41, 
        "ma": 76, 
        "mp": 239, 
        "st": 81
    }
}, 
{
    "name": "Da Peng",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 4], 
        [SkillElement.Gun, -4]
    ], 
    "ailments": [
        ["daze", "wk"]
    ], 
    "level": 56, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Mazandyne", 58], 
        ["Panic Voice", 0], 
        ["Rakukaja", 57], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 80, 
        "dx": 47, 
        "hp": 508, 
        "lu": 64, 
        "ma": 73, 
        "mp": 208, 
        "st": 70
    }
}, 
{
    "name": "Dakini",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["charm", "wk"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "evolves": "Kali", 
    "level": 63, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Fire, "ab"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Chakra Walk", 64], 
        ["Dark Sword", 66], 
        ["Pandemic Bomb", 65], 
        ["Titanomachia", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 60, 
        "hp": 605, 
        "lu": 73, 
        "ma": 43, 
        "mp": 224, 
        "st": 96
    }
}, 
{
    "name": "Dantalian",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 53, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Makajam", 0], 
        ["Makajamaon", 56], 
        ["Makakaja", 0], 
        ["Makarakarn", 0], 
        ["Sabbatma", 55]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 48, 
        "hp": 348, 
        "lu": 65, 
        "ma": 82, 
        "mp": 288, 
        "st": 37
    }
}, 
{
    "name": "Daphne",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Fire, -4], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["panic", "rs"]
    ], 
    "level": 16, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Attack Knowhow", 17], 
        ["Dia", 0], 
        ["Makakaja", 18], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 19, 
        "hp": 140, 
        "lu": 24, 
        "ma": 30, 
        "mp": 168, 
        "st": 15
    }
}, 
{
    "name": "David",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Dark, 5], 
        [SkillElement.Elec, -3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "rs"], 
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 82, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Haunting Rhapsody", 0], 
        ["Smile Charge", 83], 
        ["Soul Drain", 0]
    ], 
    "stats": {
        "ag": 115, 
        "dx": 77, 
        "hp": 603, 
        "lu": 87, 
        "ma": 143, 
        "mp": 455, 
        "st": 65
    }
}, 
{
    "name": "Decarabia",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 1]
    ], 
    "level": 5, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Agi", 6], 
        ["Bufu", 0]
    ], 
    "stats": {
        "ag": 11, 
        "dx": 10, 
        "hp": 79, 
        "lu": 12, 
        "ma": 15, 
        "mp": 69, 
        "st": 8
    }
}, 
{
    "name": "Demiurge",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Almighty, 4], 
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, -3]
    ], 
    "level": 95, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Antichthon", 0], 
        ["Chakra Walk", 96], 
        ["Concentrate", 0], 
        ["Drain Light", 98], 
        ["Null Mind", 97]
    ], 
    "stats": {
        "ag": 110, 
        "dx": 98, 
        "hp": 748, 
        "lu": 82, 
        "ma": 116, 
        "mp": 320, 
        "st": 116
    }
}, 
{
    "name": "Demonee-Ho",
    "affinities": [
        [SkillElement.Almighty, 3], 
        [SkillElement.Gun, 4], 
        [SkillElement.Ice, 4], 
        [SkillElement.Phys, 4]
    ], 
    "attack": "Gun x1, 1 enemy", 
    "level": 76, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Blank Bullet", 0], 
        ["Breath", 78], 
        ["Desperate Hit", 77], 
        ["Iron Judgment", 0], 
        ["Smile Charge", 0]
    ], 
    "stats": {
        "ag": 75, 
        "dx": 71, 
        "hp": 714, 
        "lu": 86, 
        "ma": 51, 
        "mp": 216, 
        "st": 114
    }
}, 
{
    "name": "Diana",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Gun, 4], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "level": 41, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "nu"]
    ], 
    "skills": [
        ["Blast Arrow", 0], 
        ["Grand Tack", 43], 
        ["Gun Pleroma", 43], 
        ["Madness Needle", 0]
    ], 
    "stats": {
        "ag": 52, 
        "dx": 72, 
        "hp": 455, 
        "lu": 42, 
        "ma": 47, 
        "mp": 174, 
        "st": 42
    }
}, 
{
    "name": "Dionysus",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Almighty, 2], 
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, 2], 
        [SkillElement.Force, -1], 
        [SkillElement.Ice, -4], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 41, 
    "race": "Zealot", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Concentrate", 43], 
        ["Megidola", 0], 
        ["Null Mind", 42], 
        ["Purple Smoke", 0]
    ], 
    "stats": {
        "ag": 68, 
        "dx": 44, 
        "hp": 383, 
        "lu": 61, 
        "ma": 39, 
        "mp": 226, 
        "st": 50
    }
}, 
{
    "name": "Dis",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 1], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["mute", "rs"], 
        ["sleep", "nu"]
    ], 
    "level": 29, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Chakra Walk", 32], 
        ["Lullaby", 0], 
        ["Makajam", 0], 
        ["Media", 31], 
        ["Posumudi", 30]
    ], 
    "stats": {
        "ag": 37, 
        "dx": 29, 
        "hp": 193, 
        "lu": 39, 
        "ma": 48, 
        "mp": 177, 
        "st": 20
    }
}, 
{
    "name": "Dominion",
    "affinities": [
        [SkillElement.Dark, -5], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "evolves": "Throne", 
    "level": 51, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Dekunda", 53], 
        ["Maziodyne", 0], 
        ["Megido", 0], 
        ["Samarecarm", 52]
    ], 
    "stats": {
        "ag": 61, 
        "dx": 47, 
        "hp": 376, 
        "lu": 72, 
        "ma": 85, 
        "mp": 299, 
        "st": 36
    }
}, 
{
    "name": "Dormarth",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["poison", "nu"], 
        ["sick", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 58, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Bind Voice", 0], 
        ["Frenzied Chomp", 0], 
        ["Sukukaja", 59], 
        ["Trafuri", 0]
    ], 
    "stats": {
        "ag": 68, 
        "dx": 52, 
        "hp": 376, 
        "lu": 76, 
        "ma": 94, 
        "mp": 341, 
        "st": 40
    }
}, 
{
    "name": "Dwarf",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 2]
    ], 
    "level": 8, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Head Crush", 10], 
        ["Life Bonus", 9], 
        ["Lunge", 0]
    ], 
    "stats": {
        "ag": 13, 
        "dx": 13, 
        "hp": 143, 
        "lu": 15, 
        "ma": 10, 
        "mp": 45, 
        "st": 19
    }
}, 
{
    "name": "Dybbuk",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 1], 
        [SkillElement.Force, -1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -1]
    ], 
    "level": 10, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Hard Worker", 11], 
        ["Mudo", 0], 
        ["Patra", 12]
    ], 
    "stats": {
        "ag": 15, 
        "dx": 14, 
        "hp": 107, 
        "lu": 18, 
        "ma": 22, 
        "mp": 92, 
        "st": 11
    }
}, 
{
    "name": "Dzelarhons",
    "affinities": [
        [SkillElement.Fire, 1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 19, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agilao", 0], 
        ["Hard Worker", 0], 
        ["Mana Bonus", 21], 
        ["Maragi", 20]
    ], 
    "stats": {
        "ag": 23, 
        "dx": 16, 
        "hp": 162, 
        "lu": 31, 
        "ma": 39, 
        "mp": 152, 
        "st": 16
    }
}, 
{
    "name": "Enku",
    "affinities": [
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, 4], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -5], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 38, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Damascus Claw", 0], 
        ["Fire Breath", 0], 
        ["Maragion", 39]
    ], 
    "stats": {
        "ag": 40, 
        "dx": 36, 
        "hp": 264, 
        "lu": 49, 
        "ma": 61, 
        "mp": 219, 
        "st": 28
    }
}, 
{
    "name": "Erlkonig",
    "affinities": [
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, -2], 
        [SkillElement.Gun, 4]
    ], 
    "ailments": [
        ["daze", "rs"]
    ], 
    "level": 70, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rp"]
    ], 
    "skills": [
        ["Endure", 71], 
        ["Maziodyne", 0], 
        ["Myriad Arrows", 73], 
        ["Null Elec", 72], 
        ["Stun Needles", 0]
    ], 
    "stats": {
        "ag": 80, 
        "dx": 106, 
        "hp": 659, 
        "lu": 69, 
        "ma": 55, 
        "mp": 227, 
        "st": 66
    }
}, 
{
    "name": "Erthys",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -4]
    ], 
    "level": 8, 
    "race": "Element", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Dormina", 9], 
        ["Elec Pleroma", 0], 
        ["Life Bonus", 12]
    ], 
    "stats": {
        "ag": 15, 
        "dx": 19, 
        "hp": 136, 
        "lu": 13, 
        "ma": 14, 
        "mp": 61, 
        "st": 13
    }
}, 
{
    "name": "Fafnir",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["panic", "wk"], 
        ["poison", "nu"]
    ], 
    "level": 75, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "ab"]
    ], 
    "skills": [
        ["Draconic Reaction", 77], 
        ["Earthquake", 0], 
        ["Poison Breath", 0], 
        ["War Cry", 76]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 70, 
        "hp": 786, 
        "lu": 83, 
        "ma": 44, 
        "mp": 214, 
        "st": 113
    }
}, 
{
    "name": "Feng Huang",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 5], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -7], 
        [SkillElement.Support, 1]
    ], 
    "level": 63, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Bind Voice", 64], 
        ["Dekunda", 0], 
        ["High Fire Pleroma", 66]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 51, 
        "hp": 524, 
        "lu": 78, 
        "ma": 86, 
        "mp": 333, 
        "st": 63
    }
}, 
{
    "name": "Fenrir",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "wk"], 
        ["poison", "wk"]
    ], 
    "level": 69, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "ab"]
    ], 
    "skills": [
        ["Critical Eye", 71], 
        ["Eat Whole", 0], 
        ["Nihil Claw", 0], 
        ["Phys Pleroma", 70]
    ], 
    "stats": {
        "ag": 97, 
        "dx": 43, 
        "hp": 679, 
        "lu": 86, 
        "ma": 77, 
        "mp": 253, 
        "st": 83
    }
}, 
{
    "name": "Flaemis",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -4]
    ], 
    "level": 20, 
    "race": "Element", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Fire Pleroma", 0], 
        ["Mana Bonus", 24], 
        ["Pulinpa", 21]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 28, 
        "hp": 254, 
        "lu": 28, 
        "ma": 17, 
        "mp": 86, 
        "st": 36
    }
}, 
{
    "name": "Fomorian",
    "affinities": [
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 1], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["sleep", "wk"]
    ], 
    "level": 6, 
    "race": "Night", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Head Crush", 0], 
        ["Needle Shot", 7]
    ], 
    "stats": {
        "ag": 9, 
        "dx": 11, 
        "hp": 181, 
        "lu": 13, 
        "ma": 8, 
        "mp": 30, 
        "st": 19
    }
}, 
{
    "name": "Fortuna",
    "affinities": [
        [SkillElement.Force, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 11, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Dia", 0], 
        ["Makakaja", 13], 
        ["Mazan", 14], 
        ["Zan", 0]
    ], 
    "stats": {
        "ag": 24, 
        "dx": 17, 
        "hp": 133, 
        "lu": 20, 
        "ma": 17, 
        "mp": 89, 
        "st": 16
    }
}, 
{
    "name": "Frost Ace",
    "affinities": [
        [SkillElement.Fire, -1], 
        [SkillElement.Ice, 4], 
        [SkillElement.Light, 2]
    ], 
    "level": 42, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 44], 
        ["Hamaon", 43], 
        ["Ice Pleroma", 0], 
        ["Mabufula", 0], 
        ["Purple Smoke", 0]
    ], 
    "stats": {
        "ag": 62, 
        "dx": 37, 
        "hp": 390, 
        "lu": 52, 
        "ma": 52, 
        "mp": 230, 
        "st": 52
    }
}, 
{
    "name": "Futotama",
    "affinities": [], 
    "attack": "Phys x1, all enemies", 
    "level": 50, 
    "race": "Enigma", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Attack Knowhow", 0], 
        ["Healing Knowhow", 0], 
        ["Makarakarn", 53], 
        ["Sabbatma", 52], 
        ["Workaholic", 51]
    ], 
    "stats": {
        "ag": 61, 
        "dx": 46, 
        "hp": 381, 
        "lu": 67, 
        "ma": 83, 
        "mp": 325, 
        "st": 35
    }
}, 
{
    "name": "Fuu-Ki",
    "affinities": [
        [SkillElement.Elec, -6], 
        [SkillElement.Force, 4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 49, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"]
    ], 
    "skills": [
        ["Dark Sword", 50], 
        ["Fog Breath", 0], 
        ["Force Pleroma", 51], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 71, 
        "dx": 50, 
        "hp": 386, 
        "lu": 63, 
        "ma": 42, 
        "mp": 204, 
        "st": 50
    }
}, 
{
    "name": "Fuxi",
    "affinities": [
        [SkillElement.Force, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["panic", "rs"]
    ], 
    "level": 6, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Bouncing Claw", 7], 
        ["Patra", 8], 
        ["Shibaboo", 0], 
        ["Zan", 0]
    ], 
    "stats": {
        "ag": 13, 
        "dx": 16, 
        "hp": 116, 
        "lu": 12, 
        "ma": 10, 
        "mp": 46, 
        "st": 11
    }
}, 
{
    "name": "Ganesha",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Elec, -6], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["panic", "rs"], 
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 72, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Charge", 73], 
        ["Earthquake", 0], 
        ["Grand Tack", 74], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 61, 
        "dx": 67, 
        "hp": 731, 
        "lu": 82, 
        "ma": 78, 
        "mp": 257, 
        "st": 108
    }
}, 
{
    "name": "Garrote",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 7, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Binding Claw", 9], 
        ["Cough", 0], 
        ["Dormina", 0], 
        ["Poisma", 8]
    ], 
    "stats": {
        "ag": 16, 
        "dx": 12, 
        "hp": 107, 
        "lu": 15, 
        "ma": 11, 
        "mp": 59, 
        "st": 12
    }
}, 
{
    "name": "Garuda",
    "affinities": [
        [SkillElement.Elec, -4], 
        [SkillElement.Fire, 3], 
        [SkillElement.Force, 4], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 72, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Fire, "rp"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Amrita", 0], 
        ["Floral Gust", 74], 
        ["Madness Nails", 73], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 101, 
        "dx": 71, 
        "hp": 539, 
        "lu": 90, 
        "ma": 60, 
        "mp": 284, 
        "st": 71
    }
}, 
{
    "name": "Gemori",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 58, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Mana Surge", 59], 
        ["Maragidyne", 0], 
        ["Mediarama", 60], 
        ["Sexy Dance", 0]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 52, 
        "hp": 386, 
        "lu": 71, 
        "ma": 89, 
        "mp": 311, 
        "st": 40
    }
}, 
{
    "name": "Ghoul",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["mute", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 49, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Acid Breath", 51], 
        ["Damascus Claw", 50], 
        ["Frenzied Chomp", 0], 
        ["Tetanus Cut", 0]
    ], 
    "stats": {
        "ag": 62, 
        "dx": 42, 
        "hp": 356, 
        "lu": 63, 
        "ma": 57, 
        "mp": 204, 
        "st": 66
    }
}, 
{
    "name": "Girimehkala",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "rs"], 
        ["sleep", "wk"]
    ], 
    "level": 62, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rp"]
    ], 
    "skills": [
        ["Bind Voice", 0], 
        ["Critical Eye", 63], 
        ["Earthquake", 64], 
        ["Titanomachia", 0]
    ], 
    "stats": {
        "ag": 62, 
        "dx": 59, 
        "hp": 797, 
        "lu": 72, 
        "ma": 42, 
        "mp": 186, 
        "st": 99
    }
}, 
{
    "name": "Gnome",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 4], 
        [SkillElement.Force, -5]
    ], 
    "level": 24, 
    "race": "Element", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["High Elec Pleroma", 0], 
        ["Life Gain", 28], 
        ["Lullaby", 25]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 26, 
        "hp": 308, 
        "lu": 37, 
        "ma": 20, 
        "mp": 116, 
        "st": 41
    }
}, 
{
    "name": "Goblin",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["sleep", "wk"]
    ], 
    "level": 3, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Gram Slice", 0], 
        ["Lunge", 4]
    ], 
    "stats": {
        "ag": 9, 
        "dx": 6, 
        "hp": 101, 
        "lu": 10, 
        "ma": 7, 
        "mp": 24, 
        "st": 15
    }
}, 
{
    "name": "Gogmagog",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["daze", "rs"], 
        ["mute", "wk"], 
        ["sick", "wk"]
    ], 
    "level": 61, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rp"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Ally Counter", 62], 
        ["Earthquake", 0], 
        ["Shock", 0], 
        ["Titanomachia", 63]
    ], 
    "stats": {
        "ag": 56, 
        "dx": 58, 
        "hp": 788, 
        "lu": 71, 
        "ma": 42, 
        "mp": 179, 
        "st": 93
    }
}, 
{
    "name": "Gremlin",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, 1]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 8, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufu", 0], 
        ["Dream Fist", 9], 
        ["Zio", 10]
    ], 
    "stats": {
        "ag": 16, 
        "dx": 13, 
        "hp": 119, 
        "lu": 14, 
        "ma": 16, 
        "mp": 56, 
        "st": 11
    }
}, 
{
    "name": "Grendel",
    "affinities": [
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -3]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["panic", "wk"]
    ], 
    "level": 50, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Head Crush", 0], 
        ["Life Surge", 53], 
        ["Mortal Jihad", 0], 
        ["Purple Smoke", 52]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 49, 
        "hp": 596, 
        "lu": 44, 
        "ma": 35, 
        "mp": 152, 
        "st": 86
    }
}, 
{
    "name": "Gryphon",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 40, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Damascus Claw", 41], 
        ["Oni-Kagura", 0],
        ["Power Punch", 0]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 40, 
        "hp": 442, 
        "lu": 51, 
        "ma": 29, 
        "mp": 126, 
        "st": 61
    }
}, 
{
    "name": "Gu Huo Niao",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["sick", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 16, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rp"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agilao", 0], 
        ["Makakaja", 17], 
        ["Maragi", 18]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 19, 
        "hp": 140, 
        "lu": 24, 
        "ma": 30, 
        "mp": 118, 
        "st": 15
    }
}, 
{
    "name": "Gucumatz",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Ice, 2], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 27, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Heat Wave", 0], 
        ["Ice Breath", 29], 
        ["Media", 30], 
        ["Rakunda", 0], 
        ["Wind Breath", 28]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 30, 
        "hp": 240, 
        "lu": 38, 
        "ma": 26, 
        "mp": 128, 
        "st": 30
    }
}, 
{
    "name": "Guedhe",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, 4], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["mute", "wk"]
    ], 
    "level": 63, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "nu"]
    ], 
    "skills": [
        ["Amrita", 0], 
        ["Dark Pleroma", 65], 
        ["Mudoon", 0], 
        ["Samarecarm", 64], 
        ["Smile Charge", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 56, 
        "hp": 404, 
        "lu": 76, 
        "ma": 96, 
        "mp": 373, 
        "st": 43
    }
}, 
{
    "name": "Gui Xian",
    "affinities": [
        [SkillElement.Fire, -7], 
        [SkillElement.Ice, 5], 
        [SkillElement.Support, 2]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 60, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Fang Breaker", 0], 
        ["High Ice Pleroma", 63], 
        ["Rakukaja", 61]
    ], 
    "stats": {
        "ag": 57, 
        "dx": 49, 
        "hp": 650, 
        "lu": 72, 
        "ma": 63, 
        "mp": 236, 
        "st": 95
    }
}, 
{
    "name": "Gurr",
    "affinities": [
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["sick", "rs"]
    ], 
    "level": 42, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Axel Claw", 0], 
        ["Mazanma", 43], 
        ["Nihil Claw", 44], 
        ["Wind Breath", 0]
    ], 
    "stats": {
        "ag": 62, 
        "dx": 44, 
        "hp": 340, 
        "lu": 55, 
        "ma": 37, 
        "mp": 180, 
        "st": 44
    }
}, 
{
    "name": "Hachiman",
    "affinities": [
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 75, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rp"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Berserker God", 76], 
        ["Holy Wrath", 0], 
        ["Life Surge", 77], 
        ["Maziodyne", 0], 
        ["Tetrakarn", 0]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 70, 
        "hp": 726, 
        "lu": 97, 
        "ma": 50, 
        "mp": 244, 
        "st": 111
    }
}, 
{
    "name": "Hagen",
    "affinities": [
        [SkillElement.Gun, 3], 
        [SkillElement.Phys, 3]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 56, 
    "race": "Famed", 
    "resists": [], 
    "skills": [
        ["Bloody Glee", 58], 
        ["Grand Tack", 57], 
        ["Hades Blast", 0], 
        ["Hellish Mask", 0], 
        ["Loyalty Slash", 0]
    ], 
    "stats": {
        "ag": 67, 
        "dx": 54, 
        "hp": 615, 
        "lu": 90, 
        "ma": 39, 
        "mp": 121, 
        "st": 86
    }
}, 
{
    "name": "Hairy Jack",
    "affinities": [
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["charm", "wk"]
    ], 
    "level": 30, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Axel Claw", 31], 
        ["Frenzied Chomp", 0], 
        ["Retaliate", 32], 
        ["Sukunda", 0]
    ], 
    "stats": {
        "ag": 38, 
        "dx": 32, 
        "hp": 328, 
        "lu": 38, 
        "ma": 23, 
        "mp": 81, 
        "st": 50
    }
}, 
{
    "name": "Halphas",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 1], 
        [SkillElement.Support, 5]
    ], 
    "level": 24, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Fatal Sword", 26], 
        ["Heat Wave", 0], 
        ["Rakukaja", 25], 
        ["Tarukaja", 0]
    ], 
    "stats": {
        "ag": 37, 
        "dx": 28, 
        "hp": 256, 
        "lu": 30, 
        "ma": 26, 
        "mp": 118, 
        "st": 33
    }
}, 
{
    "name": "Hamsa",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 1], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 10, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Attack Knowhow", 0], 
        ["Dia", 11], 
        ["Hama", 12], 
        ["Zio", 0]
    ], 
    "stats": {
        "ag": 20, 
        "dx": 15, 
        "hp": 137, 
        "lu": 18, 
        "ma": 13, 
        "mp": 75, 
        "st": 15
    }
}, 
{
    "name": "Hanuman",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["sick", "rs"]
    ], 
    "level": 66, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Ally Retaliate", 68], 
        ["Mazandyne", 0], 
        ["Power Punch", 0], 
        ["Rakunda", 67]
    ], 
    "stats": {
        "ag": 66, 
        "dx": 62, 
        "hp": 630, 
        "lu": 76, 
        "ma": 45, 
        "mp": 212, 
        "st": 100
    }
}, 
{
    "name": "Haoma",
    "affinities": [
        [SkillElement.Fire, -4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 54, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Amrita", 0], 
        ["Blast Arrow", 55], 
        ["Fog Breath", 0], 
        ["Tetraja", 56]
    ], 
    "stats": {
        "ag": 60, 
        "dx": 81, 
        "hp": 486, 
        "lu": 55, 
        "ma": 68, 
        "mp": 251, 
        "st": 42
    }
}, 
{
    "name": "Hare of Inaba",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, -2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "level": 38, 
    "race": "Food", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Media", 40], 
        ["Recarm", 41], 
        ["Sukukaja", 0], 
        ["Trafuri", 39]
    ], 
    "stats": {
        "ag": 57, 
        "dx": 40, 
        "hp": 313, 
        "lu": 51, 
        "ma": 34, 
        "mp": 167, 
        "st": 40
    }
}, 
{
    "name": "Hariti",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, -1], 
        [SkillElement.Light, 1], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 36, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Dark, "rs"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Energy Drain", 39], 
        ["Lullaby", 0], 
        ["Recarm", 37]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 35, 
        "hp": 252, 
        "lu": 46, 
        "ma": 68, 
        "mp": 259, 
        "st": 27
    }
}, 
{
    "name": "Harpy",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "level": 35, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Bind Voice", 0], 
        ["Force Pleroma", 36], 
        ["Posumudi", 0], 
        ["Sukunda", 37], 
        ["Zanma", 0]
    ], 
    "stats": {
        "ag": 53, 
        "dx": 38, 
        "hp": 293, 
        "lu": 47, 
        "ma": 32, 
        "mp": 156, 
        "st": 38
    }
}, 
{
    "name": "Hathor",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 1], 
        [SkillElement.Phys, -4], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 1]
    ], 
    "level": 18, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "wk"]
    ], 
    "skills": [
        ["Patra", 0], 
        ["Posumudi", 19], 
        ["Rakunda", 20], 
        ["Spring of Life", 0], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 35, 
        "dx": 22, 
        "hp": 200, 
        "lu": 28, 
        "ma": 26, 
        "mp": 127, 
        "st": 22
    }
}, 
{
    "name": "Heimdall",
    "affinities": [
        [SkillElement.Ailment, -4], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 4], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["mute", "wk"], 
        ["panic", "wk"]
    ], 
    "level": 73, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Dekunda", 0], 
        ["High Force Pleroma", 76], 
        ["Life Aid", 74], 
        ["Mana Aid", 75], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 74, 
        "hp": 574, 
        "lu": 82, 
        "ma": 94, 
        "mp": 301, 
        "st": 74
    }
}, 
{
    "name": "Hekatoncheires",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, -2], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["panic", "rs"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 68, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Bloody Glee", 72], 
        ["Hades Blast", 0], 
        ["Life Surge", 71], 
        ["Panic Voice", 0]
    ], 
    "stats": {
        "ag": 67, 
        "dx": 64, 
        "hp": 647, 
        "lu": 78, 
        "ma": 46, 
        "mp": 196, 
        "st": 103
    }
}, 
{
    "name": "Hel",
    "affinities": [
        [SkillElement.Dark, 4], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 4]
    ], 
    "level": 43, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 45], 
        ["Bufula", 0], 
        ["Mabufula", 0], 
        ["Mamudo", 0], 
        ["Sabbatma", 44]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 40, 
        "hp": 352, 
        "lu": 54, 
        "ma": 68, 
        "mp": 214, 
        "st": 31
    }
}, 
{
    "name": "Heqet",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 1], 
        [SkillElement.Force, -3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["poison", "nu"]
    ], 
    "evolves": "Dzelarhons", 
    "level": 13, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Healing Knowhow", 0], 
        ["Mazio", 15], 
        ["Posumudi", 14], 
        ["Zio", 0]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 18, 
        "hp": 154, 
        "lu": 17, 
        "ma": 19, 
        "mp": 72, 
        "st": 20
    }
}, 
{
    "name": "High Pixie",
    "affinities": [
        [SkillElement.Elec, 5]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["mute", "nu"], 
        ["panic", "nu"]
    ], 
    "level": 29, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Force, "rs"]
    ], 
    "skills": [
        ["Elec Pleroma", 31], 
        ["Healing Knowhow", 30], 
        ["Makajam", 0], 
        ["Mazionga", 0]
    ], 
    "stats": {
        "ag": 36, 
        "dx": 32, 
        "hp": 213, 
        "lu": 39, 
        "ma": 48, 
        "mp": 207, 
        "st": 23
    }
}, 
{
    "name": "Hitokoto-Nushi",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -2], 
        [SkillElement.Light, 3]
    ], 
    "level": 49, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "wk"]
    ], 
    "skills": [
        ["Dekunda", 0], 
        ["Mahamaon", 0], 
        ["Purple Smoke", 50], 
        ["Tetraja", 51]
    ], 
    "stats": {
        "ag": 60, 
        "dx": 48, 
        "hp": 375, 
        "lu": 64, 
        "ma": 86, 
        "mp": 339, 
        "st": 38
    }
}, 
{
    "name": "Hooligan",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Support, -1]
    ], 
    "attack": "Gun x2, 1 enemy", 
    "level": 10, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Attack Knowhow", 12], 
        ["Madness Needle", 0], 
        ["Toxic Sting", 11]
    ], 
    "stats": {
        "ag": 17, 
        "dx": 22, 
        "hp": 180, 
        "lu": 15, 
        "ma": 13, 
        "mp": 57, 
        "st": 15
    }
}, 
{
    "name": "Horkos",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 26, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Counter", 28], 
        ["Critical Wave", 0], 
        ["Endure", 30], 
        ["Megaton Press", 28]
    ], 
    "stats": {
        "ag": 27, 
        "dx": 26, 
        "hp": 364, 
        "lu": 34, 
        "ma": 19, 
        "mp": 91, 
        "st": 44
    }
}, 
{
    "name": "Hresvelgr",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -6], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Support, -2]
    ], 
    "level": 70, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "ab"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Mazandyne", 73], 
        ["Nihil Claw", 71], 
        ["Pandemic Bomb", 0], 
        ["Wind Breath", 0]
    ], 
    "stats": {
        "ag": 98, 
        "dx": 69, 
        "hp": 526, 
        "lu": 87, 
        "ma": 83, 
        "mp": 278, 
        "st": 59
    }
}, 
{
    "name": "Hsing-Hsing",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["panic", "rs"]
    ], 
    "level": 48, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Beastly Reaction", 50], 
        ["Binding Claw", 0], 
        ["Healing Knowhow", 0], 
        ["Sukukaja", 0], 
        ["Taunt", 49]
    ], 
    "stats": {
        "ag": 70, 
        "dx": 44, 
        "hp": 360, 
        "lu": 62, 
        "ma": 32, 
        "mp": 171, 
        "st": 72
    }
}, 
{
    "name": "Hua Po",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 2]
    ], 
    "level": 12, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Maragi", 15], 
        ["Patra", 13], 
        ["Posumudi", 14]
    ], 
    "stats": {
        "ag": 20, 
        "dx": 17, 
        "hp": 143, 
        "lu": 18, 
        "ma": 27, 
        "mp": 101, 
        "st": 12
    }
}, 
{
    "name": "Huang Di",
    "affinities": [
        [SkillElement.Almighty, 4], 
        [SkillElement.Gun, 4], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, 4]
    ], 
    "level": 86, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Great Logos", 87], 
        ["Hades Blast", 0], 
        ["Repel Light", 89], 
        ["Riot Gun", 0], 
        ["Salvation", 0], 
        ["Victory Cry", 88]
    ], 
    "stats": {
        "ag": 94, 
        "dx": 84, 
        "hp": 695, 
        "lu": 99, 
        "ma": 107, 
        "mp": 322, 
        "st": 84
    }
}, 
{
    "name": "Huang Long",
    "affinities": [
        [SkillElement.Almighty, 3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 78, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Luster Candy", 80], 
        ["Megidolaon", 0], 
        ["Samarecarm", 79], 
        ["Victory Cry", 0]
    ], 
    "stats": {
        "ag": 93, 
        "dx": 79, 
        "hp": 609, 
        "lu": 80, 
        "ma": 83, 
        "mp": 277, 
        "st": 85
    }
}, 
{
    "name": "Huoniao",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, 4], 
        [SkillElement.Gun, -3], 
        [SkillElement.Ice, -5]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["mute", "wk"], 
        ["poison", "rs"]
    ], 
    "level": 65, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Fire, "rp"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agidyne", 66], 
        ["Concentrate", 67], 
        ["Fire Breath", 0], 
        ["Sukukaja", 0]
    ], 
    "stats": {
        "ag": 65, 
        "dx": 58, 
        "hp": 415, 
        "lu": 78, 
        "ma": 99, 
        "mp": 343, 
        "st": 44
    }
}, 
{
    "name": "Ictinike",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, 1], 
        [SkillElement.Force, 1], 
        [SkillElement.Gun, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "level": 18, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Damascus Claw", 0], 
        ["Fang Breaker", 0], 
        ["Resist Force", 20], 
        ["Scratch Dance", 19]
    ], 
    "stats": {
        "ag": 24, 
        "dx": 24, 
        "hp": 247, 
        "lu": 24, 
        "ma": 14, 
        "mp": 71, 
        "st": 31
    }
}, 
{
    "name": "Illuyanka",
    "affinities": [
        [SkillElement.Ailment, -4], 
        [SkillElement.Force, 2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, 1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 47, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Draconic Reaction", 49], 
        ["Mazanma", 48], 
        ["Megaton Press", 0]
    ], 
    "stats": {
        "ag": 40, 
        "dx": 53, 
        "hp": 592, 
        "lu": 64, 
        "ma": 64, 
        "mp": 179, 
        "st": 60
    }
}, 
{
    "name": "Inanna",
    "affinities": [
        [SkillElement.Elec, 6], 
        [SkillElement.Fire, 6], 
        [SkillElement.Force, 6], 
        [SkillElement.Ice, 6], 
        [SkillElement.Phys, -4], 
        [SkillElement.Support, 3]
    ], 
    "level": 91, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Concentrate", 92], 
        ["Debilitate", 93], 
        ["Raging Blizzard", 0], 
        ["Raging Hellfire", 0], 
        ["Raging Lightning", 0], 
        ["Raging Tempest", 0]
    ], 
    "stats": {
        "ag": 98, 
        "dx": 88, 
        "hp": 570, 
        "lu": 121, 
        "ma": 150, 
        "mp": 562, 
        "st": 68
    }
}, 
{
    "name": "Incubus",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Elec, -4], 
        [SkillElement.Force, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "rs"]
    ], 
    "evolves": "Succubus", 
    "level": 23, 
    "race": "Night", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dream Needle", 0], 
        ["Force Pleroma", 25], 
        ["Marin Karin", 0], 
        ["Zanma", 24]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 40, 
        "hp": 247, 
        "lu": 27, 
        "ma": 22, 
        "mp": 93, 
        "st": 26
    }
}, 
{
    "name": "Inferno",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 4], 
        [SkillElement.Ice, -8], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 31, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Agilao", 32], 
        ["Fire Breath", 0], 
        ["Heat Wave", 0], 
        ["Maragion", 34]
    ], 
    "stats": {
        "ag": 34, 
        "dx": 28, 
        "hp": 325, 
        "lu": 39, 
        "ma": 46, 
        "mp": 188, 
        "st": 24
    }
}, 
{
    "name": "Inti",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, 2]
    ], 
    "level": 34, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Fire Pleroma", 0], 
        ["Ice Pleroma", 36], 
        ["Mabufula", 35], 
        ["Maragion", 0]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 33, 
        "hp": 261, 
        "lu": 51, 
        "ma": 55, 
        "mp": 231, 
        "st": 26
    }
}, 
{
    "name": "Inugami",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 20, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Fire Breath", 0], 
        ["Maragi", 21], 
        ["Panic Voice", 22], 
        ["Rakunda", 0]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 24, 
        "hp": 193, 
        "lu": 30, 
        "ma": 21, 
        "mp": 104, 
        "st": 24
    }
}, 
{
    "name": "Ippon-Datara",
    "affinities": [
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -1]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 16, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Mudo", 0], 
        ["Oni-Kagura", 17],
        ["Power Punch", 0]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 20, 
        "hp": 230, 
        "lu": 23, 
        "ma": 15, 
        "mp": 55, 
        "st": 33
    }
}, 
{
    "name": "Ishtar",
    "affinities": [
        [SkillElement.Almighty, 3], 
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -2], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["charm", "rs"]
    ], 
    "level": 44, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Concentrate", 46], 
        ["Hamaon", 0], 
        ["Judgment", 0], 
        ["Samarecarm", 47]
    ], 
    "stats": {
        "ag": 46, 
        "dx": 40, 
        "hp": 337, 
        "lu": 57, 
        "ma": 90, 
        "mp": 317, 
        "st": 29
    }
}, 
{
    "name": "Isis",
    "affinities": [
        [SkillElement.Force, 4], 
        [SkillElement.Phys, -4], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 59, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "rs"]
    ], 
    "skills": [
        ["Mana Surge", 61], 
        ["Mazandyne", 60], 
        ["Samarecarm", 0], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 87, 
        "dx": 57, 
        "hp": 493, 
        "lu": 79, 
        "ma": 80, 
        "mp": 309, 
        "st": 56
    }
}, 
{
    "name": "Israfel",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, 3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 68, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "ab"]
    ], 
    "skills": [
        ["Ally Retaliate", 71], 
        ["Bufudyne", 0], 
        ["Judgment", 70], 
        ["Mahamaon", 69], 
        ["Panic Voice", 0]
    ], 
    "stats": {
        "ag": 83, 
        "dx": 60, 
        "hp": 532, 
        "lu": 85, 
        "ma": 108, 
        "mp": 356, 
        "st": 46
    }
}, 
{
    "name": "Itsumade",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3], 
        [SkillElement.Support, 3]
    ], 
    "level": 19, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Makakaja", 0], 
        ["Mazan", 0], 
        ["Mudo", 20], 
        ["Rakunda", 21]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 23, 
        "hp": 187, 
        "lu": 29, 
        "ma": 20, 
        "mp": 101, 
        "st": 23
    }
}, 
{
    "name": "Ixtab",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Dark, 2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["daze", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 76, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "rp"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Eternal Rest", 0], 
        ["Lullaby", 0], 
        ["Null Force", 78], 
        ["Samarecarm", 77]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 80, 
        "hp": 545, 
        "lu": 82, 
        "ma": 90, 
        "mp": 320, 
        "st": 72
    }
}, 
{
    "name": "Izanami",
    "affinities": [
        [SkillElement.Dark, 5], 
        [SkillElement.Elec, 6], 
        [SkillElement.Fire, -6], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 82, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Concentrate", 0], 
        ["Dark Grudge", 0], 
        ["Repel Ice", 85], 
        ["Spring of Life", 83], 
        ["Thunder Gods", 0]
    ], 
    "stats": {
        "ag": 80, 
        "dx": 60, 
        "hp": 448, 
        "lu": 100, 
        "ma": 140, 
        "mp": 463, 
        "st": 50
    }
}, 
{
    "name": "Jack Frost",
    "affinities": [
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 4]
    ], 
    "evolves": "Wendigo", 
    "level": 20, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Hama", 21], 
        ["Ice Pleroma", 24], 
        ["Mabufu", 0]
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
    "name": "Jack the Ripper",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["sick", "rs"]
    ], 
    "level": 7, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Light Life Aid", 10], 
        ["Mudo", 9], 
        ["Tetanus Cut", 0]
    ], 
    "stats": {
        "ag": 16, 
        "dx": 12, 
        "hp": 107, 
        "lu": 15, 
        "ma": 11, 
        "mp": 59, 
        "st": 12
    }
}, 
{
    "name": "Jarilo",
    "affinities": [
        [SkillElement.Gun, 3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["poison", "wk"]
    ], 
    "level": 61, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "nu"]
    ], 
    "skills": [
        ["Diarahan", 0], 
        ["Grand Tack", 0], 
        ["Heaven's Bow", 63],
        ["Trafuri", 62]
    ], 
    "stats": {
        "ag": 71, 
        "dx": 93, 
        "hp": 559, 
        "lu": 61, 
        "ma": 48, 
        "mp": 201, 
        "st": 78
    }
}, 
{
    "name": "Jeanne D'Arc",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Dark, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Light, 2], 
        [SkillElement.Recovery, 4], 
        [SkillElement.Support, 2]
    ], 
    "level": 42, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["High Heal Pleroma", 0], 
        ["Holy Wrath", 44], 
        ["Mediarama", 0], 
        ["Samarecarm", 45], 
        ["Silent Prayer", 0]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 39, 
        "hp": 361, 
        "lu": 53, 
        "ma": 66, 
        "mp": 282, 
        "st": 50
    }
}, 
{
    "name": "Jikokuten",
    "affinities": [
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "level": 65, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Endure", 67], 
        ["Fog Breath", 0], 
        ["Hades Blast", 66], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 71, 
        "dx": 79, 
        "hp": 628, 
        "lu": 68, 
        "ma": 62, 
        "mp": 276, 
        "st": 84
    }
}, 
{
    "name": "Jueyuan",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 1], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "wk"]
    ], 
    "level": 26, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Agilao", 0], 
        ["Poison Claw", 0], 
        ["Posumudi", 27]
    ], 
    "stats": {
        "ag": 34, 
        "dx": 34, 
        "hp": 245, 
        "lu": 29, 
        "ma": 29, 
        "mp": 113, 
        "st": 34
    }
}, 
{
    "name": "Kabuso",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["panic", "rs"]
    ], 
    "evolves": "Senri", 
    "level": 6, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Dia", 8], 
        ["Poison Claw", 7]
    ], 
    "stats": {
        "ag": 12, 
        "dx": 11, 
        "hp": 84, 
        "lu": 13, 
        "ma": 16, 
        "mp": 73, 
        "st": 9
    }
}, 
{
    "name": "Kaiming Shou",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 2]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 40, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Dekaja", 0], 
        ["Magaon", 41], 
        ["Mortal Jihad", 0], 
        ["Resist Phys", 42]
    ], 
    "stats": {
        "ag": 52, 
        "dx": 38, 
        "hp": 462, 
        "lu": 59, 
        "ma": 27, 
        "mp": 176, 
        "st": 66
    }
}, 
{
    "name": "Kaiwan",
    "affinities": [
        [SkillElement.Dark, 2], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["mute", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 39, 
    "race": "Night", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Dark Pleroma", 42], 
        ["Mudoon", 0], 
        ["Sukukaja", 0]
    ], 
    "stats": {
        "ag": 58, 
        "dx": 41, 
        "hp": 350, 
        "lu": 52, 
        "ma": 35, 
        "mp": 170, 
        "st": 41
    }
}, 
{
    "name": "Kali",
    "affinities": [
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["panic", "wk"]
    ], 
    "attack": "Phys x2-3, 1 enemy", 
    "level": 75, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Force, "ab"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dark Sword", 0], 
        ["Life Surge", 76], 
        ["Mist Rush", 0], 
        ["Phys Pleroma", 77]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 70, 
        "hp": 706, 
        "lu": 85, 
        "ma": 50, 
        "mp": 214, 
        "st": 113
    }
}, 
{
    "name": "Kama",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 4], 
        [SkillElement.Support, 3]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 72, 
    "race": "Enigma", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "ab"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Dekaja", 74], 
        ["Dekunda", 73], 
        ["Heaven's Bow", 0],
        ["Madness Needle", 0]
    ], 
    "stats": {
        "ag": 101, 
        "dx": 71, 
        "hp": 539, 
        "lu": 90, 
        "ma": 60, 
        "mp": 284, 
        "st": 71
    }
}, 
{
    "name": "Kamapua'a",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sleep", "wk"]
    ], 
    "level": 23, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Media", 0], 
        ["Oni-Kagura", 0],
        ["Posumudi", 24], 
        ["Tarunda", 25]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 26, 
        "hp": 299, 
        "lu": 28, 
        "ma": 17, 
        "mp": 103, 
        "st": 46
    }
}, 
{
    "name": "Kanbari",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 27, 
    "race": "Enigma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "wk"]
    ], 
    "skills": [
        ["Chakra Walk", 29], 
        ["Hamaon", 28], 
        ["Megaton Press", 0], 
        ["Pandemic Bomb", 0]
    ], 
    "stats": {
        "ag": 35, 
        "dx": 50, 
        "hp": 278, 
        "lu": 35, 
        "ma": 24, 
        "mp": 105, 
        "st": 29
    }
}, 
{
    "name": "Kangiten",
    "affinities": [
        [SkillElement.Fire, 1], 
        [SkillElement.Gun, 4], 
        [SkillElement.Ice, -1], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 80, 
    "race": "Enigma", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Invitation", 0], 
        ["Null Ice", 82], 
        ["Riot Gun", 81], 
        ["Samarecarm", 0]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 70, 
        "hp": 499, 
        "lu": 95, 
        "ma": 120, 
        "mp": 411, 
        "st": 53
    }
}, 
{
    "name": "Kanseiteikun",
    "affinities": [
        [SkillElement.Phys, 4]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 67, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Ally Retaliate", 68], 
        ["Berserker God", 0], 
        ["Critical Eye", 0], 
        ["Estoma", 0], 
        ["Phys Pleroma", 69]
    ], 
    "stats": {
        "ag": 81, 
        "dx": 67, 
        "hp": 669, 
        "lu": 84, 
        "ma": 59, 
        "mp": 241, 
        "st": 107
    }
}, 
{
    "name": "Karasu Tengu",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Force, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 24, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Agilao", 0], 
        ["Mahama", 27], 
        ["Maragi", 25], 
        ["Pandemic Bomb", 0], 
        ["Sukukaja", 26]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 28, 
        "hp": 220, 
        "lu": 35, 
        "ma": 24, 
        "mp": 118, 
        "st": 28
    }
}, 
{
    "name": "Kartikeya",
    "affinities": [
        [SkillElement.Gun, 4], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, -3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 78, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Charge", 79], 
        ["Debilitate", 0], 
        ["Heaven's Bow", 0],
        ["High Gun Pleroma", 81]
    ], 
    "stats": {
        "ag": 109, 
        "dx": 81, 
        "hp": 629, 
        "lu": 97, 
        "ma": 54, 
        "mp": 325, 
        "st": 66
    }
}, 
{
    "name": "Kaso",
    "affinities": [
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -3]
    ], 
    "level": 10, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Beastly Reaction", 13], 
        ["Sukukaja", 0]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 14, 
        "hp": 107, 
        "lu": 13, 
        "ma": 19, 
        "mp": 92, 
        "st": 11
    }
}, 
{
    "name": "Katakirauwa",
    "affinities": [
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -2], 
        [SkillElement.Force, -2], 
        [SkillElement.Ice, -2], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["sick", "rs"]
    ], 
    "level": 1, 
    "race": "Food", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "wk"]
    ], 
    "skills": [
        ["Bouncing Claw", 0], 
        ["Counter", 3], 
        ["Lunge", 2]
    ], 
    "stats": {
        "ag": 9, 
        "dx": 6, 
        "hp": 70, 
        "lu": 7, 
        "ma": 6, 
        "mp": 34, 
        "st": 7
    }
}, 
{
    "name": "Kazfiel",
    "affinities": [
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, -5], 
        [SkillElement.Force, 5], 
        [SkillElement.Ice, 2], 
        [SkillElement.Light, 3], 
        [SkillElement.Phys, 3]
    ], 
    "level": 82, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rp"]
    ], 
    "skills": [
        ["Dark Sword", 0], 
        ["Deadly Wind", 84], 
        ["Null Elec", 85], 
        ["Will of Wind", 83], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 114, 
        "dx": 65, 
        "hp": 586, 
        "lu": 96, 
        "ma": 87, 
        "mp": 268, 
        "st": 105
    }
}, 
{
    "name": "Kelpie",
    "affinities": [], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "evolves": "Valkyrie", 
    "level": 31, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Tarunda", 0], 
        ["Trafuri", 37]
    ], 
    "stats": {
        "ag": 50, 
        "dx": 39, 
        "hp": 322, 
        "lu": 42, 
        "ma": 39, 
        "mp": 144, 
        "st": 42
    }
}, 
{
    "name": "Kikimora",
    "affinities": [
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 28, 
    "race": "Night", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Axel Claw", 0], 
        ["Diarama", 30], 
        ["Heal Pleroma", 31], 
        ["Rakunda", 0]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 28, 
        "hp": 208, 
        "lu": 38, 
        "ma": 47, 
        "mp": 173, 
        "st": 22
    }
}, 
{
    "name": "Kikuri-Hime",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "rs"]
    ], 
    "level": 36, 
    "race": "Nymph", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Me Patra", 37], 
        ["Recarm", 38], 
        ["Sexy Dance", 0], 
        ["Tetraja", 39]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 35, 
        "hp": 252, 
        "lu": 43, 
        "ma": 58, 
        "mp": 239, 
        "st": 27
    }
}, 
{
    "name": "Kin-Ki",
    "affinities": [
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 43, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Charge", 44], 
        ["Mortal Jihad", 0], 
        ["Power Punch", 0], 
        ["Retaliate", 46]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 38, 
        "hp": 537, 
        "lu": 52, 
        "ma": 28, 
        "mp": 133, 
        "st": 76
    }
}, 
{
    "name": "King Frost",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -6], 
        [SkillElement.Ice, 4], 
        [SkillElement.Support, 1]
    ], 
    "level": 30, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Critical Eye", 34], 
        ["Ice Breath", 31], 
        ["Ice Pleroma", 0], 
        ["King Bufula", 0], 
        ["Megaton Press", 32]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 30, 
        "hp": 319, 
        "lu": 48, 
        "ma": 58, 
        "mp": 233, 
        "st": 23
    }
}, 
{
    "name": "Kingu",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "level": 39, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Panic Voice", 41], 
        ["Recarmdra", 40], 
        ["Shock", 0], 
        ["Zanma", 0]
    ], 
    "stats": {
        "ag": 58, 
        "dx": 41, 
        "hp": 320, 
        "lu": 52, 
        "ma": 35, 
        "mp": 170, 
        "st": 41
    }
}, 
{
    "name": "Kinmamon",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 60, 
    "race": "Enigma", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Mediarama", 0], 
        ["Megidola", 61], 
        ["Null Mind", 0]
    ], 
    "stats": {
        "ag": 91, 
        "dx": 51, 
        "hp": 603, 
        "lu": 79, 
        "ma": 73, 
        "mp": 220, 
        "st": 41
    }
}, 
{
    "name": "Knocker",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 1]
    ], 
    "level": 17, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"]
    ], 
    "skills": [
        ["Magaon", 18], 
        ["Rakukaja", 0], 
        ["Zanma", 0]
    ], 
    "stats": {
        "ag": 23, 
        "dx": 323, 
        "hp": 182, 
        "lu": 23, 
        "ma": 23, 
        "mp": 85, 
        "st": 23
    }
}, 
{
    "name": "Koppa Tengu",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "evolves": "Karasu Tengu", 
    "level": 16, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Bad Company", 17], 
        ["Sukukaja", 0], 
        ["Zanma", 0]
    ], 
    "stats": {
        "ag": 23, 
        "dx": 30, 
        "hp": 171, 
        "lu": 21, 
        "ma": 17, 
        "mp": 133, 
        "st": 20
    }
}, 
{
    "name": "Koumokuten",
    "affinities": [
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "level": 60, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Mortal Jihad", 0], 
        ["Sukukaja", 61], 
        ["Titanomachia", 62], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 55, 
        "dx": 58, 
        "hp": 710, 
        "lu": 65, 
        "ma": 64, 
        "mp": 176, 
        "st": 105
    }
}, 
{
    "name": "Kresnik",
    "affinities": [
        [SkillElement.Gun, 3], 
        [SkillElement.Light, 3]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 56, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Grand Tack", 0], 
        ["Gun Pleroma", 59], 
        ["Hamaon", 0], 
        ["Heaven's Bow", 58],
        ["Mana Aid", 0], 
        ["Sukunda", 57]
    ], 
    "stats": {
        "ag": 65, 
        "dx": 83, 
        "hp": 601, 
        "lu": 54, 
        "ma": 65, 
        "mp": 167, 
        "st": 54
    }
}, 
{
    "name": "Krishna",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 5], 
        [SkillElement.Force, 5], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 87, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Combat Tara", 89], 
        ["Deadly Wind", 88], 
        ["Drain Dark", 91], 
        ["Dream Raga", 0], 
        ["Salvation", 90], 
        ["Venomous Raga", 0], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 113, 
        "dx": 89, 
        "hp": 632, 
        "lu": 123, 
        "ma": 133, 
        "mp": 495, 
        "st": 88
    }
}, 
{
    "name": "Kuda",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -3], 
        [SkillElement.Ice, 3]
    ], 
    "level": 27, 
    "race": "Food", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Blight", 28], 
        ["Mabufula", 30], 
        ["Sukukaja", 0], 
        ["Tetanus Cut", 0]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 30, 
        "hp": 240, 
        "lu": 38, 
        "ma": 26, 
        "mp": 128, 
        "st": 30
    }
}, 
{
    "name": "Kudlak",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Dark, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "nu"]
    ], 
    "level": 66, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Death's Door", 68],
        ["Energy Drain", 0], 
        ["Pandemic Bomb", 67], 
        ["Tarukaja", 0]
    ], 
    "stats": {
        "ag": 73, 
        "dx": 72, 
        "hp": 605, 
        "lu": 66, 
        "ma": 81, 
        "mp": 239, 
        "st": 75
    }
}, 
{
    "name": "Kukunochi",
    "affinities": [
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 44, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Energy Drain", 45], 
        ["Makakaja", 0], 
        ["Tetrakarn", 0]
    ], 
    "stats": {
        "ag": 51, 
        "dx": 42, 
        "hp": 347, 
        "lu": 68, 
        "ma": 69, 
        "mp": 297, 
        "st": 35
    }
}, 
{
    "name": "Kurama Tengu",
    "affinities": [
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 4], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 2]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 43, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Mahama", 0], 
        ["Mazanma", 0], 
        ["Trafuri", 44], 
        ["Zandyne", 45]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 42, 
        "hp": 376, 
        "lu": 51, 
        "ma": 48, 
        "mp": 213, 
        "st": 41
    }
}, 
{
    "name": "Kushinada-Hime",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 40, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Heal Pleroma", 42], 
        ["Light Pleroma", 41], 
        ["Mahama", 0], 
        ["Media", 0], 
        ["Silent Prayer", 43]
    ], 
    "stats": {
        "ag": 57, 
        "dx": 39, 
        "hp": 275, 
        "lu": 50, 
        "ma": 68, 
        "mp": 328, 
        "st": 30
    }
}, 
{
    "name": "Kwancha",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, 1], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["poison", "rs"], 
        ["sick", "nu"]
    ], 
    "level": 22, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Bind Voice", 0], 
        ["Mahama", 24], 
        ["Pandemic Bomb", 23], 
        ["Poison Claw", 0]
    ], 
    "stats": {
        "ag": 26, 
        "dx": 23, 
        "hp": 174, 
        "lu": 31, 
        "ma": 38, 
        "mp": 145, 
        "st": 18
    }
}, 
{
    "name": "Lachesis",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Support, 4]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "rs"], 
        ["mute", "rs"], 
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 41, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Concentrate", 42], 
        ["Makajam", 0], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 52, 
        "dx": 45, 
        "hp": 350, 
        "lu": 42, 
        "ma": 44, 
        "mp": 200, 
        "st": 50
    }
}, 
{
    "name": "Lailah",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 54, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Light Pleroma", 0], 
        ["Mahamaon", 0], 
        ["Makakaja", 55], 
        ["Mediarama", 0], 
        ["Samarecarm", 56]
    ], 
    "stats": {
        "ag": 55, 
        "dx": 49, 
        "hp": 353, 
        "lu": 66, 
        "ma": 93, 
        "mp": 342, 
        "st": 38
    }
}, 
{
    "name": "Lakshmi",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 3], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 77, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Floral Gust", 0], 
        ["Mana Surge", 79], 
        ["Mediarahan", 0], 
        ["Sexy Dance", 78]
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
    "name": "Lanling Wang",
    "affinities": [
        [SkillElement.Gun, 2], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 49, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "nu"]
    ], 
    "skills": [
        ["Ally Counter", 0], 
        ["Berserker God", 46], 
        ["Javelin Rain", 0], 
        ["Resist Phys", 44]
    ], 
    "stats": {
        "ag": 61, 
        "dx": 50, 
        "hp": 538, 
        "lu": 58, 
        "ma": 35, 
        "mp": 198, 
        "st": 79
    }
}, 
{
    "name": "Leanan Sidhe",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, -1], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "level": 9, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Dia", 0], 
        ["Heal Pleroma", 14], 
        ["Life Bonus", 10], 
        ["Media", 21]
    ], 
    "stats": {
        "ag": 14, 
        "dx": 13, 
        "hp": 101, 
        "lu": 17, 
        "ma": 20, 
        "mp": 86, 
        "st": 11
    }
}, 
{
    "name": "Legion",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -1]
    ], 
    "level": 4, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Dream Needle", 0], 
        ["Lunge", 0], 
        ["Zan", 6]
    ], 
    "stats": {
        "ag": 11, 
        "dx": 13, 
        "hp": 101, 
        "lu": 10, 
        "ma": 8, 
        "mp": 40, 
        "st": 9
    }
}, 
{
    "name": "Lham Dearg",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 22, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Critical Wave", 0], 
        ["Light Life Aid", 24], 
        ["Power Punch", 0]
    ], 
    "stats": {
        "ag": 26, 
        "dx": 25, 
        "hp": 261, 
        "lu": 30, 
        "ma": 18, 
        "mp": 80, 
        "st": 38
    }
}, 
{
    "name": "Lilim",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 2], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "rs"]
    ], 
    "level": 33, 
    "race": "Night", 
    "resists": [
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Lullaby", 34], 
        ["Mazanma", 36], 
        ["Sexy Dance", 0], 
        ["Spirit Drain", 0]
    ], 
    "stats": {
        "ag": 36, 
        "dx": 32, 
        "hp": 236, 
        "lu": 43, 
        "ma": 54, 
        "mp": 196, 
        "st": 25
    }
}, 
{
    "name": "Loki",
    "affinities": [
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Force, 3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["charm", "nu"], 
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 58, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Agidyne", 59], 
        ["Bufudyne", 0], 
        ["Cold World", 62], 
        ["Pulinpa", 0], 
        ["Zandyne", 61], 
        ["Ziodyne", 60]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 53, 
        "hp": 416, 
        "lu": 83, 
        "ma": 103, 
        "mp": 401, 
        "st": 43
    }
}, 
{
    "name": "Long",
    "affinities": [
        [SkillElement.Elec, -7], 
        [SkillElement.Force, 5], 
        [SkillElement.Support, 1]
    ], 
    "level": 61, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Acid Breath", 0], 
        ["Draconic Reaction", 62], 
        ["High Force Pleroma", 64], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 89, 
        "dx": 61, 
        "hp": 536, 
        "lu": 73, 
        "ma": 73, 
        "mp": 296, 
        "st": 70
    }
}, 
{
    "name": "Lord Nandou",
    "affinities": [
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "level": 48, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Berserker God", 49], 
        ["Fang Breaker", 0], 
        ["Samarecarm", 50]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 47, 
        "hp": 529, 
        "lu": 60, 
        "ma": 49, 
        "mp": 196, 
        "st": 75
    }
}, 
{
    "name": "Lorelei",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["sleep", "nu"]
    ], 
    "level": 58, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"]
    ], 
    "skills": [
        ["Mabufula", 0], 
        ["Makarakarn", 54], 
        ["Mediarama", 0], 
        ["Panic Voice", 53]
    ], 
    "stats": {
        "ag": 53, 
        "dx": 52, 
        "hp": 366, 
        "lu": 71, 
        "ma": 94, 
        "mp": 341, 
        "st": 40
    }
}, 
{
    "name": "Lucifer",
    "affinities": [
        [SkillElement.Almighty, 5], 
        [SkillElement.Dark, 6], 
        [SkillElement.Gun, 6], 
        [SkillElement.Ice, 6], 
        [SkillElement.Light, -6], 
        [SkillElement.Phys, 6]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "nu"], 
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"], 
        ["sleep", "rs"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 99, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Evil Shine", 0], 
        ["Glacial Blast", 0], 
        ["Hades Blast", 0], 
        ["Myriad Arrows", 0]
    ], 
    "stats": {
        "ag": 110, 
        "dx": 145, 
        "hp": 968, 
        "lu": 116, 
        "ma": 111, 
        "mp": 435, 
        "st": 150
    }
}, 
{
    "name": "Lucifuge",
    "affinities": [
        [SkillElement.Dark, 4], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Support, 2]
    ], 
    "level": 73, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rp"], 
        [SkillElement.Gun, "rp"]
    ], 
    "skills": [
        ["Grand Tack", 74], 
        ["High Dark Pleroma", 76], 
        ["Light Devourer", 0], 
        ["Luster Candy", 0], 
        ["Mazandyne", 75]
    ], 
    "stats": {
        "ag": 72, 
        "dx": 64, 
        "hp": 460, 
        "lu": 87, 
        "ma": 110, 
        "mp": 379, 
        "st": 49
    }
}, 
{
    "name": "Macabre",
    "affinities": [
        [SkillElement.Ailment, 6], 
        [SkillElement.Dark, 1], 
        [SkillElement.Gun, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["panic", "rs"], 
        ["poison", "nu"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 45, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Blight", 0], 
        ["Hellish Mask", 47], 
        ["Magaon", 46], 
        ["Pandemic Bomb", 0]
    ], 
    "stats": {
        "ag": 77, 
        "dx": 44, 
        "hp": 374, 
        "lu": 64, 
        "ma": 32, 
        "mp": 289, 
        "st": 71
    }
}, 
{
    "name": "Mad Gasser",
    "affinities": [
        [SkillElement.Ailment, 6], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 37, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Bind Voice", 0], 
        ["Hellish Mask", 39], 
        ["Pandemic Bomb", 38], 
        ["Poison Breath", 0]
    ], 
    "stats": {
        "ag": 55, 
        "dx": 39, 
        "hp": 306, 
        "lu": 49, 
        "ma": 33, 
        "mp": 163, 
        "st": 39
    }
}, 
{
    "name": "Mahamayuri",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Elec, -6], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, -3], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["sleep", "nu"]
    ], 
    "level": 67, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Diarahan", 0], 
        ["Doping", 70], 
        ["Null Nerve", 68], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 79, 
        "hp": 506, 
        "lu": 80, 
        "ma": 98, 
        "mp": 381, 
        "st": 51
    }
}, 
{
    "name": "Maitreya",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Almighty, 4], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, 2]
    ], 
    "level": 83, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "nu"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["5.67 Billion Hands", 84],
        ["Doping", 86], 
        ["Drain Ice", 85], 
        ["Enlightenment", 0], 
        ["Hades Blast", 0], 
        ["Makajamaon", 0]
    ], 
    "stats": {
        "ag": 94, 
        "dx": 94, 
        "hp": 844, 
        "lu": 95, 
        "ma": 119, 
        "mp": 272, 
        "st": 95
    }
}, 
{
    "name": "Makami",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Recovery, 3]
    ], 
    "level": 33, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Posumudi", 34], 
        ["Recarm", 0], 
        ["Workaholic", 35]
    ], 
    "stats": {
        "ag": 50, 
        "dx": 41, 
        "hp": 320, 
        "lu": 45, 
        "ma": 35, 
        "mp": 169, 
        "st": 36
    }
}, 
{
    "name": "Makara",
    "affinities": [
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, 1], 
        [SkillElement.Support, 1]
    ], 
    "level": 13, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufu", 0], 
        ["Mabufu", 14], 
        ["Tarunda", 17]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 18, 
        "hp": 154, 
        "lu": 19, 
        "ma": 22, 
        "mp": 72, 
        "st": 18
    }
}, 
{
    "name": "Mamedanuki",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Gun, -5]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["panic", "rs"]
    ], 
    "level": 9, 
    "race": "Food", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Frenzied Chomp", 11], 
        ["Lunge", 0], 
        ["Pulinpa", 0]
    ], 
    "stats": {
        "ag": 19, 
        "dx": 14, 
        "hp": 120, 
        "lu": 17, 
        "ma": 12, 
        "mp": 65, 
        "st": 14
    }
}, 
{
    "name": "Mandrake",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "level": 4, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Fire, "wk"]
    ], 
    "skills": [
        ["Patra", 6], 
        ["Poisma", 5], 
        ["Shibaboo", 0]
    ], 
    "stats": {
        "ag": 13, 
        "dx": 8, 
        "hp": 92, 
        "lu": 16, 
        "ma": 8, 
        "mp": 49, 
        "st": 9
    }
}, 
{
    "name": "Manticore",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -5], 
        [SkillElement.Gun, 1], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -1]
    ], 
    "ailments": [
        ["mute", "wk"], 
        ["poison", "nu"]
    ], 
    "level": 45, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Acid Breath", 47], 
        ["Axel Claw", 0], 
        ["Frenzied Chomp", 46], 
        ["Toxic Sting", 0]
    ], 
    "stats": {
        "ag": 73, 
        "dx": 47, 
        "hp": 360, 
        "lu": 59, 
        "ma": 39, 
        "mp": 191, 
        "st": 67
    }
}, 
{
    "name": "Mara",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Ice, -6], 
        [SkillElement.Phys, 5]
    ], 
    "ailments": [
        ["charm", "nu"]
    ], 
    "level": 92, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "ab"], 
        [SkillElement.Gun, "ab"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Charge", 0], 
        ["Dance of Mara", 0], 
        ["Doping", 93], 
        ["Hell Thrust", 0], 
        ["Null Nerve", 94], 
        ["Repel Phys", 95]
    ], 
    "stats": {
        "ag": 90, 
        "dx": 70, 
        "hp": 899, 
        "lu": 110, 
        "ma": 55, 
        "mp": 215, 
        "st": 155
    }
}, 
{
    "name": "Marishiten",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Gun, 4], 
        [SkillElement.Ice, 2], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 75, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Berserker God", 0], 
        ["Makarakarn", 76], 
        ["Megidolaon", 77], 
        ["Myriad Arrows", 0]
    ], 
    "stats": {
        "ag": 81, 
        "dx": 82, 
        "hp": 588, 
        "lu": 78, 
        "ma": 80, 
        "mp": 267, 
        "st": 84
    }
}, 
{
    "name": "Mastema",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Almighty, 4], 
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, -5], 
        [SkillElement.Force, 3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, 4], 
        [SkillElement.Light, 4]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 93, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rp"], 
        [SkillElement.Ice, "rp"], 
        [SkillElement.Light, "rp"]
    ], 
    "skills": [
        ["Ice Age", 95], 
        ["Judgment Light", 94], 
        ["Megidolaon", 0], 
        ["Panic Voice", 0], 
        ["Repel Gun", 96], 
        ["Smile Charge", 0]
    ], 
    "stats": {
        "ag": 90, 
        "dx": 80, 
        "hp": 802, 
        "lu": 109, 
        "ma": 138, 
        "mp": 470, 
        "st": 61
    }
}, 
{
    "name": "Master Therion",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, -5]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["mute", "nu"]
    ], 
    "level": 61, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Concentrate", 62], 
        ["Mabufudyne", 63], 
        ["Makajamaon", 0]
    ], 
    "stats": {
        "ag": 65, 
        "dx": 68, 
        "hp": 490, 
        "lu": 67, 
        "ma": 71, 
        "mp": 223, 
        "st": 64
    }
}, 
{
    "name": "Matador",
    "affinities": [
        [SkillElement.Almighty, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 5]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 87, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Andalusia", 0], 
        ["Dark Sword", 88], 
        ["Hades Blast", 89], 
        ["Phys Pierce", 90], 
        ["Soul Drain", 0]
    ], 
    "stats": {
        "ag": 107, 
        "dx": 89, 
        "hp": 814, 
        "lu": 109, 
        "ma": 81, 
        "mp": 334, 
        "st": 133
    }
}, 
{
    "name": "Maya",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, -5], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "nu"]
    ], 
    "level": 77, 
    "race": "Night", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Makarakarn", 0], 
        ["Mana Surge", 79], 
        ["Megidolaon", 0], 
        ["Null Mind", 80], 
        ["Sexy Dance", 78]
    ], 
    "stats": {
        "ag": 75, 
        "dx": 67, 
        "hp": 722, 
        "lu": 91, 
        "ma": 115, 
        "mp": 398, 
        "st": 51
    }
}, 
{
    "name": "Mayahuel",
    "affinities": [
        [SkillElement.Fire, -4], 
        [SkillElement.Gun, 2], 
        [SkillElement.Light, 2], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, 5]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 34, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "nu"]
    ], 
    "skills": [
        ["High Heal Pleroma", 36], 
        ["Mahamaon", 35], 
        ["Me Patra", 0], 
        ["Media", 0]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 36, 
        "hp": 261, 
        "lu": 47, 
        "ma": 55, 
        "mp": 231, 
        "st": 28
    }
}, 
{
    "name": "Medusa",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -5], 
        [SkillElement.Gun, 3]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 39, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Grand Tack", 41], 
        ["Gun Pleroma", 40], 
        ["Marin Karin", 0], 
        ["Mazionga", 0], 
        ["Snake's Fangs", 0],
        ["Ziodyne", 42]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 69, 
        "hp": 420, 
        "lu": 46, 
        "ma": 57, 
        "mp": 189, 
        "st": 39
    }
}, 
{
    "name": "Melchom",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, 1], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 13, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Dia", 0], 
        ["Maragi", 14], 
        ["Tarukaja", 15]
    ], 
    "stats": {
        "ag": 24, 
        "dx": 18, 
        "hp": 147, 
        "lu": 22, 
        "ma": 15, 
        "mp": 80, 
        "st": 18
    }
}, 
{
    "name": "Mephisto",
    "affinities": [
        [SkillElement.Almighty, 5], 
        [SkillElement.Dark, 8], 
        [SkillElement.Light, -8], 
        [SkillElement.Phys, 6], 
        [SkillElement.Support, 3]
    ], 
    "level": 99, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "nu"]
    ], 
    "skills": [
        ["Dark Pierce", 0], 
        ["Fear Darkness", 0], 
        ["Growing Hate", 0], 
        ["Hades Blast", 0], 
        ["Mamudoon", 0]
    ], 
    "stats": {
        "ag": 113, 
        "dx": 105, 
        "hp": 968, 
        "lu": 116, 
        "ma": 155, 
        "mp": 435, 
        "st": 150
    }
}, 
{
    "name": "Merkabah",
    "affinities": [
        [SkillElement.Almighty, 5], 
        [SkillElement.Dark, -6], 
        [SkillElement.Elec, 6], 
        [SkillElement.Force, 6], 
        [SkillElement.Gun, 6], 
        [SkillElement.Light, 6]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "rs"], 
        ["mute", "nu"], 
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 99, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "ab"]
    ], 
    "skills": [
        ["Chariot", 0], 
        ["Deadly Wind", 0], 
        ["Riot Gun", 0], 
        ["Thunder Reign", 0]
    ], 
    "stats": {
        "ag": 115, 
        "dx": 155, 
        "hp": 926, 
        "lu": 111, 
        "ma": 140, 
        "mp": 403, 
        "st": 117
    }
}, 
{
    "name": "Mermaid",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 1], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 15, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Lullaby", 0], 
        ["Mazan", 16], 
        ["Media", 20], 
        ["Rakukaja", 17]
    ], 
    "stats": {
        "ag": 20, 
        "dx": 18, 
        "hp": 135, 
        "lu": 23, 
        "ma": 29, 
        "mp": 114, 
        "st": 14
    }
}, 
{
    "name": "Metatron",
    "affinities": [
        [SkillElement.Almighty, 6], 
        [SkillElement.Elec, -3], 
        [SkillElement.Light, 5]
    ], 
    "level": 98, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rp"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Almighty Pleroma", 99], 
        ["Dekaja", 0], 
        ["Fire of Sinai", 0], 
        ["Judgment Light", 0], 
        ["Megidolaon", 0]
    ], 
    "stats": {
        "ag": 93, 
        "dx": 128, 
        "hp": 1149, 
        "lu": 93, 
        "ma": 143, 
        "mp": 390, 
        "st": 128
    }
}, 
{
    "name": "Mishaguji",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -6], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 37, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Elec Pleroma", 39], 
        ["Madness Needle", 38], 
        ["Mazionga", 0], 
        ["Rakunda", 0]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 63, 
        "hp": 355, 
        "lu": 36, 
        "ma": 31, 
        "mp": 134, 
        "st": 37
    }
}, 
{
    "name": "Mithras",
    "affinities": [
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 2]
    ], 
    "level": 21, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Fatal Sword", 23], 
        ["Heat Wave", 0], 
        ["Mahama", 0], 
        ["Rakunda", 22]
    ], 
    "stats": {
        "ag": 25, 
        "dx": 24, 
        "hp": 272, 
        "lu": 29, 
        "ma": 24, 
        "mp": 108, 
        "st": 37
    }
}, 
{
    "name": "Mitra-Buddha",
    "affinities": [
        [SkillElement.Almighty, 5], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, 6], 
        [SkillElement.Phys, 6]
    ], 
    "attack": "Phys x2-3, 1 enemy", 
    "level": 96, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "nu"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Berserker God", 0], 
        ["Glacial Blast", 97], 
        ["Self-Righteous Vow", 98], 
        ["Severe Judgment", 0], 
        ["Smile Charge", 0], 
        ["Tetrabreak", 0]
    ], 
    "stats": {
        "ag": 107, 
        "dx": 107, 
        "hp": 955, 
        "lu": 108, 
        "ma": 132, 
        "mp": 333, 
        "st": 108
    }
}, 
{
    "name": "Moh Shuvuu",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 12, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dia", 0], 
        ["Makakaja", 13], 
        ["Mazan", 15], 
        ["Zan", 0]
    ], 
    "stats": {
        "ag": 17, 
        "dx": 15, 
        "hp": 110, 
        "lu": 23, 
        "ma": 30, 
        "mp": 126, 
        "st": 10
    }
}, 
{
    "name": "Mokoi",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "level": 18, 
    "race": "Night", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Dream Fist", 19], 
        ["Head Crush", 0], 
        ["Mazio", 20], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 20, 
        "hp": 180, 
        "lu": 27, 
        "ma": 22, 
        "mp": 97, 
        "st": 22
    }
}, 
{
    "name": "Momunofu",
    "affinities": [
        [SkillElement.Ailment, -6], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["charm", "wk"], 
        ["panic", "wk"], 
        ["poison", "wk"], 
        ["sick", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 25, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Charge", 0], 
        ["Heat Wave", 26], 
        ["Light Life Aid", 27], 
        ["Oni-Kagura", 0]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 27, 
        "hp": 286, 
        "lu": 33, 
        "ma": 20, 
        "mp": 88, 
        "st": 43
    }
}, 
{
    "name": "Morax",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 1]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "level": 14, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Counter", 0], 
        ["Life Bonus", 16], 
        ["Maragi", 15], 
        ["Oni-Kagura", 0]
    ], 
    "stats": {
        "ag": 19, 
        "dx": 20, 
        "hp": 214, 
        "lu": 21, 
        "ma": 16, 
        "mp": 60, 
        "st": 29
    }
}, 
{
    "name": "Mot",
    "affinities": [
        [SkillElement.Almighty, 4], 
        [SkillElement.Dark, 4], 
        [SkillElement.Elec, -6], 
        [SkillElement.Force, 4]
    ], 
    "level": 89, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "rp"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rp"]
    ], 
    "skills": [
        ["Makakaja", 0], 
        ["Mamudoon", 90], 
        ["Megidolaon", 0], 
        ["Null Phys", 91]
    ], 
    "stats": {
        "ag": 83, 
        "dx": 64, 
        "hp": 701, 
        "lu": 118, 
        "ma": 138, 
        "mp": 466, 
        "st": 57
    }
}, 
{
    "name": "Mother Harlot",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Almighty, 6]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["charm", "nu"], 
        ["panic", "nu"], 
        ["poison", "nu"], 
        ["sick", "nu"], 
        ["sleep", "nu"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 99, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "ab"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "nu"]
    ], 
    "skills": [
        ["Babylon Goblet", 0], 
        ["Death Lust", 0], 
        ["Invitation", 0], 
        ["Soul Drain", 0]
    ], 
    "stats": {
        "ag": 109, 
        "dx": 88, 
        "hp": 805, 
        "lu": 134, 
        "ma": 164, 
        "mp": 523, 
        "st": 82
    }
}, 
{
    "name": "Mothman",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"]
    ], 
    "level": 11, 
    "race": "Vermin", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Mana Bonus", 12], 
        ["Rakukaja", 14], 
        ["Shibaboo", 0]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 16, 
        "hp": 133, 
        "lu": 20, 
        "ma": 14, 
        "mp": 73, 
        "st": 16
    }
}, 
{
    "name": "Mou-Ryo",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -1]
    ], 
    "evolves": "Inferno", 
    "level": 23, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Mudo", 0], 
        ["Pulinpa", 25], 
        ["Resist Elec", 26], 
        ["Spirit Drain", 0]
    ], 
    "stats": {
        "ag": 27, 
        "dx": 24, 
        "hp": 180, 
        "lu": 32, 
        "ma": 40, 
        "mp": 150, 
        "st": 19
    }
}, 
{
    "name": "Murmur",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 1], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["charm", "wk"]
    ], 
    "level": 63, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "rp"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Madness Nails", 0], 
        ["Maziodyne", 64], 
        ["Mudoon", 0]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 69, 
        "hp": 554, 
        "lu": 64, 
        "ma": 69, 
        "mp": 215, 
        "st": 84
    }
}, 
{
    "name": "Mushussu",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Elec, 4], 
        [SkillElement.Force, -7], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["poison", "rs"]
    ], 
    "evolves": "Tiamat", 
    "level": 47, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Axel Claw", 48], 
        ["Posumudi", 0], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 68, 
        "dx": 40, 
        "hp": 373, 
        "lu": 56, 
        "ma": 59, 
        "mp": 197, 
        "st": 48
    }
}, 
{
    "name": "Myrmecolion",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "level": 29, 
    "race": "Vermin", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Frenzied Chomp", 0], 
        ["Patra", 30], 
        ["Tarunda", 0], 
        ["Wind Breath", 31]
    ], 
    "stats": {
        "ag": 37, 
        "dx": 48, 
        "hp": 293, 
        "lu": 32, 
        "ma": 26, 
        "mp": 110, 
        "st": 31
    }
}, 
{
    "name": "Nadja",
    "affinities": [
        [SkillElement.Force, 1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 6, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Dia", 7], 
        ["Posumudi", 9], 
        ["Zan", 0]
    ], 
    "stats": {
        "ag": 9, 
        "dx": 15, 
        "hp": 97, 
        "lu": 12, 
        "ma": 15, 
        "mp": 63, 
        "st": 9
    }
}, 
{
    "name": "Naga",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, 1], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["charm", "wk"]
    ], 
    "level": 19, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Fatal Sword", 21], 
        ["Head Crush", 0], 
        ["Tarukaja", 20]
    ], 
    "stats": {
        "ag": 26, 
        "dx": 22, 
        "hp": 206, 
        "lu": 27, 
        "ma": 17, 
        "mp": 73, 
        "st": 34
    }
}, 
{
    "name": "Napaea",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 1], 
        [SkillElement.Force, 3], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["charm", "rs"]
    ], 
    "level": 12, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agi", 14], 
        ["Marin Karin", 0], 
        ["Resist Ice", 13], 
        ["Zan", 0], 
        ["Zanma", 15]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 13, 
        "hp": 130, 
        "lu": 15, 
        "ma": 19, 
        "mp": 113, 
        "st": 11
    }
}, 
{
    "name": "Narcissus",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 4], 
        [SkillElement.Ice, 2], 
        [SkillElement.Phys, -2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["panic", "rs"]
    ], 
    "level": 29, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Chakra Walk", 31], 
        ["Sexy Dance", 0], 
        ["Spring of Life", 30], 
        ["Wind Breath", 0]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 29, 
        "hp": 213, 
        "lu": 45, 
        "ma": 51, 
        "mp": 227, 
        "st": 23
    }
}, 
{
    "name": "Nata Taishi",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "rs"]
    ], 
    "level": 23, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Charge", 25], 
        ["Fang Breaker", 0], 
        ["Oni-Kagura", 24],
        ["Power Punch", 0]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 21, 
        "hp": 239, 
        "lu": 34, 
        "ma": 19, 
        "mp": 83, 
        "st": 40
    }
}, 
{
    "name": "Nebiros",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, 4], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["daze", "wk"]
    ], 
    "level": 46, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "nu"]
    ], 
    "skills": [
        ["Dark Pleroma", 47], 
        ["Megido", 48], 
        ["Mudoon", 0], 
        ["Sabbatma", 0]
    ], 
    "stats": {
        "ag": 48, 
        "dx": 43, 
        "hp": 308, 
        "lu": 57, 
        "ma": 72, 
        "mp": 256, 
        "st": 33
    }
}, 
{
    "name": "Nekomata",
    "affinities": [
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, 2], 
        [SkillElement.Force, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["charm", "rs"], 
        ["daze", "wk"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 35, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Axel Claw", 0], 
        ["Beastly Reaction", 36], 
        ["Mazanma", 37], 
        ["Pulinpa", 0]
    ], 
    "stats": {
        "ag": 53, 
        "dx": 38, 
        "hp": 293, 
        "lu": 47, 
        "ma": 32, 
        "mp": 156, 
        "st": 38
    }
}, 
{
    "name": "Nergal",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Dark, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, -2]
    ], 
    "level": 81, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "rp"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Berserker God", 83], 
        ["Hades Blast", 0], 
        ["Null Light", 84], 
        ["Pandemic Bomb", 0]
    ], 
    "stats": {
        "ag": 76, 
        "dx": 83, 
        "hp": 786, 
        "lu": 97, 
        "ma": 51, 
        "mp": 246, 
        "st": 123
    }
}, 
{
    "name": "Niddhoggr",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -2], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 60, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "rp"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Eat Whole", 63], 
        ["Grand Tack", 0], 
        ["Madness Nails", 61], 
        ["Poison Breath", 0]
    ], 
    "stats": {
        "ag": 66, 
        "dx": 92, 
        "hp": 682, 
        "lu": 52, 
        "ma": 63, 
        "mp": 198, 
        "st": 69
    }
}, 
{
    "name": "Night Stalker",
    "affinities": [
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["sleep", "rs"]
    ], 
    "level": 22, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Attack Knowhow", 23], 
        ["Damascus Claw", 0], 
        ["Dormina", 0]
    ], 
    "stats": {
        "ag": 36, 
        "dx": 26, 
        "hp": 207, 
        "lu": 32, 
        "ma": 22, 
        "mp": 110, 
        "st": 26
    }
}, 
{
    "name": "Norn",
    "affinities": [
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 69, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Chakra Walk", 71], 
        ["Dekaja", 0], 
        ["Luster Candy", 0], 
        ["Mediarahan", 72], 
        ["Samarecarm", 70]
    ], 
    "stats": {
        "ag": 68, 
        "dx": 48, 
        "hp": 522, 
        "lu": 83, 
        "ma": 96, 
        "mp": 345, 
        "st": 75
    }
}, 
{
    "name": "Nozuchi",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["poison", "rs"]
    ], 
    "level": 23, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Critical Wave", 25], 
        ["Mazio", 0], 
        ["Rakukaja", 0], 
        ["Resist Fire", 24]
    ], 
    "stats": {
        "ag": 26, 
        "dx": 26, 
        "hp": 369, 
        "lu": 26, 
        "ma": 23, 
        "mp": 103, 
        "st": 25
    }
}, 
{
    "name": "Nue",
    "affinities": [
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -4]
    ], 
    "level": 39, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Axel Claw", 0], 
        ["Mazionga", 41], 
        ["Shock", 40], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 34, 
        "hp": 404, 
        "lu": 48, 
        "ma": 36, 
        "mp": 124, 
        "st": 62
    }
}, 
{
    "name": "Obariyon",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "level": 18, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Patra", 0], 
        ["Sukunda", 19]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 22, 
        "hp": 180, 
        "lu": 28, 
        "ma": 19, 
        "mp": 97, 
        "st": 22
    }
}, 
{
    "name": "Oberon",
    "affinities": [
        [SkillElement.Elec, -4], 
        [SkillElement.Force, 3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["charm", "wk"]
    ], 
    "level": 64, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "ab"]
    ], 
    "skills": [
        ["Diarahan", 65], 
        ["Makarakarn", 66], 
        ["Mazandyne", 0], 
        ["Sexy Dance", 0]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 59, 
        "hp": 439, 
        "lu": 85, 
        "ma": 85, 
        "mp": 428, 
        "st": 51
    }
}, 
{
    "name": "Odin",
    "affinities": [
        [SkillElement.Elec, 7], 
        [SkillElement.Force, -7], 
        [SkillElement.Phys, 5]
    ], 
    "level": 85, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "rp"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rp"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Concentrate", 0], 
        ["Drain Force", 88], 
        ["Gungnir", 0], 
        ["Phys Pleroma", 87], 
        ["Thunder Reign", 0], 
        ["Will of Thunder", 86]
    ], 
    "stats": {
        "ag": 96, 
        "dx": 81, 
        "hp": 728, 
        "lu": 89, 
        "ma": 126, 
        "mp": 312, 
        "st": 130
    }
}, 
{
    "name": "Ogre",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 45, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Bloody Glee", 47], 
        ["Life Gain", 46], 
        ["Mortal Jihad", 0]
    ], 
    "stats": {
        "ag": 47, 
        "dx": 44, 
        "hp": 524, 
        "lu": 54, 
        "ma": 32, 
        "mp": 99, 
        "st": 71
    }
}, 
{
    "name": "Ogun",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Gun, 3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 24, 
    "race": "Zealot", 
    "resists": [
        [SkillElement.Fire, "rs"]
    ], 
    "skills": [
        ["Blight", 0], 
        ["Null Nerve", 26], 
        ["Posumudi", 25], 
        ["Tathlum Shot", 0]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 46, 
        "hp": 255, 
        "lu": 28, 
        "ma": 17, 
        "mp": 97, 
        "st": 36
    }
}, 
{
    "name": "Okiku-Mushi",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 34, 
    "race": "Vermin", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Mudoon", 36], 
        ["Poisma", 35], 
        ["Rakunda", 0], 
        ["Tathlum Shot", 0]
    ], 
    "stats": {
        "ag": 37, 
        "dx": 58, 
        "hp": 332, 
        "lu": 37, 
        "ma": 29, 
        "mp": 155, 
        "st": 35
    }
}, 
{
    "name": "Okuninushi",
    "affinities": [
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 4]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 30, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Estoma", 33], 
        ["Fatal Sword", 0], 
        ["Me Patra", 31], 
        ["Media", 32]
    ], 
    "stats": {
        "ag": 38, 
        "dx": 42, 
        "hp": 378, 
        "lu": 38, 
        "ma": 23, 
        "mp": 101, 
        "st": 50
    }
}, 
{
    "name": "Ometeotl",
    "affinities": [
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, -5], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 59, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Bufudyne", 60], 
        ["Judgment", 61], 
        ["Recarmdra", 0]
    ], 
    "stats": {
        "ag": 93, 
        "dx": 51, 
        "hp": 493, 
        "lu": 75, 
        "ma": 83, 
        "mp": 319, 
        "st": 49
    }
}, 
{
    "name": "Ongyo-Ki",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Light, -4], 
        [SkillElement.Phys, 3]
    ], 
    "level": 78, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Dark Sword", 0], 
        ["Death's Door", 81],
        ["Mist Rush", 80], 
        ["Null Gun", 83], 
        ["Sabbatma", 0], 
        ["Tetanus Cut", 0]
    ], 
    "stats": {
        "ag": 76, 
        "dx": 72, 
        "hp": 731, 
        "lu": 89, 
        "ma": 52, 
        "mp": 222, 
        "st": 117
    }
}, 
{
    "name": "Oni",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["panic", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 13, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Elec, "wk"]
    ], 
    "skills": [
        ["Critical Wave", 15], 
        ["Head Crush", 0]
    ], 
    "stats": {
        "ag": 15, 
        "dx": 17, 
        "hp": 245, 
        "lu": 20, 
        "ma": 10, 
        "mp": 58, 
        "st": 30
    }
}, 
{
    "name": "Onmoraki",
    "affinities": [
        [SkillElement.Fire, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3]
    ], 
    "level": 5, 
    "race": "Food", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Mana Bonus", 6]
    ], 
    "stats": {
        "ag": 12, 
        "dx": 15, 
        "hp": 98, 
        "lu": 11, 
        "ma": 10, 
        "mp": 53, 
        "st": 9
    }
}, 
{
    "name": "Orcus",
    "affinities": [
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Support, 3]
    ], 
    "level": 50, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Mamudoon", 0], 
        ["Tetrakarn", 52], 
        ["War Cry", 51]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 46, 
        "hp": 501, 
        "lu": 62, 
        "ma": 78, 
        "mp": 275, 
        "st": 70
    }
}, 
{
    "name": "Orias",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 1], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["sick", "nu"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 38, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Attack Knowhow", 41], 
        ["Maragion", 0], 
        ["Me Patra", 40], 
        ["Pandemic Bomb", 0]
    ], 
    "stats": {
        "ag": 49, 
        "dx": 44, 
        "hp": 329, 
        "lu": 39, 
        "ma": 46, 
        "mp": 121, 
        "st": 47
    }
}, 
{
    "name": "Orochi",
    "affinities": [
        [SkillElement.Ailment, -7], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["daze", "rs"], 
        ["panic", "wk"], 
        ["poison", "wk"], 
        ["sleep", "wk"]
    ], 
    "attack": "Phys x1, All enemies", 
    "level": 51, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Bufudyne", 0], 
        ["Estoma", 0], 
        ["Megaton Press", 52], 
        ["Recarmdra", 53]
    ], 
    "stats": {
        "ag": 59, 
        "dx": 50, 
        "hp": 554, 
        "lu": 67, 
        "ma": 38, 
        "mp": 204, 
        "st": 86
    }
}, 
{
    "name": "Orthrus",
    "affinities": [
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -6], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["panic", "rs"], 
        ["poison", "wk"]
    ], 
    "evolves": "Cerberus", 
    "level": 52, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Eat Whole", 53], 
        ["Fire Breath", 0], 
        ["Madness Nails", 54], 
        ["Nihil Claw", 0]
    ], 
    "stats": {
        "ag": 71, 
        "dx": 42, 
        "hp": 553, 
        "lu": 46, 
        "ma": 62, 
        "mp": 156, 
        "st": 80
    }
}, 
{
    "name": "Ose",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["charm", "wk"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 32, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"]
    ], 
    "skills": [
        ["Beastly Reaction", 33], 
        ["Blight", 0], 
        ["Critical Wave", 0], 
        ["Javelin Rain", 34], 
        ["Retaliate", 35]
    ], 
    "stats": {
        "ag": 40, 
        "dx": 33, 
        "hp": 345, 
        "lu": 40, 
        "ma": 24, 
        "mp": 106, 
        "st": 52
    }
}, 
{
    "name": "Osiris",
    "affinities": [
        [SkillElement.Dark, 4], 
        [SkillElement.Light, -2], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 2]
    ], 
    "level": 53, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Dark Pleroma", 0], 
        ["Dekaja", 0], 
        ["Mamudoon", 54], 
        ["Mudoon", 0]
    ], 
    "stats": {
        "ag": 67, 
        "dx": 56, 
        "hp": 494, 
        "lu": 61, 
        "ma": 72, 
        "mp": 258, 
        "st": 64
    }
}, 
{
    "name": "Oumitsunu",
    "affinities": [
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 3]
    ], 
    "level": 65, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Elec, "ab"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Berserker God", 0], 
        ["Life Surge", 0], 
        ["Tarukaja", 66], 
        ["Titanomachia", 67]
    ], 
    "stats": {
        "ag": 65, 
        "dx": 61, 
        "hp": 659, 
        "lu": 75, 
        "ma": 44, 
        "mp": 244, 
        "st": 97
    }
}, 
{
    "name": "Ouroboros",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, -4], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "nu"], 
        ["panic", "nu"]
    ], 
    "level": 47, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Makakaja", 50], 
        ["Megido", 0], 
        ["Recarm", 48], 
        ["Spring of Life", 0]
    ], 
    "stats": {
        "ag": 55, 
        "dx": 53, 
        "hp": 392, 
        "lu": 48, 
        "ma": 52, 
        "mp": 179, 
        "st": 57
    }
}, 
{
    "name": "Pabilsag",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, 2]
    ], 
    "ailments": [
        ["poison", "nu"]
    ], 
    "level": 24, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Rapid Needle", 25], 
        ["Tathlum Shot", 0], 
        ["Toxic Sting", 0]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 41, 
        "hp": 255, 
        "lu": 28, 
        "ma": 22, 
        "mp": 97, 
        "st": 26
    }
}, 
{
    "name": "Pachacamac",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["sick", "wk"]
    ], 
    "level": 47, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Mamudoon", 48], 
        ["Mazanma", 0], 
        ["Tetrakarn", 0]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 43, 
        "hp": 314, 
        "lu": 65, 
        "ma": 73, 
        "mp": 260, 
        "st": 28
    }
}, 
{
    "name": "Pale Rider",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 6], 
        [SkillElement.Phys, 6], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "nu"]
    ], 
    "level": 95, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rp"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Deadly Wind", 96], 
        ["Debilitate", 97], 
        ["Force Pierce", 98], 
        ["Pestilence", 0], 
        ["Soul Drain", 0]
    ], 
    "stats": {
        "ag": 115, 
        "dx": 108, 
        "hp": 773, 
        "lu": 112, 
        "ma": 141, 
        "mp": 355, 
        "st": 118
    }
}, 
{
    "name": "Pales",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["mute", "nu"], 
        ["poison", "wk"]
    ], 
    "level": 73, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Beastly Reaction", 75], 
        ["Berserker God", 75], 
        ["Mamudoon", 0], 
        ["Pandemic Bomb", 0]
    ], 
    "stats": {
        "ag": 102, 
        "dx": 65, 
        "hp": 646, 
        "lu": 91, 
        "ma": 60, 
        "mp": 288, 
        "st": 107
    }
}, 
{
    "name": "Pallas Athena",
    "affinities": [
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, -3], 
        [SkillElement.Light, 1], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["daze", "rs"], 
        ["panic", "nu"]
    ], 
    "level": 51, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "nu"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Chakra Walk", 53], 
        ["Holy Wrath", 52], 
        ["Makarakarn", 0], 
        ["Mortal Jihad", 0]
    ], 
    "stats": {
        "ag": 67, 
        "dx": 49, 
        "hp": 544, 
        "lu": 75, 
        "ma": 36, 
        "mp": 224, 
        "st": 79
    }
}, 
{
    "name": "Parvati",
    "affinities": [
        [SkillElement.Fire, -3], 
        [SkillElement.Light, 2], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 25, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Chakra Walk", 26], 
        ["Mahama", 27], 
        ["Media", 0], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 26, 
        "hp": 191, 
        "lu": 34, 
        "ma": 43, 
        "mp": 210, 
        "st": 20
    }
}, 
{
    "name": "Patrimpas",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Dark, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 1], 
        [SkillElement.Recovery, 4]
    ], 
    "ailments": [
        ["daze", "wk"]
    ], 
    "level": 20, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Recarm", 22], 
        ["Tetraja", 21], 
        ["Wind Breath", 0]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 22, 
        "hp": 163, 
        "lu": 24, 
        "ma": 36, 
        "mp": 137, 
        "st": 17
    }
}, 
{
    "name": "Patriot",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Recovery, -5], 
        [SkillElement.Support, 1]
    ], 
    "attack": "Gun x2, 1 enemy", 
    "level": 45, 
    "race": "Undead", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Cough", 0], 
        ["Madness Needle", 46], 
        ["Resist Phys", 47], 
        ["Tathlum Shot", 0], 
        ["Taunt", 0]
    ], 
    "stats": {
        "ag": 54, 
        "dx": 71, 
        "hp": 416, 
        "lu": 47, 
        "ma": 37, 
        "mp": 156, 
        "st": 44
    }
}, 
{
    "name": "Peallaidh",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["poison", "rs"]
    ], 
    "level": 17, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Hellish Mask", 20], 
        ["Mudo", 18], 
        ["Poison Breath", 0], 
        ["Pulinpa", 0]
    ], 
    "stats": {
        "ag": 21, 
        "dx": 19, 
        "hp": 206, 
        "lu": 25, 
        "ma": 31, 
        "mp": 114, 
        "st": 15
    }
}, 
{
    "name": "Pele",
    "affinities": [
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 2]
    ], 
    "level": 7, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Hard Worker", 8], 
        ["Healing Knowhow", 9], 
        ["Posumudi", 0]
    ], 
    "stats": {
        "ag": 11, 
        "dx": 11, 
        "hp": 105, 
        "lu": 15, 
        "ma": 20, 
        "mp": 82, 
        "st": 10
    }
}, 
{
    "name": "Pendragon",
    "affinities": [
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, -2], 
        [SkillElement.Force, -2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, 3]
    ], 
    "level": 66, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rp"]
    ], 
    "skills": [
        ["Acid Breath", 0], 
        ["Charge", 67], 
        ["Draconic Reaction", 69], 
        ["Titanomachia", 0]
    ], 
    "stats": {
        "ag": 66, 
        "dx": 62, 
        "hp": 710, 
        "lu": 76, 
        "ma": 45, 
        "mp": 192, 
        "st": 100
    }
}, 
{
    "name": "Peri",
    "affinities": [
        [SkillElement.Dark, -5], 
        [SkillElement.Fire, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Light, 2], 
        [SkillElement.Recovery, 4]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["panic", "rs"]
    ], 
    "level": 62, 
    "race": "Nymph", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Chakra Walk", 63], 
        ["Diarahan", 0], 
        ["Me Patra", 0], 
        ["Mediarama", 64]
    ], 
    "stats": {
        "ag": 66, 
        "dx": 65, 
        "hp": 517, 
        "lu": 77, 
        "ma": 81, 
        "mp": 261, 
        "st": 63
    }
}, 
{
    "name": "Persephone",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -2], 
        [SkillElement.Ice, 2], 
        [SkillElement.Support, -2]
    ], 
    "level": 57, 
    "race": "Reaper", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Death's Door", 0],
        ["Mamudoon", 58]
    ], 
    "stats": {
        "ag": 53, 
        "dx": 51, 
        "hp": 370, 
        "lu": 69, 
        "ma": 87, 
        "mp": 306, 
        "st": 39
    }
}, 
{
    "name": "Phoenix",
    "affinities": [
        [SkillElement.Fire, 4], 
        [SkillElement.Ice, -4], 
        [SkillElement.Recovery, 1]
    ], 
    "level": 24, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Fire Breath", 0], 
        ["Fire Pleroma", 26], 
        ["Light Mana Aid", 25], 
        ["Recarm", 0]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 28, 
        "hp": 250, 
        "lu": 40, 
        "ma": 24, 
        "mp": 138, 
        "st": 28
    }
}, 
{
    "name": "Pisaca",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["sick", "rs"]
    ], 
    "level": 54, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Acid Breath", 57], 
        ["Bind Voice", 0], 
        ["Life Drain", 0], 
        ["Mudoon", 55], 
        ["Tarukaja", 56]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 55, 
        "hp": 459, 
        "lu": 69, 
        "ma": 46, 
        "mp": 222, 
        "st": 70
    }
}, 
{
    "name": "Pixie",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "level": 9, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"]
    ], 
    "skills": [
        ["Dia", 0], 
        ["Dormina", 12], 
        ["Healing Knowhow", 11], 
        ["Zio", 0]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 13, 
        "hp": 101, 
        "lu": 15, 
        "ma": 19, 
        "mp": 86, 
        "st": 11
    }
}, 
{
    "name": "Poltergeist",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Force, -4], 
        [SkillElement.Gun, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["panic", "rs"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "evolves": "Quicksilver", 
    "level": 19, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Healing Knowhow", 21], 
        ["Rapid Needle", 20], 
        ["Sukunda", 0], 
        ["Tathlum Shot", 0]
    ], 
    "stats": {
        "ag": 25, 
        "dx": 23, 
        "hp": 157, 
        "lu": 28, 
        "ma": 32, 
        "mp": 132, 
        "st": 15
    }
}, 
{
    "name": "Porewit",
    "affinities": [
        [SkillElement.Fire, 3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Support, -1]
    ], 
    "level": 7, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agi", 0], 
        ["Lunge", 8]
    ], 
    "stats": {
        "ag": 14, 
        "dx": 14, 
        "hp": 112, 
        "lu": 11, 
        "ma": 11, 
        "mp": 53, 
        "st": 15
    }
}, 
{
    "name": "Power",
    "affinities": [
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, -6], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, 1], 
        [SkillElement.Light, 3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["daze", "rs"]
    ], 
    "evolves": "Virtue", 
    "level": 33, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Javelin Rain", 0], 
        ["Life Aid", 34], 
        ["Megido", 35]
    ], 
    "stats": {
        "ag": 26, 
        "dx": 34, 
        "hp": 403, 
        "lu": 36, 
        "ma": 43, 
        "mp": 128, 
        "st": 54
    }
}, 
{
    "name": "Preta",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -1]
    ], 
    "level": 11, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Bad Company", 0], 
        ["Life Drain", 0], 
        ["Mabufu", 14], 
        ["Mudo", 13]
    ], 
    "stats": {
        "ag": 17, 
        "dx": 17, 
        "hp": 140, 
        "lu": 17, 
        "ma": 17, 
        "mp": 66, 
        "st": 17
    }
}, 
{
    "name": "Principality",
    "affinities": [
        [SkillElement.Dark, -5], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 4]
    ], 
    "evolves": "Power", 
    "level": 26, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Light Pleroma", 29], 
        ["Mahama", 0], 
        ["Media", 0], 
        ["Recarm", 28], 
        ["Tarunda", 27]
    ], 
    "stats": {
        "ag": 30, 
        "dx": 27, 
        "hp": 226, 
        "lu": 38, 
        "ma": 54, 
        "mp": 184, 
        "st": 21
    }
}, 
{
    "name": "Prometheus",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Fire, 5], 
        [SkillElement.Ice, -7], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 40, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Fire Breath", 0], 
        ["Fire Pleroma", 41], 
        ["Maragion", 0], 
        ["Recarmdra", 0], 
        ["Workaholic", 43]
    ], 
    "stats": {
        "ag": 27, 
        "dx": 38, 
        "hp": 425, 
        "lu": 51, 
        "ma": 66, 
        "mp": 228, 
        "st": 54
    }
}, 
{
    "name": "Pyro Jack",
    "affinities": [
        [SkillElement.Fire, 5], 
        [SkillElement.Ice, -5], 
        [SkillElement.Light, -1]
    ], 
    "level": 25, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agilao", 0], 
        ["Fire Pleroma", 27], 
        ["Mana Gain", 26], 
        ["Maragi", 0]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 26, 
        "hp": 191, 
        "lu": 34, 
        "ma": 43, 
        "mp": 160, 
        "st": 20
    }
}, 
{
    "name": "Python",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Dark, 3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -5], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["daze", "rs"]
    ], 
    "level": 70, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Fog Breath", 0], 
        ["Mamudoon", 0], 
        ["Maziodyne", 72], 
        ["Pandemic Bomb", 71]
    ], 
    "stats": {
        "ag": 98, 
        "dx": 59, 
        "hp": 566, 
        "lu": 79, 
        "ma": 85, 
        "mp": 288, 
        "st": 59
    }
}, 
{
    "name": "Qing Niugai",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["panic", "nu"], 
        ["sleep", "wk"]
    ], 
    "level": 29, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Life Gain", 30], 
        ["Megaton Press", 0], 
        ["Rakukaja", 0], 
        ["Silent Prayer", 32]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 29, 
        "hp": 390, 
        "lu": 37, 
        "ma": 21, 
        "mp": 98, 
        "st": 48
    }
}, 
{
    "name": "Queen Mab",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -2], 
        [SkillElement.Force, 3], 
        [SkillElement.Phys, -4], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["poison", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 61, 
    "race": "Night", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Amrita", 62], 
        ["Diarahan", 0], 
        ["Mazandyne", 64], 
        ["Sexy Dance", 0]
    ], 
    "stats": {
        "ag": 87, 
        "dx": 56, 
        "hp": 596, 
        "lu": 77, 
        "ma": 76, 
        "mp": 246, 
        "st": 61
    }
}, 
{
    "name": "Quetzalcoatl",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Fire, 4], 
        [SkillElement.Force, 4], 
        [SkillElement.Support, 2]
    ], 
    "level": 67, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Maragidyne", 68], 
        ["Mazandyne", 69], 
        ["Smile Charge", 0], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 76, 
        "dx": 68, 
        "hp": 622, 
        "lu": 69, 
        "ma": 85, 
        "mp": 282, 
        "st": 79
    }
}, 
{
    "name": "Quicksilver",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -4], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "evolves": "Raijuu", 
    "level": 25, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Mazio", 0], 
        ["Shock", 26]
    ], 
    "stats": {
        "ag": 40, 
        "dx": 29, 
        "hp": 227, 
        "lu": 36, 
        "ma": 24, 
        "mp": 121, 
        "st": 29
    }
}, 
{
    "name": "Raijuu",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Force, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 33, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Endure", 35], 
        ["Shock", 0], 
        ["Tarukaja", 34]
    ], 
    "stats": {
        "ag": 50, 
        "dx": 36, 
        "hp": 280, 
        "lu": 45, 
        "ma": 30, 
        "mp": 149, 
        "st": 36
    }
}, 
{
    "name": "Rakshasa",
    "affinities": [
        [SkillElement.Force, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 38, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Charge", 39], 
        ["Counter", 0], 
        ["Endure", 40], 
        ["Fatal Sword", 0], 
        ["Head Crush", 0]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 38, 
        "hp": 355, 
        "lu": 50, 
        "ma": 28, 
        "mp": 121, 
        "st": 59
    }
}, 
{
    "name": "Rama",
    "affinities": [
        [SkillElement.Dark, -2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -2], 
        [SkillElement.Phys, 4]
    ], 
    "level": 74, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Fire, "nu"]
    ], 
    "skills": [
        ["Cold World", 75], 
        ["Hades Blast", 0], 
        ["Luster Candy", 0], 
        ["Megidolaon", 76]
    ], 
    "stats": {
        "ag": 73, 
        "dx": 69, 
        "hp": 698, 
        "lu": 87, 
        "ma": 50, 
        "mp": 212, 
        "st": 111
    }
}, 
{
    "name": "Rangda",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["daze", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 68, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Phys, "rp"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Madness Nails", 69], 
        ["Mazandyne", 0], 
        ["Recarmdra", 70]
    ], 
    "stats": {
        "ag": 77, 
        "dx": 45, 
        "hp": 562, 
        "lu": 82, 
        "ma": 89, 
        "mp": 356, 
        "st": 64
    }
}, 
{
    "name": "Red Rider",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Fire, 6], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 6]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 91, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rp"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Blade of Terror", 0], 
        ["Fire Pierce", 94], 
        ["Ruinous Brand", 93], 
        ["Soul Drain", 0], 
        ["Trisagion", 92]
    ], 
    "stats": {
        "ag": 98, 
        "dx": 90, 
        "hp": 870, 
        "lu": 116, 
        "ma": 103, 
        "mp": 263, 
        "st": 152
    }
}, 
{
    "name": "Rukh",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 4], 
        [SkillElement.Support, 1]
    ], 
    "level": 47, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Charge", 0], 
        ["Grand Tack", 0], 
        ["Nihil Claw", 48], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 56, 
        "dx": 85, 
        "hp": 532, 
        "lu": 48, 
        "ma": 38, 
        "mp": 162, 
        "st": 46
    }
}, 
{
    "name": "Salamander",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, 5], 
        [SkillElement.Ice, -7]
    ], 
    "level": 36, 
    "race": "Element", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["High Fire Pleroma", 0], 
        ["Life Gain", 40], 
        ["Panic Voice", 37]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 42, 
        "hp": 345, 
        "lu": 42, 
        "ma": 49, 
        "mp": 164, 
        "st": 49
    }
}, 
{
    "name": "Samael",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Almighty, 4], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 90, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Doping", 91], 
        ["Great Logos", 0], 
        ["Repel Dark", 93], 
        ["Salvation", 92], 
        ["Shivering Taboo", 0]
    ], 
    "stats": {
        "ag": 94, 
        "dx": 72, 
        "hp": 704, 
        "lu": 110, 
        "ma": 137, 
        "mp": 446, 
        "st": 64
    }
}, 
{
    "name": "Samyaza",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, 2], 
        [SkillElement.Elec, 5], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 5], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 76, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Elec Pleroma", 77], 
        ["Force Pleroma", 78], 
        ["Magic Torrent", 79], 
        ["True Zandyne", 0], 
        ["True Ziodyne", 0]
    ], 
    "stats": {
        "ag": 75, 
        "dx": 67, 
        "hp": 476, 
        "lu": 90, 
        "ma": 114, 
        "mp": 392, 
        "st": 51
    }
}, 
{
    "name": "Sandman",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, 1]
    ], 
    "ailments": [
        ["sleep", "nu"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 10, 
    "race": "Night", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"]
    ], 
    "skills": [
        ["Dream Needle", 0], 
        ["Stun Needle", 11], 
        ["Zan", 0]
    ], 
    "stats": {
        "ag": 20, 
        "dx": 15, 
        "hp": 127, 
        "lu": 18, 
        "ma": 13, 
        "mp": 70, 
        "st": 15
    }
}, 
{
    "name": "Sarasvati",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["panic", "rs"], 
        ["poison", "wk"]
    ], 
    "level": 48, 
    "race": "Nymph", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Ice Pleroma", 50], 
        ["Mabufula", 49], 
        ["Rakunda", 0]
    ], 
    "stats": {
        "ag": 49, 
        "dx": 44, 
        "hp": 320, 
        "lu": 60, 
        "ma": 75, 
        "mp": 264, 
        "st": 34
    }
}, 
{
    "name": "Satan",
    "affinities": [
        [SkillElement.Almighty, 8], 
        [SkillElement.Fire, 8], 
        [SkillElement.Gun, 6], 
        [SkillElement.Phys, 8]
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
    "attack": "Phys x2-4, multi-enemies", 
    "level": 120, 
    "race": "Primal", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Fire, "ab"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "ab"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Akasha Arts", 0], 
        ["Almighty Pleroma", 0], 
        ["Luster Candy", 0], 
        ["Megiddo Ark", 0], 
        ["Trisagion", 0]
    ], 
    "stats": {
        "ag": 138, 
        "dx": 116, 
        "hp": 1253, 
        "lu": 123, 
        "ma": 191, 
        "mp": 722, 
        "st": 178
    }
}, 
{
    "name": "Scathach",
    "affinities": [
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, 2], 
        [SkillElement.Phys, 1]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 39, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Grand Tack", 42], 
        ["Life Gain", 40], 
        ["Mazanma", 0], 
        ["Oni-Kagura", 0]
    ], 
    "stats": {
        "ag": 46, 
        "dx": 49, 
        "hp": 404, 
        "lu": 48, 
        "ma": 34, 
        "mp": 154, 
        "st": 62
    }
}, 
{
    "name": "Sedna",
    "affinities": [
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, 3]
    ], 
    "level": 27, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Diarama", 29], 
        ["Mabufula", 0], 
        ["Mamudo", 0], 
        ["Posumudi", 28]
    ], 
    "stats": {
        "ag": 30, 
        "dx": 29, 
        "hp": 353, 
        "lu": 45, 
        "ma": 21, 
        "mp": 93, 
        "st": 45
    }
}, 
{
    "name": "Senri",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Phys, -2], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "evolves": "Nekomata", 
    "level": 26, 
    "race": "Nymph", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"]
    ], 
    "skills": [
        ["Force Pleroma", 27], 
        ["Makakaja", 0], 
        ["Recarm", 28], 
        ["Zanma", 0]
    ], 
    "stats": {
        "ag": 30, 
        "dx": 27, 
        "hp": 196, 
        "lu": 35, 
        "ma": 44, 
        "mp": 164, 
        "st": 21
    }
}, 
{
    "name": "Seraph",
    "affinities": [
        [SkillElement.Fire, 6], 
        [SkillElement.Gun, 4], 
        [SkillElement.Ice, -5], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 3]
    ], 
    "attack": "Phys x1, all enemies", 
    "level": 94, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "ab"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "ab"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["High Gun Pleroma", 97], 
        ["Repel Elec", 95], 
        ["Riot Gun", 0], 
        ["Salvation", 96], 
        ["Trisagion", 0]
    ], 
    "stats": {
        "ag": 91, 
        "dx": 111, 
        "hp": 827, 
        "lu": 110, 
        "ma": 139, 
        "mp": 475, 
        "st": 62
    }
}, 
{
    "name": "Setanta",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 2], 
        [SkillElement.Gun, 3], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["panic", "wk"], 
        ["poison", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 35, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"]
    ], 
    "skills": [
        ["Charge", 0], 
        ["Javelin Rain", 0], 
        ["Life Gain", 36], 
        ["Purple Smoke", 37]
    ], 
    "stats": {
        "ag": 43, 
        "dx": 36, 
        "hp": 340, 
        "lu": 43, 
        "ma": 26, 
        "mp": 113, 
        "st": 57
    }
}, 
{
    "name": "Seth",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Fire, -4], 
        [SkillElement.Force, 4], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, 1]
    ], 
    "level": 80, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "ab"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "nu"]
    ], 
    "skills": [
        ["Draconic Reaction", 88], 
        ["Madness Nails", 87], 
        ["Panic Voice", 0], 
        ["Rending Claws", 0], 
        ["War Cry", 86], 
        ["Zandyne", 0]
    ], 
    "stats": {
        "ag": 75, 
        "dx": 79, 
        "hp": 798, 
        "lu": 94, 
        "ma": 51, 
        "mp": 307, 
        "st": 122
    }
}, 
{
    "name": "Shan Xiao",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Phys, 1]
    ], 
    "ailments": [
        ["panic", "rs"]
    ], 
    "level": 11, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Binding Claw", 0], 
        ["Bouncing Claw", 0], 
        ["Poison Claw", 13]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 16, 
        "hp": 133, 
        "lu": 20, 
        "ma": 14, 
        "mp": 73, 
        "st": 16
    }
}, 
{
    "name": "Shax",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -5], 
        [SkillElement.Fire, -2], 
        [SkillElement.Force, 5], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 3], 
        [SkillElement.Support, 1]
    ], 
    "level": 74, 
    "race": "Fallen", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rp"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Makajamaon", 75], 
        ["Mazandyne", 0], 
        ["Will of Wind", 77]
    ], 
    "stats": {
        "ag": 85, 
        "dx": 65, 
        "hp": 515, 
        "lu": 86, 
        "ma": 97, 
        "mp": 395, 
        "st": 71
    }
}, 
{
    "name": "Shiisaa",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, -1], 
        [SkillElement.Force, 4]
    ], 
    "level": 14, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"]
    ], 
    "skills": [
        ["Frenzied Chomp", 16], 
        ["Mazan", 0], 
        ["Shibaboo", 0]
    ], 
    "stats": {
        "ag": 25, 
        "dx": 22, 
        "hp": 173, 
        "lu": 23, 
        "ma": 15, 
        "mp": 83, 
        "st": 22
    }
}, 
{
    "name": "Shikome",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["poison", "rs"]
    ], 
    "evolves": "Yomotsu-Ikusa", 
    "level": 23, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Rapid Needle", 24], 
        ["Stun Needles", 0], 
        ["Tarunda", 25]
    ], 
    "stats": {
        "ag": 31, 
        "dx": 40, 
        "hp": 247, 
        "lu": 27, 
        "ma": 22, 
        "mp": 93, 
        "st": 26
    }
}, 
{
    "name": "Shiva",
    "affinities": [
        [SkillElement.Ailment, -5], 
        [SkillElement.Almighty, 3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Fire, 3], 
        [SkillElement.Gun, 4], 
        [SkillElement.Phys, 7], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["daze", "rs"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 95, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Elec, "ab"], 
        [SkillElement.Fire, "ab"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Akasha Arts", 99], 
        ["Berserker God", 0], 
        ["Drain Phys", 97], 
        ["Hades Blast", 0], 
        ["High Phys Pleroma", 98], 
        ["Victory Cry", 96]
    ], 
    "stats": {
        "ag": 100, 
        "dx": 92, 
        "hp": 887, 
        "lu": 96, 
        "ma": 68, 
        "mp": 358, 
        "st": 155
    }
}, 
{
    "name": "Shiwanna",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 2]
    ], 
    "ailments": [
        ["daze", "rs"], 
        ["panic", "rs"], 
        ["sick", "wk"]
    ], 
    "level": 38, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Fog Breath", 39], 
        ["Pandemic Bomb", 0], 
        ["Purple Smoke", 0], 
        ["Spring of Life", 40]
    ], 
    "stats": {
        "ag": 48, 
        "dx": 42, 
        "hp": 329, 
        "lu": 43, 
        "ma": 47, 
        "mp": 131, 
        "st": 44
    }
}, 
{
    "name": "Siegfried",
    "affinities": [
        [SkillElement.Gun, -5], 
        [SkillElement.Phys, 4], 
        [SkillElement.Support, 1]
    ], 
    "level": 62, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Phys, "ab"]
    ], 
    "skills": [
        ["Blood Ritual", 63], 
        ["Critical Eye", 0], 
        ["Enduring Soul", 64], 
        ["Hades Blast", 0], 
        ["Life Aid", 0]
    ], 
    "stats": {
        "ag": 70, 
        "dx": 64, 
        "hp": 747, 
        "lu": 82, 
        "ma": 44, 
        "mp": 161, 
        "st": 105
    }
}, 
{
    "name": "Silky",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 2], 
        [SkillElement.Phys, -3], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["daze", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 44, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 46], 
        ["Diarahan", 0], 
        ["Panic Voice", 0], 
        ["Posumudi", 45]
    ], 
    "stats": {
        "ag": 51, 
        "dx": 44, 
        "hp": 317, 
        "lu": 61, 
        "ma": 73, 
        "mp": 267, 
        "st": 27
    }
}, 
{
    "name": "Skadi",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "ailments": [
        ["mute", "nu"]
    ], 
    "level": 73, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "ab"]
    ], 
    "skills": [
        ["Cold World", 0], 
        ["High Ice Pleroma", 76], 
        ["Makajamaon", 0], 
        ["Mamudoon", 74]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 68, 
        "hp": 480, 
        "lu": 93, 
        "ma": 115, 
        "mp": 409, 
        "st": 52
    }
}, 
{
    "name": "Skogsra",
    "affinities": [
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Support, 1]
    ], 
    "level": 31, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"]
    ], 
    "skills": [
        ["Rakunda", 0], 
        ["Scratch Dance", 32], 
        ["Wind Breath", 0]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 29, 
        "hp": 224, 
        "lu": 38, 
        "ma": 51, 
        "mp": 188, 
        "st": 24
    }
}, 
{
    "name": "Sleipnir",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["mute", "rs"], 
        ["panic", "nu"]
    ], 
    "level": 55, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Dekunda", 58], 
        ["Mahamaon", 0], 
        ["Me Patra", 0], 
        ["Samarecarm", 56]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 54, 
        "hp": 506, 
        "lu": 83, 
        "ma": 75, 
        "mp": 285, 
        "st": 51
    }
}, 
{
    "name": "Slime",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "nu"]
    ], 
    "level": 2, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "wk"]
    ], 
    "skills": [
        ["Life Bonus", 6], 
        ["Life Drain", 0], 
        ["Lunge", 4]
    ], 
    "stats": {
        "ag": 9, 
        "dx": 8, 
        "hp": 35, 
        "lu": 8, 
        "ma": 7, 
        "mp": 37, 
        "st": 8
    }
}, 
{
    "name": "Sphinx",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Dark, -5], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, -5], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 4]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["mute", "wk"]
    ], 
    "level": 71, 
    "race": "Holy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Gun, "ab"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rp"]
    ], 
    "skills": [
        ["Grand Tack", 72], 
        ["Mahamaon", 0], 
        ["Mediarahan", 73], 
        ["Mediarama", 0]
    ], 
    "stats": {
        "ag": 70, 
        "dx": 63, 
        "hp": 578, 
        "lu": 85, 
        "ma": 107, 
        "mp": 400, 
        "st": 48
    }
}, 
{
    "name": "Spriggan",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Dark, -3], 
        [SkillElement.Gun, -1], 
        [SkillElement.Light, -5], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 14, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Dormina", 0], 
        ["Light Life Aid", 16], 
        ["Magaon", 15], 
        ["Oni-Kagura", 0],
        ["Resist Light", 17]
    ], 
    "stats": {
        "ag": 15, 
        "dx": 17, 
        "hp": 304, 
        "lu": 21, 
        "ma": 8, 
        "mp": 50, 
        "st": 29
    }
}, 
{
    "name": "Sraosha",
    "affinities": [
        [SkillElement.Almighty, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 3]
    ], 
    "level": 86, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "ab"]
    ], 
    "skills": [
        ["Concentrate", 87], 
        ["Diarahan", 0], 
        ["Drain Elec", 89], 
        ["High Light Pleroma", 88], 
        ["Holy Wrath", 0], 
        ["Judgment Light", 0]
    ], 
    "stats": {
        "ag": 92, 
        "dx": 100, 
        "hp": 532, 
        "lu": 101, 
        "ma": 113, 
        "mp": 498, 
        "st": 62
    }
}, 
{
    "name": "Stonka",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Force, -3], 
        [SkillElement.Gun, -2], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["charm", "wk"]
    ], 
    "level": 26, 
    "race": "Beast", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Counter", 28], 
        ["Oni-Kagura", 27],
        ["Tarunda", 0], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 41, 
        "dx": 30, 
        "hp": 233, 
        "lu": 37, 
        "ma": 25, 
        "mp": 125, 
        "st": 30
    }
}, 
{
    "name": "Strigoii",
    "affinities": [
        [SkillElement.Dark, 1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -1]
    ], 
    "level": 6, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Life Drain", 0], 
        ["Mudo", 8], 
        ["Poison Claw", 0]
    ], 
    "stats": {
        "ag": 15, 
        "dx": 12, 
        "hp": 81, 
        "lu": 14, 
        "ma": 10, 
        "mp": 55, 
        "st": 12
    }
}, 
{
    "name": "Strix",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 1]
    ], 
    "ailments": [
        ["sleep", "nu"]
    ], 
    "level": 17, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bouncing Claw", 18], 
        ["Life Drain", 0], 
        ["Mabufu", 0], 
        ["Tarunda", 19]
    ], 
    "stats": {
        "ag": 22, 
        "dx": 28, 
        "hp": 182, 
        "lu": 13, 
        "ma": 25, 
        "mp": 85, 
        "st": 27
    }
}, 
{
    "name": "Succubus",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Fire, -2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 2], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "nu"]
    ], 
    "level": 45, 
    "race": "Night", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Me Patra", 46], 
        ["Sexy Dance", 0], 
        ["Spirit Drain", 47], 
        ["Sukunda", 0]
    ], 
    "stats": {
        "ag": 47, 
        "dx": 42, 
        "hp": 303, 
        "lu": 56, 
        "ma": 71, 
        "mp": 251, 
        "st": 32
    }
}, 
{
    "name": "Sudama",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Support, -1]
    ], 
    "ailments": [
        ["panic", "rs"]
    ], 
    "level": 3, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Pulinpa", 0], 
        ["Zio", 0]
    ], 
    "stats": {
        "ag": 10, 
        "dx": 8, 
        "hp": 84, 
        "lu": 9, 
        "ma": 10, 
        "mp": 40, 
        "st": 8
    }
}, 
{
    "name": "Sui-Ki",
    "affinities": [
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "level": 54, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Mabufudyne", 56], 
        ["Mana Surge", 55], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 55, 
        "dx": 49, 
        "hp": 333, 
        "lu": 71, 
        "ma": 83, 
        "mp": 322, 
        "st": 30
    }
}, 
{
    "name": "Sukuna-Hikona",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -1], 
        [SkillElement.Force, 4], 
        [SkillElement.Ice, 4], 
        [SkillElement.Phys, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "level": 34, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Concentrate", 36], 
        ["Infernal Hail", 0], 
        ["Makajam", 35], 
        ["Needlestorm", 0], 
        ["Null Mind", 36]
    ], 
    "stats": {
        "ag": 46, 
        "dx": 44, 
        "hp": 351, 
        "lu": 56, 
        "ma": 55, 
        "mp": 188, 
        "st": 52
    }
}, 
{
    "name": "Suparna",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Elec, 1], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "level": 15, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Diarama", 0], 
        ["Mazio", 16], 
        ["Rakukaja", 0], 
        ["Spirit Drain", 17]
    ], 
    "stats": {
        "ag": 27, 
        "dx": 24, 
        "hp": 170, 
        "lu": 24, 
        "ma": 17, 
        "mp": 96, 
        "st": 22
    }
}, 
{
    "name": "Surt",
    "affinities": [
        [SkillElement.Fire, 7], 
        [SkillElement.Ice, -7], 
        [SkillElement.Phys, 4]
    ], 
    "level": 81, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Fire, "ab"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Berserker God", 0], 
        ["High Fire Pleroma", 83], 
        ["Maragidyne", 0], 
        ["Null Dark", 84], 
        ["Ragnarok", 82]
    ], 
    "stats": {
        "ag": 61, 
        "dx": 79, 
        "hp": 756, 
        "lu": 91, 
        "ma": 94, 
        "mp": 309, 
        "st": 120
    }
}, 
{
    "name": "Susano-o",
    "affinities": [
        [SkillElement.Ailment, -5], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 5], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 6], 
        [SkillElement.Recovery, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"]
    ], 
    "level": 84, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "ab"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Critical Eye", 85], 
        ["Deadly Wind", 0], 
        ["Drain Fire", 87], 
        ["High Phys Pleroma", 86], 
        ["Mist Rush", 0]
    ], 
    "stats": {
        "ag": 79, 
        "dx": 82, 
        "hp": 870, 
        "lu": 96, 
        "ma": 69, 
        "mp": 200, 
        "st": 132
    }
}, 
{
    "name": "Sylph",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, 4]
    ], 
    "level": 28, 
    "race": "Element", 
    "resists": [
        [SkillElement.Elec, "nu"]
    ], 
    "skills": [
        ["Bind Voice", 29], 
        ["High Force Pleroma", 0], 
        ["Mana Gain", 32]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 38, 
        "hp": 267, 
        "lu": 46, 
        "ma": 27, 
        "mp": 161, 
        "st": 31
    }
}, 
{
    "name": "Take-Mikazuchi",
    "affinities": [
        [SkillElement.Elec, 4], 
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 3]
    ], 
    "level": 55, 
    "race": "Amatsu", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Berserker God", 57], 
        ["Estoma", 0], 
        ["Retaliate", 56], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 53, 
        "hp": 608, 
        "lu": 64, 
        "ma": 38, 
        "mp": 214, 
        "st": 97
    }
}, 
{
    "name": "Take-Minakata",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["bind", "wk"]
    ], 
    "level": 21, 
    "race": "Kunitsu", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"]
    ], 
    "skills": [
        ["Counter", 0], 
        ["Elec Pleroma", 24], 
        ["Fang Breaker", 22], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 24, 
        "hp": 282, 
        "lu": 29, 
        "ma": 18, 
        "mp": 78, 
        "st": 41
    }
}, 
{
    "name": "Tam Lin",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Dark, -2], 
        [SkillElement.Gun, 2], 
        [SkillElement.Light, 1], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["sick", "wk"]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 13, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Estoma", 14], 
        ["Gram Slice", 0], 
        ["Hama", 0], 
        ["Heat Wave", 16]
    ], 
    "stats": {
        "ag": 18, 
        "dx": 17, 
        "hp": 185, 
        "lu": 20, 
        "ma": 13, 
        "mp": 58, 
        "st": 26
    }
}, 
{
    "name": "Tangata Manu",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, -3], 
        [SkillElement.Force, 1], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["sick", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 22, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dream Needle", 0], 
        ["Force Pleroma", 24], 
        ["Makakaja", 0], 
        ["Mazan", 23]
    ], 
    "stats": {
        "ag": 36, 
        "dx": 37, 
        "hp": 239, 
        "lu": 23, 
        "ma": 19, 
        "mp": 90, 
        "st": 25
    }
}, 
{
    "name": "Taotie",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 3]
    ], 
    "evolves": "Taowu", 
    "level": 58, 
    "race": "Vile", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Endure", 62], 
        ["Healing Knowhow", 59], 
        ["Purple Smoke", 0], 
        ["Spirit Drain", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 68, 
        "hp": 469, 
        "lu": 61, 
        "ma": 64, 
        "mp": 214, 
        "st": 64
    }
}, 
{
    "name": "Taowu",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Force, -5], 
        [SkillElement.Phys, 2]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["charm", "nu"], 
        ["daze", "wk"], 
        ["mute", "wk"], 
        ["poison", "nu"], 
        ["sick", "wk"]
    ], 
    "level": 64, 
    "race": "Wilder", 
    "resists": [
        [SkillElement.Elec, "rp"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Beastly Reaction", 66], 
        ["Eat Whole", 0], 
        ["Sukunda", 65], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 91, 
        "dx": 64, 
        "hp": 572, 
        "lu": 81, 
        "ma": 77, 
        "mp": 257, 
        "st": 79
    }
}, 
{
    "name": "Taraka",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 2], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2]
    ], 
    "level": 59, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Dark Sword", 0], 
        ["Hades Blast", 58], 
        ["Tarukaja", 57], 
        ["Tetanus Cut", 0]
    ], 
    "stats": {
        "ag": 63, 
        "dx": 54, 
        "hp": 586, 
        "lu": 69, 
        "ma": 39, 
        "mp": 166, 
        "st": 83
    }
}, 
{
    "name": "Tattooed Man",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 3]
    ], 
    "level": 27, 
    "race": "Foul", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Counter", 29], 
        ["Fatal Sword", 0], 
        ["Heat Wave", 28], 
        ["Taunt", 0]
    ], 
    "stats": {
        "ag": 25, 
        "dx": 29, 
        "hp": 303, 
        "lu": 40, 
        "ma": 21, 
        "mp": 93, 
        "st": 45
    }
}, 
{
    "name": "Tenkai",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 3], 
        [SkillElement.Phys, 5], 
        [SkillElement.Support, 1]
    ], 
    "level": 77, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Gun, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Ally Retaliate", 78], 
        ["Berserker God", 0], 
        ["Blood Ritual", 0], 
        ["Imposing Stance", 79], 
        ["Mahamaon", 0]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 67, 
        "hp": 482, 
        "lu": 91, 
        "ma": 115, 
        "mp": 398, 
        "st": 51
    }
}, 
{
    "name": "Tezcatlipoca",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, 5], 
        [SkillElement.Force, 4], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 82, 
    "race": "Zealot", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Madness Nails", 84], 
        ["Mazandyne", 0], 
        ["Repel Force", 83], 
        ["Trisagion", 0]
    ], 
    "stats": {
        "ag": 115, 
        "dx": 73, 
        "hp": 460, 
        "lu": 90, 
        "ma": 124, 
        "mp": 410, 
        "st": 49
    }
}, 
{
    "name": "Thor",
    "affinities": [
        [SkillElement.Elec, 6], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "attack": "Phys x1-2, 1 enemy", 
    "level": 80, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Elec, "ab"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Berserker God", 81], 
        ["Charge", 0], 
        ["Hades Blast", 0], 
        ["High Elec Pleroma", 82], 
        ["Ziodyne", 0]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 74, 
        "hp": 746, 
        "lu": 91, 
        "ma": 53, 
        "mp": 227, 
        "st": 120
    }
}, 
{
    "name": "Thoth",
    "affinities": [
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, -3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Light, 2], 
        [SkillElement.Support, -2]
    ], 
    "level": 30, 
    "race": "Deity", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Hamaon", 0], 
        ["Light Pleroma", 32], 
        ["Mana Gain", 0], 
        ["Megido", 33], 
        ["Resist Gun", 31]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 30, 
        "hp": 249, 
        "lu": 40, 
        "ma": 57, 
        "mp": 203, 
        "st": 28
    }
}, 
{
    "name": "Throne",
    "affinities": [
        [SkillElement.Dark, -7], 
        [SkillElement.Fire, 4], 
        [SkillElement.Ice, -5], 
        [SkillElement.Light, 4]
    ], 
    "evolves": "Cherub", 
    "level": 62, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Mahamaon", 0], 
        ["Maragidyne", 65], 
        ["Mediarama", 64]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 68, 
        "hp": 517, 
        "lu": 68, 
        "ma": 65, 
        "mp": 256, 
        "st": 60
    }
}, 
{
    "name": "Thunderbird",
    "affinities": [
        [SkillElement.Elec, 4], 
        [SkillElement.Force, -4], 
        [SkillElement.Gun, -3]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "level": 42, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Elec Pleroma", 0], 
        ["Mazionga", 0], 
        ["Taunt", 43], 
        ["Ziodyne", 45]
    ], 
    "stats": {
        "ag": 77, 
        "dx": 46, 
        "hp": 340, 
        "lu": 45, 
        "ma": 68, 
        "mp": 230, 
        "st": 28
    }
}, 
{
    "name": "Tiamat",
    "affinities": [
        [SkillElement.Almighty, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Ice, 2]
    ], 
    "evolves": "Ym", 
    "level": 55, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Chakra Walk", 56], 
        ["Ice Breath", 0], 
        ["Megidola", 0], 
        ["Silent Prayer", 57]
    ], 
    "stats": {
        "ag": 56, 
        "dx": 50, 
        "hp": 359, 
        "lu": 67, 
        "ma": 85, 
        "mp": 296, 
        "st": 38
    }
}, 
{
    "name": "Titan",
    "affinities": [
        [SkillElement.Ailment, -6], 
        [SkillElement.Phys, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["poison", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 37, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Critical Eye", 0], 
        ["Oni-Kagura", 0],
        ["Power Punch", 39], 
        ["Retaliate", 40]
    ], 
    "stats": {
        "ag": 39, 
        "dx": 37, 
        "hp": 387, 
        "lu": 45, 
        "ma": 27, 
        "mp": 119, 
        "st": 59
    }
}, 
{
    "name": "Titania",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Elec, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Recovery, 3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["sleep", "nu"]
    ], 
    "level": 70, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Dekunda", 72], 
        ["Makajamaon", 74], 
        ["Mana Surge", 73], 
        ["Maziodyne", 0], 
        ["Mediarahan", 0]
    ], 
    "stats": {
        "ag": 66, 
        "dx": 45, 
        "hp": 473, 
        "lu": 93, 
        "ma": 119, 
        "mp": 426, 
        "st": 42
    }
}, 
{
    "name": "Tlaloc",
    "affinities": [
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, -5], 
        [SkillElement.Ice, 2]
    ], 
    "level": 39, 
    "race": "Genma", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Mana Gain", 41], 
        ["Resist Fire", 40], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 41, 
        "dx": 37, 
        "hp": 269, 
        "lu": 50, 
        "ma": 62, 
        "mp": 224, 
        "st": 29
    }
}, 
{
    "name": "Tlaltecuhtli",
    "affinities": [
        [SkillElement.Almighty, 1], 
        [SkillElement.Dark, -2], 
        [SkillElement.Elec, 2], 
        [SkillElement.Fire, 2], 
        [SkillElement.Force, -2], 
        [SkillElement.Ice, -2], 
        [SkillElement.Light, -2]
    ], 
    "ailments": [
        ["mute", "rs"]
    ], 
    "level": 46, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Agidyne", 48], 
        ["Mazionga", 0], 
        ["Megido", 0], 
        ["Rakukaja", 47]
    ], 
    "stats": {
        "ag": 52, 
        "dx": 46, 
        "hp": 408, 
        "lu": 58, 
        "ma": 83, 
        "mp": 276, 
        "st": 35
    }
}, 
{
    "name": "Tlazolteotl",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["poison", "nu"]
    ], 
    "level": 57, 
    "race": "Megami", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "ab"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Mabufudyne", 0], 
        ["Makakaja", 58], 
        ["Posumudi", 0], 
        ["Recarmdra", 59]
    ], 
    "stats": {
        "ag": 51, 
        "dx": 60, 
        "hp": 315, 
        "lu": 72, 
        "ma": 78, 
        "mp": 306, 
        "st": 54
    }
}, 
{
    "name": "Tokisada",
    "affinities": [
        [SkillElement.Dark, -3], 
        [SkillElement.Gun, -3], 
        [SkillElement.Light, 4], 
        [SkillElement.Support, 2]
    ], 
    "level": 80, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Debilitate", 0], 
        ["High Light Pleroma", 82], 
        ["Judgment Light", 0], 
        ["Smile Charge", 81]
    ], 
    "stats": {
        "ag": 78, 
        "dx": 70, 
        "hp": 499, 
        "lu": 95, 
        "ma": 120, 
        "mp": 411, 
        "st": 53
    }
}, 
{
    "name": "Tonatiuh",
    "affinities": [
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "level": 37, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Charge", 39], 
        ["Fatal Sword", 0], 
        ["Javelin Rain", 38], 
        ["Megido", 0]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 48, 
        "hp": 372, 
        "lu": 43, 
        "ma": 43, 
        "mp": 148, 
        "st": 50
    }
}, 
{
    "name": "Toubyou",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, 2], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "rs"], 
        ["sleep", "wk"]
    ], 
    "attack": "Phys x1~3, 1 enemy", 
    "level": 14, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Attack Knowhow", 16], 
        ["Hard Worker", 0], 
        ["Pandemic Bomb", 15], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 19, 
        "dx": 22, 
        "hp": 161, 
        "lu": 18, 
        "ma": 20, 
        "mp": 75, 
        "st": 21
    }
}, 
{
    "name": "Trumpeter",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Almighty, 5], 
        [SkillElement.Dark, 4], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, 4], 
        [SkillElement.Phys, -8], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["charm", "nu"], 
        ["panic", "nu"], 
        ["poison", "nu"], 
        ["sick", "nu"], 
        ["sleep", "nu"]
    ], 
    "level": 97, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Evil Melody", 0], 
        ["Great Logos", 99], 
        ["Smile Charge", 0], 
        ["Soul Drain", 0]
    ], 
    "stats": {
        "ag": 116, 
        "dx": 103, 
        "hp": 624, 
        "lu": 115, 
        "ma": 158, 
        "mp": 549, 
        "st": 73
    }
}, 
{
    "name": "Tsuchigumo",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Elec, 3], 
        [SkillElement.Gun, 1], 
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, -2]
    ], 
    "ailments": [
        ["poison", "rs"]
    ], 
    "level": 31, 
    "race": "Jirae", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Mazionga", 33], 
        ["Me Patra", 32], 
        ["Poison Claw", 0], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 35, 
        "dx": 37, 
        "hp": 280, 
        "lu": 37, 
        "ma": 38, 
        "mp": 129, 
        "st": 38
    }
}, 
{
    "name": "Tuofei",
    "affinities": [
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, 2], 
        [SkillElement.Light, -2], 
        [SkillElement.Recovery, 2]
    ], 
    "ailments": [
        ["bind", "rs"]
    ], 
    "level": 30, 
    "race": "Flight", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rp"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Ice Breath", 0], 
        ["Magaon", 32], 
        ["Me Patra", 31], 
        ["Media", 0]
    ], 
    "stats": {
        "ag": 46, 
        "dx": 33, 
        "hp": 260, 
        "lu": 41, 
        "ma": 28, 
        "mp": 169, 
        "st": 33
    }
}, 
{
    "name": "Tzitzimitl",
    "affinities": [
        [SkillElement.Gun, -2], 
        [SkillElement.Ice, 3], 
        [SkillElement.Phys, -2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["panic", "wk"], 
        ["sick", "nu"], 
        ["sleep", "wk"]
    ], 
    "level": 75, 
    "race": "Tyrant", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Bufudyne", 0], 
        ["Dekaja", 76], 
        ["Makajamaon", 0], 
        ["Will of Frost", 77]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 66, 
        "hp": 647, 
        "lu": 89, 
        "ma": 113, 
        "mp": 372, 
        "st": 50
    }
}, 
{
    "name": "Ubu",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Gun, 1], 
        [SkillElement.Light, -3]
    ], 
    "ailments": [
        ["poison", "rs"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "evolves": "Tsuchigumo", 
    "level": 21, 
    "race": "Vermin", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Rapid Needle", 23], 
        ["Stun Needle", 22], 
        ["Tetanus Cut", 0], 
        ["Toxic Sting", 0]
    ], 
    "stats": {
        "ag": 29, 
        "dx": 40, 
        "hp": 201, 
        "lu": 25, 
        "ma": 20, 
        "mp": 88, 
        "st": 24
    }
}, 
{
    "name": "Ukano Mitama",
    "affinities": [
        [SkillElement.Ice, -3], 
        [SkillElement.Recovery, 3]
    ], 
    "ailments": [
        ["panic", "nu"]
    ], 
    "level": 53, 
    "race": "Avatar", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Healing Knowhow", 0], 
        ["High Heal Pleroma", 54], 
        ["Mediarama", 0], 
        ["Tetrakarn", 55]
    ], 
    "stats": {
        "ag": 83, 
        "dx": 34, 
        "hp": 615, 
        "lu": 73, 
        "ma": 24, 
        "mp": 350, 
        "st": 34
    }
}, 
{
    "name": "Undine",
    "affinities": [
        [SkillElement.Fire, -7], 
        [SkillElement.Ice, 5]
    ], 
    "level": 32, 
    "race": "Element", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["High Ice Pleroma", 0], 
        ["Mana Gain", 35], 
        ["Poison Breath", 33]
    ], 
    "stats": {
        "ag": 41, 
        "dx": 31, 
        "hp": 300, 
        "lu": 37, 
        "ma": 52, 
        "mp": 192, 
        "st": 24
    }
}, 
{
    "name": "Valkyrie",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Phys, 3]
    ], 
    "ailments": [
        ["charm", "rs"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 43, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Blast Arrow", 0], 
        ["Blood Ritual", 46], 
        ["Javelin Rain", 0], 
        ["Mortal Jihad", 45]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 53, 
        "hp": 367, 
        "lu": 52, 
        "ma": 31, 
        "mp": 133, 
        "st": 68
    }
}, 
{
    "name": "Vasuki",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 4], 
        [SkillElement.Support, -4]
    ], 
    "level": 88, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "ab"]
    ], 
    "skills": [
        ["Glacial Blast", 0], 
        ["Ice Age", 89], 
        ["Life Surge", 90], 
        ["Poison Breath", 0], 
        ["Shivering Taboo", 91]
    ], 
    "stats": {
        "ag": 109, 
        "dx": 92, 
        "hp": 619, 
        "lu": 82, 
        "ma": 118, 
        "mp": 318, 
        "st": 102
    }
}, 
{
    "name": "Vetala",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Dark, 3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 3]
    ], 
    "ailments": [
        ["charm", "wk"]
    ], 
    "level": 74, 
    "race": "Ghost", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Acid Breath", 0], 
        ["Eat Whole", 0], 
        ["Fog Breath", 75], 
        ["Life Surge", 76]
    ], 
    "stats": {
        "ag": 70, 
        "dx": 87, 
        "hp": 581, 
        "lu": 68, 
        "ma": 86, 
        "mp": 264, 
        "st": 89
    }
}, 
{
    "name": "Victor",
    "affinities": [
        [SkillElement.Dark, 1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Gun, 2], 
        [SkillElement.Light, 4]
    ], 
    "ailments": [
        ["sleep", "nu"]
    ], 
    "level": 61, 
    "race": "Herald", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Hamaon", 0], 
        ["Heaven's Bow", 0],
        ["Light Pleroma", 64], 
        ["Makarakarn", 62]
    ], 
    "stats": {
        "ag": 74, 
        "dx": 93, 
        "hp": 559, 
        "lu": 64, 
        "ma": 55, 
        "mp": 231, 
        "st": 58
    }
}, 
{
    "name": "Vidofnir",
    "affinities": [
        [SkillElement.Elec, 2], 
        [SkillElement.Force, -1], 
        [SkillElement.Gun, -4], 
        [SkillElement.Phys, 1]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 34, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Ally Counter", 35], 
        ["Damascus Claw", 0], 
        ["Mazionga", 36], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 47, 
        "dx": 38, 
        "hp": 261, 
        "lu": 44, 
        "ma": 55, 
        "mp": 231, 
        "st": 26
    }
}, 
{
    "name": "Virtue",
    "affinities": [
        [SkillElement.Dark, -5], 
        [SkillElement.Elec, -5], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "evolves": "Dominion", 
    "level": 41, 
    "race": "Divine", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Force, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Hamaon", 0], 
        ["Sabbatma", 0], 
        ["Silent Prayer", 43], 
        ["Tetraja", 42]
    ], 
    "stats": {
        "ag": 53, 
        "dx": 39, 
        "hp": 310, 
        "lu": 62, 
        "ma": 69, 
        "mp": 262, 
        "st": 30
    }
}, 
{
    "name": "Vivian",
    "affinities": [
        [SkillElement.Dark, -5], 
        [SkillElement.Fire, -6], 
        [SkillElement.Ice, 3], 
        [SkillElement.Light, 2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["charm", "rs"], 
        ["mute", "wk"], 
        ["poison", "wk"], 
        ["sleep", "nu"]
    ], 
    "level": 52, 
    "race": "Fairy", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Dark Sword", 0], 
        ["Lullaby", 0], 
        ["Mabufudyne", 54], 
        ["Mana Surge", 53], 
        ["Sukukaja", 0]
    ], 
    "stats": {
        "ag": 49, 
        "dx": 47, 
        "hp": 382, 
        "lu": 64, 
        "ma": 82, 
        "mp": 303, 
        "st": 36
    }
}, 
{
    "name": "Vodyanik",
    "affinities": [
        [SkillElement.Elec, 1], 
        [SkillElement.Fire, -1], 
        [SkillElement.Force, -3], 
        [SkillElement.Support, -1]
    ], 
    "level": 8, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Force, "wk"]
    ], 
    "skills": [
        ["Bouncing Claw", 0], 
        ["Mana Bonus", 10], 
        ["Zio", 0]
    ], 
    "stats": {
        "ag": 13, 
        "dx": 12, 
        "hp": 96, 
        "lu": 16, 
        "ma": 19, 
        "mp": 82, 
        "st": 10
    }
}, 
{
    "name": "Vouivre",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, 3], 
        [SkillElement.Gun, -4], 
        [SkillElement.Ice, -3]
    ], 
    "ailments": [
        ["poison", "nu"]
    ], 
    "level": 28, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Elec, "rs"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Blight", 0], 
        ["Marin Karin", 30], 
        ["Shibaboo", 29], 
        ["Zionga", 0]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 26, 
        "hp": 247, 
        "lu": 39, 
        "ma": 27, 
        "mp": 111, 
        "st": 38
    }
}, 
{
    "name": "Wendigo",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -3], 
        [SkillElement.Ice, 4], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["sick", "rs"]
    ], 
    "level": 30, 
    "race": "Jaki", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Mabufula", 0], 
        ["Oni-Kagura", 0],
        ["Poison Breath", 31], 
        ["Power Punch", 31]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 27, 
        "hp": 328, 
        "lu": 33, 
        "ma": 38, 
        "mp": 61, 
        "st": 45
    }
}, 
{
    "name": "White Rider",
    "affinities": [
        [SkillElement.Almighty, 3], 
        [SkillElement.Elec, 6], 
        [SkillElement.Force, -5], 
        [SkillElement.Gun, 6], 
        [SkillElement.Light, 6], 
        [SkillElement.Phys, -3]
    ], 
    "ailments": [
        ["bind", "rs"], 
        ["panic", "rs"], 
        ["poison", "rs"], 
        ["sick", "rs"], 
        ["sleep", "rs"]
    ], 
    "level": 89, 
    "race": "Fiend", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "ab"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Elec Pierce", 93], 
        ["God's Bow", 0], 
        ["Gun Pierce", 92], 
        ["Heaven's Bow", 91],
        ["Soul Drain", 0], 
        ["Thunder Reign", 90]
    ], 
    "stats": {
        "ag": 116, 
        "dx": 145, 
        "hp": 770, 
        "lu": 104, 
        "ma": 86, 
        "mp": 302, 
        "st": 93
    }
}, 
{
    "name": "Wicker Man",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -3], 
        [SkillElement.Force, 2], 
        [SkillElement.Light, -2], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["sick", "nu"]
    ], 
    "level": 38, 
    "race": "Spirit", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Magaon", 39], 
        ["Makajam", 0], 
        ["Mazanma", 0], 
        ["Resist Elec", 40]
    ], 
    "stats": {
        "ag": 44, 
        "dx": 44, 
        "hp": 329, 
        "lu": 42, 
        "ma": 43, 
        "mp": 151, 
        "st": 47
    }
}, 
{
    "name": "Wild Hunt",
    "affinities": [
        [SkillElement.Dark, 1], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, -3]
    ], 
    "evolves": "Abaddon", 
    "level": 53, 
    "race": "Night", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Blast Arrow", 0], 
        ["Dream Fist", 0], 
        ["Grand Tack", 56], 
        ["Mana Surge", 54]
    ], 
    "stats": {
        "ag": 58, 
        "dx": 82, 
        "hp": 478, 
        "lu": 54, 
        "ma": 43, 
        "mp": 209, 
        "st": 51
    }
}, 
{
    "name": "Wu Kong",
    "affinities": [
        [SkillElement.Elec, -3], 
        [SkillElement.Ice, -3], 
        [SkillElement.Phys, 4], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["daze", "rs"]
    ], 
    "level": 57, 
    "race": "Fury", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "rs"], 
        [SkillElement.Light, "rs"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Charge", 0], 
        ["Critical Eye", 58], 
        ["Mortal Jihad", 0], 
        ["Phys Pleroma", 60], 
        ["Taunt", 0]
    ], 
    "stats": {
        "ag": 59, 
        "dx": 64, 
        "hp": 675, 
        "lu": 69, 
        "ma": 41, 
        "mp": 179, 
        "st": 103
    }
}, 
{
    "name": "Xi Wangmu",
    "affinities": [
        [SkillElement.Ailment, 3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Recovery, -3], 
        [SkillElement.Support, 4]
    ], 
    "ailments": [
        ["charm", "nu"], 
        ["poison", "nu"]
    ], 
    "level": 79, 
    "race": "Lady", 
    "resists": [
        [SkillElement.Gun, "nu"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Doping", 81], 
        ["Invitation", 82], 
        ["Lullaby", 80], 
        ["Makarakarn", 0], 
        ["Myriad Arrows", 0]
    ], 
    "stats": {
        "ag": 77, 
        "dx": 65, 
        "hp": 543, 
        "lu": 102, 
        "ma": 123, 
        "mp": 436, 
        "st": 48
    }
}, 
{
    "name": "Xiuhtecuhtli",
    "affinities": [
        [SkillElement.Ailment, -4], 
        [SkillElement.Fire, 5], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, -6], 
        [SkillElement.Support, -3]
    ], 
    "ailments": [
        ["mute", "wk"], 
        ["sleep", "wk"]
    ], 
    "level": 48, 
    "race": "Yoma", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Gun, "nu"], 
        [SkillElement.Ice, "wk"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Fire Pleroma", 49], 
        ["Grand Tack", 50]
    ], 
    "stats": {
        "ag": 38, 
        "dx": 34, 
        "hp": 420, 
        "lu": 55, 
        "ma": 75, 
        "mp": 264, 
        "st": 54
    }
}, 
{
    "name": "Yaksha",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Fire, -2], 
        [SkillElement.Force, -3], 
        [SkillElement.Ice, 3], 
        [SkillElement.Recovery, 1], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "wk"], 
        ["sick", "nu"]
    ], 
    "level": 71, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "rp"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Magaon", 0], 
        ["Makajamaon", 73], 
        ["Me Patra", 72], 
        ["Tetrakarn", 0]
    ], 
    "stats": {
        "ag": 80, 
        "dx": 74, 
        "hp": 560, 
        "lu": 73, 
        "ma": 89, 
        "mp": 255, 
        "st": 78
    }
}, 
{
    "name": "Yamawaro",
    "affinities": [
        [SkillElement.Ailment, -3], 
        [SkillElement.Dark, -3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["charm", "wk"], 
        ["panic", "wk"]
    ], 
    "level": 32, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"], 
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Attack Knowhow", 34], 
        ["Life Gain", 33], 
        ["Megaton Press", 0], 
        ["Tarukaja", 0]
    ], 
    "stats": {
        "ag": 32, 
        "dx": 31, 
        "hp": 415, 
        "lu": 40, 
        "ma": 22, 
        "mp": 106, 
        "st": 52
    }
}, 
{
    "name": "Yatagarasu",
    "affinities": [
        [SkillElement.Fire, 3], 
        [SkillElement.Gun, 3], 
        [SkillElement.Ice, -5]
    ], 
    "level": 52, 
    "race": "Avian", 
    "resists": [
        [SkillElement.Fire, "ab"], 
        [SkillElement.Gun, "wk"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "nu"]
    ], 
    "skills": [
        ["Grand Tack", 53], 
        ["Gun Pleroma", 0], 
        ["Maragidyne", 54], 
        ["Maragion", 0]
    ], 
    "stats": {
        "ag": 81, 
        "dx": 62, 
        "hp": 504, 
        "lu": 68, 
        "ma": 62, 
        "mp": 225, 
        "st": 68
    }
}, 
{
    "name": "Yggdrasil",
    "affinities": [
        [SkillElement.Ailment, 1], 
        [SkillElement.Fire, -4], 
        [SkillElement.Gun, 3], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["bind", "nu"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 65, 
    "race": "Tree", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Gun, "nu"]
    ], 
    "skills": [
        ["Dekaja", 0], 
        ["Grand Tack", 0], 
        ["Healing Knowhow", 66], 
        ["Tetrakarn", 67]
    ], 
    "stats": {
        "ag": 72, 
        "dx": 100, 
        "hp": 600, 
        "lu": 79, 
        "ma": 48, 
        "mp": 263, 
        "st": 71
    }
}, 
{
    "name": "Ym",
    "affinities": [
        [SkillElement.Ailment, -1], 
        [SkillElement.Elec, -3], 
        [SkillElement.Fire, -4], 
        [SkillElement.Ice, 4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "wk"]
    ], 
    "level": 65, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Elec, "wk"], 
        [SkillElement.Ice, "ab"]
    ], 
    "skills": [
        ["Concentrate", 0], 
        ["Energy Drain", 68], 
        ["Mabufudyne", 0], 
        ["Sea of Chaos", 67]
    ], 
    "stats": {
        "ag": 65, 
        "dx": 58, 
        "hp": 515, 
        "lu": 78, 
        "ma": 99, 
        "mp": 343, 
        "st": 44
    }
}, 
{
    "name": "Yomotsu-Ikusa",
    "affinities": [
        [SkillElement.Ailment, -2], 
        [SkillElement.Gun, 3], 
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -2]
    ], 
    "ailments": [
        ["panic", "wk"]
    ], 
    "level": 37, 
    "race": "Brute", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Blast Arrow", 38], 
        ["Bloody Glee", 40], 
        ["Fang Breaker", 0], 
        ["Tathlum Shot", 0]
    ], 
    "stats": {
        "ag": 45, 
        "dx": 62, 
        "hp": 325, 
        "lu": 39, 
        "ma": 31, 
        "mp": 164, 
        "st": 37
    }
}, 
{
    "name": "Yoshitsune",
    "affinities": [
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, 1]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 36, 
    "race": "Famed", 
    "resists": [
        [SkillElement.Phys, "rs"]
    ], 
    "skills": [
        ["Bad Company", 0], 
        ["Endure", 41], 
        ["Javelin Rain", 0], 
        ["Life Surge", 40], 
        ["Light Mana Aid", 37]
    ], 
    "stats": {
        "ag": 42, 
        "dx": 46, 
        "hp": 435, 
        "lu": 35, 
        "ma": 37, 
        "mp": 85, 
        "st": 52
    }
}, 
{
    "name": "Yuki Jyorou",
    "affinities": [
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, -5], 
        [SkillElement.Ice, 4], 
        [SkillElement.Phys, -2]
    ], 
    "level": 30, 
    "race": "Femme", 
    "resists": [
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "rs"]
    ], 
    "skills": [
        ["Bufula", 0], 
        ["Ice Pleroma", 31], 
        ["Mabufula", 32], 
        ["Mamudo", 0]
    ], 
    "stats": {
        "ag": 33, 
        "dx": 30, 
        "hp": 199, 
        "lu": 40, 
        "ma": 53, 
        "mp": 183, 
        "st": 23
    }
}, 
{
    "name": "Yurlungur",
    "affinities": [
        [SkillElement.Fire, -5], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, 2]
    ], 
    "ailments": [
        ["mute", "wk"], 
        ["sick", "wk"]
    ], 
    "level": 29, 
    "race": "Snake", 
    "resists": [
        [SkillElement.Dark, "wk"], 
        [SkillElement.Elec, "rs"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Diarama", 30], 
        ["Ice Breath", 0], 
        ["Rapid Needle", 0], 
        ["Resist Force", 31]
    ], 
    "stats": {
        "ag": 37, 
        "dx": 48, 
        "hp": 293, 
        "lu": 32, 
        "ma": 26, 
        "mp": 110, 
        "st": 31
    }
}, 
{
    "name": "Zaccoum",
    "affinities": [
        [SkillElement.Ailment, 4], 
        [SkillElement.Fire, -1], 
        [SkillElement.Force, -2], 
        [SkillElement.Ice, 2], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["mute", "nu"], 
        ["poison", "nu"], 
        ["sick", "nu"]
    ], 
    "attack": "Phys x1-3, 1 enemy", 
    "level": 41, 
    "race": "Wood", 
    "resists": [
        [SkillElement.Dark, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Ice, "nu"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Acid Breath", 0], 
        ["Bloody Glee", 43], 
        ["Pandemic Bomb", 42], 
        ["Poison Breath", 0]
    ], 
    "stats": {
        "ag": 47, 
        "dx": 39, 
        "hp": 280, 
        "lu": 52, 
        "ma": 65, 
        "mp": 232, 
        "st": 30
    }
}, 
{
    "name": "Zhen",
    "affinities": [
        [SkillElement.Ailment, 6], 
        [SkillElement.Gun, -4], 
        [SkillElement.Support, 1]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "nu"]
    ], 
    "attack": "Phys x2, 1 enemy", 
    "level": 31, 
    "race": "Raptor", 
    "resists": [
        [SkillElement.Force, "rs"], 
        [SkillElement.Gun, "wk"]
    ], 
    "skills": [
        ["Pandemic Bomb", 0], 
        ["Poison Breath", 0], 
        ["Resist Dark", 33], 
        ["Sukunda", 32]
    ], 
    "stats": {
        "ag": 48, 
        "dx": 34, 
        "hp": 266, 
        "lu": 43, 
        "ma": 29, 
        "mp": 142, 
        "st": 34
    }
}, 
{
    "name": "Zhong Kui",
    "affinities": [
        [SkillElement.Ailment, 2], 
        [SkillElement.Force, -3], 
        [SkillElement.Light, 1], 
        [SkillElement.Phys, 3], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 2]
    ], 
    "ailments": [
        ["poison", "nu"], 
        ["sick", "nu"]
    ], 
    "level": 50, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Fire, "rs"], 
        [SkillElement.Force, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Berserker God", 52], 
        ["Imposing Stance", 0], 
        ["Javelin Rain", 0], 
        ["Null Nerve", 53], 
        ["Rakunda", 51]
    ], 
    "stats": {
        "ag": 52, 
        "dx": 50, 
        "hp": 596, 
        "lu": 74, 
        "ma": 38, 
        "mp": 182, 
        "st": 85
    }
}, 
{
    "name": "Zhu Tun She",
    "affinities": [
        [SkillElement.Light, -3], 
        [SkillElement.Phys, 1], 
        [SkillElement.Support, -2]
    ], 
    "level": 8, 
    "race": "Drake", 
    "resists": [
        [SkillElement.Elec, "wk"], 
        [SkillElement.Gun, "rs"], 
        [SkillElement.Ice, "rs"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Bufu", 9], 
        ["Lunge", 0]
    ], 
    "stats": {
        "ag": 16, 
        "dx": 12, 
        "hp": 143, 
        "lu": 14, 
        "ma": 8, 
        "mp": 45, 
        "st": 20
    }
}, 
{
    "name": "Zhu Yin",
    "affinities": [
        [SkillElement.Elec, -2], 
        [SkillElement.Fire, -2], 
        [SkillElement.Force, 2], 
        [SkillElement.Ice, 2], 
        [SkillElement.Phys, -7], 
        [SkillElement.Support, 1]
    ], 
    "level": 55, 
    "race": "Dragon", 
    "resists": [
        [SkillElement.Force, "nu"], 
        [SkillElement.Ice, "nu"]
    ], 
    "skills": [
        ["Dekaja", 57], 
        ["Fog Breath", 0], 
        ["Posumudi", 0], 
        ["Rakukaja", 0]
    ], 
    "stats": {
        "ag": 43, 
        "dx": 38, 
        "hp": 628, 
        "lu": 70, 
        "ma": 58, 
        "mp": 196, 
        "st": 79
    }
}, 
{
    "name": "Zombie Cop",
    "affinities": [
        [SkillElement.Ailment, 5], 
        [SkillElement.Dark, 2], 
        [SkillElement.Fire, -3], 
        [SkillElement.Gun, 1], 
        [SkillElement.Light, -3], 
        [SkillElement.Recovery, -5]
    ], 
    "ailments": [
        ["bind", "nu"], 
        ["sick", "nu"]
    ], 
    "attack": "Gun x1, 1 enemy", 
    "level": 17, 
    "race": "Undead", 
    "resists": [
        [SkillElement.Dark, "nu"], 
        [SkillElement.Fire, "wk"], 
        [SkillElement.Light, "wk"]
    ], 
    "skills": [
        ["Cough", 0], 
        ["Panic Voice", 18], 
        ["Rapid Needle", 0]
    ], 
    "stats": {
        "ag": 24, 
        "dx": 31, 
        "hp": 201, 
        "lu": 21, 
        "ma": 17, 
        "mp": 77, 
        "st": 20
    }
}, 
{
    "name": "Zouchouten",
    "affinities": [
        [SkillElement.Fire, 2], 
        [SkillElement.Gun, 2], 
        [SkillElement.Ice, -5], 
        [SkillElement.Phys, 2], 
        [SkillElement.Recovery, -2], 
        [SkillElement.Support, 1]
    ], 
    "level": 55, 
    "race": "Kishin", 
    "resists": [
        [SkillElement.Fire, "nu"], 
        [SkillElement.Ice, "wk"], 
        [SkillElement.Light, "rs"]
    ], 
    "skills": [
        ["Agidyne", 0], 
        ["Dream Fist", 0], 
        ["Grand Tack", 57], 
        ["Sukunda", 56]
    ], 
    "stats": {
        "ag": 56, 
        "dx": 35, 
        "hp": 429, 
        "lu": 52, 
        "ma": 95, 
        "mp": 336, 
        "st": 78
    }
}];

export const DEMON_MAP: Map<string, Demon> = 
    new Map(DEMONS.map(x => [x.name, x]));
