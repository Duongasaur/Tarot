import { useRef, useState } from "react";
import { CARDS, Question, QUESTIONS } from "../resource/index";

type RandomQuestion = { question: string; cards: string[] };

// function* randomQuestions(
//   questions: Question[]
// ): Generator<RandomQuestion | undefined, string, string[]> {
//   while (true) {
//     const filters: string[] = yield;
//     // const checkForCard = (card: string) => filters.includes(card);
//     // questions = questions.filter(({ cards }) => cards.some(checkForCard));

//     // Find the highest scoring cards
//     const scores = filters.reduce(
//       (acc, card) => ({ ...acc, [card]: (acc[card] || 0) + 1 }),
//       {} as Record<string, number>
//     );
//     const highScore = Math.max(...Object.values(scores));
//     const highestScoringCards = Object.keys(scores).filter(
//       (card) => scores[card] === highScore
//     );

//     // Update the questions array to only include questions for the highest-scoring cards
//     questions = questions.filter(({ cards }) =>
//       cards.some((card) => highestScoringCards.includes(card))
//     );

//     if (questions.length === 0) {
//       return "DONE";
//     }

//     for (const { variations, cards } of questions) {
//       const randomIndex = Math.floor(Math.random() * variations.length);
//       const [question] = variations.splice(randomIndex, 1);

//       console.log("Variations before splice:", variations);
//       console.log("Random index:", randomIndex);
//       console.log("Question after splice:", question);

//       yield { question, cards };

//       console.log(questions.length);
//     }
//   }
// }

function* randomQuestions(
  questions: Question[]
): Generator<RandomQuestion | undefined, string, string[]> {
  console.log("sup", questions);
  while (true) {
    const filters: string[] = yield;
    const checkForCard = (card: string) => filters.includes(card);
    const stillVariations = (variations: string[]) => variations.length > 0;
    questions = questions.filter(
      ({ cards, variations }) =>
        cards.some(checkForCard) && stillVariations(variations)
    );
    console.log("##########################", questions);

    const questionsLength = questions
      .map(({ variations: { length } }) => length)
      .reduce((count, length) => count + length, 0);

    // console.log(questions.length);
    if (questionsLength === 0) {
      return "DONE";
    }

    for (const { variations, cards } of questions) {
      const randomIndex = Math.floor(Math.random() * variations.length);
      const [question] = variations.splice(randomIndex, 1);
      yield { question, cards };
    }
  }
}

export const useQuestions = (
  complete: (val: boolean) => void
): [RandomQuestion | undefined, (filter: string[]) => void] => {
  const questionsIterator = useRef(randomQuestions(QUESTIONS)).current;
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    questionsIterator.next(Object.values(CARDS));
    return questionsIterator.next(Object.values(CARDS)).value;
  });

  const nextQuestion = (filter: string[]) => {
    const { value: question, done } = questionsIterator.next(filter);

    if (done) {
      console.log("DONE");
      complete(true);
    }

    if (!question) {
      nextQuestion(filter);
    } else {
      console.log("question", question);
      setCurrentQuestion(question);
    }
  };

  return [currentQuestion as RandomQuestion, nextQuestion];
};
