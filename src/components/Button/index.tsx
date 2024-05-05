import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Button as MaterialButton, ButtonOwnProps } from '@mui/material'
import classNames from 'classnames'

type Props = {
  size?: 'large' | 'medium' | 'small'
  variant?: 'dark' | 'light' | 'something'
} & Omit<ButtonOwnProps, 'variant, size'>

// TODO: Ошибка в пропсе variant при передаче ее в компонент

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variant = 'dark',
  size = 'large',
  ...props
}) => {
  return (
    <MaterialButton
      className={classNames(styles.btn, variant && styles[variant], size && styles[size])}
      {...props}>
      {children}
    </MaterialButton>
  )
}

export { Button }
