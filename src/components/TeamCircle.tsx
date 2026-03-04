import { motion } from "framer-motion";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import member6 from "../assets/member6.png";

import Segment from "./Segment"; // make sure path is correct
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";


const members = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
];

const imageSettings = [
  { rotate: -332, offsetX: 0, offsetY: 22, scale: 1.0 },
  { rotate: -25, offsetX: 10, offsetY: 55, scale: 1.0 },
  { rotate: -80, offsetX: 50, offsetY: -25, scale: 1.0 },
  { rotate: -150, offsetX: 30, offsetY: -10, scale: 1.0 },
  { rotate: 150, offsetX: 30, offsetY: -15, scale: 1.1 },
  { rotate: 90, offsetX: -15, offsetY: -25, scale: 1.05 },
];

const baseAngle = -30;
const step = 60;
const gapAdjust = 4;

const segmentSettings = [
  { angle: baseAngle + step * 0 + gapAdjust, radius: 182, offsetX: 75, offsetY: -22 },
  { angle: baseAngle + step * 1 + gapAdjust, radius: 179, offsetX: 82, offsetY: -87 },
  { angle: baseAngle + step * 2 + gapAdjust, radius: 180, offsetX: 30, offsetY: -123 },
  { angle: baseAngle + step * 3 + gapAdjust, radius: 180, offsetX: -32, offsetY: -93 },
  { angle: baseAngle + step * 4 + gapAdjust, radius: 180, offsetX: -32, offsetY: -30 },
  { angle: baseAngle + step * 5 + gapAdjust, radius: 185, offsetX: 16, offsetY: 5 },
];

const segmentPath = `
M125.48 16.5178
L153.575 1.21404
C158.174 -1.29091 163.858 0.169156 166.356 4.77201
C177.336 25.0107 204.023 82.022 203.397 157.124
C202.853 222.541 175.312 282.704 163.932 304.811
C161.365 309.797 155.168 311.335 140.397 308.386
L5.22327 218.645
C0.227532 215.557 -1.26238 208.672 1.09046 203.29
C4.38293 195.76 8.38127 183.664 10.3125 166.516
C12.6331 145.91 10.3714 130.984 8.17678 122.311
C6.88819 117.219 8.79312 111.454 13.3562 108.852
L120.158 47.9527
C124.956 45.2169 126.627 39.1095 123.891 34.3117
L121.577 30.2536
C118.803 25.3897 120.563 19.1962 125.48 16.5178
Z
`;

const TeamCircle = () => {
  const center = 350;
  const pivotCX = 105;
  const pivotCY = 155;
  
  
  const containerRef = useRef(null);
const isInView = useInView(containerRef, {
  once: true,
  amount: 0.4,
});

const [inertia, setInertia] = useState(false);

useEffect(() => {
  if (!isInView) return;

  const timer = setTimeout(() => {
    setInertia(true);
  }, 1000); // slightly after sweep duration (3.2s)

  return () => clearTimeout(timer);
}, [isInView]);

  return (
  <motion.div
  ref={containerRef}
  className="w-[750px] h-[750px]"
  initial={{ opacity: 0, y: 80 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <motion.svg
  viewBox="0 0 750 750"
  className="w-full h-full"
  animate={
    inertia
      ? { rotate: [0, 2, 0] }
      : { rotate: 0 }
  }
  transition={{
    duration: 1,
    ease: [0.33, 1, 0.68, 1],
  }}
  style={{ originX: 0.5, originY: 0.5 }}
>
      
        
        {/* Static Clip Paths for Images */}
        <defs>
          {members.map((_, i) => (
            <clipPath
              key={i}
              id={`clip-${i}`}
              clipPathUnits="userSpaceOnUse"
            >
              <path d={segmentPath} />
            </clipPath>
          ))}
        </defs>

        {/* Render Segments */}
        {members.map((member, index) => (
          <Segment
            key={index}
            member={member}
            index={index}
            seg={segmentSettings[index]}
            img={imageSettings[index]}
            segmentPath={segmentPath}
            center={center}
            pivotCX={pivotCX}
            pivotCY={pivotCY}
            startAnimation={isInView}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
};

export default TeamCircle;