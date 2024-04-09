import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Footer } from '../Footer'
import { Banner } from '../../pages/Main/Banner'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Banner />
      <div className={styles.content}>{children}</div>
      <div className={styles.footContainer}>
        <Footer />
      </div>
    </div>
  )
}

export { Layout }
