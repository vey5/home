import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'

// type Inputs = {
//   TextField: string
//   MyCheckbox: boolean
// }

const Login: FC = () => {
  const { handleSubmit, control } = useForm()
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
        login: _data.login,
        password: _data.password,
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
          name="login"
          control={control}
          defaultValue="mor_2314"
          render={({ field: { value, onChange } }) => (
            <Input
              className={styles.input}
              size="small"
              required
              fullWidth
              id="outlined-basic"
              label="Login"
              variant="outlined"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue="83r5^_"
          render={({ field: { value, onChange } }) => (
            <Input
              className={styles.input}
              size="small"
              required
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={value}
              onChange={onChange}
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
