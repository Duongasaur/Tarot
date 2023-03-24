import React, { ReactNode } from "react";

import styled from "styled-components";

const PQuestion = styled.p`
  max-width: 333px;
  min-height: 48px;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  padding: 16px;
  padding-top: 0;
  margin-bottom: 0;
  color: #141414;
`;

const SpanItalic = styled.span`
  font-style: italic;
`;
const SpanQ = styled.span`
  position: absolute;
  left: -16px;
  top: -16px;
  color: gold;
  font-family: auto;
  vertical-align: super;
  font-size: 33px;
  margin-right: 4px;
  line-height: 1px;

  &:after {
    content: ":";
    position: absolute;
    top: 10px;
    font-size: 18px;
  }
`;

const SpanRelative = styled.span`
  position: relative;
  display: inline-block;

  width: 16px;
`;

const Question: React.FC<{ children: ReactNode }> = ({ children }) => (
  <PQuestion>
    <SpanRelative>
      <SpanQ>Q</SpanQ>
    </SpanRelative>
    <SpanItalic>{children}</SpanItalic>
  </PQuestion>
);

const DivButtons = styled.div`
  display: grid;

  grid-gap: 8px;
  justify-content: center;
  grid-template-columns: 80px 80px 80px;

  button {
    font-size: 14px;
    border: 2px solid grey;
    border-radius: 4px;
    opacity: 0.8;
    /* border-width: 2px;
    border-radius: 4px; */
    /* font-weight: bold; */
    /* color: grey; */
  }

  button::first-letter {
    font-weight: bold;
  }
  /* height: 24px; */
`;

const Emoji = styled.div`
  font-size: 16px;
`;

const BUTTONS = [
  {
    answer: "Yes",
    emoji: "😊",
    value: true
  },

  {
    answer: "Unsure",
    emoji: "😊",
    value: null
  },
  {
    answer: "No",
    emoji: "😊",
    value: true
  }
];

interface Props {
  question: string;
  handleAnswer: (answer: boolean | null) => void;
}

export const Prompt: React.FC<Props> = ({ question, handleAnswer }: Props) => {
  return (
    <div>
      <Question>{question}</Question>
      <DivButtons>
        {BUTTONS.map(({ answer, emoji, value }) => (
          <button key={answer} onClick={() => handleAnswer(value)}>
            <Emoji role="img">{emoji}</Emoji>
            {answer}
          </button>
        ))}
      </DivButtons>
    </div>
  );
};
