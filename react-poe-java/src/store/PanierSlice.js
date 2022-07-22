import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name: "panier",
    initialState: {
        values: [],
        length: 0,
    },
    reducers: {
        increment: (state) => {
            state.length++;
        },
        decrement: (state) => {
            state.length--;
        },
        add: (state, item) => {
            state.values.push(item.payload);
            state.length = state.values.length;
        },
    },
});

export default panierSlice.reducer;
export const { increment, decrement, add } = panierSlice.actions;
