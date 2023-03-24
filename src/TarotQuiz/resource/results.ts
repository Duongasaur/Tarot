import { CARDS } from "./cards";

export interface Result {
  card: string;
  traits: string;
  description: string;
  image: string;
}

export const RESULTS: Result[] = [
  {
    card: CARDS.THE_FOOL,
    traits: "spontaneous, carefree, adventurous",
    description:
      "The Fool is often seen as a free spirit, unencumbered by the limitations of society and convention. They embody qualities like spontaneity, carefreeness, and a thirst for adventure.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
  },
  {
    card: CARDS.THE_MAGICIAN,
    traits: "manipulative, creative, resourceful",
    description:
      "The Magician represents the embodiment of creativity and resourcefulness. They have the ability to make things happen and have a strong sense of control over their lives. They may also be perceived as manipulative.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
  },
  {
    card: CARDS.THE_HIGH_PRIESTESS,
    traits: "intuitive, mysterious, introspective",
    description:
      "The High Priestess embodies the qualities of intuition and introspection. She is often seen as mysterious and difficult to understand, with a deep connection to the unconscious mind.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg"
  },
  {
    card: CARDS.THE_EMPRESS,
    traits: "nurturing, creative, abundant",
    description:
      "The Empress represents the essence of femininity and nurturing. She embodies creativity and abundance, and is often associated with motherhood, nature, and the cycles of life.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg"
  },
  {
    card: CARDS.THE_EMPEROR,
    traits: "authoritative, structured, responsible",
    description:
      "The Emperor represents authority, structure, and responsibility. He embodies qualities like strength, control, and stability, and is often associated with fatherhood and the establishment of order.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg"
  },
  {
    card: CARDS.THE_HIEROPHANT,
    traits: "traditional, spiritual, wise",
    description:
      "The Hierophant represents tradition, spirituality, and wisdom. He embodies a deep connection to the divine, and is often seen as a mentor or spiritual guide.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg"
  },
  {
    card: CARDS.THE_LOVERS,
    traits: "romantic, passionate, indecisive",
    description:
      "The Lovers card represents romantic love, passion, and connection. They embody qualities like desire, commitment, and a deep emotional bond with another person. At the same time, they may also be perceived as indecisive.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg"
  },

  {
    card: CARDS.THE_CHARIOT,
    traits: "determined, driven, competitive",
    description:
      "The Chariot represents determination and drive. They embody qualities like ambition, focus, and a competitive spirit, and are often seen as relentless in their pursuit of their goals.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg"
  },
  {
    card: CARDS.STRENGTH,
    traits: "courageous, confident, patient",
    description:
      "Strength represents physical and emotional strength, as well as courage and confidence. They embody qualities like determination, perseverance, and the ability to face challenges with grace and patience.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg"
  },
  {
    card: CARDS.THE_HERMIT,
    traits: "introspective, wise, solitary",
    description:
      "The Hermit represents introspection and a search for inner wisdom. They embody qualities like solitude, detachment, and a deep understanding of the self. They may be perceived as wise, but also as aloof or detached from others.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg"
  },
  {
    card: CARDS.WHEEL_OF_FORTUNE,
    traits: "cyclical, unpredictable, fateful",
    description:
      "The Wheel of Fortune represents the cyclical nature of life and the unpredictable forces that shape our destiny. They embody qualities like fate, change, and the understanding that life is always in motion.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"
  },
  {
    card: CARDS.JUSTICE,
    traits: "fair, balanced, rational",
    description:
      "Justice represents fairness, balance, and rationality. They embody qualities like impartiality, objectivity, and a commitment to finding the truth. They may also be perceived as uncompromising or rigid in their beliefs.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg"
  },
  {
    card: CARDS.THE_HANGED_MAN,
    traits: "suspended, contemplative, sacrificing",
    description:
      "The Hanged Man represents a state of suspension and contemplation. They embody qualities like sacrifice, patience, and a willingness to let go of old ways of thinking. They may also be perceived as passive or indecisive.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg"
  },
  {
    card: CARDS.DEATH,
    traits: "transformative, renewal, unstoppable",
    description:
      "Death represents transformation and renewal. They embody qualities like change, the cyclical nature of life, and the unstoppable forces that shape our destiny. They may also be perceived as frightening or ominous.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg"
  },

  {
    card: CARDS.TEMPERANCE,
    traits: "balanced, moderating, harmonious",
    description:
      "Temperance represents balance and moderation. They embody qualities like harmony, self-control, and the ability to find balance in all things. They may also be perceived as calming or reserved.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg"
  },
  {
    card: CARDS.THE_DEVIL,
    traits: "tempting, addictive, unrestrained",
    description:
      "The Devil represents temptation and addiction. They embody qualities like unrestrained desires, materialism, and a lack of control. They may also be perceived as seductive or dangerous.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg"
  },
  {
    card: CARDS.THE_TOWER,
    traits: "unstable, disruptive, catastrophic",
    description:
      "The Tower represents instability and disruption. They embody qualities like sudden change, upheaval, and the potential for catastrophe. They may also be perceived as violent or terrifying.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg"
  },
  {
    card: CARDS.THE_STAR,
    traits: "hopeful, rejuvenating, inspiring",
    description:
      "The Star represents hope and rejuvenation. They embody qualities like inspiration, optimism, and a sense of renewal. They may also be perceived as peaceful or nurturing.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg"
  },
  {
    card: CARDS.THE_MOON,
    traits: "uncertain, imaginative, illusory",
    description:
      "The Moon represents uncertainty and the imagination. They embody qualities like illusion, unpredictability, and a connection to our subconscious. They may also be perceived as mysterious or dreamy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tarot_Moon.jpg"
  },
  {
    card: CARDS.THE_SUN,
    traits: "optimistic, joyful, illuminating",
    description:
      "The Sun represents optimism and joy. They embody qualities like illumination, warmth, and a sense of happiness and contentment. They may also be perceived as radiant or playful.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg"
  },
  {
    card: CARDS.JUDGEMENT,
    traits: "evaluative, decisive, accountable",
    description:
      "Judgment represents evaluation and decision-making. They embody qualities like accountability, responsibility, and the ability to make difficult choices. They may also be perceived as critical or judgmental.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg"
  },
  {
    card: CARDS.THE_WORLD,
    traits: "accomplished, complete, fulfilled",
    description:
      "The World represents accomplishment and completion. They embody qualities like fulfillment, satisfaction, and a sense of unity with the universe. They may also be perceived as confident or content.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg"
  }
];
