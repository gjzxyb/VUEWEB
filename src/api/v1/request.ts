import http from '@/api/https'

export const login = (data: object) => {
  return http.request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const getstudentlist = () => {
  return http.request({
    url: '/api/students',
    method: 'get'
  })
}
