import { motion } from "framer-motion";
import { useRef } from "react";
import vid from "../../assets/robovid.mp4";
import Container from "../../components/Container";
import AnimatedLinkButton from "../../components/AnimatedLinkButton";

export default function HeroPage() {
  const sentence = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const word = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const line1 = "Innovative IT Solutions";
  const line2 = "for a Digital World";

  const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } =
        ref.current.getBoundingClientRect();

      const x = (e.clientX - (left + width / 2)) / 8;
      const y = (e.clientY - (top + height / 2)) / 8;

      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        ref.current.style.transform = "translate(0px, 0px)";
      }
    };

    return (
      <button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-6 py-2.5 rounded-full border border-white text-white text-[15px] font-medium transition-all duration-200 hover:bg-white hover:text-black"
      >
        {children}
      </button>
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* SVG clipPath */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path
              d="
              M0.025,0
              H0.975
              A0.025,0.025 0 0 1 1,0.025
              V0.975
              A0.025,0.025 0 0 1 0.975,1
              H0.45
              L0.25,0.87
              L0.025,0.87
              A0.025,0.025 0 0 1 0,0.845
              V0.025
              A0.025,0.025 0 0 1 0.025,0
              Z
            "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pt-2 px-3 pb-12"
        style={{ clipPath: "url(#heroClip)" }}
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex items-end pb-32">
        <Container>
          <div className="text-white">

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              className="
                text-4xl 
                md:text-4xl 
                lg:text-5xl 
                xl:text-[60px] 
                2xl:text-[70px] 
                font-bold 
                uppercase 
                leading-[1.05] 
                tracking-tight
                drop-shadow-[0_0_20px_rgba(0,150,255,0.25)]
              "
            >
              {/* First Line */}
              <motion.div variants={sentence}>
                {line1.split(" ").map((wordItem, index) => {
                  const isGradient =
                    wordItem === "IT" || wordItem === "Solutions";

                  return (
                    <motion.span
                      key={index}
                      variants={word}
                      className={`inline-block mr-4 ${
                        isGradient
                          ? "bg-gradient-to-t from-[#42b23c] via-blue-500 to-white bg-clip-text text-transparent"
                          : ""
                      }`}
                      animate={
                        isGradient
                          ? {
                              backgroundPosition: [
                                "50% 100%",
                                "50% 0%",
                                "50% 100%",
                              ],
                            }
                          : {}
                      }
                      transition={
                        isGradient
                          ? {
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                          : {}
                      }
                      style={
                        isGradient
                          ? { backgroundSize: "100% 300%" }
                          : {}
                      }
                    >
                      {wordItem}
                    </motion.span>
                  );
                })}
              </motion.div>

              {/* Second Line */}
              <motion.div variants={sentence} className="mt-2">
                {line2.split(" ").map((wordItem, index) => (
                  <motion.span
                    key={index}
                    variants={word}
                    className="inline-block mr-3"
                  >
                    {wordItem}
                  </motion.span>
                ))}
              </motion.div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[20px] leading-[26px] pt-6 max-w-[840px]"
            >
              Slams Edu Tech delivers smart, scalable technology solutions that
              help businesses grow faster, operate more efficiently, and stay
              ahead through continuous innovation.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-4 pt-6 pl-12">
              <AnimatedLinkButton to="/services">
                Discover Our Services
              </AnimatedLinkButton>

              <AnimatedLinkButton to="/internship">
                Apply for Internship
              </AnimatedLinkButton>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}