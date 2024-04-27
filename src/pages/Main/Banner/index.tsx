import { Description } from '../Description'
import { Title } from '../Title'
import styles from './styles.module.scss'
import { FC } from 'react'

// ТODO: текст и тайтл надо кидать пропсами в него
const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.sectionHeader}>
        <Title h1>Beautiful homes made for you</Title>
        <Description>
          In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis.
          Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
        </Description>
      </div>
    </div>
  )
}

export { Banner }
