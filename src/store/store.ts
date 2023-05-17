//redux toolkit store boilerplate
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import authReducer from "./reducers/authReducer";
import courseReducer from "./reducers/courseReducer";
import homeworkQuizReducer from "./reducers/homeworkQuizReducer";
import homeworkReducer from "./reducers/homeworkReducer";
import quizReducer from "./reducers/lessonQuizReducer";
import lessonsReducer from "./reducers/lessonReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  lessons: lessonsReducer,
  lessonQuiz: quizReducer,
  course: courseReducer,
  homework: homeworkReducer,
  homeworkQuiz: homeworkQuizReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
