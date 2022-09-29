import '../../../../Styles/Projects/Projects.scss';
import { TbDeviceDesktop } from "react-icons/tb";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import myProjects from '../../../../data/proyects';

export default function Projects() {

  return (
    <div className='Projects-div'>
      <div className='title-container'>
        <TbDeviceDesktop
        size={40}
        color={'#3F00B5'}/>
        <h1>Projects:</h1>
      </div>
      <div className="my-projects-container"> {/* container__card */}
        {
          myProjects.map(p => {
            return (
              <div className='card p1'> {/* card c1 */}
                <div className='img-Name'> {/* icon */}
                  <span>{p.name}</span>
                  <img src={p.img} alt={p.alt} />
                </div>
                <div className='info-description'> {/* info__description */}
                  <p>{p.description}</p>
                  <a href={p.gitHub} target="_blank">
                    <BsGithub className="svg"
                    size={27}
                    color={'#343539'}
                    />
                  </a>
                  <a href={p.deploy} target="_blank">
                    <BsLinkedin className="svg"
                    size={27}
                    color={'#343539'}
                    />
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
