import styles from './styles.module.scss'
import { FC } from 'react'
import { Avatar as MaterialAvatar } from '@mui/material'
import Stack from '@mui/material/Stack'
import face from '../../assets/Face.png'

type Props = {
  param1: string
  param2: string
}

const Avatar: FC<Props> = ({ param1, param2 }) => {
  return (
    <Stack direction="row" spacing={3}>
      <MaterialAvatar className={styles.img} alt="Remy Sharp" src={face} />
      <div className={styles.spanText}>
        <span className={styles.spanTitle}>{param1}</span>
        <span className={styles.subTitle}>{param2}</span>
      </div>
    </Stack>
  )
}

export { Avatar }
