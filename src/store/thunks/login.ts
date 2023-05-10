import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN_URL } from "../../constants/ApiUrls";
import { ApiUser } from "../../types/api/ApiUser";
import { LoginForm } from "../../types/forms/LoginForm";
import { formatUser } from "../../utils/formatUtils";
import { postFetcher } from "../../utils/serverUtils";

export const loginStudent = createAsyncThunk(
  "user/login",
  async (loginData: LoginForm) => {
    const { email, password } = loginData;
    const { data } = await postFetcher<LoginForm, ApiUser>(LOGIN_URL, {
      email,
      password,
    });

    return formatUser(data);
  }
);
