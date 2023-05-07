//redux toolkit store boilerplate
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import authReducer from "./reducers/authReducer";
import lessonsReducer from "./reducers/lessonsReducer";
import quizReducer from "./reducers/quizReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  lessons: lessonsReducer,
  quiz: quizReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
