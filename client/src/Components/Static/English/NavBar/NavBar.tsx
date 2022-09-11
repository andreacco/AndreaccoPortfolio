import { Link } from 'react-router-dom'
import '../../../../Styles/NavBar/NavBar.css'
export default function NavBar() {
    return (
        <div className='NavBar-Container'>
            <div className='Logo-Container'>
                <Link to='/'>
                    <img src='Logo_Light_Mode.svg' alt='' height='120px'/>
                </Link>
            </div>
            <div className='NavBar-Content-Container'>
                <Link to='/AboutMe'>
                    <h1>About Me</h1>
                </Link>
                <Link to='/Projects'>
                    <h1>Projects</h1>
                </Link>
                <Link to='/MySkills'>
                    <h1>My Skills</h1>
                </Link>
                <Link to='/Contact'>
                    <h1>Contact</h1>
                </Link>
            </div>
        </div>
    )
}
