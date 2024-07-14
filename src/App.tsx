import './App.css'
import { MainPage } from './pages/Main'
import { Routes, Route } from 'react-router-dom'
import { Cabinet } from './pages/Cabinet'
import { Login } from './pages/Login'
import { WithAutorization } from './hocks/WithAutorization'

export enum ROUTES_PATHS {
  main = '/',
  cabinet = '/cabinet',
  userinfo = '/cabinet/user-info',
  post = '/cabinet/post',
  user = '/cabinet/user',
  login = 'login',
}

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES_PATHS.main} element={<MainPage />} />
        <Route
          path={ROUTES_PATHS.cabinet}
          element={
            <WithAutorization>
              <Cabinet />
            </WithAutorization>
          }>
          <Route index path={ROUTES_PATHS.userinfo} />
          <Route path={ROUTES_PATHS.post} />
          <Route path={ROUTES_PATHS.user} />
        </Route>
        <Route path={ROUTES_PATHS.login} element={<Login />} />
      </Routes>
    </>
  )
}

export default App
