import { Text } from '../../../components/Text'
import { Title } from '../../../components/Title'
import styles from './styles.module.scss'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.sectionHeader}>
        <Title h1 color="white" className={styles.title}>
          Beautiful homes made for you
        </Title>
        <Text color="white" className={styles.text}>
          In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis.
          Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
        </Text>
      </div>
    </div>
  )
}

export { Banner }
