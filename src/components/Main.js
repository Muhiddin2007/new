import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
// import {
//   dom,
//   mebel,
//   mehmonxona,
//   interyer,
//   garden,
//   qurilish,
//   jihozlar,
// } from "../service/data.js";
import { useSelector } from "react-redux";
import { getSelectValueState } from "./index";
import { Select } from "../components/Select";

const Main = () => {
  const { options } = useSelector(getSelectValueState);
  return (
    <>
      <Father>
        <Ortga>
          <a href="#">
            <span>
              <FaArrowLeft />
            </span>
            Ortga
          </a>
        </Ortga>
        <div className="soon">
          <div className="list-wrapper">
            <ul className="list-group">
              <li className="list-group-item">
                <Select options={options} />
              </li>
            </ul>
          </div>
        </div>
      </Father>
    </>
  );
};
const Father = styled.section`
  padding-bottom: 70px;
  .soon {
    width: 80%;
  }
  .list-wrapper {
    display: inline-flex;
    margin-top: 14px;
    margin-left: 137px;
    width: 97.5%;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .d-inline {
    display: inline-flex;
  }
  .d-none {
    display: none;
  }
`;

const Ortga = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    align-items: center;
    padding: 26px 19px;
    font-size: 13px;
  }
  a {
    color: #192b58;
    text-decoration: none;
    font-size: 20px;
    background: #f1f1f1;
    width: 75%;
    padding: 18px;
  }
`;

export default Main;
