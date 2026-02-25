import StarBorder from "../../components/StarBorder";
import WorksCard from '../../components/WorksCard';
import img1 from "../../assets/works/works1.png"
import img3 from "../../assets/works/works3.png"
import img2 from "../../assets/works/works2.png"
const Works = () => {
  return (
    <section className='bg-[#1F1F1F] px-10 pt-[112px]'>

 <p className="font-medium text-[24px] text-gray-400">/ Our Works</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-5xl">Smart Solutions for a
      <span className="text-blue-400"> Digital World </span></p>
      <div className="pt-4">
        <StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
    c1="from-gray-950"
    c2="via-gray-850"
    c3="to-gray-800"
>
   view more
</StarBorder>
          </div>
        </div>
              <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[1100px]">From ideas to execution, we build digital solutions <br /> that help your business grow and stay ahead. </p>


              <div className="pt-10  pb-10 flex justify-between gap-3 items-end">

            <WorksCard
        image={img1}
        name="Torch"
        stack="Mobile App"
      />
            <WorksCard
        image={img2}
         name="Ziya Academy"
        stack="Website"
      />
            <WorksCard
        image={img3}
         name="JK Wave"
        stack="Mobile App"
      />
            <WorksCard
        image={img3}
         name="JK Wave"
        stack="Mobile App"
      />
         

              </div>




    </section>
  )
}

export default Works
