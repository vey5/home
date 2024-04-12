import { FC } from 'react'
import styles from './styles.module.scss'
import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuOpen from '@mui/icons-material/MenuOpen'

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
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuOpen className={styles.menu} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
        <MenuItem onClick={handleClose}>Nav Link</MenuItem>
      </Menu>
    </div>
  )
}

export { BasicMenu }
