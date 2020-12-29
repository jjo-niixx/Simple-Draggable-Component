import React, { useRef } from "react";
import styled from "styled-components";
import useDraggable from "./useDraggable";

export default function App() {
  const cardRef = useRef(null);

  useDraggable(cardRef);

  return <Box ref={cardRef}>BOX</Box>;
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 24px;
  font-weight: 900;
`;
