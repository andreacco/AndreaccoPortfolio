import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import Welcome from '../Welcome/Welcome'

export default function Home() {
    return (
        <>
            <NavBar/>
            <Welcome/>
            <AboutMe/>
            <Projects/>
            <Footer/>
        </>
    )
}
