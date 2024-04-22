import styles from './styles.module.scss'
import { FC } from 'react'

// TODO: опять дублирование компонента
const Desc: FC = () => {
  return (
    <div className={styles.post}>
      <div className={styles.line}></div>
      <p className={styles.text}>
        “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo
        enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”
      </p>
    </div>
  )
}

export { Desc }
