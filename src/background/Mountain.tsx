import { MountainBottom, SVG } from "./svg";
import styled from "styled-components";

const DivWrapper = styled.div`
  position: fixed;
  bottom: 0;
  /* top: 80vh; */
  width: 100vw;
  z-index: 2;
`;

const Bottom = styled.img`
  position: absolute;
  top: -10vh;
  left: 0;
  top: -24vw;
  min-height: 10vh;
  z-index: -1;
  opacity: 0.5;
  background: linear-gradient(
    0deg,
    rgba(87, 73, 170, 1) 0%,
    rgba(87, 73, 170, 1) 88%,
    rgba(87, 73, 170, 0) 100%
  );
  object-fit: "fill";
`;

const StyledTop = styled(SVG)`
  position: absolute;
  top: -24vw;
  left: 0;
  width: 100vw;
  min-height: 10vh;

  /* max-height: 100px; */
  object-fit: "fill";

  /* height: 100%; */
  opacity: 1;
`;

export const Mountain = () => {
  return (
    <DivWrapper>
      <StyledTop />
      <Bottom src={MountainBottom} alt="" />

      <img src={StyledTop} alt="" />
    </DivWrapper>
  );
};
