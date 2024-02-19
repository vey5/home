import { Button } from '../UI/Button'
import styles from './styles.module.scss'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className={styles.footBar}>
      <div className={styles.footText}>
        <h1 className={styles.title}>Make your dreams a</h1>
        <span className={styles.span}>reality</span>
        <Button />
      </div>
    </div>
  )
}

export { Footer }
