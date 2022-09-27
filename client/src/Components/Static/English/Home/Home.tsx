import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import Welcome from '../Welcome/Welcome'
import TechSkills from '../AboutMe/TechSkills/TechSkills'
import SoftSkills from '../AboutMe/SoftSkills/SoftSkills'

export default function Home() {
    return (
        <>
            <NavBar/>
            <Welcome/>
            <AboutMe/>
            <TechSkills/>
            <SoftSkills/>
            <Projects/>
            <Footer/>
        </>
    )
}
