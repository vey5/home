import styles from './styles.module.scss'
import { FC } from 'react'

const WallTitle: FC = () => {
  return (
    <div className={styles.title}>
      <h2 className={styles.titleWall}>h2 heading </h2>
    </div>
  )
}

export { WallTitle }
