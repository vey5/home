import styles from './styles.module.scss'
import { FC } from 'react'

const Title: FC = () => {
  return (
    <div className={styles.title}>
      <h2 className={styles.desc}>h2 heading</h2>
    </div>
  )
}

export { Title }
