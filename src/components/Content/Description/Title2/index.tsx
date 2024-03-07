import styles from './styles.module.scss'
import { FC } from 'react'

const Title2: FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.line}></div>
      <h2 className={styles.desc}>You’re in good hands</h2>
    </div>
  )
}

export { Title2 }
