import styles from './styles.module.scss'
import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setCookies } from '../../utils/cookie'
import { useSnackbar } from 'notistack'
import Input from '@mui/material/TextField'
import { Button } from '../../components/Button'
import { IconButton } from '@mui/material'
import { useLoginMutation } from '../../store/services/sessionApi'

const Login: FC = () => {
  const { handleSubmit, control } = useForm()
  const { enqueueSnackbar } = useSnackbar()
  const [sendRequest] = useLoginMutation()
  const navigate = useNavigate()

  const submit = (data: any) => {
    sendRequest(data).then(
      (response) => {
        setCookies('token', response.data.token)
        if (data) {
          navigate('/cabinet/user-info', { replace: true })
        }
      },
      (error) => {
        enqueueSnackbar('failed autorization', {
          autoHideDuration: 3000,
        })
        throw error
      }
    )
    console.log('data', data)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue="vlad@mail.ru"
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
          name="password"
          control={control}
          rules={{ required: true }}
          defaultValue="1234"
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
          <Button size="forms" variant="gray">
            Login
          </Button>
        </IconButton>
      </form>
    </div>
  )
}

export { Login }
