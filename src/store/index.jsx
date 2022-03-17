import { configureStore } from "@reduxjs/toolkit";
import queryReducer  from "./slices/searchValueSlice";
import arrayReducer  from './slices/nameArraySlice';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import searchValueSlice from "./slices/searchValueSlice";
import { arrayRemove } from "firebase/firestore";
import { setNamesSlice } from './slices/nameArraySlice';
import { setNewQuery, removeNewQuery } from "./slices/querySlice";
import { newQuerySlice } from './slices/querySlice';
import newQueryReducer from './slices/querySlice';



export const store = configureStore({
    reducer: {
        query: queryReducer,
        array: arrayReducer,
        newQuery: newQueryReducer
    },
})

const reducers = combineReducers({
    query: queryReducer,
    array: arrayReducer,
    newQuery: newQueryReducer
});
