import React from 'react'
import SoftSkills from './SoftSkills/SoftSkills'
import TechSkills from './TechSkills/TechSkills'

export default function AboutMe() {
  return (
    <div>
      <h3>I am a Full stack developer from Venezuela, who loves front-end development and web applications that look good and are completely useful and functional. I have always been passionate about technology. Since I was in high school and I had a subject called computer science (in which I learned to develop in Visual Basic), I fell in love with development and I was clear that in my career, I wanted to do something related to it, that's how the opportunity to become a Full Stack Developer with Henry Academy appeared and I took it right away. That's how, five months later, I'm making my own portfolio and you are reading this right now in it. 
        <p>I'm very committed to everything I do and persist until it's done. I'm enthusiastic, communicative, loyal, and honest person, challenge-lover and someone that absolutely loves learning new things every day. </p>
        <p>Whenever I'm not coding, I really enjoy to read a book, listen to music, practice meditation or something that relaxes my mind and body, watch series and movies, I also enjoy the nature beauty, I'm a sky-lover and like to take photos of it, and least but no last, I'm a foodie, I really love to go out to eat and enjoy with my family or friends at it.</p>
      </h3>
      <h1>My Skills:</h1>
      <TechSkills/>
      <SoftSkills/>
    </div>
  )
}
