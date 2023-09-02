import { createSlice } from "@reduxjs/toolkit";
import { CART } from "./Cart";

const initialState = {
    cartArray: CART
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
});

export const cartReducer = cartSlice.reducer;

export const viewAllCartItems = () => {
    return CART;
}

export const selectCartItemById = (id) => {
    return CART.find((item) => item.id === parseInt(id));
}