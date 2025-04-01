import { createSlice } from "@reduxjs/toolkit";

//In accordion we have main category as men ,womeni,kids amd subcontainer in it
//so we have array of object where each object having one category and array of sub-catoreies

const initalState = [
  {
    category: "Men",
    items: ["Coats", "Jackets", "Party Wear", "Shirts"],
  },
  {
    category: "Women",
    items: ["Coats", "Jackets", "Party Wear", "Shirts"],
  },
  {
    category: "Kids",
    items: ["Coats", "Jackets", "Party Wear", "Shirts"],
  },
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: initalState,
});

export default accordionSlice;
