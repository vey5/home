import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  color?: 'gray' | 'white' | 'black'
  className?: string
}

// TODO: сделать по примеру Title

const Text: FC<PropsWithChildren<Props>> = ({ children, color = 'gray', className }) => {
  return <p className={classNames(styles.text, styles[color], className)}>{children}</p>
}

export { Text }
