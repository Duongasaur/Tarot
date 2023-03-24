import { CARDS } from "./cards";

export type Question = {
  set: string;
  variations: string[];
  cards: string[];
};

export const QUESTIONS: Question[] = [
  {
    set: "The Ruler",
    variations: [
      "Do you enjoy taking charge and leading others?",
      "Do you consider yourself organized and good at decision-making?",
      "Do you prefer structure and order in your life?"
    ],
    cards: ["The Emperor", "The Hierophant", "Justice", "Temperance"]
  },
  {
    set: "The Innovator",
    variations: [
      "Do you thrive on creativity and innovation?",
      "Do you often think outside the box?",
      "Are you an early adopter of new technology or trends?"
    ],
    cards: ["The Magician", "The Star", "The Tower", "The World"]
  },
  {
    set: "The Rebel",
    variations: [
      "Do you often question authority and societal norms?",
      "Do you seek out unconventional paths in life?",
      "Are you drawn to rebellion and counterculture?"
    ],
    cards: ["The Fool", "Death", "The Devil", "The Hanged Man"]
  },
  {
    set: "The Protector",
    variations: [
      "Do you prioritize the well-being of your loved ones?",
      "Do you often go out of your way to help others?",
      "Do you find comfort in routine and stability?"
    ],
    cards: ["The Chariot", "Strength", "The Sun", "The Moon"]
  },
  {
    set: "The Guide",
    variations: [
      "Do people often seek your advice or guidance?",
      "Are you drawn to meditation, mindfulness, or self-reflection?",
      "Do you trust your intuition more than the opinions of others?"
    ],
    cards: ["The High Priestess", "The Hermit", "Judgement", "The Empress"]
  },
  {
    set: "The Lover",
    variations: [
      "Do you express your love and appreciation openly?",
      "Are you a hopeless romantic?",
      "Do you enjoy creating beautiful spaces and experiences?"
    ],
    cards: ["The Lovers", "Wheel of Fortune", "Justice", "The Hanged Man"]
  },
  {
    set: "The Seeker",
    variations: [
      "Are you always searching for deeper meaning in life?",
      "Do you enjoy exploring new cultures and spiritual practices?",
      "Do you embrace personal growth and self-discovery?"
    ],
    cards: ["The Fool", "The Star", "The Tower", "The Moon"]
  },
  {
    set: "The Transformer",
    variations: [
      "Do you adapt easily to change?",
      "Are you open to personal transformation and growth?",
      "Do you believe in reinventing yourself and leaving the past behind?"
    ],
    cards: ["Death", "The Devil", "The World", "The Sun"]
  },
  {
    set: "The Mentor",
    variations: [
      "Do you have a thirst for knowledge and wisdom?",
      "Do you enjoy sharing your insights with others?",
      "Do you value learning from the experiences of others?"
    ],
    cards: ["The Hierophant", "The Hermit", "The Emperor", "The Empress"]
  },
  {
    set: "The Champion",
    variations: [
      "Do you stay focused on your goals, no matter the obstacles?",
      "Do you believe in the power of hard work and perseverance?",
      "Do you see setbacks as opportunities to learn and grow?"
    ],
    cards: ["The Chariot", "Strength", "Judgement", "The Magician"]
  },
  {
    set: "The Visionary",
    variations: [
      "Do you often dream of a better future?",
      "Do you believe in the power of visualization and manifestation?",
      "Are you drawn to creative pursuits and self-expression?"
    ],
    cards: [
      "The High Priestess",
      "The Lovers",
      "Temperance",
      "Wheel of Fortune"
    ]
  }
];

export const SCORES = {
  [CARDS.THE_FOOL]: 0,
  [CARDS.THE_MAGICIAN]: 0,
  [CARDS.THE_HIGH_PRIESTESS]: 0,
  [CARDS.THE_EMPRESS]: 0,
  [CARDS.THE_EMPEROR]: 0,
  [CARDS.THE_HIEROPHANT]: 0,
  [CARDS.THE_LOVERS]: 0,
  [CARDS.THE_CHARIOT]: 0,
  [CARDS.STRENGTH]: 0,
  [CARDS.THE_HERMIT]: 0,
  [CARDS.WHEEL_OF_FORTUNE]: 0,
  [CARDS.JUSTICE]: 0,
  [CARDS.THE_HANGED_MAN]: 0,
  [CARDS.DEATH]: 0,
  [CARDS.TEMPERANCE]: 0,
  [CARDS.THE_DEVIL]: 0,
  [CARDS.THE_TOWER]: 0,
  [CARDS.THE_STAR]: 0,
  [CARDS.THE_MOON]: 0,
  [CARDS.THE_SUN]: 0,
  [CARDS.JUDGEMENT]: 0,
  [CARDS.THE_WORLD]: 0
};
