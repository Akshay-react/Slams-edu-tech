import { useId } from "react";
export default function WorksCard({
  image,
  name,
  stack,
  
  
}) {
    const clipId = useId();
  return (
    
    <div className="w-full max-w-[390px] aspect-[390/396] relative group">

      <svg
        viewBox="0 0 390 396"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Clip path */}
        <defs>
<clipPath id={clipId} clipPathUnits="userSpaceOnUse">
  <path d="M30 0
H289.8

A30 30 0 0 1 319.8 0

L353 33.5
A10 10 0 0 1 360 41.28

L382.9 64.2
A10 10 0 0 1 390 71.28

V366
A30 30 0 0 1 360 396
H30
A30 30 0 0 1 0 366
V30
A30 30 0 0 1 30 0
Z" />
</clipPath>
        </defs>

        {/* Content */}
        <foreignObject
          x="0"
          y="0"
          width="390"
          height="396"
clipPath={`url(#${clipId})`}        >
          <div className="w-full h-full relative">

            {/* Image */}
            <img
              src={image}
              className="w-full h-full object-cover   transition duration-700 group-hover:scale-110 "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
           
          </div>
        </foreignObject>

        {/* Border */}
       <path
  d="M319.8 0
L390 71.28
V366
A30 30 0 0 1 360 396
H30
A30 30 0 0 1 0 366
V30
A30 30 0 0 1 30 0
H319.8
Z"
  fill="none"
  stroke="rgba(255,255,255,0.3)"
  strokeWidth="2"
/>

      </svg>
      <p className="font-bold text-[24px] pt-8">{name}</p>
      <p className="font-medium text-[16px] pb-8">{stack}</p>

    </div>
  );
}