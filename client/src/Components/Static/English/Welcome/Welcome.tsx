import '../../../../Styles/Welcome/Welcome.scss';
import welcomeImage from '../../../../assets/welcome-img.png'

export default function Welcome() {
  return (
    <section className="Welcome-div">
      <div className='Welcome-information-text'>
        <div className='circle-number-one'></div>
        <img className='welcome-img' src={welcomeImage} alt='Andrea-saying-Hi!' height='400px'/>
        <div className='text-div'>
          <span>Hello! Welcome to my world!</span>
          <p>My name is... </p>
          <h1>Andrea Carolina Carvajal Osorio</h1>
          <br/>
          <h3>I'm a Full Stack developer focused on Front-End</h3>
          <br/>
          <span>I Love creating</span>
          <p>Aquí va lo condicional</p>
          <button>Let's talk!</button>
        </div>
      </div>
    </section>
  )
}
