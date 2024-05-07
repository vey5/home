import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  color?: 'black' | 'white'
  className?: string
}

const Title: FC<PropsWithChildren<Props>> = ({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  className,
  color = 'black',
}) => {
  if (h1) {
    return (
      <h1 className={classNames(styles.title, styles.h1, styles[color], className)}>{children}</h1>
    )
  }

  if (h2) {
    return (
      <h2 className={classNames(styles.title, styles.h2, styles[color], className)}>{children}</h2>
    )
  }

  if (h3) {
    return (
      <h3 className={classNames(styles.title, styles.h3, styles[color], className)}>{children}</h3>
    )
  }

  if (h4) {
    return (
      <h4 className={classNames(styles.title, styles.h4, styles[color], className)}>{children}</h4>
    )
  }

  if (h5) {
    return (
      <h5 className={classNames(styles.title, styles.h5, styles[color], className)}>{children}</h5>
    )
  }

  return null
}

export { Title }
