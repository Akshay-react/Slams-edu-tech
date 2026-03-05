import robo from "../../assets/roboo.png";
import CountUp from "../../components/CountUp";
import Particles from "../../components/Robobg";

const Robo = () => {
  return (
    <>
      <div className="p-6">
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
          {/* <Particles
            className="absolute inset-0 z-0"
            amplitude={4.3}
    distance={0.9}
    enableMouseInteraction
          /> */}

          {/* ROBOT IMAGE */}
          <img
            src={robo}
            alt="robot"
            className="
              absolute
              left-[2%]
              top-0
              h-[94%]
              max-w-none
              object-contain
              z-10
              
            "
          />

          {/* CARD (FIXED TO ROBOT HAND POSITION) */}
         <div
  className="
    absolute z-10
    flex flex-col sm:flex-row
    items-center
    gap-3 sm:gap-5
    p-3 sm:p-4
    bg-white/10
    backdrop-blur-sm
    border border-white/20
    rounded-2xl
    shadow-lg
  "
  style={{
    left: "50%",
    top: "32%",
    transform: "translate(-50%, -50%)",
  }}
>
  {/* LEFT STAT */}
  <div className="text-center">
    <p className="font-medium text-[28px] sm:text-[32px] lg:text-[40px] text-white">
      <CountUp
        from={0}
        to={50}
        separator=""
        direction="up"
        duration={0.5}
      />
      +
    </p>

    <p className="font-medium text-[#ACACAC] text-[14px] sm:text-[18px] lg:text-[24px]">
      Live Projects
    </p>
  </div>

  {/* RIGHT STAT */}
  <div className="text-center">
    <p className="font-medium text-[28px] sm:text-[32px] lg:text-[40px] text-white">
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
      />
      %
    </p>

    <p className="font-medium text-[#ACACAC] text-[14px] sm:text-[18px] lg:text-[24px]">
      Client Satisfaction
    </p>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Robo;