import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { Layout } from '../../components/Layout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES_PATHS } from '../../App'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { Login } from '../Login'
import { User } from '../../types/api'
import { UserCard } from '../../components/UserCard'
import { useGetUsersQuery } from '../../store/services/userApi'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'

const Cabinet: FC = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const { handleSubmit, control } = useForm<User>()
  const { data = [], isLoading } = useGetUsersQuery('')

  const submit: SubmitHandler<User> = (data) => console.log(data)

  // const handleOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

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
        <div onClick={() => setOpen(true)} className={styles.container}>
          {data.map((item) => (
            <UserCard key={item.id} {...item} />
          ))}
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className={styles.wrapperForm}>
              <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  defaultValue="Vlad"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      className={styles.input}
                      size="small"
                      fullWidth
                      id="outlined-basic"
                      label="Login"
                      variant="outlined"
                      value={value}
                      error={!value}
                      onChange={onChange}
                      helperText={!value && 'Введите логин'}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  defaultValue="1234"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      className={styles.input}
                      size="small"
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      value={value}
                      error={!value}
                      onChange={onChange}
                      helperText={!value ? 'Введите пароль' : 'Никому не сообщайте свой пароль'}
                    />
                  )}
                />
                <IconButton type="submit">
                  <Button size="form" variant="gray">
                    Create/update
                  </Button>
                </IconButton>
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation()
                    setOpen(false)
                  }}>
                  <CloseIcon className={styles.close} />
                </IconButton>
              </form>
            </div>
          </Modal>
        </div>
      )}
      {pathname === ROUTES_PATHS.post && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="post" type="text" />
          <input placeholder="info" type="text" />
          <button>Отправить</button>
        </form>
      )}
      {pathname === ROUTES_PATHS.user && (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder="firstname" type="text" />
          <input placeholder="lastname" type="text" />
          <button>Отправить</button>
        </form>
      )}

      {/* {pathname === ROUTES_PATHS.login && <Login />} */}
    </Layout>
  )
}

export { Cabinet }
