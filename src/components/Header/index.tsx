import { IconButton, Link, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { LogoIcon } from '../../assets/Icon/Logo'
import shape from '../../assets/Shape.png'
import { Button } from '../UI/Button'
import classNames from 'classnames'
import IosShare from '@mui/icons-material/IosShare'
import { BasicMenu } from '../UI/BasicMenu'

const Header: FC = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))

  const [offset, setOffset] = useState(false)

  const offsetHeight = () => {
    if (window.scrollY >= 60) {
      setOffset(true)
    } else {
      setOffset(false)
    }
  }

  window.addEventListener('scroll', offsetHeight)
  // TODO: не ставится бг скролла fixed на всю ширину экрана
  return (
    <div className={styles.header}>
      <div className={offset ? classNames(styles.navBar, styles.fixed) : styles.navBar}>
        <div className={styles.logo}>
          <LogoIcon />
          <img className={styles.img} src={shape} alt="logo" />
        </div>
        {sm ? (
          <BasicMenu />
        ) : (
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <Link className={styles.navItem}>Nav Link</Link>
            </li>
            <li className={styles.navLink}>
              <Link className={styles.navItem}>Nav Link</Link>
            </li>
            <li className={styles.navLink}>
              <Link className={styles.navItem}>Nav Link</Link>
            </li>
            <li className={styles.navLink}>
              <Link className={styles.navItem}>Nav Link</Link>
            </li>
          </ul>
        )}
        {sm ? (
          <IconButton>
            <IosShare className={styles.iosBtn} />
          </IconButton>
        ) : (
          <Button>Work with us</Button>
        )}
        {/* TODO: не понял как подвинуть бургер меню к кнопке
        upd: на лоу брейке лого, бургер и кнопка не встали по горизонтальной линии флекса?}
        {/* TODO: Пример адаптива через MUI theme */}
        {/* {sm && <Button>Кнопка</Button>} */}
      </div>
    </div>
  )
}

export { Header }
