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

    const handleClick = () => {
        (document.getElementById('menu-input') as HTMLInputElement).checked = false;
    }

    return (
        <section className='NavBar-Container'>
            <div className='Logo-Container'>
                <Link to='/'>
                    <img src='Logo_Light_Mode.svg' alt='Andrea-Carvajal-Osorio-Logo' height='100px'/>
                </Link>
            </div>
            <div className='NavBar-Content-Container'>
                <input type="checkbox" id='menu-input' />

                <span></span>
                <span></span>
                <span></span>

                
                <ul className='menu'>
                    <a href='#aboutMe' className='link' onClick={() => handleClick()}>
                        <li>About Me</li>
                    </a>
                    <a href='#mySkills' className='link' onClick={() => handleClick()}>
                        <li>My Skills</li>
                    </a>
                    <a href='#projects' className='link' onClick={() => handleClick()}>
                        <li>Projects</li>
                    </a>
                    <a href='#contact' className='link' onClick={() => handleClick()}>
                        <li>Contact</li>
                    </a>
                </ul>

                </div>
                <div className='progress'>
                    <span className='bar'></span>
                </div>
        </section>
    )
}
