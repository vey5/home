import './App.css'
import { MainPage } from './pages/Main'
import { Routes, Route } from 'react-router-dom'
import { Cabinet } from './pages/Main/Cabinet'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Routes>
    </>
  )
}

export default App
