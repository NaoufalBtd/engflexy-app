// redux toolkit userReducer boilerplate
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../types/models/UserModel";
import { loginStudent } from "../thunks/login";

const initialState = {
  username: "",
  name: "",
  email: "",
  userId: "",
  user: null as UserModel | null,
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
  },
  extraReducers(builder) {
    builder.addCase(loginStudent.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
