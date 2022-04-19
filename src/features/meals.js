import { createSlice } from "@reduxjs/toolkit";

//imgaes
import sushi from '../assets/sushi.jpg';
import schnitzel from '../assets/schnitzel.jpg';
import barBurger from '../assets/barbecue-burger.jpg';
import greenBowl from '../assets/green-bowl.jpg';




const initialStateValue = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        image: sushi
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        image: schnitzel
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        image: barBurger
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        image: greenBowl
      },
]


export const mealsSlice = createSlice({
    name: 'meals',
    initialState: {meals: initialStateValue},
    reducers: {
        addItem: () => {},
        removeItem: () => {}
    }
})


export const {addItem, removeItem} = mealsSlice.actions;

export default mealsSlice.reducer;
