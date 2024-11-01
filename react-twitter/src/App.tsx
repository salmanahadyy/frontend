import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import './style.css'
import RegisterPage from './pages/registerpage'
import DetailUserPage from './pages/detailuserpage'
import UserPage from './pages/UserPage'
import HomePage from './pages/homepage'

function App() {
 return(
  <div>
     <Navbar />
<Routes>

<Route path='/' element={<HomePage />} />
<Route path='/users' element={<UserPage />} />
<Route path='/register' element={<RegisterPage />} />
<Route path='/:userId' element={<DetailUserPage />} />
</Routes>
  </div>
 )
}

export default App
