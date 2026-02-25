import { ArrowUpRight } from "lucide-react";
export default function AboutCard({
  image,
  title,
  text,
  buttonLink = "#",
  
}) {
  return (
    <div className="w-full max-w-[390px] aspect-[390/396] relative group">

      <svg
        viewBox="0 0 390 396"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Clip path */}
      <defs>
    <clipPath id="customClip" clipPathUnits="objectBoundingBox">
      <path d="
        M 0.54 0
        Q 0.57 0 0.60 0.05
        L 0.65 0.15
        Q 0.68 0.18 0.72 0.15
        L 1 0.15
        Q 1 0.18 1 0.22
        L 1 1
        Q 0.98 1 0.95 1
        L 0.05 1
        Q 0 1 0 0.95
        L 0 0.61
        Q 0 0.57 0.03 0.55
        L 0 0.05
        Q 0 0 0.05 0
        L 0.54 0
        Z
      " />
    </clipPath>
  </defs>

        {/* Content */}
        <foreignObject
          x="0"
          y="0"
          width="390"
          height="396"
          clipPath="url(#cardClip)"
        >
          <div className="w-full h-full relative">

            {/* Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover scale-125 -translate-y-12 transition duration-700 group-hover:scale-150 group-hover:-translate-y-20"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
            <div className="absolute bottom-20 left-5 text-white ">
              <div className="font-bold text-[24px]">{title}</div> 
              <div className="text-medium text-[14px] max-w-[300px]">{text}</div>
            </div>

            {/* Button */}
            <a href={buttonLink}>
              <button className="absolute bottom-5 right-5 rounded-full text-blue-600 bg-white px-4 py-4 group-hover:bg-blue-300 group-hover:text-white transition">
                 <ArrowUpRight size={24}     className="transition-transform duration-500 group-hover:rotate-45"
/>
              </button>
            </a>

          </div>
        </foreignObject>

        {/* Border */}
        <path
          d=" M 0.54 0
        Q 0.57 0 0.60 0.05
        L 0.65 0.15
        Q 0.68 0.18 0.72 0.15
        L 1 0.15
        Q 1 0.18 1 0.22
        L 1 1
        Q 0.98 1 0.95 1
        L 0.05 1
        Q 0 1 0 0.95
        L 0 0.61
        Q 0 0.57 0.03 0.55
        L 0 0.05
        Q 0 0 0.05 0
        L 0.54 0
        Z"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />

      </svg>

    </div>
  );
}