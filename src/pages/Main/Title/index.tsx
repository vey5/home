import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
}

// TODO: тайтл должен принимать текст пропсой, иначе это бесполезный компонент
// Еще кроме пропсы children для передачи текста я бы добавил пропсу для уровня заголовка h1, h2, h3, h4, и в зависимости от нее менял тег и стили
const Title: FC<PropsWithChildren<Props>> = ({ children, h1, ...props }) => {
  return (
    <div className={styles.title} {...props}>
      {children}
    </div>

    // {/* <div className={styles.line}></div> */}
  )
}

export { Title }
