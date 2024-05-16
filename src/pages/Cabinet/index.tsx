import styles from './styles.module.scss'
import { FC } from 'react'
import { Layout } from '../../components/Layout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES_PATHS } from '../../App'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  firstname: string
  lastname: string
  post: number
  info: string
}

const Cabinet: FC = () => {
  const { pathname } = useLocation()
  const { register, handleSubmit } = useForm<Inputs>()

  const submit: SubmitHandler<Inputs> = (data) => console.log(data)

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
      </div>
      {pathname === ROUTES_PATHS.userinfo && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="firstname" type="text" {...register('firstname')} />
          <input placeholder="lastname" type="text" {...register('lastname')} />
          <button>Отправить</button>
        </form>
      )}
      {pathname === ROUTES_PATHS.post && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="post" type="text" {...register('post')} />
          <input placeholder="info" type="text" {...register('info')} />
          <button>Отправить</button>
        </form>
      )}
      {pathname === ROUTES_PATHS.user && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="firstname" type="text" {...register('firstname')} />
          <input placeholder="lastname" type="text" {...register('lastname')} />
          <button>Отправить</button>
        </form>
      )}
    </Layout>
  )
}

export { Cabinet }
