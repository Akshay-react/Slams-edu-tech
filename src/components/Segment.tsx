// import { useEffect, useState } from "react";
// import { animate } from "framer-motion";

// interface SegmentProps {
//   member: string;
//   index: number;
//   seg: { angle: number; radius: number; offsetX: number; offsetY: number };
//   img: { offsetX: number; offsetY: number; rotate: number; scale: number };
//   segmentPath: string;
//   center: number;
//   pivotCX: number;
//   pivotCY: number;
//   startAnimation: boolean;
// }

// const Segment = ({
//   member,
//   index,
//   seg,
//   img,
//   segmentPath,
//   center,
//   pivotCX,
//   pivotCY,
//   startAnimation,
// }: SegmentProps) => {
//   const [rotation, setRotation] = useState(-90);
//   const [completed, setCompleted] = useState(false);

//   useEffect(() => {
//     if (!startAnimation) return;

//     const controls = animate(-90, 270, {
//       duration: 3.2,
//       ease: [0.33, 1, 0.68, 1],
//       onUpdate: (latest) => setRotation(latest),
//       onComplete: () => setCompleted(true),
//     });

//     return () => controls.stop();
//   }, [startAnimation]); // ✅ correct dependency

//   return (
//     <>
//       <defs>
//         <clipPath
//           id={`radialClip-${index}`}
//           clipPathUnits="userSpaceOnUse"
//         >
//           {completed ? (
//             <rect x="-2000" y="-2000" width="4000" height="4000" />
//           ) : (
//             <rect
//               x="-2000"
//               y="-2000"
//               width="4000"
//               height="4000"
//               transform={`rotate(${rotation} 200 200)`}
//             />
//           )}
//         </clipPath>
//       </defs>

//       <g
//         transform={`
//           translate(${center}, ${center})
//           rotate(${seg.angle})
//           translate(${seg.radius},0)
//           translate(${ -pivotCX + seg.offsetX },
//                     ${ -pivotCY + seg.offsetY })
//         `}
//         clipPath={`url(#radialClip-${index})`}
//       >
//         <path d={segmentPath} fill="#C5C5C5" />

//         <g clipPath={`url(#clip-${index})`}>
//           <g
//             transform={`
//               translate(${img.offsetX}, ${img.offsetY})
//               rotate(${img.rotate},105,155)
//               scale(${img.scale})
//             `}
//           >
//             <image
//               href={member}
//               width="210"
//               height="310"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </g>
//         </g>
//       </g>
//     </>
//   );
// };

// export default Segment;






// current fixed animation 

import { useEffect, useState, useRef } from "react";
import { animate,  } from "framer-motion";

interface SegmentProps {
  member: string;
  index: number;
  seg: { angle: number; radius: number; offsetX: number; offsetY: number };
  img: { offsetX: number; offsetY: number; rotate: number; scale: number };
  segmentPath: string;
  center: number;
  pivotCX: number;
  pivotCY: number;
  startAnimation: boolean;
}

const Segment = ({
  member,
  index, 
  seg,
  img,
  segmentPath,
  center,
  pivotCX,
  pivotCY,
  startAnimation,
}: SegmentProps) => {
  const [sweep, setSweep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!startAnimation) return;

    const controls = animate(0, 359.9, {
      duration: 2.6, // slower
    //   delay: index * 0.15, // subtle stagger
      ease: [0.30, 1, 0.64, 1], // premium smooth easeOut
      onUpdate: (latest) => setSweep(latest),
      onComplete: () => setCompleted(true),
    });

    return () => controls.stop();
  }, [startAnimation]);

  const radiusMask = 400;
  const largeArc = sweep > 180 ? 1 : 0;

  const centerX = 200;
  const centerY = 200;

  let maskPath;

  if (completed) {
    // Keep fully visible after animation
    maskPath = `
      M -1000 -1000
      H 2000
      V 2000
      H -1000
      Z
    `;
  } else {
    const x =
      centerX + radiusMask * Math.cos((-sweep * Math.PI) / 180);
    const y =
      centerY + radiusMask * Math.sin((sweep * Math.PI) / 180);

    maskPath = `
      M ${centerX} ${centerY}
      L ${centerX + radiusMask} ${centerY}
      A ${radiusMask} ${radiusMask} 1 ${largeArc} 1 ${x} ${y}
      Z
    `;
  }

  return (
    <>
      <defs>
        <clipPath
          id={`radialClip-${index}`}
          clipPathUnits="userSpaceOnUse"
        >
          <path d={maskPath} />
        </clipPath>
      </defs> 

      <g
        ref={ref}
        transform={`
          translate(${center}, ${center})
          rotate(${seg.angle})
          translate(${seg.radius},0)
          translate(${ -pivotCX + seg.offsetX },
                    ${ -pivotCY + seg.offsetY })
        `}
        clipPath={`url(#radialClip-${index})`}
      >
        <path d={segmentPath} fill="#a2a1a0" />

        <g clipPath={`url(#clip-${index})`}>
          <g
            transform={`
              translate(${img.offsetX}, ${img.offsetY})
              rotate(${img.rotate},105,155)
              scale(${img.scale})
            `}
          >
            <image
              href={member}
              width="210"
              height="310"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </g>
      </g>
    </>
  );
};

export default Segment;

