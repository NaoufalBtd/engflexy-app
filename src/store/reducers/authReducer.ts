// redux tollkit authReducer boilerplate

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("user/login", (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
