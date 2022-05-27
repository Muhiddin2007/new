import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [
    {
      id: 1,
      position: 0,
      isOpenSelect: true,
      сategory: null,
      values: ["Uy", "Bog'"],
    },
    {
      id: 2,
      position: 1,
      isOpenSelect: false,
      сategory: "Uy",
      values: [
        "Mebel",
        "Interyer jihozlari",
        "Xona o'simliklari",
        "Kanstovarlar-chiqim materiallari",
        "Oziq-ovqat / Ichimliklar",
        "Idish-tovoq, oshxona anjomlari",
        "Uy uchun boshqa mahsulotlar",
      ],
    },
    {
      id: 3,
      position: 2,
      isOpenSelect: false,
      сategory: "Mebel",
      values: [
        "Mehmonxona uchun mebel",
        "Yotoqxona uchun mebel",
        "Dahliz uchun mebel",
        "Oshxona mebeli",
        "Vannaxona mebeli",
        "Ofis mebeli",
        "Pristavkalarni ta'mirlash",
        "Bog‘ mebeli",
        "Maxsus mebel",
      ],
    },
    {
      id: 4,
      position: 2,
      isOpenSelect: false,
      сategory: "Interyer jihozlari",
      values: [
        "Chiroqlar",
        "Tekistil",
        "Derazalar dekori",
        "Interyer uchun boshqa narsalar",
      ],
    },
    {
      id: 5,
      position: 2,
      isOpenSelect: false,
      category: "Xona o'simliklari",
      values: [],
    },
    {
      id: 6,
      position: 2,
      isOpenSelect: false,
      category: "Kanstovarlar-chiqim materiallari",
      values: [],
    },
    {
      id: 7,
      position: 1,
      isOpenSelect: false,
      сategory: "Bog'",
      values: [
        "Bog‘-tomorqa",
        "Qurilish / tamirlash uchun tovarlar",
        "Jihozlar",
        "Bog‘ anjomlari",
        "Xo‘jalik jihozlari, maishiy kimyo",
      ],
    },
    {
      id: 8,
      position: 2,
      isOpenSelect: false,
      сategory: "Qurilish / tamirlash uchun tovarlar",
      values: [
        "Santexnika",
        "Ventilyatsiya",
        "Isitish",
        "Elektrika",
        "Arra materiallari",
        "Pardozlash materiallari",
        "Deraza va oynalar",
        "Lak-bo'yoq materiallari",
        "Metalloprokat-armatura",
        "Biriktirish elementlari",
        "G'isht, betoni, penobloklar",
        "Boshqa qurilish materiallari",
      ],
    },
    {
      id: 9,
      position: 2,
      isOpenSelect: false,
      сategory: "Jihozlar",
      values: [
        "Qo'l jihozlari",
        "Benzoinstrument",
        "Elektr jihozlar",
        "Pnevmoinstrument",
        "Boshqa jihozlar",
      ],
    },
  ],
  chips: [],
};

const selectValue = createSlice({
  name: "selectValue",
  initialState,
  reducers: {
    openSelect(state, action) {
      const { title } = action.payload;
      const activeElement = state.options.find(
        (element) => element.сategory === title
      );
      state.chips.length = 0;
      state.options = state.options.map((element) => {
        if (activeElement?.position <= element.position) {
          element.isOpenSelect = false;
        }
        if (element.сategory === title) {
          element.isOpenSelect = true;
        }
        if (element.isOpenSelect) {
          state.chips.push(element.сategory);
        }
        return element;
      });
    },
  },
});

export const { openSelect } = selectValue.actions;
export default selectValue.reducer;
