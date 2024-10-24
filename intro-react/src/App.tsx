import Navbar from "./components/navbar"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import HomePage from "./pages/home"

function App() {
 const nama:string="Salman Ahady"
  return (
   <div>
    <Navbar name={nama} />
    <HomePage />
    <AboutPage />
    <ContactPage />
   </div>
  )
}

export default App
