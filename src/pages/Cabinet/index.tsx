import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Layout } from '../../components/Layout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES_PATHS } from '../../App'
import { Form, SubmitHandler, useForm } from 'react-hook-form'

type inputs = {
  firstname: string
  lastname: string
}

const Cabinet: FC = () => {
  const { pathname } = useLocation()
  const { register, handleSubmit } = useForm<inputs>()

  const submit: SubmitHandler<inputs> = (data) => console.log(data)

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
        <Form onSubmit={handleSubmit(submit)}>
          <input placeholder="firstname" type="text" {...register('firstname')} />
          <input placeholder="lastname" type="text" {...register('lastname')} />
          <button>Отправить</button>
        </Form>
      )}
    </Layout>
  )
}

export { Cabinet }
