import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./components/index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.tsx'
import AboutPage from './pages/about.tsx'
import ContactPage from './pages/contact.tsx'
import Navbar from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar name={"Salman Ahady"} />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/About" element={<AboutPage />}/>
      <Route path="/Contact" element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
