import { useParams } from "react-router-dom";
import { services } from "../data/service";
import { HashLink } from "react-router-hash-link";


const ServiceDetails = () => {
  const { id } = useParams();




  const service = services.find((item) => item.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="w-full px-12 bg-black text-white">

      {/* HERO SECTION */}
      <section className=" mx-auto  py-20 flex flex-col lg:flex-row items-center gap-10">

        <div className="flex-1">
          <p className="text-[48px] font-medium mb-4">
            {service.title} <br /> <span className="text-blue-400">Solutions</span> for Your <br /> Business
          </p>

          <p className=" text-[20px] max-w-[650px] mb-6">
            {service.text}
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full">
            Start Your Project
          </button>
        </div>

        <div className="flex-1">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl max-w-[700px] max-h-[550px]"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section className=" mx-auto py-16">
        <p className="text-[40px] font-medium mb-4">About The Service</p>
        <p className="text-[20px]">
           {service.about} 
        </p>
      </section>

      {/* WHAT WE OFFER */}
      <section className=" mx-auto  py-16">

      <h2 className="text-2xl font-semibold mb-10">
  What We Offer
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {service.offers?.map((item, index) => {
  const Icon = item.icon;

  return (
    <div key={index} className="border border-gray-700 p-8 rounded-xl h-[240px]">
      <Icon className="mb-4 text-blue-400" />
      <p className="mb-2 font-medium text-[24px] leading-[32px]">{item.title}</p>
      <p className="text-gray-400 text-[20px]">{item.desc}</p>
    </div>
  );
})}
</div>
      </section>



       <section className="bg-black text-white py-20 ">
      <div className=" mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-12">
          Technologies we use
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Horizontal dotted line */}
          <div className="absolute top-2 left-0 w-full border-t border-dotted border-gray-500"></div>

          {/* Items */}
          <div className="flex justify-between items-start relative">
            {service.technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center w-full">

                {/* Vertical line */}
                <div className="w-px h-20 bg-gray-500 mt-2"></div>
                {/* Dot */}
                <div className="w-2 h-2 bg-white rounded-full z-10 "></div>


                {/* Text */}
                <p className="mt-2 text-gray-300 text-[24px] font-medium">{tech}</p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>



      {/* PROCESS */}
       <section className="bg-[#0d0d0d] text-white py-24 px-16">
      <div className=" mx-auto">
        
        {/* Title */}
        <p className="text-[40px] font-medium mb-10">Our Process</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24">
          {service.steps.map((step, index) => {
            let alignClass = "";
            if (step.position === "left") alignClass = "justify-self-start";
            if (step.position === "center") alignClass = "justify-self-center";
            if (step.position === "right") alignClass = "justify-self-end";

            return (
              <div
                key={index}
                className={`relative w-[260px] ${alignClass}`}
              >
                {/* L shape border */}
                <div className="absolute top-0 left-0 w-full h-full border-r border-t border-gray-700"></div>

                {/* Content */}
                <div className="pl-6 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[40px] text-gray-400 font-semibold">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed max-w-[180px]">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

      {/* CTA */}
      <section className=" mx-auto  py-12 flex  justify-center">

        <div className="bg-blue-900 rounded-2xl w-[900px]  text-center py-12 px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s discuss how we can help bring your vision to life
          </p>
             <HashLink
            smooth
            to="/#contact"
            >    
          <button className="bg-white text-black px-6 py-3 rounded-full">
            Get a Quote
          </button>
          </HashLink>

        </div>

      </section>

    </div>
  );
};

export default ServiceDetails;