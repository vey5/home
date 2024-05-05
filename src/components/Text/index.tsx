import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  color?: 'dark' | 'gray' | 'black'
}

// TODO: dark идет как дефолтный цвет, хз куда его девать

const Text: FC<PropsWithChildren<Props>> = ({ children, color = 'dark' }) => {
  if (color === 'dark') {
    return <p className={styles.text}>{children}</p>
  }

  if (color === 'gray') {
    return <p className={classNames(styles.text, styles.gray)}>{children}</p>
  }

  if (color === 'black') {
    return <p className={styles.black}>{children}</p>
  }

  return null
}

export { Text }
