import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export { Layout }
