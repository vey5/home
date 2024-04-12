import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import TrendingFlat from '@mui/icons-material/TrendingFlat'
import { Button as MaterialButton } from '@mui/material'

// type Props = {
//   variant?: 'dark' | 'light'
// }

const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    // TODO: на остальных кнопках остался только текст
    // <div className={styles.button}>
    <MaterialButton endIcon={<TrendingFlat className={styles.endArrow} />} className={styles.btn}>
      {children}
    </MaterialButton>
    // </div>
  )
}

export { Button }
