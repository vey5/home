import styles from './styles.module.scss'
import { FC } from 'react'
import { Link } from '@mui/material'

const ColumnDesc: FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.footList}>
        <li className={styles.navLink}>
          <h2 className={styles.title}>Column Heading</h2>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.navItem}>Link goes here</Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.navItem}>Link goes here</Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.navItem}>Link goes here</Link>
        </li>
        <li className={styles.navLink}>
          <Link className={styles.navItem}>Link goes here</Link>
        </li>
      </ul>
    </div>
  )
}

export { ColumnDesc }
