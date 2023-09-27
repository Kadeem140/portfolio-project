import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Features/cart/cartSlice";
import { gameReducer } from "../Features/games/videoGameSlice";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        game: gameReducer
    }
});

console.log(store.getState(), store)