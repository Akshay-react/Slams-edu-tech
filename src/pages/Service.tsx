import CustomShapeCard from "@/components/CustomShapedCard"
import { Link } from "react-router-dom"
import { services } from "@/data/service"

const Service = () => {
  return (
 <section className="px-10 font-outfit pb-16 pt-20">
      <p className="font-medium text-[24px] text-[#70A9FF]">services</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-5xl">Complete IT Solutions for <br />
      <span className="text-blue-400"> Your Business Growth </span></p>
      <div className="pt-4">
    

       


          </div>
        </div>
      <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[1400px]">We build simple, smart tech solutions that help businesses grow and keep things moving. From idea to launch, we turn concepts into easy-to-use digital products using modern tech, creative thinking, and a practical, hands-on approach that just works. </p>
    {/* cards */}

      <div className="flex justify-between gap-6 items-end pt-10 grid grid-cols-4">
      {services.map((service) => (
        <Link key={service.id} to={`/service/${service.id}`}>
          <CustomShapeCard
            image={service.image}
            title={service.title}
            text={service.text}
            buttonLink={`/service/${service.id}`}
          />
        </Link>
      ))}
    </div>

  </section>   )
}

export default Service