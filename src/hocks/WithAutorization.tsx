import { FC, PropsWithChildren } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { getCookies } from '../utils/cookie'

const WithAutorization: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const token = getCookies('')

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return <>{children}</>
}

export { WithAutorization }
