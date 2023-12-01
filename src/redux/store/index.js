import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../ProductsSlice";
import CartReducer from "../Slice/CartSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

let persistConfig = {
    key: 'root',
    storage: AsyncStorage
};
let rootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const mystore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});