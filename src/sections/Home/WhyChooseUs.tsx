import NetworkDiagram from "../../components/NetworkDiagram"
import globeVideo from "../../assets/HR.png"

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-6">

      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-gray-400 text-sm mb-3">
            / Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
            More than services —
            <span className="text-blue-500"> we create success stories.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl text-sm leading-relaxed">
            We deliver digital solutions and practical training that drive real
            growth for businesses and future-ready skills for professionals.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

          {/* Globe Video */}
          <div className="flex justify-center lg:justify-start">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[420px] opacity-90"
            >
              <source src={globeVideo} type="video/mp4" />
            </video>
          </div>

          {/* Network Diagram Component */}
          <NetworkDiagram />

        </div>

      </div>

    </section>
  )
}

export default WhyChooseSection