import TeamCircle from "../../components/TeamCircle";
import flowerBg from "../../assets/meetourteambg.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
}

const Team = () => {

  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

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
          <TeamCircle setActiveMember={setActiveMember} />
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="relative w-[520px] flex-shrink-0">

          {/* Background Flower */}
          <motion.img
            initial={{ y: "-50%" }}
            animate={{ y: ["-50%", "-56%", "-50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src={flowerBg}
            alt=""
            className="absolute right-20 top-1/2  
                       max-w-[752px] h-[750px] pointer-events-none 
                       select-none z-0"
          />

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="relative z-10"
          >

            {/* NAME / HEADING */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeMember ? activeMember.name : "default-title"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.45, ease: [0.24, 1, 0.36, 1] }}
                className="text-5xl font-semibold text-white min-h-[60px]"
              >
                {activeMember ? activeMember.name : "Meet Our Team"}
              </motion.h2>
            </AnimatePresence>

            {/* ROLE / PARAGRAPH */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeMember ? activeMember.role : "default-role"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mt-6 text-lg text-gray-400 leading-relaxed min-h-[60px]"
              >
                {activeMember
                  ? activeMember.role
                  : "A team of experienced professionals delivering reliable and scalable digital solutions."}
              </motion.p>
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Team;