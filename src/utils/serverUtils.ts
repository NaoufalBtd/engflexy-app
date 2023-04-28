import axios from "axios";
import * as SecureStore from "expo-secure-store";

const getAxiosOptions = async (withAuth?: boolean) => {
  return {
    ...(withAuth && {
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    }),
  };
};

const getAxiosInstance = async (withAuth?: boolean) => {
  const options = await getAxiosOptions(withAuth);
  return axios.create(options);
};

export const getFetcher = async <T>(url: string, withAuth?: boolean) => {
  const axiosInstance = await getAxiosInstance(withAuth);
  return axiosInstance.get<T>(url);
};

export const postFetcher = async <T>(url: string, data: any) => {
  const axiosInstance = await getAxiosInstance();
  return axiosInstance.post<T>(url, data);
};

export const putFetcher = async <T>(url: string, data: any) => {
  const axiosInstance = await getAxiosInstance();
  return axiosInstance.put<T>(url, data);
};

export const deleteFetcher = async <T>(url: string) => {
  const axiosInstance = await getAxiosInstance();
  return axiosInstance.delete<T>(url);
};
