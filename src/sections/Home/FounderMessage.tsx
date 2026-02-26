import React from "react";
import ceo from "../../assets/founder.jpg";
import ConnectorShape from "../../components/ConnectorShape";
const FoundersMessage: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20 overflow-hidden">

      {/* SVG defs for image clip */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="founderClip" clipPathUnits="objectBoundingBox">
            <path
              d="
               M 0.12 0

    H 0.82
    L 1 0.18

    V 0.96
    Q 1 1 0.96 1

    H 0.30
    L 0.08 0.82

    V 0.04
    Q 0.08 0 0.12 0
    Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="relative z-10">

          {/* Heading */}
          <div className="flex items-center gap-6 mb-10">

            <h2 className="text-3xl lg:text-4xl font-semibold">
              Founders Message
            </h2>

            {/* dotted line */}
            <div className="relative">
  <ConnectorShape />
</div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed max-w-[520px]">

            <p>
              Technology is not just about innovation but about creating
              meaningful solutions. We help businesses grow through reliable IT
              services while empowering young talent with practical,
              industry-ready skills.
            </p>

            <p>
              We believe in learning by doing. Through internships, we offer
              real project exposure, mentorship, and guidance, while our
              service team delivers scalable solutions in app and web
              development, digital marketing, branding, and design.
            </p>

            <p>
              Our commitment to quality and integrity drives continuous
              improvement. We thank our clients, students, and partners for
              trusting us as we build innovative digital experiences and a
              skilled workforce for the future.
            </p>

            <div className="pt-4">
              <p>Warm regards,</p>
              <p className="text-white font-medium">
                Aslam K A - Founder
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-start">

          {/* Image container */}
          <div className="relative w-[260px] h-[320px] lg:w-[300px] lg:h-[380px]">

            {/* image */}
            <img
  src={ceo}
  className="w-full h-full object-cover"
  style={{ clipPath: "url(#founderClip)" }}
/>

            {/* border */}
            <svg
              viewBox="0 0 1 1"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <path
                d="
               M 0.12 0

    H 0.82
    L 1 0.18

    V 0.96
    Q 1 1 0.96 1

    H 0.30
    L 0.08 0.82

    V 0.04
    Q 0.08 0 0.12 0
    Z
                "
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="0.010"
              />
            </svg>

          </div>

        </div>

      </div>


     


    </section>
  );
};

export default FoundersMessage;