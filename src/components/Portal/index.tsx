import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

type Props = {
  isOpen?: boolean
}

const Portal: FC<PropsWithChildren<Props>> = ({ children, isOpen }) => {
  return (
    <></>
    // <Modal>
    //   {children}
    //   <IconButton className={styles.close}>
    //     <CloseIcon />
    //   </IconButton>
    // </Modal>
  )
}

export { Portal }
