import styles from './styles.module.scss'
import { FC } from 'react'
import { HeaderSection } from './HeaderSection'
import { Layout } from '../Layout'

const Content: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <HeaderSection />
      </main>
    </Layout>
  )
}

export { Content }
