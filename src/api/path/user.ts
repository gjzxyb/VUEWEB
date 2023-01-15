import { Get, Post } from '../server'

export interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

export type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>

export function getUserInfo<T = { name: string }>(id: string): ApiResponse<T> {
  return Get<T>('/user/info', { id })
}
export function login<T = { username: string; token: string }>(ruleForm: T): ApiResponse<T> {
  return Post<T>('/login', { ruleForm })
}

export const userApi = {
  getUserInfo,
  login
}
