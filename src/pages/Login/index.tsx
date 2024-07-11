import styles from './styles.module.scss'
import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'
import { useLoginMutation } from '../../store/services/sessionApi'

const Login: FC = () => {
  const { handleSubmit, control } = useForm()
  const { enqueueSnackbar } = useSnackbar()
  const [sendRequest, { data }] = useLoginMutation()

  const submit = (_data: any) => {
    sendRequest(_data)
    setCookie('token', data?.token)

    // setCookie('token', _data.token)
    // enqueueSnackbar('failed autorization', {
    //   autoHideDuration: 3000,
    // })
    console.log('data', _data)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue="vlad@mail.ru"
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

export const getCookie = (token: any) => {
  return Cookie.get(token)
}

export const setCookie = (token: any, value: any) => {
  return Cookie.set(token, value, {
    expires: 3,
    secure: true,
    sameSite: 'strict',
    path: '/',
  })
}

export { Login }
