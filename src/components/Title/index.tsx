import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
}

const Title: FC<PropsWithChildren<Props>> = ({ children, h1, h2, h3 }) => {
  if (h1) {
    return <h1 className={classNames(styles.title, styles.h1)}>{children}</h1>
  }

  if (h2) {
    return <h2 className={styles.title}>{children}</h2>
  }

  if (h3) {
    return <h3 className={classNames(styles.title, styles.h3)}>{children}</h3>
  }

  return null
  // {/* <div className={styles.line}></div> */}
}

export { Title }
