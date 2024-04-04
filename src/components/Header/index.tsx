import { Link } from '@mui/material'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import { LogoIcon } from '../../assets/LogoIcon'
import shape from '../../assets/Shape.png'
import { Button } from '../UI/Button'
import classNames from 'classnames'

const Header: FC = () => {
  const [offset, setOffset] = useState(false)

  const offsetHeight = () => {
    if (window.scrollY >= 982) {
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

      <Button />
    </div>
  )
}

export { Header }
