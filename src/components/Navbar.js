import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaUser, FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Header>
        <Elon>
          <h4>e'lon.uz</h4>
        </Elon>
        <User>
          <a href="#">
            <FaUser />
          </a>
          <p>Ixtiyorjon Xakimov</p>
          <a href="#">
            <FaArrowDown />
          </a>
        </User>
      </Header>
    </>
  );
};

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #192b58;
`;
const Elon = styled(motion.div)`
  h4 {
    background: #ffc700;
    color: #5b4906;
    padding: 5px 15px;
    border-radius: 15px 0;
  }
`;
const User = styled(motion.div)`
  display: flex;
  align-items: center;
  p {
    font-size: 14px;
    color: #fff;
    margin: 10px;
  }
  a {
    color: #fff;
  }
`;
export default Navbar;
