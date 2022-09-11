import { Link } from 'react-router-dom'
import '../../../../Styles/NavBar/NavBar.css'
export default function NavBar() {
    return (
        <header id='NavBar-Container'>
            <div className='Logo-Container'>
                <Link to='/'>
                    <img src='Logo_Light_Mode.svg' alt='' height='120px'/>
                </Link>
                <div className='NavBar-Content-Container'>
                    <Link to='/AboutMe'>
                        <p>About Me</p>
                    </Link>
                    <Link to='/Projects'>
                        <p>Projects</p>
                    </Link>
                    <Link to='/MySkills'>
                        <p>My Skills</p>
                    </Link>
                    <Link to='/Contact'>
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}
