import CustomShapeCard from "@/components/CustomShapedCard"
import img2 from "../assets/service2.jpg"
import img3 from "../assets/service3.jpg"
import img1 from "../assets/robo.jpg"
import img4 from "../assets/service4.jpg"
import img5 from "../assets/service5.jpg"
import img6 from "../assets/service6.jpg"
import img7 from "../assets/service7.jpg"
import img8 from "../assets/service8.jpg"
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

   <CustomShapeCard
        image={img3}
        title="Web Development"
        text="Static & dynamic websites, e-commerce solutions, and custom web applications built with modern technologies"
        buttonLink="/project/slams"
      />


    <CustomShapeCard
        image={img1}
        title="AI & Machine Learning"
        text="Intelligent solutions powered by machine learning, data analytics, and predictive modeling."
        buttonLink="/project/slams"
      />
    <CustomShapeCard
        image={img2}
        title="App Development"
        text="Cross-platform mobile apps for Android & iOS using Flutter and React Native with seamless UX."
        buttonLink="/project/slams"
      />
    
    <CustomShapeCard
        image={img4}
        title="Cyber Security"
        text="Protect your digital assets with vulnerability assessments, penetration testing, and security audits."
        buttonLink="/project/slams"
      />
   <CustomShapeCard
        image={img5}
        title="Digital Marketing"
        text="SEO, social media marketing, and data-driven campaigns to grow your online presence."
        buttonLink="/project/slams"
      />


    <CustomShapeCard
        image={img6}
        title="UI/UX Design"
        text="User-centered design solutions with stunning interfaces and seamless user experiences."
        buttonLink="/project/slams"
      />
    <CustomShapeCard
        image={img7}
        title="Graphic Designing"
        text="Logo design, branding, social media creatives, and complete visual identity solutions."
        buttonLink="/project/slams"
      />
    
    <CustomShapeCard
        image={img8}
        title="Networking & CCTV"
        text="Networking and CCTV services, secure system setup, and advanced surveillance solutions."
        buttonLink="/project/slams"
      />
   
      </div>

  </section>   )
}

export default Service