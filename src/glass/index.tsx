import styled from "styled-components";

const DivOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  position: relative;
  margin: 32px auto;
  /* margin-bottom: 16px; */

  /* Sass variables */
  --border: 1px;

  background-clip: padding-box !important;
  border: solid var(--border) transparent !important;
  border-radius: 6px;
  background: rgba(160, 160, 160, 0.05);

  /* Before pseudo-element */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: calc(-1 * var(--border)) !important;
    border-radius: inherit !important;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.4),
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.3)
    );
  }
`;

const Blur = styled.div`
  position: absolute;
  border-radius: inherit !important;
  z-index: -1;
  width: 100%;
  height: 100%;

  background-image: radial-gradient(
    farthest-corner at 50px 80px,
    rgba(87, 73, 170, 0.6),
    rgba(87, 73, 170, 0.8) 100%
  );
`;

const Glass = ({ children }) => {
  return (
    <DivOuter>
      <Blur />
      {children}
    </DivOuter>
  );
};

export default Glass;
