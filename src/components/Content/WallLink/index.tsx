import styles from './styles.module.scss'
import { FC } from 'react'
import CheckIcon from '@mui/icons-material/Check'

const WallLink: FC = () => {
  return (
    <div className={styles.wallLink}>
      <span className={styles.cardLink1}>
        <h2 className={styles.cardTitle}>Looking for</h2>
        <div className={styles.check}>
          <CheckIcon />
        </div>
      </span>
      <span className={styles.cardLink2}>
        <h2 className={styles.cardTitle}>Location</h2>
        <div className={styles.check2}>
          <CheckIcon />
        </div>
      </span>
      <span className={styles.cardLink3}>
        <h2 className={styles.cardTitle}>Property Type</h2>
        <div className={styles.check3}>
          <CheckIcon />
        </div>
      </span>
      <span className={styles.cardLink4}>
        <h2 className={styles.cardTitle}>Price</h2>
        <div className={styles.check4}>
          <CheckIcon />
        </div>
      </span>
    </div>
  )
}

export { WallLink }
