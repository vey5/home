import styles from './styles.module.scss'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Cookie from 'js-cookie'

// type Props = {
//   token?: string,
// }

const Login: FC = () => {
  const { register, handleSubmit } = useForm()

  const setCookie = (name: any, token: any) => {
    Cookie.set(name, token, {
      expires: 3,
      secure: true,
      sameSite: 'strict',
      path: '/',
    })
  }

  const submit = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCookie('token', JSON.stringify(data.token))
      })
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <label className={styles.login}>
          Email
          <input type="text" {...register('Email')} className={styles.input} />
        </label>
        <label className={styles.login}>
          Password
          <input type="text" {...register('Password')} className={styles.input} />
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </label>
      </form>
    </div>
  )
}

export { Login }
