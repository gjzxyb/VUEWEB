import http from '@/api/https'

export const login = (data: object, isShowLoading?: boolean) => {
  return http.request({
    url: '/api/login',
    method: 'post',
    headers: {
      isShowLoading
    },
    data
  })
}

export const getstudentlist = () => {
  return http.request({
    url: '/api/students',
    method: 'get'
  })
}
export const upfile = (data: object, isShowLoading?: boolean) => {
  return http.request({
    url: '/api/login',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Requested-With': 'XMLHttpRequest',
      isShowLoading
    },
    data
  })
}
export const downfile = (data: object, isShowLoading?: boolean) => {
  return http.request({
    url: '/api/login',
    method: 'post',
    responseType: 'blob',
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Requested-With': 'XMLHttpRequest',
      isShowLoading
    },
    data
  })
}
