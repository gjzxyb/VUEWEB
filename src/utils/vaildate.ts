export function ruleuser(rule: any, value: any, callback: any) {
  const reg = /^[\w-]{4,16}$/
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (!reg.test(value)) {
    callback(new Error('用户名4-16位，字母、数字、下划线、减号'))
  } else {
    callback()
  }
}
export function rulepass(rule: any, value: any, callback: any) {
  const reg =
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{6,}$/
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!reg.test(value)) {
    callback(new Error('至少6位，包括大写、小写、数字、特殊符号中任意3项'))
  } else {
    callback()
  }
}
