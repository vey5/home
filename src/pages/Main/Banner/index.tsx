import styles from './styles.module.scss'
import { FC } from 'react'
import { Header } from '../../../components/Header'

// ТODO: текст и тайтл надо кидать пропсами в него
const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      {/* TODO: мне кажется header должен быть не тут, а в layout. Потому что не на каждой странице у тебя будет banner */}
      <Header />
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
