import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import AboutMe from "./about";
import ContactPage from "./contact";
import HomePage from "./home";
import MySkills from "./myskills";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/About-me" element={<AboutMe />} />
        <Route path="/MySkills" element={<MySkills />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
