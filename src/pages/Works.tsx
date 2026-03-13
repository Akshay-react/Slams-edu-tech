import WorksCard from '../components/WorksCard';
// import img1 from "../assets/works/works1.png"

import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import ScrollToTop from '@/components/ScrollToTop';
const Works = () => {
  return (
<section className=' px-10 pt-[112px]'>
   <ScrollToTop/>

 <p className="font-medium text-[24px] text-[#70A9FF]">Works</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl">Smart Solutions for a
      <span className="text-blue-400"> Digital World </span></p>
      <div className="pt-4">
      
          </div>
        </div>
              <p className="pt-4 text-[#ADADAD] text-[20px] text-sm sm:text-base md:text-lg font-outfit max-w-[1100px]">From ideas to execution, we build digital solutions <br /> that help your business grow and stay ahead. </p>


       <div className="flex justify-between gap-6 items-end pt-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-4">
  {projects.map((project) => (
    <Link key={project.id} to={`/project/${project.id}`}>
      <WorksCard
        image={project.coverImage } // temporary image
        name={project.title}
        stack={project.subtitle}
      />
    </Link>
  ))}


         {/* <WorksCard
        image={img1}
        name="Torch"
        stack="Mobile App"
      />
          */}

              </div>

    </section>  )
}

export default Works