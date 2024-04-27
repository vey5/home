import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

//TODO Предложил бы переименовать компонент в text и опять же кидать сам текст пропсой. Пустой div обертку так же предлагаю убрать, он не выполняет никаких функций
const Description: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.text}>{children}</p>
}

export { Description }
