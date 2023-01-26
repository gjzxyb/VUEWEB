import http from '@/api/https'

export const login = (data: object) => {
  return http.request({
    url: '/api/login',
    method: 'POST',
    data
  })
}

export const getArticleList = (data: object) => {
  return http.request({
    url: '/api/login',
    method: 'POST',
    data
  })
}
