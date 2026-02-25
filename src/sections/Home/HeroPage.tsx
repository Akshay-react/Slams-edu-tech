import vid from "../../assets/robovid.mp4"

export default function HeroPage() {
  return (
    <section className="relative w-full h-screen overflow-hidden px-6">

      {/* SVG clipPath responsive */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">

            {/* 30px ≈ 0.025 in normalized units */}
            <path d="
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
            "/>

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
        style={{
          clipPath: "url(#heroClip)"
        }}
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
<div className="absolute z-10 bottom-48 left-12 text-white ">        <p className="text-6xl px-12  font-bold uppercase leading-[60px]">Innovative <span className="text-6xl ">IT </span> Solutions <br /> for a Digital World</p>
        <p className="text-[20px] leading-[20px] pl-12 pt-4 font-medium max-w-[840px]">Slams Edu Tech delivers smart, scalable technology solutions that help businesses  grow faster, operate more efficiently, and stay ahead through continuous innovation.</p>
        <div className="flex gap-4 pt-7 px-12">
             <button className="px-6 py-2.5 rounded-full border border-white text-white text-[15px] font-medium hover:bg-white hover:text-black transition-all">
            Discover Our Services
          </button>
           <button className="px-6 py-2.5 rounded-full border border-white text-white text-[15px] font-medium hover:bg-white hover:text-black transition-all">
            Apply for Internship
          </button>
        </div>
      </div>
    </section>
  )
}