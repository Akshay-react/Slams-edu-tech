import TeamCircle from "../../components/TeamCircle";
import flowerBg from "../../assets/meetourteambg.svg";
import { motion } from "framer-motion";

const Team = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const textReveal = {
    hidden: {
      opacity: 0,
      y: 80,
      clipPath: "inset(0 0 100% 0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.9,
        ease: [0.24, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-32 px-10 font-outfit overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-evenly gap-20">

        {/* LEFT SIDE - Circle */}
        <div className="relative flex-shrink-0 z-20 -translate-x-14">
          <TeamCircle />
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="relative max-w-xl">

          {/* Background Flower */}
          <motion.img
  initial={{ y: "-50%" }}
  animate={{ y: ["-50%", "-56%", "-50%"] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}

            src={flowerBg}
            alt=""
            className="absolute right-20 top-1/2  
                       max-w-[752px] h-[750px] pointer-events-none 
                       select-none z-0 "
          />

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="relative z-10"
          >

            <motion.h2
              variants={textReveal}
              className="text-5xl font-semibold text-white"
            >
              Meet Our Team
            </motion.h2>

            <motion.p
              variants={textReveal}
              className="mt-6 text-lg text-gray-400 leading-relaxed"
            >
              A team of experienced professionals delivering reliable
              and scalable digital solutions.
            </motion.p>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Team;