export function settoken(tokenkey: string, token: string) {
  return localStorage.setItem(tokenkey, token)
}
export function gettoken(tokenkey: string) {
  return localStorage.getItem(tokenkey)
}
export function deltoken(tokenkey: string) {
  return localStorage.removeItem(tokenkey)
}
