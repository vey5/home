import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'
import TextField from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'

// type Props = {
//   token?: string,
// }

const Login: FC = () => {
  const { handleSubmit } = useForm()
  const { enqueueSnackbar } = useSnackbar()
  const [value, setValue] = useState('')

  const setCookie = (name: any, token: any) => {
    Cookie.set(name, token, {
      expires: 3,
      secure: true,
      sameSite: 'strict',
      path: '/',
    })
  }

  const submit = (_data: any) => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: _data.value,
        password: _data.value,
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
        <TextField
          className={styles.input}
          size="small"
          required
          fullWidth
          id="outlined-basic"
          label="login"
          variant="outlined"
        />
        <TextField
          className={styles.input}
          size="small"
          id="outlined-basic"
          required
          fullWidth
          label="password"
          variant="outlined"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          error={!value}
          helperText={!value ? 'Введите пароль' : 'Никому не сообщайте свой пароль'}
        />
        {/* <label className={styles.login}>
          Email
          <input type="text" {...register('username')} className={styles.input} />
        </label>
        <label className={styles.login}>
          Password
          <input type="text" {...register('password')} className={styles.input} />
        </label> */}
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
