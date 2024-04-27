import { Button } from '../UI/Button'
import styles from './styles.module.scss'
import { FC } from 'react'
import shape from '../../assets/Shape.png'
import { LogoIcon } from '../../assets/Icon/Logo'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTheme, useMediaQuery, IconButton, Link } from '@mui/material'
import { IosShare, TrendingFlat } from '@mui/icons-material'

const Footer: FC = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={styles.footBar}>
      <div className={styles.footMain}>
        <div className={styles.footText}>
          <h1 className={styles.title}>Make your dreams a</h1>
          <h1 className={styles.span}>reality</h1>
        </div>
        {sm ? (
          <IconButton>
            <IosShare className={styles.iosBtn} />
          </IconButton>
        ) : (
          <Button endIcon={<TrendingFlat className={styles.whiteArrow} />}>Work with us</Button>
        )}
      </div>
      <div className={styles.footLink}>
        <div className={styles.footLogo}>
          <div className={styles.logo}>
            <LogoIcon />
            <img className={styles.img} src={shape} alt="logo" />
          </div>
          <div className={styles.social}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className={styles.columnLink}>
          {/* ColumnDesc выглядит как избыточный компонент, я бы его убрал и все заверстал прям в футере */}
          <div className={styles.container}>
            <ul className={styles.footList}>
              <li className={styles.navLink}>
                <h2 className={styles.titleLink}>Column Heading</h2>
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
          <div className={styles.container}>
            <ul className={styles.footList}>
              <li className={styles.navLink}>
                <h2 className={styles.titleLink}>Column Heading</h2>
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
          <div className={styles.container}>
            <ul className={styles.footList}>
              <li className={styles.navLink}>
                <h2 className={styles.titleLink}>Column Heading</h2>
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
        </div>
      </div>
    </div>
  )
}

export { Footer }
