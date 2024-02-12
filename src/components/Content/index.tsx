import styles from './styles.module.scss'
import { FC } from 'react'
import { HeaderSection } from './HeaderSection'
import { Layout } from '../Layout'
import { Title } from './Title'
import { Description } from './Description'
import { Button } from '../UI/Button'

const Content: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <HeaderSection />
        <section className={styles.wallSection}>
          <Title />
          <Description />
          <Button />
        </section>
      </main>
    </Layout>
  )
}

export { Content }
