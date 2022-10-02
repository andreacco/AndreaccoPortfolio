import '../../../../Styles/Projects/Projects.scss';
import { TbDeviceDesktop } from "react-icons/tb";
import { BsGithub } from "react-icons/bs"
import { TbWorld } from "react-icons/tb"
import myProjects from '../../../../data/proyects';

export default function Projects() {
  return (
    <div className='Projects-div' id='projects'>
      <div className='title-container'>
        <TbDeviceDesktop
        size={40}
        color={'#3F00B5'}/>
        <h1>Projects:</h1>
      </div>
      <div className="my-projects-container"> 
        {
          myProjects.map(p => {
            return (
              <div className='card'>
                <div className='img-Name'>
                  <span className='name'>{p.name}</span>
                  <img src={p.img} alt={p.alt} />
                <div className='info-description'>
                  <span className='name-while-hovering'>{p.name}</span>
                  <p>{p.description}</p>
                  <div className='buttons'>
                    <a href={p.gitHub} target="_blank">
                      <BsGithub className="svg"
                      size={27}
                      color={'#171515'}
                      />
                    </a>
                    <a href={p.deploy} target="_blank">
                      <TbWorld className="svg"
                      size={27}
                      color={'#171515'}
                      />
                    </a>
                  </div>
                </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
