import styles from './styles.module.scss'
import { FC } from 'react'

const Description: FC = () => {
  return (
    <div className={styles.desc}>
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
