import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Button as MaterialButton, ButtonOwnProps } from '@mui/material'
import classNames from 'classnames'

type Props = {
  background?: 'dark'
  foot?: 'orange'
  variant?: 'dark' | 'light' | 'something'
} & Omit<ButtonOwnProps, 'variant'>

// TODO: Кнопка не доделана.
// Нужно чтоб было 2 пропсы variant и size, этого хватит чтобы целиком управлять размерами и цветом кнопок
// А пропсы background и foot лучше убрать

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variant = 'light',
  background,
  foot,
  ...props
}) => {
  return (
    <MaterialButton className={classNames(styles.btn, variant && styles[variant])} {...props}>
      {children}
    </MaterialButton>
  )
}

export { Button }
