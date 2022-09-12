import { Link } from 'react-router-dom'
import '../../../../Styles/NavBar/NavBar.scss'
export default function NavBar() {
    return (
        <section className='NavBar-Container'>
            <div className='Logo-Container'>
                <Link to='/'>
                    <img src='Logo_Light_Mode.svg' alt='Andrea-Carvajal-Osorio-Logo' height='100px'/>
                </Link>
            </div>
            <div className='NavBar-Content-Container'>
                <Link to='/AboutMe'>
                    <span>About Me</span>
                </Link>
                <Link to='/Projects'>
                    <span>Projects</span>
                </Link>
                <Link to='/MySkills'>
                    <span>My Skills</span>
                </Link>
                <Link to='/Contact'>
                    <span>Contact</span>
                </Link>
                </div>
        </section>
    )
}
