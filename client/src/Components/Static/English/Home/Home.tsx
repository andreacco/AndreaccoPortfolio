import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import Welcome from '../Welcome/Welcome'
import TechSkills from '../AboutMe/TechSkills/TechSkills'
import SoftSkills from '../AboutMe/SoftSkills/SoftSkills'
import '../../../../Styles/Home/Home.scss'
import { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <button className='go-up-button'>
                <BsFillArrowUpCircleFill
                onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}}/>
            </button>
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
