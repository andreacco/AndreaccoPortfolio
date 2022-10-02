import '../../../../../Styles/AboutMe/BannerAboutMe.scss'
import Pdf from '../../../../../Resume - Andrea Carvajal Osorio.pdf'

const ButtonResume = () => {
  return (
    <div>
      <a href={Pdf} target="_blank" rel="noreferrer noopener" >
          <button className='resume-button' >See My Resume!</button>
      </a>
    </div>
  )
}

export default ButtonResume;