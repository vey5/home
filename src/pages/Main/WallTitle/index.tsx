import styles from './styles.module.scss'
import { FC } from 'react'

const WallTitle: FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.line}></div>
      <h2 className={styles.titleWall}>Find your next place to live</h2>
    </div>
  )
}

export { WallTitle }
