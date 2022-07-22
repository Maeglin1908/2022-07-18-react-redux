import { configureStore } from "@reduxjs/toolkit";
import panierSlice from "./PanierSlice";
const store = configureStore({
    reducer: {
        panier: panierSlice,
    },
});

export default store;
