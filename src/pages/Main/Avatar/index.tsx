import styles from './styles.module.scss'
import { FC } from 'react'
import { Avatar as MaterialAvatar } from '@mui/material'
import Stack from '@mui/material/Stack'
import face from '../../../assets/Face.png'

type Props = {
  param1: string
  param2: string
}

// TODO: вместо трех аватаров сделать один, и выводить их в цикле в том месте где нужно, кидая в них данные пропсами
const Avatar: FC<Props> = ({ param1, param2 }) => {
  return (
    <div className={styles.content}>
      <Stack className={styles.avatar} direction="row" spacing={3}>
        <MaterialAvatar className={styles.img} alt="Remy Sharp" src={face} />
        <div className={styles.spanText}>
          <span className={styles.spanTitle}>{param1}</span>
          <span className={styles.subTitle}>{param2}</span>
        </div>
      </Stack>
    </div>
  )
}

export { Avatar }
