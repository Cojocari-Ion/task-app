import { configureStore } from "@reduxjs/toolkit";
import queryReducer  from "./slices/searchValueSlice";
import arrayReducer  from './slices/nameArraySlice';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import searchValueSlice from "./slices/searchValueSlice";
import { arrayRemove } from "firebase/firestore";
import { setNamesSlice } from './slices/nameArraySlice';




export const store = configureStore({
    reducer: {
        query: queryReducer,
        array: arrayReducer, 
    },
})

const reducers = combineReducers({
    query: queryReducer,
    array: arrayReducer,
});
