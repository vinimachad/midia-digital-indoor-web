import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { APIResponse } from '../types/api'
import AppError from '../models/app-error'
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default function ServiceRequest() {
  async function get<Response>(path: string, config?: AxiosRequestConfig<any>): Promise<APIResponse<Response>> {
    return await fetch(api.get(path, config))
  }

  async function put<Response>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ): Promise<APIResponse<Response>> {
    return await fetch(api.put(path, data, config))
  }

  async function post<Response>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ): Promise<APIResponse<Response>> {
    return await fetch(api.post(path, data, config))
  }

  async function fetch(request: Promise<AxiosResponse<any, any>>) {
    try {
      const { data } = await request
      return { value: data.results }
    } catch (error) {
      const axiosError = error as AxiosError
      return AppError().parse(axiosError.response?.data)
    }
  }

  return { get, put, post }
}
