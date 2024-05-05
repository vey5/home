import styles from './styles.module.scss'
import { FC } from 'react'

import CountertopsIcon from '@mui/icons-material/Countertops'
import BedIcon from '@mui/icons-material/Bed'
import FlareIcon from '@mui/icons-material/Flare'

type Props = {
  title: string
  param1: number
  param2: number
  param3: number
  img: string
}
// TODO: тайтл внутри карточки, оставить или заменить на компонент тайтл?
const Card: FC<Props> = ({ title, param1, param2, param3, img }) => {
  return (
    <div className={styles.wallCard}>
      <img className={styles.img} src={img} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.iconSvg}>
        <div className={styles.icon}>
          <BedIcon />
          <div className={styles.iconNum}>{param1}</div>
        </div>
        <div className={styles.icon}>
          <CountertopsIcon />
          <div className={styles.iconNum}>{param2}</div>
        </div>
        <div className={styles.icon}>
          <FlareIcon />
          <div className={styles.iconNum}>{param3}</div>
        </div>
      </div>
    </div>
  )
}

export { Card }
