import http from '@/api/https'

export const getArticleList = (data: object) => {
  return http.request({
    url: '/api/login',
    method: 'POST',
    data
  })
}
