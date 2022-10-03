import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../../Styles/NavBar/NavBar.scss'

export default function NavBar() {
    const updateBar = () => {
        const bodyEl:any = document.body
        const barEl:any = document.querySelector('.bar')
        let scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight) * 100)
        barEl.style.width = `${scrollPos}%`
        requestAnimationFrame(updateBar)
    } 

    useEffect (() => {
        updateBar()
    })

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <section className='NavBar-Container'>
            <div className='Logo-Container'>
                <Link to='/'>
                    <img src='Logo_Light_Mode.svg' alt='Andrea-Carvajal-Osorio-Logo' height='100px'/>
                </Link>
            </div>
            <button >
                <span className="burguer"></span>
                <span className="burguer one"></span>
                <span className="burguer two"></span>
                <span className="burguer three"></span>
            </button>
            <div className='NavBar-Content-Container'>
                <a href='#aboutMe' className='link'>
                    <span>About Me</span>
                </a>
                <a href='#mySkills' className='link'>
                    <span>My Skills</span>
                </a>
                <a href='#projects' className='link'>
                    <span>Projects</span>
                </a>
                <a href='#contact' className='link'>
                    <span>Contact</span>
                </a>
                </div>
                <div className='progress'>
                    <span className='bar'></span>
                </div>
        </section>
    )
}
