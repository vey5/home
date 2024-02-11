import styles from './styles.module.scss'
import { FC } from 'react'

const HeaderSection: FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionMain}>
        <h1 className={styles.title}>H1 text</h1>
        <p className={styles.desc}>paragraph text</p>
      </section>
    </div>
  )
}

export { HeaderSection }
