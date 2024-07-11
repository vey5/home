import styles from './styles.module.scss'
import { FC, useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import Input from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { Button } from '../Button'
import { IconButton } from '@mui/material'
import { User } from '../../types/api'
import { useGetUserQuery } from '../../store/services/userApi'

// type Props = {
//   id: number
// }

const UserInfo: FC = () => {
  const [open, setOpen] = useState(false)
  const { handleSubmit, control } = useForm()
  const { data } = useGetUserQuery(3)
  console.log(data)

  const submit = (_data: any) => console.log(_data)

  return (
    <div className={styles.user}>
      <Modal open={open}>
        <div className={styles.wrapperForm}>
          <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <Input
                  className={styles.input}
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  value={value}
                  error={!value}
                  onChange={onChange}
                  helperText={!value && 'Введите логин'}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <Input
                  className={styles.input}
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={value}
                  error={!value}
                  onChange={onChange}
                  helperText={!value ? 'Введите пароль' : 'Никому не сообщайте свой пароль'}
                />
              )}
            />
            <IconButton type="submit">
              <Button size="form" variant="gray">
                Create/update
              </Button>
            </IconButton>
            <IconButton
              onClick={(event) => {
                event.stopPropagation()
                setOpen(false)
              }}>
              <CloseIcon className={styles.close} />
            </IconButton>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export { UserInfo }
