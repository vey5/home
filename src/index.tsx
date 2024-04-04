import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StyledEngineProvider } from '@mui/material'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 450,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
)

reportWebVitals()
