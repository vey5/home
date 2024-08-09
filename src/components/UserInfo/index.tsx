import styles from './styles.module.scss'
import { FC, useState } from 'react'
import Input from '@mui/material/TextField'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '../Button'
import { IconButton } from '@mui/material'
import { useGetUserQuery, useUpdateUserMutation } from '../../store/services/userApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Loader } from '../Loader'
import { useSnackbar } from 'notistack'
import Checkbox from '@mui/material/Checkbox'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'

const UserInfo: FC = () => {
  const id = useSelector((state: RootState) => state.form.selectedUserId)
  const [eye, setEye] = useState(false)
  const { data, isLoading } = useGetUserQuery(id)
  const [sendRequest] = useUpdateUserMutation()
  const { enqueueSnackbar } = useSnackbar()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: data?.email,
      isAdmin: data?.isAdmin,
      firstName: data?.firstName,
      lastName: data?.lastName,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
    },
  })
  console.log(data)

  const handleEye = () => {
    setEye(!eye)
  }

  const submit = (_data: any) => {
    sendRequest(data).then((response) => {
      enqueueSnackbar('succesfully', response.data)
    })
    console.log(_data)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic-email"
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
        render={({ field }) => (
          <div>
            <Checkbox {...field} defaultChecked />
          </div>
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
            id="outlined-basic-firstName"
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
            id="outlined-basic-lastName"
            label="lastName"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Введите фамилию'}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="standard-adornment-password"
            type={eye ? 'text' : 'password'}
            label="Password"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={value && 'Введите пароль'}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Input
            className={styles.input}
            size="small"
            fullWidth
            id="outlined-basic-password"
            type="password"
            label=" Confirm Password"
            variant="outlined"
            value={value}
            error={!value}
            onChange={onChange}
            helperText={!value && 'Подтвердите пароль'}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
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

//TODO: нет отображения иконки глаза в инпутах Password
