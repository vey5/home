import { FC } from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const Loader: FC = () => {
  return (
    <Stack
      sx={{
        marginTop: '50vh',
        marginBottom: '50vh',
      }}
      justifyContent="center"
      alignItems="center">
      <CircularProgress color="warning" thickness={5} />
    </Stack>
  )
}

export { Loader }
