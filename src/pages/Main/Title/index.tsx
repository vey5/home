import styles from './styles.module.scss'
import { FC } from 'react'

// TODO: тайтл должен принимать текст пропсой, иначе это бесполезный компонент
// Еще кроме пропсы children для передачи текста я бы добавил пропсу для уровня заголовка h1, h2, h3, h4, и в зависимости от нее менял тег и стили
const Title: FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.line}></div>
      <h2 className={styles.desc}>You’re in good hands</h2>
    </div>
  )
}

export { Title }
