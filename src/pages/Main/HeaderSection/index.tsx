import styles from './styles.module.scss'
import { FC } from 'react'

// TODO: похоже компонент не используется, надо дропнуть
const HeaderSection: FC = () => {
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.title}>H1 text</h1>
      <p className={styles.desc}>paragraph text</p>
    </div>
  )
}

export { HeaderSection }
