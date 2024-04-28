import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  color: 'dark' | 'gray' | 'black'
}

const Text: FC<PropsWithChildren<Props>> = ({ children, color = 'dark' }) => {
  if (color === 'dark') {
    return <p className={styles.text}>{children}</p>
  }

  if (color === 'gray') {
    return <p className={classNames(styles.text, styles.p)}>{children}</p>
  }

  if (color === 'black') {
    return <p className={styles.black}>{children}</p>
  }

  return null
}

export { Text }
