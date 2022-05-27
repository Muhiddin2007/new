import React from "react";
import styled from "styled-components";
import { Item } from "./Item";
import { vector } from "./imgData";
import { Link } from "react-router-dom";

const Selects = styled.div`
  display: flex;
`;

const Select = ({ options }) => {
  function renderItem(element) {
    const isLastOpenSelect = element.isOpenSelect && element.values === 0;
    if (isLastOpenSelect)
      return (
        <Check>
          {vector.map((image) => (
            <img key={image.img} src={image.img} />
          ))}
          <h3>
            Kategoriya tanlash <br /> <span>tugallandi.</span>
          </h3>
          <Link to="/elon">
            <button className="btn">Davom etish</button>
          </Link>
        </Check>
      );
    {
      console.log(element);
    }

    return element.isOpenSelect ? (
      <Item key={element.id} values={element.values} />
    ) : null;
  }
  return (
    <>
      <Container>
        <Selects>{options?.map((element) => renderItem(element))}</Selects>
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Check = styled.div`
  margin-top: 14px;
  margin-left: 19px;
  width: 212px;
  height: 277px;
  background: #f1f1f1;
  padding-left: 47px;
  padding-top: 100px;
  img {
    margin-left: 44px;
  }
  span {
    margin-left: 33px;
  }
  .btn {
    background: #406bdb;
    width: 174px;
    height: 44px;
    border-radius: 4px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.9;
  }
`;
export { Select };
