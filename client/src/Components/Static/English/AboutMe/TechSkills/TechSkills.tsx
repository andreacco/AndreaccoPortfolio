import Tech from "../../../../../data/TechSkills"
import '../../../../../Styles/Skills/TechSkills.scss'
import { GrTechnology } from "react-icons/gr";

export default function TechSkills() {

  return (
    <div className="tech-skills-div" id='mySkills'>
      <div className="title-container">
      <GrTechnology
        size={40}
        color={'#3F00B5'}/>
        <h1>Tech Skills</h1>
      </div>
      <ul className="tech-skills-container">
        {
          Tech.map(s => {
            return(
              <div className="each-skill">
                <div>
                  <img src={s.img} alt={s.alt}/>
                </div>
                <span>{s.name}</span>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
