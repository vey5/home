import { FC } from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setModalOpen, setSelectedUserId } from '../../store/slices/cabinetSlice'
import user from '../../assets/user.png'

type Props = {
  userId: number
  firstName: string
  email: string
  lastName?: string
  // img?: string
}

const UserCard: FC<Props> = ({ userId, firstName, email, lastName }) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => {
        dispatch(setModalOpen())
        dispatch(setSelectedUserId(userId))
      }}
      className={styles.user}>
      <div className={styles.image}>
        <img className={styles.img} src={user} alt="img" />
        <div className={styles.name}>{firstName}</div>
        <div className={styles.lastname}>{lastName}</div>
        <div className={styles.email}>{email}</div>
      </div>
    </div>
  )
}

export { UserCard }
