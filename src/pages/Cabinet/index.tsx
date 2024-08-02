import styles from './styles.module.scss'
import { FC } from 'react'
import { Layout } from '../../components/Layout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES_PATHS } from '../../App'
import { useForm, Controller } from 'react-hook-form'
import { UserCard } from '../../components/UserCard'
import { useGetUsersQuery } from '../../store/services/userApi'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'
import { Portal } from '../../components/Portal'
import { Loader } from '../../components/Loader'

//TODO: нет ререндера после получения данных в форму

const Cabinet: FC = () => {
  const { pathname } = useLocation()
  const { handleSubmit } = useForm()
  const { data = [], isLoading } = useGetUsersQuery('')

  if (isLoading) {
    return <Loader />
  }

  const submit = (data: any) => console.log(data)

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Tabs
          value={pathname}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          <Tab
            className={styles.tab}
            value={ROUTES_PATHS.userinfo}
            to={ROUTES_PATHS.userinfo}
            label="Инфо о пользователе"
            component={Link}
          />
          <Tab
            className={styles.tab}
            value={ROUTES_PATHS.post}
            label="Добавить пост"
            to={ROUTES_PATHS.post}
            component={Link}
          />
          <Tab
            className={styles.tab}
            to={ROUTES_PATHS.user}
            value={ROUTES_PATHS.user}
            label="Редактировать пользователя"
            component={Link}
          />
        </Tabs>
        <button className={styles.logout}>LOGOUT</button>
      </div>
      {pathname === ROUTES_PATHS.userinfo && (
        <div className={styles.container}>
          {data.map((item) => (
            <UserCard key={item.userId} {...item} />
          ))}
          <Portal />
        </div>
      )}
      {pathname === ROUTES_PATHS.post && <div></div>}
      {pathname === ROUTES_PATHS.user && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="firstname" type="text" />
          <input placeholder="lastname" type="text" />
          <button>Отправить</button>
        </form>
      )}
    </Layout>
  )
}

export { Cabinet }
