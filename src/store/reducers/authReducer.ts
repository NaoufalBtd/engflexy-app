// redux tollkit authReducer boilerplate

import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/models/UserModel";
import { loginStudent } from "../thunks/login";

interface AuthState {
  isAuthenticated: boolean;
  user: UserModel | null;
  loading: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginStudent.pending, (state) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(loginStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(loginStudent.rejected, (state, action) => {
      console.log(action.error.message);
      state.loading = false;
      state.isError = true;
    });
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
