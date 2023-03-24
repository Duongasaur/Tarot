import React from "react";
import styled from "styled-components";
import { Result } from "./resource";

interface ResultProps {
  result: Result;
}

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  max-width: 400px;

  /* @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  } */
`;

const Image = styled.img`
  width: 100px;
  /* margin-bottom: 16px; */

  /* @media (min-width: 700px) {
    margin-right: 16px;
  } */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const CardName = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Traits = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const QuizResult: React.FC<ResultProps> = ({ result }) => {
  return (
    <ResultContainer>
      <Image src={result.image} alt={result.card} />
      <TextContainer>
        <CardName>{result.card}</CardName>
        <Traits>{result.traits}</Traits>
        <Description>{result.description}</Description>
      </TextContainer>
    </ResultContainer>
  );
};

export default QuizResult;
