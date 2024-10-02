import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import {BaseQueryFn} from '@reduxjs/toolkit/query'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig,
) => {
  try {
    const response = axiosInstance.get<TResponse>(url, config)

    return (await response).data
  } catch (error) {

    throw error
  }
}

//TODO: create other method similar delete , options

export const fetchBaseQuery =
  (): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  }> =>
  async ({url, method, data, params}) => {
    try {
      const result = await axiosInstance({url, method, data, params})
      return {data: result.data}
    } catch (axiosError) {
      const error = axiosError as AxiosError
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      }
    }
  }
