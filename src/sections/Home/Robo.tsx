import robo from "../../assets/roboo.png";
import CountUp from "../../components/CountUp";
// import Particles from "../../components/Robobg";
import { useEffect, useState, lazy, Suspense } from "react";
const Particles = lazy(()=> import("../../components/Robobg"))

const Robo = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 100); // delay load

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      {/* SVG DEFINITIONS (hidden) */}
      <svg
        width="0"
        height="0"
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="videoClip" clipPathUnits="userSpaceOnUse">
            <path
              transform="scale(1.2,1)"
              d="
                M408.559 70.5H30.5
                C13.9315 70.5 0.5 83.9315 0.5 100.5
                V660.5
                C0.5 677.069 13.9315 690.5 30.5 690.5
                H405.561
                C414.969 690.5 423.833 686.086 429.502 678.578
                L485.498 604.422
                C491.167 596.914 500.031 592.5 509.439 592.5
                H1132.5
                C1149.07 592.5 1162.5 579.069 1162.5 562.5
                V30.5
                C1162.5 13.9315 1149.07 0.5 1132.5 0.5
                H506.441
                C498.773 0.5 491.396 3.43638 485.825 8.70596
                L429.175 62.2941
                C423.604 67.5636 416.227 70.5 408.559 70.5
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* MAIN SECTION */}
      <div className="relative w-full aspect-[1920/700] overflow-hidden">

        {/* BACKGROUND PARTICLES */}
        {showParticles && (

      <Suspense fallback={<div className="text-white">Loading animation...</div>}>
  <Particles
    gradientColors={['#3e3f41', '#74C3F1']}
    angle={0}
    noise={0.3}
    blindCount={72}
    blindMinWidth={20}
    spotlightRadius={0.5}
    //changed 1 to 0.5
    spotlightSoftness={0.5}
    spotlightOpacity={0.6}
    mouseDampening={0.15}
    distortAmount={0}
    shineDirection="left"
    mixBlendMode="lighten"
  />
</Suspense>
        )}

        {/* ROBOT IMAGE */}
        <img
          src={robo}
          alt="robot"
          className="
            hidden sm:block
            absolute
            left-[2%] sm:left-[3%] md:left-[4%]
            top-0
            h-[80%] sm:h-[85%] md:h-[90%] lg:h-[94%]
            max-w-none
            object-contain
            z-10 pointer-events-none
          "
        />

        {/* CARD (FIXED TO ROBOT HAND POSITION) */}
        <div
          className="
            absolute z-10
            flex flex-col sm:flex-row
            items-center
            justify-center
            gap-3 sm:gap-5
            p-4 sm:p-6
            bg-white/10
            backdrop-blur-sm
            border border-white/20
            rounded-2xl
            shadow-lg
            w-[90%] sm:w-auto
            max-w-[320px] sm:max-w-none pointer-events-none
          "
          style={{
            left: "50%",
            top: "32%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* LEFT STAT */}
          <div className="text-center flex-1">
            <p className="font-medium text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-white">
              <CountUp from={0} to={50} separator="" direction="up" duration={0.5} />
              +
            </p>
            <p className="font-medium text-[#ACACAC] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px]">
              Live Projects
            </p>
          </div>

          {/* RIGHT STAT */}
          <div className="text-center flex-1">
            <p className="font-medium text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-white">
              <CountUp from={0} to={100} separator="," direction="up" duration={1} />
              %
            </p>
            <p className="font-medium text-[#ACACAC] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] whitespace-nowrap">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robo;