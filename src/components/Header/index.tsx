import { IconButton, Link, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { LogoIcon } from '../../assets/LogoIcon'
import shape from '../../assets/Shape.png'
import { Button } from '../UI/Button'
import classNames from 'classnames'
import { TrendingFlat } from '@mui/icons-material'

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

  return (
    <div className={offset ? classNames(styles.navBar, styles.fixed) : styles.navBar}>
      {/* <div className={styles.logo}> */}
      <LogoIcon />
      {/* </div> */}
      <img className={styles.img} src={shape} alt="logo" />
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

      {/* TODO: Пример адаптива через MUI theme */}
      {/* {sm && <Button>Кнопка</Button>} */}

      {sm ? (
        <IconButton>
          <TrendingFlat />
        </IconButton>
      ) : (
        <Button>Кнопка</Button>
      )}
    </div>
  )
}

export { Header }
