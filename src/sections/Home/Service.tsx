import img1 from "../../assets/robo.jpg";
import CustomShapeCard from "../../components/CustomShapedCard";
import img2 from "../../assets/service2.jpg"
import img3 from "../../assets/service3.jpg"
import img4 from "../../assets/service4.jpg"
import StarBorder from "../../components/StarBorder";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <section className="px-10 font-outfit pb-16 pt-10">
      <p className="font-medium text-[24px] text-gray-400">/service we offer</p>
      <div className="flex justify-between">
      <p className="pt-4 font-medium text-5xl">Complete IT Solutions for <br />
      <span className="text-blue-400"> Your Business Growth </span></p>
      <div className="pt-4">
       {/* <button className="px-6 py-2.5 h-10 border rounded-[50px] border-white text-white text-[15px] font-medium hover:bg-white hover:text-black transition-all">
            View more
          </button> */}

          <StarBorder
  as={Link} to="/dashboard"
  className="custom-class"
  color="cyan"
  speed="5s"
   c1="from-black"
  c2="via-black"
  c3="to-gray-800"
>
   view more
</StarBorder>


          </div>
        </div>
      <p className="pt-4 text-[#ADADAD] text-[20px] font-outfit max-w-[1100px]">We build simple, smart tech solutions that help businesses grow and keep things moving. From idea to launch, we turn concepts into easy-to-use digital products using modern tech, creative thinking, and a practical, hands-on approach that just works. </p>
    {/* cards */}

        <div className="flex justify-between gap-3 items-end pt-10">

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
   
      </div>

  </section> 
  )}

export default Service
