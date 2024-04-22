import styles from './styles.module.scss'
import { FC } from 'react'

//TODO Предложил бы переименовать компонент в text и опять же кидать сам текст пропсой. Пустой div обертку так же предлагаю убрать, он не выполняет никаких функций
const Description: FC = () => {
  return (
    <div>
      <p className={styles.text}>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se
        repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque
        aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium
        doloremque.
      </p>
    </div>
  )
}

export { Description }
