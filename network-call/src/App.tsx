import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './style.css'
import RegisterPage from './pages/registerPage'
import Navbar from './components/navbar'
import DetailUserPage from './pages/DetailUserPage'

function App() {
  return (
<div>
  <Navbar />
<Routes>

<Route path='/' element={<HomePage />} />
<Route path='/register' element={<RegisterPage />} />
<Route path='/:userId' element={<DetailUserPage />} />
</Routes>
</div>
  )
}

export default App
