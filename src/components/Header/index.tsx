import { Link } from '@mui/material'
import styles from './styles.module.scss'
import { FC } from 'react'
import { LogoIcon } from '../../assets/LogoIcon'
import shape from '../../assets/Shape.png'
import { Button } from '../UI/Button'

const Header: FC = () => {
  return (
    <div className={styles.navBar}>
      {/* <div className={styles.logo}> */}
      <LogoIcon />
      <img className={styles.img} src={shape} alt="logo" />
      {/* </div> */}
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
