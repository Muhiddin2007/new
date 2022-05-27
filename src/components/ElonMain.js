import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Left from "../assets/Vector.png";
import Warn from "../assets/alert-circle.png";
import { photos } from "./imgData";
import off from "../assets/Off.png";
// import { Chip } from "./Chip";

const ElonMain = ({ OrtgaTitle, chips }) => {
  return (
    <>
      <Dad>
        <Father>
          <h2>E&apos;lon joylashtirish</h2>
        </Father>
        <Category>
          <p>Kategoriya</p>
          <img src={Left} />
          <p>Uy va Bog&apos;</p>
          <img src={Left} />
          <p>
            {chips?.map((chip) => (
              <p key={chip}>{chip}</p>
            ))}
          </p>
        </Category>
        <Say>
          <h3>Bizga e&apos;loningiz haqida gapirib bering </h3>
          <h5>Sarlavha kiriting</h5>
          <Circle>
            <span>
              <form>
                <input
                  type="text"
                  placeholder="Misol uchun: 2 xonali uy sotiladi hamma hujjatlari joyida"
                />
                <img src={Warn} />
              </form>
            </span>
            <p>
              Xaridorlarni jalb qilish uchun aniq va qiziqarli sarlavhani
              <br />
              o&apos;ylab ko&apos;ring. Sarlavhada yozilmaydigan bir nechta{" "}
              <br />
              narsalar mavjud: bosh harflar, telefon raqamlar, email
              <br />
              va havolalar
            </p>
          </Circle>
        </Say>

        <Photo>
          <h3>Bizga e&apos;loningiz haqida gapirib bering </h3>
          <p>
            Birinchi surat e&apos;loningiz asosiy rasmi bo&apos;ladi. Suratlar
            tartibini ularning ustiga bosib va olib o&apos;tish bilan
            o&apos;zgartirishingiz mumkin.
          </p>
          <h5>Rasmlarni qo&apos;shish</h5>
          <Images>
            {photos.map((photo, index) => (
              <img key={index} src={photo.img} />
            ))}
          </Images>
        </Photo>
        <Tavsif>
          <h2>Tavsif</h2>
          <form>
            <input
              type="text"
              placeholder="O'zingizni shu elonni ko'rayotgan odam o'rniga qo'ying va tavsif yozing"
            />
            <img src={Warn} />
          </form>
          <Write>
            <p>Yana kamida 80 ta belgi yozing</p>
            <span>
              <p>0/9000</p>
            </span>
          </Write>
        </Tavsif>
        <Price>
          <Narx>
            <span>
              <h5>Narx</h5>
            </span>
            <h5>Bepul</h5>
            <h5 className="change">Ayirboshlash</h5>
          </Narx>
          <Value>
            <h3>Narx</h3>
            <Flex>
              <form>
                <input type="number" />
              </form>
              <form>
                <select>
                  <option>so'm</option>
                  <option>usd</option>
                </select>
              </form>
            </Flex>
          </Value>
          <Agree>
            <p>Kelishuv asosida</p>
            <img src={off} />
          </Agree>
          <h1>Qo'shimcha ma'lumot</h1>
          <h4>Jihoz turi</h4>
          <form className="form">
            <select>
              <option>Yumshoq mebel</option>
              <option>Shkaflar / Stenkalar</option>
              <option>Stollar / Stullar</option>
              <option>Mehmonxona uchun boshqa mebellar</option>
            </select>
          </form>
          <New>
            <h4>F/b</h4>
            <span>
              <h4>Yangi</h4>
            </span>
          </New>
        </Price>
        <About>
          <h2>Aloqa uchun ma'lumotlar</h2>
          <h4>Joylashuv</h4>
          <form>
            <input type="text" placeholder="Shahar yoki pochta indeksi" />
          </form>
          <h4>Email manzili</h4>
          <form>
            <input type="text" />
          </form>
          <h4>Telefon raqami</h4>
          <form>
            <input type="number" />
          </form>
        </About>
        <Agreement>
          <p>
            <input type="checkbox" />
            Mening qurilmaga elektron aloqa va telekommunikatsiya orqali E'lon
            Group'dan, tegishli tashkilotlar va ularning sheriklaridan tijorat,
            hamda marketing xabarlarini (masalan, yangiliklar byulleteni, SMS)
            olishga rozilik bildiraman.
          </p>
        </Agreement>
        <Submit>
          <h3>Ko'rib chiqish</h3>
          <span>
            <h3>E'lon joylashtirish</h3>
          </span>
        </Submit>
      </Dad>
    </>
  );
};
const Dad = styled(motion.div)`
  width: 75%;
`;

const Father = styled(motion.div)`
  display: flex;
  h2 {
    padding-left: 115px;
    color: #192b58;
  }
  .d-inline {
    display: inline;
  }
  .d-none {
    display: none;
  }
`;
const Category = styled(motion.div)`
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: 98px;
  img {
    width: 8px;
    height: 8px;
    padding-left: 5px;
  }
  p {
    color: #7a7a7a;
    padding-left: 17px;
  }
  span p {
    color: #192b58;
  }
`;
const Say = styled(motion.div)`
  padding-top: 20px;
  h3 {
    padding-left: 110px;
  }
  h5 {
    padding-left: 110px;
    color: #7a7a7a;
  }
  span h5 {
    color: #d1d4db;
  }
  p {
    background: #4572e5;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    font-size: 13px;
  }
`;
const Circle = styled(motion.div)`
  padding-left: 75px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    margin-right: 30px;
    position: relative;
    input {
      padding: 13px 271px 13px 16px;
      background: #f8f8fa;
      border: #f8f8fa;
      border-radius: 4px;
      width: 362px;
      ::placeholder {
        color: #d1d4db;
      }
    }
    img {
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
  }
  img {
    width: 15px;
    height: 15px;
    padding-top: 22.5px;
  }
`;

const Photo = styled(motion.div)`
  padding-left: 105px;
  h3 {
    color: #242424;
  }
  p {
    color: #7a7a7a;
  }
  h5 {
    background: #f7f8fa;
    width: 128px;
    height: 69px;
    padding-top: 40px;
    padding-left: 15px;
    margin-left: 5px;
  }
`;
const Images = styled(motion.div)`
  width: 110%;
  img {
    padding: 5px;
  }
`;
const Tavsif = styled(motion.div)`
  position: relative;
  padding-left: 100px;
  align-items: center;
  input {
    background: #f7f8fa;
    border: none;
    padding: 5px 0px 320px 5px;
    width: 640px;
    ::placeholder {
      color: #7a7a7a;
    }
  }
  img {
    position: absolute;
    right: 520px;
    margin-top: 5px;
  }
`;
const Write = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  span {
    padding-right: 510px;
  }
`;
const Price = styled(motion.div)`
  h1 {
    padding-left: 98px;
  }
  h4 {
    padding-left: 98px;
  }
  select {
    border: none;
    width: 272px;
    height: 40px;
    padding-left: 15px;
    background: #f7f8fa;
  }
  .bottom img {
    position: absolute;
  }
  .form {
    padding-left: 98px;
  }
`;
const Narx = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 250px;
  padding-left: 95px;
  span h5 {
    color: #fff;
    background: #192b58;
    width: 36px;
    height: 17px;
    padding: 6px 12px;
  }
  h5 {
    background: #f7f8fa;
    width: 36px;
    height: 17px;
    padding: 6px 12px;
  }
  .change {
    width: 66px;
    height: 22px;
    padding: 6px 12px;
  }
`;
const Value = styled(motion.div)`
  padding-bottom: 30px;
  h3 {
    padding-left: 100px;
  }
  input {
    background: #f7f8fa;
    height: 40px;
    width: 254px;
  }
  select {
    background: #f7f8fa;
    border: none;
    width: 100px;
    height: 40px;
  }
`;
const Flex = styled(motion.div)`
  padding-left: 98px;
  input {
    border: none;
  }
  form {
    display: inline;
    margin-right: 10px;
  }
`;
const Agree = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  img {
    padding-top: 15px;
    width: 32px;
    height: 18px;
    padding-right: 660px;
  }
`;
const New = styled(motion.div)`
  padding-left: 98px;
  display: inline-flex;
  h4 {
    background: #f7f8fa;
    width: 36px;
    height: 22px;
    padding: 6px 12px;
    border-radius: 4px;
  }
  span h4 {
    margin-left: 10px;
    width: 36px;
    height: 22px;
    padding: 6px 12px;
    background: #192b58;
    color: #fff;
  }
`;
const About = styled(motion.div)`
  padding-left: 98px;
  input {
    background: #f7f8fa;
    border: none;
    width: 362px;
    height: 40px;
    padding-left: 5px;
  }
`;
const Agreement = styled(motion.div)`
  width: 100%;
  padding-left: 98px;
  input {
    display: inline;
  }
`;
const Submit = styled(motion.div)`
  display: flex;
  justify-content: end;
  width: 125%;
  h3 {
    color: #192b58;
    border: 1px solid #192b58;
    width: 120px;
    height: 30px;
    border-radius: 3px;
    padding: 6px 6px;
  }
  span h3 {
    margin-left: 5px;
    color: #fff;
    background: #192b58;
    width: 150px;
    height: 30px;
  }
`;

export default ElonMain;
