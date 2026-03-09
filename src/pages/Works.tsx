import WorksCard from '../components/WorksCard';
import img1 from "../assets/works/works1.png"
import img3 from "../assets/works/works3.png"
import img2 from "../assets/works/works2.png"
import img4 from "../assets/works/works4.png"
import img5 from "../assets/works/works9.png"
import img6 from "../assets/works/works5.png"
import img7 from "../assets/works/works6.png"
import img8 from "../assets/works/works7.png"
import img9 from "../assets/works/works8.png"
import img10 from "../assets/works/works10.png"
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
const Works = () => {
  return (
<section className=' px-10 pt-[112px]'>

 <p className="font-medium text-[24px] text-[#70A9FF]">Works</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-5xl">Smart Solutions for a
      <span className="text-blue-400"> Digital World </span></p>
      <div className="pt-4">
      
          </div>
        </div>
              <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[1100px]">From ideas to execution, we build digital solutions <br /> that help your business grow and stay ahead. </p>


       <div className="flex justify-between gap-6 items-end pt-10 grid grid-cols-4">
  {projects.map((project, index) => (
    <Link key={project.id} to={`/project/${project.id}`}>
      <WorksCard
        image={img4} // temporary image
        name={project.title}
        stack={project.subtitle}
      />
    </Link>
  ))}

              <WorksCard
    image={img3}
     name="Slams Hunt"
    stack="Mobile App"
  />
            <WorksCard
        image={img2}
         name="Ziya Academy"
        stack="Website"
      />
     
          
            <WorksCard
        image={img6}
         name="Slam Ride"
        stack="Mobile App"
      />
            <WorksCard
        image={img7}
         name="Global Venture"
        stack="Mobile App"
      />
            <WorksCard
        image={img8}
         name="Ziya Learn Mate"
        stack="Mobile App"
      />
            <WorksCard
        image={img9}
         name="Pro Hire"
        stack="Website"
      />
        <WorksCard
        image={img5}
         name="Direct Share"
        stack="Mobile App"
      />

            <WorksCard
        image={img10}
         name="Slam Grow"
        stack="Mobile App"
      />
          

         <WorksCard
        image={img1}
        name="Torch"
        stack="Mobile App"
      />
         

              </div>




    </section>  )
}

export default Works