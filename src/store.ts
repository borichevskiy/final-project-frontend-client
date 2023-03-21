import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./app/categories/store/categories.slice";



const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


