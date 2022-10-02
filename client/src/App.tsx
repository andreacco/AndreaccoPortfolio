import './App.scss'
import NavBar from './Components/Static/English/NavBar/NavBar'
import AboutMe from './Components/Static/English/AboutMe/AboutMe'
import Home from './Components/Static/English/Home/Home'
import Projects from './Components/Static/English/Projects/Projects'
import Skills from './Components/Static/English/AboutMe/TechSkills/TechSkills'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<NavBar/>}/>
        </Route>
        {/* <Route path="/Resume" element={<Resume/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
