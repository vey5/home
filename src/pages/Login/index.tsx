import styles from './styles.module.scss'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Login: FC = () => {
  const { register, handleSubmit } = useForm()
  const submit = (_data: any) => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <label className={styles.login}>
          Email
          <input type="text" {...register('Email')} className={styles.input} />
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
