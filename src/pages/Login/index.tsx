import styles from './styles.module.scss'
import { FC } from 'react'

const Login: FC = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <label className={styles.login}>
          Email
          <input className={styles.input} />
          Password
          <input className={styles.input} />
          <button className={styles.btn}>Login</button>
        </label>
      </form>
    </div>
  )
}

export { Login }
