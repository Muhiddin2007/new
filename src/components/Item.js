import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openSelect } from "../service/data";

const Option = styled.div``;

const Value = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 3px 10px;
  margin: 0 0 10px 0;
  border: none;
`;

const Item = ({ values }) => {
  const dispatch = useDispatch();
  function open(event) {
    const title = event.target.textContent;
    dispatch(openSelect({ title }));
  }

  return (
    <>
      <Option>
        {values?.map((value, index) => (
          <Value onClick={open} type="button" key={index}>
            {value}
          </Value>
        ))}
      </Option>
    </>
  );
};

export { Item };
