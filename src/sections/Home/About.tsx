import AboutCard from "../../components/AboutCard"
import img3 from "../../assets/service3.jpg"

const About = () => {
  return (
    <div className="px-6 pt-[112px]">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <p className="font-medium text-[24px] text-gray-400">
            / About Slams
          </p>

          <div className="flex flex-col justify-between">
            <p className="pt-4 font-medium text-5xl leading-tight">
              Your Partner in <br />
              <span className="text-blue-400">
                Digital Transformation
              </span>
            </p>

            <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[600px]">
              SLAMS EDUTECH is an IT and EdTech company providing innovative digital solutions in software development, UI/UX design, digital marketing, and web and mobile apps, along with AI & ML, cybersecurity, and IT training. Our mission is to bridge education and industry through practical, skill-based learning and value-driven technology services that help individuals and businesses grow in a digital world.
            </p>
          </div>
        </div>


        {/* RIGHT SIDE - 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className=" shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <AboutCard
        image={img3}
        title="Web Development"
        text="Static & dynamic websites, e-commerce solutions, and custom web applications built with modern technologies"
        buttonLink="/project/slams"
      />
            
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-500 text-sm">
              Clean, modern and user-friendly interface design.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              AI & ML Solutions
            </h3>
            <p className="text-gray-500 text-sm">
              Smart AI powered automation and analytics solutions.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              IT Training
            </h3>
            <p className="text-gray-500 text-sm">
              Industry-ready training programs and mentorship.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default About