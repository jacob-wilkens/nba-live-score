import type { UseQueryResponse } from '@types';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: '/api' });

export const axiosGet = async <T>(url: string, config?: AxiosRequestConfig) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const {
      data: { data },
    } = await axiosInstance.get<UseQueryResponse<T>>(url, config);

    return data;
    // eslint-disable-next-line sonarjs/no-useless-catch
  } catch (error) {
    throw error;
  }
};
