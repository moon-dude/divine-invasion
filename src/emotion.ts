export enum Mood {
  Aggressive,  // 🤬
  Devilish,  // 😈
  Passive,  // 😐
  Charmed,  // 😍
  Scared,  // 🥶
  Dead,  // 💀
}

export function mood_string(mood: Mood) {
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

// Player wants to move from one emotion to another.
// Player should have base actions and demon has bonus actions or maybe AI triggered ones.
// Player: 
// - threaten
// - peace offer
