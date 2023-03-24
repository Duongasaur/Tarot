import React from "react";
import styled, { keyframes } from "styled-components";

const glowing = keyframes`
  from {
    box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.1), 0px 0px 100px 4px #fcfbde;
  }
  to {
    box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.1), 0px 0px 140px 20px #fcfbde;
  }
`;

const MoonBase = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 10%;
  width: 170px;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const MoonShape = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ddd;
  position: relative;
  overflow: hidden;
  animation: ${glowing} 1.6s linear infinite alternate;
`;

const Crater = styled.div<{ size: number; top: number; left: number }>`
  background-color: #bbb;
  opacity: 0.5;
  position: absolute;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const craters = [
  { id: 1, size: 20, top: 20, left: 60 },
  { id: 2, size: 10, top: 35, left: 10 },
  { id: 3, size: 15, top: 55, left: 40 },
  { id: 4, size: 6, top: 40, left: 60 },
  { id: 5, size: 25, top: 10, left: 10 },
  { id: 6, size: 4, top: 50, left: 20 }
];

export const Moon = () => {
  return (
    <MoonBase>
      <MoonShape>
        {craters.map(({ id, size, top, left }) => (
          <Crater key={id} size={size} top={top} left={left} />
        ))}
      </MoonShape>
    </MoonBase>
  );
};
