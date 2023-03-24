import React from "react";
import styled from "styled-components";
import TarotQuiz from "./TarotQuiz";
import Glass from "./glass";

const Button = styled.button`
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 8px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  height: 52px;
  width: 360px;
  max-width: 80vw;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  opacity: 0.9;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
    opacity: 0.85;
  }

  &:active {
    outline: 0;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px;
  }
`;

const Heading = styled.h1`
  font-family: cursive;
  font-size: 36px;
  margin-bottom: 0;
  color: #c1b0ff;
  text-shadow: -1px -1px 0 #674dc4, 1px -1px 0 #674dc4, -1px 1px 0 #674dc4,
    1px 1px 0 #674dc4;
`;

const SubHeading = styled.div`
  font-size: 16px;
  /* font-weight: bold; */
  color: aquamarine;
  font-style: italic;
  color: #9ff5d8;
  opacity: 0.8;
  margin: 0;
`;

const DivLanding = styled.div`
  position: relative;
  margin-top: calc(50vh - 300px);
  padding: 8px;
  z-index: 1;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  width: 140px;
  height: 140px;
  opacity: 0;

  transition: opacity 3s ease-in, transform 0.8s ease-in-out 0.8s;
`;

// window.onload = () => {
window.scrollTo(0, 200); // Replace 200 with the desired scroll position
// };

const Landing: React.FC = () => {
  const [start, setStart] = React.useState(false);

  const onLoadLogo = (e: any) => {
    e.target.style.opacity = "0.8";
    e.target.style.transform = "rotateY(-720deg)";
    // window.scrollTo(0, 0);
  };

  return (
    <DivLanding>
      {start ? (
        <Glass>
          <TarotQuiz />
        </Glass>
      ) : (
        <div>
          <Heading>My Tarot Persona</Heading>
          <SubHeading>Uncover Your Inner Tarot Card</SubHeading>
          <Logo onLoad={onLoadLogo} src="/logo.png" alt="" />
          <Button onClick={() => setStart(true)}>Begin Quiz</Button>
        </div>
      )}
    </DivLanding>
  );
};

export default Landing;
