import { FC } from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setModalOpen, setSelectedUserId } from '../../store/slices/cabinetSlice'

type Props = {
  userId: number
  firstName: string
  email: string
  lastName?: string
  img?: string
}

const UserCard: FC<Props> = ({ userId, firstName, email, lastName, img }) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(setModalOpen())
        dispatch(setSelectedUserId(1))
      }}
      className={styles.user}>
      <div className={styles.id}>{userId}</div>
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
