import styles from './styles.module.scss'
import { FC } from 'react'
import { Avatar as MaterialAvatar } from '@mui/material'
import Stack from '@mui/material/Stack'
import face from '../../../assets/Face.png'

const Avatar: FC = () => {
  return (
    <Stack className={styles.avatar} direction="row" spacing={3}>
      <div className={styles.content}>
        <MaterialAvatar className={styles.img} alt="Remy Sharp" src={face} />
        <div className={styles.spanText}>
          <span className={styles.spanTitle}>Lara Madrigal</span>
          <span className={styles.subTitle}>Client</span>
        </div>
      </div>
      <div className={styles.container}>
        <MaterialAvatar className={styles.img} alt="Travis Howard" src={face} />
        <div className={styles.spanText}>
          <span className={styles.whiteTitle}>Lara Madrigal</span>
          <span className={styles.subTitle}>Client</span>
        </div>
      </div>
      <div className={styles.content}>
        <MaterialAvatar className={styles.img} alt="Cindy Baker" src={face} />
        <div className={styles.spanText}>
          <span className={styles.spanTitle}>Lara Madrigal</span>
          <span className={styles.subTitle}>Client</span>
        </div>
      </div>
    </Stack>
  )
}

export { Avatar }
