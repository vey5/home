import Cookies from 'js-cookie'

export const getCookies = (token: any) => {
  return Cookies.get(token)
}

export const setCookies = (token: any, value: any) => {
  const sixHours = 9 / 24
  return Cookies.set(token, value, {
    expires: sixHours,
    secure: true,
    sameSite: 'strict',
    path: '/',
  })
}
