import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSelectValueState } from "./index";

const Content = styled.span``;

const Chip = () => {
  const { chips } = useSelector(getSelectValueState);
  return (
    <>
      <Chip.Container>
        <Content>Ortga</Content>
        {chips?.map((сhip) => (
          <Content key={сhip}>{сhip}</Content>
        ))}
      </Chip.Container>
    </>
  );
};

Chip.Container = styled.div``;

export { Chip };
