import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { LogoIcon } from '../../assets/Icon/Logo'
import shape from '../../assets/Shape.png'
import { Button } from '../Button'
import classNames from 'classnames'
import IosShare from '@mui/icons-material/IosShare'
import { BasicMenu } from '../BasicMenu'
import { TrendingFlat } from '@mui/icons-material'
import { Link } from 'react-router-dom'

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
    <div className={classNames(styles.header, offset && styles.fixedHeader)}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <LogoIcon />
          <img className={styles.img} src={shape} alt="logo" />
        </div>
        <div className={styles.wrapper}>
          {sm && (
            <>
              <BasicMenu />
              <IconButton>
                <IosShare className={styles.iosBtn} />
              </IconButton>
            </>
          )}
          {!sm && (
            <>
              <ul className={styles.navList}>
                <li className={styles.navLink}>
                  <Link className={styles.navItem} to={'/cabinet/login'}>
                    Cabinet
                  </Link>
                </li>
                <li className={styles.navLink}>
                  <Link className={styles.navItem} to={''}>
                    Nav Link
                  </Link>
                </li>
                <li className={styles.navLink}>
                  <Link className={styles.navItem} to={''}>
                    Nav Link
                  </Link>
                </li>
                <li className={styles.navLink}>
                  <Link className={styles.navItem} to={''}>
                    Nav Link
                  </Link>
                </li>
              </ul>
              <Button
                variant="light"
                size="medium"
                endIcon={<TrendingFlat className={styles.endArrow} />}>
                Work with us
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export { Header }
