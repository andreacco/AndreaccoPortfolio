import './App.scss'
import NavBar from './Components/Static/English/NavBar/NavBar'
import AboutMe from './Components/Static/English/AboutMe/AboutMe'
import Home from './Components/Static/English/Home/Home'
import Projects from './Components/Static/English/Projects/Projects'
import Contact from './Components/Static/English/Contact/Contact'
import Skills from './Components/Static/English/AboutMe/TechSkills/TechSkills'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<NavBar/>}/>
        </Route>
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/MySkills" element={<Skills/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
