import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Banner } from '../Content/Banner'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Banner />
      <div className={styles.content}>{children}</div>
      <div className={styles.footContainer}>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export { Layout }
