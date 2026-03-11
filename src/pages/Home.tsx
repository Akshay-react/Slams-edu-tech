import HeroPage from '../sections/Home/HeroPage'
import Service from '../sections/Home/Service';
import Works from '../sections/Home/Works';
import About from '../sections/Home/About';
import Team from '../sections/Home/Team';
import FoundersMessage from '../sections/Home/FounderMessage';
import Robo from '../sections/Home/Robo';
import Build from '../sections/Home/Build';
import ContactSection from '../sections/Home/GetInTouch';
// import Deliver from '../sections/Home/Deliver';
const Home = () => {
  return (
   <div className="">
    
    <HeroPage />
    <Service />
    <Works />
    {/* <Deliver /> */}
    <About />
    <FoundersMessage />
    <Team/>
    <Build />
    <Robo />
    <ContactSection />
   </div>
  )
}

export default Home
