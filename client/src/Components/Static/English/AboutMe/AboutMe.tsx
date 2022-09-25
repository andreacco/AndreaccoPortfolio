import '../../../../Styles/AboutMe/AboutMe.scss'
import SoftSkills from './SoftSkills/SoftSkills'
import TechSkills from './TechSkills/TechSkills'
import BannerAboutMe from './BannerAboutMe/BannerAboutMe'
import { TbMoodHappy } from "react-icons/tb";
import { TbArrowWaveRightDown } from "react-icons/tb";

export default function AboutMe() {
  return (
    <div className='About-Me-div'>
      {/* <div className='left-side'> */}
        {/* <div className='card'>
            <img className='me' src={myImage} alt='Andrea-saying-Hi!'/> */}
            {/* <img className='me' src={myImage2} alt='Andrea-saying-Hi!' height='450px'/> */}
        {/* </div> */}
      {/* </div> */}
        <div className='title-container'>
          <TbMoodHappy
          size={40}
          color={'#3F00B5'}/>
          <h1>Who am I?</h1>
          <span></span>
        </div>
        <BannerAboutMe/>
        {/* <div className='about-me-text'>
          <div className='first-line-about-me'>
            <p>I am a Full stack developer from Venezuela, who loves front-end development and web applications that look good and are completely useful and functional. YO SOLA SONRIENDO CON ALGO ALUSIVO A VENEZUELA, PUEDE SER EL AVILA O ALGO</p>

            <p>I have always been passionate about technology. Since I was in high school and I had a subject called computer science (in which I learned to develop in Visual Basic), I fell in love with development and I was clear that in my career, I wanted to do something related to it. YO CODEANDO</p>

            <p>That's how the opportunity to become a Full Stack Developer with Henry Academy appeared and I took it right away. YO EN HENRY</p>
            
            <p>Then, five months later, I'm making my own portfolio and you're reading this right now in it. CERTIFICADO HENRY Y YO O ALGO ASI</p>
          </div>
          <div className='second-line-about-me'>
            <p>I'm very committed to everything I do and persist until it's done. I'm enthusiastic, communicative, loyal, and honest person, challenge-lover and someone that absolutely loves learning new things every day. YO HACIENDO CUALQUIER COSA RELACIONADA CON LO QUE DIGO AQUI </p>
          </div>
          <div className='third-line-about-me'>
            <p>Whenever I'm not coding, I really enjoy to read a book, listen to music, practice meditation or something that relaxes my mind and body, watch series and movies. YO HACIENDO CUALQUIER COSA RELACIONADA CON LO QUE DIGO AQUI

            I also enjoy the nature beauty, I'm a sky-lover and like to take photos of it, and least but no last, I'm a foodie, I really love to go out to eat and enjoy with my family or friends at it. YO HACIENDO CUALQUIER COSA RELACIONADA CON LO QUE DIGO AQUI</p>
          </div>
        </div> */}
      {/* <h1>My Skills:</h1>
      <TechSkills/>
      <SoftSkills/> */}
    </div>
  )
}
