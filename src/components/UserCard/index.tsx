import { FC } from 'react'
import styles from './styles.module.scss'

type Props = {
  id: number
  firstName: string
  email: string
  lastName?: string
  img?: string
}

const UserCard: FC<Props> = ({ id, firstName, email, lastName, img }) => {
  return (
    <div className={styles.user}>
      <div className={styles.id}>{id}</div>
      <div className={styles.image}>
        <img src={img} alt="img" />
        <div className={styles.name}>{firstName}</div>
        <div className={styles.lastname}>{lastName}</div>
        <div className={styles.email}>{email}</div>
      </div>
    </div>
  )
}

export { UserCard }
