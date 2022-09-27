import { BsPersonCircle } from "react-icons/bs";
import soft from "../../../../../data/SoftSkills";
import '../../../../../Styles/Skills/SoftSkills.scss'

export default function SoftSkills() {
  return (
    <div className="soft-skills-div">
      <div className="title-container">
      <BsPersonCircle
        size={40}
        color={'#3F00B5'}/>
        <h1>Soft Skills</h1>
      </div>
      <div className="soft-skills-container">
        {
          soft.map(s => {
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
      </div>
    </div>
  )
}
