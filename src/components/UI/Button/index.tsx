import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Button as MaterialButton, ButtonOwnProps } from '@mui/material'
import classNames from 'classnames'

type Props = {
  variant?: 'dark' | 'light' | 'something'
} & Omit<ButtonOwnProps, 'variant'>

const Button: FC<PropsWithChildren<Props>> = ({ children, variant = 'light', ...props }) => {
  return (
    // TODO: Запилить кнопульку с возможностью кастомизации
    <MaterialButton className={classNames(styles.btn, variant && styles[variant])} {...props}>
      {children}
    </MaterialButton>
  )
}

export { Button }
