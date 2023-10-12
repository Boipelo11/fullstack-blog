import robot from '../../assets/robot.png'
import './Hero.css'

const Hero = () => {
  return (
    <div  className="hero">
        <div className="hero-content">
        <h1>Our Latest News:</h1>
         <h2>We have a new <span>Podcast</span>!!</h2>
         <br/>
         <br/>
        <p>Get ready for an exhilarating ride! Introducing our thrilling new podcast: <strong>The Code Crunch</strong>, set to make its grand debut on November 1, 2023. <br/><br/>Join us for an incredible journey featuring tech powerhouses as our guests every week, delivering mind-boggling insights and captivating discussions.<br/><br/> Do not miss out! Subscribe to our podcast today and become part of an extraordinary community. Connect with mentors, fellow learners, enthusiasts, and innovators for an unforgettable tech adventure! </p>
        <button>Join Community</button>
        </div>
        <div className="hero-image">
            <img src={robot}/>
      
        </div>
    </div>
  )
}

export default Hero