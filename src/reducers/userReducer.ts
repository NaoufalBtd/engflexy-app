// redux toolkit userReducer boilerplate
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  name: "",
  email: "",
  userId: "",
};

type UserState = typeof initialState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    login: (state, { payload }: PayloadAction<UserState>) => {
      state = {
        ...state,
        ...payload,
      };
    },
  },
});

export const { setUser, login } = userSlice.actions;

export default userSlice.reducer;
