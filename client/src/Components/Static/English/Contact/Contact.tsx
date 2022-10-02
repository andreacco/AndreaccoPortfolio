import { AiOutlineLinkedin } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import '../../../../Styles/Contact/Contact.scss'

const Contact = () => {
    return (
        <div className="Contact-container" id='contact'>
            <a href='https://www.linkedin.com/in/andrea-carvajal-osorio/' target='_blank'>
                <AiOutlineLinkedin
                size={30}
                color={'#171515'}
                className='Social-Media'/>
            </a>
            <a href='mailto:andreacc9199@gmail.com?Subject=Hi%20Andrea!%20I%20want%20to%20talk%20with%20you'>
                <FiMail
                size={30}
                color={'#171515'}
                className='Social-Media'/>
            </a>
            <a href='https://github.com/andreacco' target='_blank'>
                <BsGithub
                size={30}
                color={'#171515'}
                className='Social-Media'/>
            </a>
        </div>
    )
}

export default Contact