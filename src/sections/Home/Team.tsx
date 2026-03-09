import TeamCircle from "../../components/TeamCircle";
import flowerBg from "../../assets/meetourteambg.svg";

const Team = () => {
  return (
    <section className="relative py-32 px-5 font-outfit overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-20">

        {/* LEFT SIDE - Circle */}
        <div className="relative flex-shrink-0">
          <TeamCircle />
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="relative max-w-xl">

          {/* Background Flower */}
          <img
            src={flowerBg}
            alt=""
            className="absolute right-60 top-1/2 -translate-y-1/2 
                       w-[752px]  pointer-events-none select-none"
          />

          {/* Content */}
          <div className="relative z-10">
              <h2 className="text-5xl font-semibold text-white">
              Meet Our Team
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              A team of experienced professionals delivering reliable
              and scalable digital solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;