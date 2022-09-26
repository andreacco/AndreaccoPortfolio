import '../../../../Styles/Projects/Projects.scss';
import { TbDeviceDesktop } from "react-icons/tb";
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Projects() {

  const projects = [
    {   
        img: '',
        alt: 'SuperMarket-project',
        name: 'SuperMarket',
        description: "",
        gitHub: '',
        deploy: ''
    },
    {   
      img: '',
      alt: 'MusicApp-project',
      name: 'Music App',
      description: "",
      gitHub: '',
      deploy: ''
  },
    {   
        img: 'https://res.cloudinary.com/drdbdhlp2/image/upload/v1664182003/Portfolio/Projects/MangaCoffee_kfvw2q.png',
        alt: 'Manga-Coffee-project',
        name: 'Manga Coffee',
        description: "It's a highly scalable project based on Manga's exciting and gigantic world. In the app you can sign up to interact with other manga fans through the chat, read your favorite Manga, as well as comment, rate or add to your favorite list. It has also a shop where you can buy products related to Manga's world",
        gitHub: 'https://github.com/andreacco',
        deploy: ''
    },
    {   
      img: 'https://res.cloudinary.com/drdbdhlp2/image/upload/v1664181893/Portfolio/Projects/wikidogs_mbqaei.png',
      alt: 'WikiDogs-project',
      name: 'WikiDogs',
      description: "SPA where you can see the different dog breeds along with relevant information about them, you also can create your own breed, and sort and filter them.",
      gitHub: '',
      deploy: ''
    },
    {   
      img: '',
      alt: 'Calculator-project',
      name: 'Calculator',
      description: "",
      gitHub: '',
      deploy: ''
    },
    {   
      img: '',
      alt: 'Wheather-App-project',
      name: 'Wheather App',
      description: "",
      gitHub: '',
      deploy: ''
  },
]

  return (
    <div className='Projects-div'>
      <div className='title-container'>
        <TbDeviceDesktop
        size={40}
        color={'#3F00B5'}/>
        <h1>Projects:</h1>
      </div>
      <div className="my-projects-container">
        {/* {
          projects.map(p => {
            return (
              <div>
                <span>{p.name}</span>
                <img src={p.img} alt={p.alt} />
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
            )
          })
        } */}
        <div>
          <span>SuperMarket</span>
          <img src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664182003/Portfolio/Projects/MangaCoffee_kfvw2q.png' alt='manga-coffee-project'/>
        </div>
        <div>
          <span>Music App</span>
        </div>
        <div>
          <span>Manga Coffee</span>
          <p>It's a highly scalable project based on Manga's exciting and gigantic world. In the app you can sign up to interact with other manga fans through the chat, read your favorite Manga, as well as comment, rate or add to your favorite list. It has also a shop where you can buy products related to Manga's world</p>
        </div>
      </div>
      <div className="my-projects-container">
        <div>
          <span>WikiDogs</span>
          <p>
          SPA where you can see the different dog breeds along with relevant information about them, you also can create your own breed, and sort and filter them.
          </p>
          <img src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664181893/Portfolio/Projects/wikidogs_mbqaei.png' alt='wikidogs-project'/>
        </div>
        <div>
          <span>Calculator</span>
        </div>
        <div>
          <span>Wheather App</span>
        </div>
      </div>
    </div>
  )
}

// import '../../../../Styles/Projects/Projects.scss';
// import { TbDeviceDesktop, TbBrandGithub, TbWorld } from "react-icons/tb";

// export default function Projects() {

//   const projects = [
//     {   
//         img: '',
//         alt: 'SuperMarket-project',
//         name: 'SuperMarket',
//         description: "",
//         gitHub: '',
//         deploy: ''
//     },
//     {   
//       img: '',
//       alt: 'MusicApp-project',
//       name: 'Music App',
//       description: "",
//       gitHub: '',
//       deploy: ''
//   },
//     {   
//         img: 'https://res.cloudinary.com/drdbdhlp2/image/upload/v1664182003/Portfolio/Projects/MangaCoffee_kfvw2q.png',
//         alt: 'Manga-Coffee-project',
//         name: 'Manga Coffee',
//         description: "It's a highly scalable project based on Manga's exciting and gigantic world. In the app you can sign up to interact with other manga fans through the chat, read your favorite Manga, as well as comment, rate or add to your favorite list. It has also a shop where you can buy products related to Manga's world",
//         gitHub: 'https://github.com/andreacco',
//         deploy: ''
//     },
//     {   
//       img: 'https://res.cloudinary.com/drdbdhlp2/image/upload/v1664181893/Portfolio/Projects/wikidogs_mbqaei.png',
//       alt: 'WikiDogs-project',
//       name: 'WikiDogs',
//       description: "SPA where you can see the different dog breeds along with relevant information about them, you also can create your own breed, and sort and filter them.",
//       gitHub: '',
//       deploy: ''
//     },
//     {   
//       img: '',
//       alt: 'Calculator-project',
//       name: 'Calculator',
//       description: "",
//       gitHub: '',
//       deploy: ''
//     },
//     {   
//       img: '',
//       alt: 'Wheather-App-project',
//       name: 'Wheather App',
//       description: "",
//       gitHub: '',
//       deploy: ''
//   },
// ]

//   return (
//     <div className='Projects-div'>
//       <div className='title-container'>
//         <TbDeviceDesktop
//         size={40}
//         color={'#3F00B5'}/>
//         <h1>Projects:</h1>
//       </div>
//       <div className="my-projects-container">
//         {
//           projects.map(p => {
//             return (
//               <div>
//                 <span>{p.name}</span>
//                 <img src={p.img} alt={p.alt} />
//                 <p>{p.description}</p>
//                 <a href={p.gitHub} target="_blank">
//                   <TbBrandGithub className="svg"
//                   size={27}
//                   color={'#343539'}
//                   />
//                 </a>
//                 <a href={p.deploy} target="_blank">
//                   <TbWorld className="svg"
//                   size={27}
//                   color={'#343539'}
//                   />
//                 </a>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }