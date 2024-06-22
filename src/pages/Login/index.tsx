import styles from './styles.module.scss'
import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'

const Login: FC = () => {
  const { handleSubmit, control } = useForm()
  const { enqueueSnackbar } = useSnackbar()

  const setCookie = (name: any, token: any) => {
    Cookie.set(name, token, {
      expires: 3,
      secure: true,
      sameSite: 'strict',
      path: '/',
    })
  }

  const submit = (_data: any) => {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Vlad',
        password: '1234',
      }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setCookie('token', data.token)
          console.log('data', data)
        },
        (error) => {
          enqueueSnackbar('failed autorization', {
            autoHideDuration: 3000,
          })
          throw error
        }
      )
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="username"
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
          name="password"
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
            Login
          </Button>
        </IconButton>
      </form>
    </div>
  )
}

export { Login }
