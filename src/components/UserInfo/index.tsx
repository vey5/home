import styles from './styles.module.scss'
import { FC } from 'react'
import Input from '@mui/material/TextField'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '../Button'
import { IconButton } from '@mui/material'
import { useGetUserQuery } from '../../store/services/userApi'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Loader } from '../Loader'
import CloseIcon from '@mui/icons-material/Close'
import { setModalClose } from '../../store/slices/cabinetSlice'

const UserInfo: FC = () => {
  const id = useSelector((state: RootState) => state.form.selectedUserId)
  const { data, isLoading } = useGetUserQuery(id)
  const { handleSubmit, control } = useForm({
    defaultValues: {
      userId: data?.userId,
      email: data?.email,
      isAdmin: data?.isAdmin,
      firstName: data?.firstName,
      lastName: data?.lastName,
    },
  })
  console.log(data)

  const submit = (_data: any) => console.log(_data)

  if (isLoading) {
    return <Loader />
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <Controller
        name="userId"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic"
            label="userId"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите email'}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic"
            type="email"
            label="email"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите email'}
          />
        )}
      />
      <Controller
        name="isAdmin"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic"
            label="isAdmin"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите email'}
          />
        )}
      />
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic"
            label="firstName"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите имя'}
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
            label="lastName"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите фамилию'}
          />
        )}
      />
      <IconButton type="submit">
        <Button size="forms" variant="gray">
          Create/update
        </Button>
      </IconButton>
    </form>
  )
}

export { UserInfo }
