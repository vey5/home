import { Button } from '../UI/Button'
import styles from './styles.module.scss'
import { FC } from 'react'
import shape from '../../assets/Shape.png'
import { LogoIcon } from '../../assets/Icon/Logo'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { ColumnDesc } from '../../pages/Main/Description/ColumnDesc'

const Footer: FC = () => {
  return (
    <div className={styles.footBar}>
      <div className={styles.footText}>
        <h1 className={styles.title}>Make your dreams a</h1>
        <span className={styles.span}>reality</span>
        <Button>Кнопка</Button>
      </div>
      <div className={styles.logo}>
        <LogoIcon />
        <img className={styles.img} src={shape} alt="logo" />
      </div>
      <div className={styles.social}>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <div className={styles.columnLink}>
        <ColumnDesc />
        <ColumnDesc />
        <ColumnDesc />
      </div>
    </div>
  )
}

export { Footer }
