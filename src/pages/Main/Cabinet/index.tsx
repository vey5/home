import styles from './styles.module.scss'
import { FC } from 'react'
import { Layout } from '../../../components/Layout'

const Cabinet: FC = () => {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  )
}

export { Cabinet }
