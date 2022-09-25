import '../../../../Styles/AboutMe/AboutMe.scss'
import SoftSkills from './SoftSkills/SoftSkills'
import TechSkills from './TechSkills/TechSkills'
import myImage from '../../../../assets/PhotoRoom-20220924_210451.png'
import myImage2 from '../../../../assets/PhotoRoom-20220924_210411.png'

export default function AboutMe() {
  return (
    <div className='About-Me-div'>
      <div className='left-side'>
        <div className='card'>
            <img className='me' src={myImage} alt='Andrea-saying-Hi!'/>
            {/* <img className='me' src={myImage2} alt='Andrea-saying-Hi!' height='450px'/> */}
        </div>
      </div>
      <div className='about-me-text'>
        <p>I am a Full stack developer from Venezuela, who loves front-end development and web applications that look good and are completely useful and functional. I have always been passionate about technology. Since I was in high school and I had a subject called computer science (in which I learned to develop in Visual Basic), I fell in love with development and I was clear that in my career, I wanted to do something related to it, that's how the opportunity to become a Full Stack Developer with Henry Academy appeared and I took it right away. That's how, five months later, I'm making my own portfolio and you are reading this right now in it. </p>
        <p>I'm very committed to everything I do and persist until it's done. I'm enthusiastic, communicative, loyal, and honest person, challenge-lover and someone that absolutely loves learning new things every day. </p>
        <p>Whenever I'm not coding, I really enjoy to read a book, listen to music, practice meditation or something that relaxes my mind and body, watch series and movies, I also enjoy the nature beauty, I'm a sky-lover and like to take photos of it, and least but no last, I'm a foodie, I really love to go out to eat and enjoy with my family or friends at it.</p>
      </div>
      {/* <h1>My Skills:</h1>
      <TechSkills/>
      <SoftSkills/> */}
    </div>
  )
}
