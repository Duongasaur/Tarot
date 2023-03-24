import { useCallback, useState } from "react";
import { CARDS } from "../resource/index";

const BLANK_SCORES = Object.fromEntries(
  Object.values(CARDS).map((_: string) => [_, 0])
);

const highestScore = (scores: Record<string, number>) =>
  Math.max(...Object.values(scores));

const getHighestScoringCard = (
  highestScore: number,
  scores: Record<string, number>
): string | null => {
  const keysWithHighestScore = Object.keys(scores).filter(
    (key) => scores[key] === highestScore
  );
  return keysWithHighestScore.length === 1 ? keysWithHighestScore[0] : null;
};

type R = {
  result: string | null;
  scores: Record<string, number>;
  topScores: string[];
  updateScores: (cards: string[], increment: number) => void;
};

export const useScores = (): R => {
  const [scores, setScores] = useState(BLANK_SCORES);

  const updateScores = useCallback(
    (cards: string[], scoreIncrement: number = 1) => {
      setScores((prevScores) => {
        const newScores = { ...prevScores };
        cards.forEach((card) => {
          newScores[card] += scoreIncrement;
        });
        return newScores;
      });
    },
    []
  );

  const highScore = highestScore(scores);
  const scoresArr = Object.entries(scores);
  const topScores = scoresArr
    .filter(([_card, score]) => score === highScore)
    .map(([card]) => card);

  const result = getHighestScoringCard(highScore, scores);

  return { result, scores, topScores, updateScores };
};
