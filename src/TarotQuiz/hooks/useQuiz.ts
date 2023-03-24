import { useCallback, useState } from "react";
import { CARDS } from "../resource/index";
import { useQuestions } from "./useQuestions";
import { useScores } from "./useScores";

interface UseQuizHook {
  result: string | null;
  question: string;
  scores: Record<string, number>;
  handleAnswer: (answer: boolean | null) => void;
}

export const useQuiz = (): UseQuizHook => {
  const [done, setDone] = useState(false);
  const { result, scores, topScores, updateScores } = useScores();
  const [currentQuestion, nextQuestion] = useQuestions(setDone);
  const { question = "", cards = [] } = currentQuestion ?? {};

  const handleAnswer = useCallback(
    (answer: boolean | null) => {
      if (answer !== false) {
        const scoreIncrement = answer ? 1 : 0.5;
        updateScores(cards, scoreIncrement);
      }

      nextQuestion(topScores);
    },
    [cards, updateScores, topScores, nextQuestion]
  );

  const finalResult = done ? CARDS.THE_WORLD : result;

  return { result: finalResult, scores, question, handleAnswer };
};
