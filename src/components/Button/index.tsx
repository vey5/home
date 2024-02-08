import { FC } from 'react'
import styles from './styles.module.scss'

const Button: FC = () => {
  return (
    <div className={styles.button}>
      <button className={styles.btn}>onClick</button>
    </div>
  )
}

export { Button }
