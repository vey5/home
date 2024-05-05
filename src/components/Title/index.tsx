import classNames from 'classnames'
import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
}

const Title: FC<PropsWithChildren<Props>> = ({ children, h1, h2, h3, h4, h5 }) => {
  if (h1) {
    return <h1 className={classNames(styles.title, styles.h1)}>{children}</h1>
  }

  if (h2) {
    // TODO: Тут не вижу стилей для H2 заголовка
    // TODO: у него title стили идут как у основного
    return <h2 className={styles.title}>{children}</h2>
  }

  if (h3) {
    return <h3 className={classNames(styles.title, styles.h3)}>{children}</h3>
  }

  if (h4) {
    return <h4 className={styles.h4}>{children}</h4>
  }

  if (h5) {
    return <h5 className={styles.h5}>{children}</h5>
  }

  return null
}

export { Title }
