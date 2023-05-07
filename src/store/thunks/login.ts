import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUser } from "../../types/api/ApiUser";
import { LoginForm } from "../../types/forms/LoginForm";
import { formatUser } from "../../utils/formatUtils";
import { postFetcher } from "../../utils/serverUtils";

export const loginStudent = createAsyncThunk(
  "user/login",
  async (loginData: LoginForm) => {
    const { username, password } = loginData;
    const { data } = await postFetcher<LoginForm, ApiUser>("url", {
      username,
      password,
    });

    return formatUser(data);
  }
);
