import { FC } from 'react'
import styles from './styles.module.scss'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuOpen from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

const BasicMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        {open ? <MenuOpen className={styles.menu} /> : <MenuIcon className={styles.menu} />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <Link to={'/cabinet'}>
          <MenuItem onClick={handleClose}>Cabinet</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
      </Menu>
    </>
  )
}

export { BasicMenu }
