import AboutCard from "../../components/AboutCard"
import img3 from "../../assets/service3.jpg"
import Section3D from "../../components/Section3D"
import { Gem, Users, CircleCheck, Lightbulb } from "lucide-react"
const About = () => {
  return (
    <section className="relative px-6 pt-[32px] pb-10 min-h-[500px]">
  <Section3D />

      {/* MAIN GRID */}
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[800px]">
              SLAMS EDUTECH is an IT and EdTech company providing innovative digital solutions in software development, UI/UX design, digital marketing, and web and mobile apps, along with AI & ML, cybersecurity, and IT training. Our mission is to bridge education and industry through practical, skill-based learning and value-driven technology services that help individuals and businesses grow in a digital world.
            </p>
          </div>
        </div>


        {/* RIGHT SIDE - 4 CARDS */}
       <div className=" gap-3 pt-10">
        <div className="flex gap-6">

  <AboutCard icon={<Gem className="w-6 h-6 text-[#70A9FF]" />} title="Custom Solutions" text="Tailored software and digital solutions built for your unique business need." />
  <AboutCard icon={<Users className="w-6 h-6 text-[#70A9FF]" />} title="Expert Team" text="SSkilled developers, designers, and strategists delivering excellence." />


</div>
        <div className="flex gap-6 pt-6">

  <AboutCard icon={<CircleCheck className="w-6 h-6 text-[#70A9FF]" />} title="Proven Results" text="STrack record of successful projects and satisfied clients worldwide." />

  <AboutCard icon={<Lightbulb className="w-6 h-6 text-[#70A9FF]" />} title="Innovation-Driven" text="Leveraging cutting-edge technologies to keep you ahead of competition." />

</div>


 

</div>

      </div>

    </section>
  )
}

export default About