import styles from './styles.module.scss'
import { FC, PropsWithChildren, useState } from 'react'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* <Modal open={open}>
      {children}
     
    </Modal> */}
    </>
  )
}

export { Portal }
