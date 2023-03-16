import type { UseQueryResponse } from '@types';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: '/api' });

export const axiosGet = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await axiosInstance.get<UseQueryResponse<T>>(url, config);

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
