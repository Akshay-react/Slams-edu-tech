import { lazy, Suspense } from "react";
import Loader from "@/components/Loader";

const HeroPage = lazy(() => import('../sections/Home/HeroPage'));
const Service = lazy(() => import('../sections/Home/Service'));
const Works = lazy(() => import('../sections/Home/Works'));
const About = lazy(() => import('../sections/Home/About'));
const Team = lazy(() => import('../sections/Home/Team'));
const FoundersMessage = lazy(() => import('../sections/Home/FounderMessage'));
const Robo = lazy(() => import('../sections/Home/Robo'));
const Build = lazy(() => import('../sections/Home/Build'));
const Faq = lazy(() => import('../sections/Home/Faq'));
const ContactSection = lazy(() => import('../sections/Home/GetInTouch'));
const Home = () => {
  return (
    <div>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <HeroPage />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Service />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Works />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <FoundersMessage />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Team />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Build />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Robo />
      </Suspense>
      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <Faq />
      </Suspense>

      <Suspense fallback={<div className="p-10"><Loader/></div>}>
        <ContactSection />
      </Suspense>

    </div>
  );
};
export default Home
