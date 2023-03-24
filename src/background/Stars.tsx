import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// const BG_COLOUR = "#5749aa";
const BG_COLOUR = "#3f3a8a";
const TILE_SIZE = 1;
const TILE_COUNT = 104;

const getGridCount = (pixels: number) => Math.floor(pixels / TILE_SIZE);
const range = (length: number) => Array.from({ length }, (_, index) => index);

const getRandomIndex = (index: number): number =>
  Math.floor(Math.random() * index);

type Shuffle = <T>(array: T[]) => T[];

const shuffle: Shuffle = (array) =>
  array
    .map((el, i): [any, number] => [el, getRandomIndex(i)])
    .reduce(
      (newArray, [_el, j], i) => {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        return newArray;
      },
      [...array]
    );

const glitter = keyframes`
    0%, 50%, 100% {
      transform: scale(0.8);
      opacity: 1;
    }
    25%, 75% {
      transform: scale(0.6);
      opacity: 0.4;
    }
  `;

const StarsWrapper = styled.div`
  font-size: 400px;
  height: 100vh;
  overflow: hidden;
  opacity: 0.5;
  opacity: 0.9;

  &:after {
    content: "";
    background: ${BG_COLOUR};
    background: linear-gradient(
      0deg,
      rgba(87, 73, 170, 1) 0%,
      rgba(87, 73, 170, 0.8634804263502276) 23%,
      rgba(87, 73, 170, 0.6449930313922444) 55%,
      rgba(87, 73, 170, 0) 100%
    );
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
`;

const BaseStar = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  overflow: hidden;
  animation: ${glitter} 6.5s linear 0s infinite normal;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${BG_COLOUR};
    top: -50%;
    left: 50%;
    position: absolute;
    border-radius: 50%;
  }

  &:after {
    left: -50%;
  }
`;

const StarBottom = styled(BaseStar)`
  width: 100%;
  height: 100%;
  background: none;
  animation: none;

  &:before,
  &:after {
    top: 50%;
  }
`;

const BigStar = styled(BaseStar)`
  width: 24px;
  height: 24px;
  background-color: #fffec2;
  animation: ${glitter} 4s linear 0s infinite normal;
`;

const defaultRect = document.createElement("div").getBoundingClientRect();
type DivRef = MutableRefObject<HTMLDivElement | null>;
const useBoundingClientRect = (): [DivRef, DOMRect] => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRect>(defaultRect);

  useEffect(() => {
    if (wrapperRef.current) {
      setRect(wrapperRef.current.getBoundingClientRect());
    }
  }, [setRect]);

  return [wrapperRef, rect];
};

const stars = range(TILE_COUNT);
export const Constellation = () => {
  const [wrapperRef, rect] = useBoundingClientRect();

  const [xpos, ypos] = useMemo(() => {
    const { width, height } = rect ?? {};
    const rows = getGridCount(width);
    const columns = getGridCount(height);
    return [shuffle(range(rows)), shuffle(range(columns))];
  }, [rect]);

  console.log("POS", ypos, stars.length);

  const displayStars = () =>
    ypos.length > 0 &&
    stars.map((value, index) => {
      return (
        <>
          <BaseStar
            key={`a-${index}`}
            data-key={`a-${value}`}
            data-top={ypos[index]}
            style={{
              top: ypos[index],
              left: xpos[index],
              animationDelay: `${(index * 80) % 2000}ms`
            }}
            children={<StarBottom />}
          />
          <BigStar
            data-key={`b-${index}`}
            key={`b-${value}`}
            data-top={ypos[index]}
            style={{
              top: ypos[index] * 3,
              left: xpos[index] * 3,
              animationDelay: `${(index * 80) % 2000}ms`
            }}
            children={<StarBottom />}
          />
        </>
      );
    });

  return <StarsWrapper ref={wrapperRef}>{displayStars()}</StarsWrapper>;
};
