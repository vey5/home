import styles from './styles.module.scss'
import { FC } from 'react'

const Description: FC = () => {
  return (
    <div className={styles.desc}>
      <p className={styles.text}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </p>
    </div>
  )
}

export { Description }
