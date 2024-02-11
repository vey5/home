import { FC } from 'react'
import styles from './styles.module.scss'
import TrendingFlat from '@mui/icons-material/TrendingFlat'
import { Button as MaterialButton } from '@mui/material'

const Button: FC = () => {
  return (
    <div className={styles.button}>
      <MaterialButton endIcon={<TrendingFlat className={styles.endArrow} />} className={styles.btn}>
        onClick
      </MaterialButton>
    </div>
  )
}

export { Button }
