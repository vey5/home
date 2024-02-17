import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Header } from '../Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export { Layout }
