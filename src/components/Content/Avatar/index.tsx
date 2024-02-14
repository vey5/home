import styles from './styles.module.scss'
import { FC } from 'react'
import { Avatar as MaterialAvatar } from '@mui/material'
import Stack from '@mui/material/Stack'

const Avatar: FC = () => {
  return (
    <div className={styles.avatar}>
      <Stack direction="row" spacing={3}>
        <MaterialAvatar className={styles.img} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className={styles.spanText}>
          <span>Lara Madrigal</span>
          <span>Client</span>
        </div>
        <MaterialAvatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <div className={styles.spanText}>
          <span>Lara Madrigal</span>
          <span>Client</span>
        </div>
        <MaterialAvatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <div className={styles.spanText}>
          <span>Lara Madrigal</span>
          <span>Client</span>
        </div>
      </Stack>
    </div>
  )
}

export { Avatar }
