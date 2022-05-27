import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import GB from "../assets/GB.png";

export const Footer = () => {
  return (
    <>
      <Foot>
        <Description>
          <Connect>
            <Coll>
              <a href="#">
                <FaPhoneAlt />
              </a>
              <Number>
                <p>Call center</p>
                <h4>998 94 610 14 80</h4>
              </Number>
            </Coll>
            <Help>
              <a href="#">
                <FaRegEnvelope />
              </a>
              <Gmail>
                <p>Help center</p>
                <h4>e&apos;lon@gmail.com</h4>
              </Gmail>
            </Help>
          </Connect>
          <Language>
            <img src={GB} />
            <p>English</p>
            <a href="#">
              <FaArrowDown />
            </a>
          </Language>
        </Description>
        <hr />
        <p className="copy">Copyright &copy; 2000-2021 e&apos;lon.uz</p>
      </Foot>
    </>
  );
};

const Foot = styled(motion.div)`
  background: #192b58;
  color: #fff;
  hr {
    color: #e6e6e6;
    width: 1070px;
  }
  .copy{
    padding-left: 220px;
  }
`;

const Description = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
`;

const Connect = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    color: #192b58;
    background: #fff;
    padding: 15px;
    border-radius: 50px;
    height: 15px;
    font-size: 16px;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;
const Coll = styled(motion.div)`
  display: flex;
`;
const Number = styled(motion.div)`
  padding: 0 20px 0 10px;
  p {
    color: #a6f2f7;
    margin: 5px;
  }
`;
const Help = styled(motion.div)`
  display: flex;
`;
const Gmail = styled(motion.div)`
  padding-left: 10px;
  p {
    color: #a6f2f7;
    margin: 5px;
  }
`;
const Language = styled(motion.div)`
  display: flex;
  align-items: center;
  color: #fff;
  border: solid 1px #fff;
  padding: 0 20px;
  border-radius: 5px;
  a {
    color: #fff;
    padding-left: 5px;
  }
  p {
    padding-left: 5px;
  }
`;

export default Footer;
