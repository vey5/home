import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Header } from '../Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export { Layout }
