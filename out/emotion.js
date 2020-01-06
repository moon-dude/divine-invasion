"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mood;
(function (Mood) {
    Mood[Mood["Aggressive"] = 0] = "Aggressive";
    Mood[Mood["Devilish"] = 1] = "Devilish";
    Mood[Mood["Passive"] = 2] = "Passive";
    Mood[Mood["Charmed"] = 3] = "Charmed";
    Mood[Mood["Scared"] = 4] = "Scared";
    Mood[Mood["Dead"] = 5] = "Dead";
})(Mood = exports.Mood || (exports.Mood = {}));
function mood_string(mood) {
    switch (mood) {
        case Mood.Aggressive:
            return "🤬";
        case Mood.Devilish:
            return "😈";
        case Mood.Passive:
            return "😐";
        case Mood.Charmed:
            return "😍";
        case Mood.Scared:
            return "🥶";
        case Mood.Dead:
            return "💀";
    }
}
exports.mood_string = mood_string;
// Player wants to move from one emotion to another.
// Player should have base actions and demon has bonus actions or maybe AI triggered ones.
// Player: 
// - threaten
// - peace offer
