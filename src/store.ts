//redux toolkit store boilerplate
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const persistedReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, persistedReducers);

const rootReducer = combineReducers({
  persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
