import styles from './styles.module.scss'
import { FC } from 'react'

const WallLink: FC = () => {
  return (
    <div className={styles.wallLink}>
      <span className={styles.cardLink}>Place</span>
      <span className={styles.cardLink}>Place</span>
      <span className={styles.cardLink}>Place</span>
      <span className={styles.cardLink}>Place</span>
    </div>
  )
}

export { WallLink }
