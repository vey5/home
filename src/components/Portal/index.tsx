import styles from './styles.module.scss'
import { FC } from 'react'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setModalClose } from '../../store/slices/cabinetSlice'
import { UserInfo } from '../UserInfo'

const Portal: FC = () => {
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.form.isModalOpen)

  return (
    <>
      <Modal open={open}>
        <>
          <UserInfo />
          <IconButton
            onClick={(event) => {
              event.stopPropagation()
              dispatch(setModalClose())
            }}>
            <CloseIcon className={styles.close} />
          </IconButton>
        </>
      </Modal>
    </>
  )
}

export { Portal }
