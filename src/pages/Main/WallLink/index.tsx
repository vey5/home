import styles from './styles.module.scss'
import { FC } from 'react'
import CheckIcon from '@mui/icons-material/Check'

const WallLink: FC = () => {
  return (
    <div className={styles.wallLink}>
      <div className={styles.card}>
        <span className={styles.span}>Looking for</span>
        <CheckIcon />
      </div>
      <div className={styles.card}>
        <span className={styles.span}>Location</span>
        <CheckIcon />
      </div>
      <div className={styles.card}>
        <span className={styles.span}>Property Type</span>
        <CheckIcon />
      </div>
      <div className={styles.card}>
        <span className={styles.span}>Price</span>
        <CheckIcon />
      </div>
    </div>
  )
}

export { WallLink }
