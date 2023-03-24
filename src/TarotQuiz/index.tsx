import React from "react";
import { RESULTS, Result } from "./resource/index";
import { useQuiz } from "./hooks/index";
import QuizResult from "./QuizResult";
import { Prompt } from "./prompt";

const TarotQuiz: React.FC = () => {
  const { result, question, handleAnswer } = useQuiz();

  if (result) {
    const card = RESULTS.find(({ card }) => card === result);
    return <QuizResult result={card as Result} />;
  }

  return <Prompt question={question} handleAnswer={handleAnswer} />;
};

export default TarotQuiz;
