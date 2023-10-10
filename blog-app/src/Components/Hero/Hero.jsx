import robot from '../../assets/robot.png'
import './Hero.css'

const Hero = () => {
  return (
    <div  className="hero">
        <div className="hero-content">
        <h2>Exciting News!!</h2>
        <p>Get ready for an exhilarating ride! Introducing our thrilling new podcast: <strong>The Code Crunch</strong>, set to make its grand debut on November 1, 2023. <br/> Join us for an incredible journey featuring tech powerhouses as our guests every week, delivering mind-boggling insights and captivating discussions.<br/> Do not miss out! Subscribe to our podcast today and become part of an extraordinary community. Connect with mentors, fellow learners, enthusiasts, and innovators for an unforgettable tech adventure! </p>
        <a type="button">Subscribe</a>
        </div>
        <div className="hero-image">
            <img src={robot}/>
      
        </div>
    </div>
  )
}

export default Hero