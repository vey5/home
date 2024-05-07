import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Button as MaterialButton, ButtonOwnProps } from '@mui/material'
import classNames from 'classnames'

type Props = {
  size?: 'large' | 'medium'
  variant?: 'dark' | 'light'
} & Omit<ButtonOwnProps, 'variant' | 'size'>

// TODO: Допилить вариант сайз

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
