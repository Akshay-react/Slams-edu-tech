import StarBorder from "../../components/StarBorder";
import WorksCard from '../../components/WorksCard';
// import img1 from "../../assets/works/works1.png"
// import img3 from "../../assets/works/works3.png"
// import img2 from "../../assets/works/works2.png"
// import img4 from "../../assets/works/works4.png"
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
const Works = () => {
  return (
    <section id="works" className='bg-black px-10 pt-[112px]'>

 <p className="font-medium text-[24px] text-gray-400">/ Our Works</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-5xl">Smart Solutions for a
      <span className="text-blue-400"> Digital World </span></p>
      <div className="pt-4">
        <StarBorder
  as={Link} to="/works"
  className="custom-class"
  color="cyan"
  speed="2s"
    c1="from-gray-950"
    c2="via-gray-850"
    c3="to-gray-800"
>
   View more
</StarBorder>
          </div>
        </div>
              <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[1100px]">From ideas to execution, we build digital solutions <br /> that help your business grow and stay ahead. </p>


               <div className="flex justify-between gap-6 items-end pt-10 grid grid-cols-4">
  {projects.slice(0, 4).map((project) => (
    <Link key={project.id} to={`/project/${project.id}`}>
      <WorksCard
        image={project.coverImage}
        name={project.title}
        stack={project.subtitle}
      />
    </Link>
  ))}
</div>




    </section>
  )
}

export default Works
