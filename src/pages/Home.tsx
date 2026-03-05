import HeroPage from '../sections/Home/HeroPage'
import Service from '../sections/Home/Service';
import Works from '../sections/Home/Works';
import About from '../sections/Home/About';
import FoundersMessage from '../sections/Home/FounderMessage';
import Robo from '../sections/Home/Robo';
import Build from '../sections/Home/Build';
import ContactSection from '../sections/Home/GetInTouch';
import Footer from '../components/Footer';
// import Deliver from '../sections/Home/Deliver';
const Home = () => {
  return (
   <div className="px-">
    <HeroPage />
    <Service />
    <Works />
    {/* <Deliver /> */}
    <About />
    <FoundersMessage />
    <Build />
    <Robo />
    <ContactSection />
    <Footer />
   </div>
  )
}

export default Home
