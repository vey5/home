import { Header } from '../../Header'
import styles from './styles.module.scss'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sectionHeader}>
        <h1 className={styles.title}>Beautiful homes made for you</h1>
        <p className={styles.desc}>
          In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis.
          Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
        </p>
      </div>
    </div>
  )
}

export { Banner }
