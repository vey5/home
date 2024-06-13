import styles from './styles.module.scss'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'

// type Props = {
//   token?: string,
// }

const Login: FC = () => {
  const { register, handleSubmit } = useForm()
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
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: _data.username,
        password: _data.password,
      }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setCookie('token', JSON.stringify(data.token))
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
        <label className={styles.login}>
          Email
          <input type="text" {...register('username')} className={styles.input} />
        </label>
        <label className={styles.login}>
          Password
          <input type="text" {...register('password')} className={styles.input} />
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </label>
      </form>
    </div>
  )
}

export { Login }
