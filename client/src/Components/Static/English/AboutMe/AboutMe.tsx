import '../../../../Styles/AboutMe/AboutMe.scss'
import SoftSkills from './SoftSkills/SoftSkills'
import TechSkills from './TechSkills/TechSkills'
import BannerAboutMe from './BannerAboutMe/BannerAboutMe'
import { TbMoodHappy } from "react-icons/tb";
import { TbArrowWaveRightDown } from "react-icons/tb";

export default function AboutMe() {
  return (
    <div className='About-Me-div' id='aboutMe'>
        <div className='title-container'>
          <TbMoodHappy
          size={40}
          color={'#3F00B5'}/>
          <h1>Who am I?</h1>
          <span></span>
        </div>
        <BannerAboutMe/>
    </div>
  )
}
