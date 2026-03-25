import { useMotionValueEvent, useSpring, useTransform, MotionValue } from "framer-motion";
import { useState } from "react";
import Segment from "./Segment";

/* IMAGE IMPORTS */

import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import member6 from "../assets/Sreekutti.png";
import member7 from "../assets/akshayui.png";
import member8 from "../assets/HR.png";
import member9 from "../assets/cinda.png";
import member10 from "../assets/alfred.png";
import member11 from "../assets/noufal.png";
import member12 from "../assets/anoop.png";

/* TYPES */

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface Props {
  setActiveMember: (member: TeamMember | null) => void;
  scrollYProgress: MotionValue<number>;
}

/* TEAM ARRAYS */

const teamMembers1: TeamMember[] = [
  { id: 1, name: "Akshay", role: "UI/UX Developer", image: member7 },
  { id: 2, name: "Anugrah Sivadasan", role: "Frontend Developer", image: member1 },
  { id: 3, name: "Ashvin Kunniri", role: "AI/ML Engineer", image: member9 },
  { id: 4, name: "Akshay", role: "Frontend Developer", image: member10 },
  { id: 5, name: "Athulya Jinu", role: "UI/UX developer", image: member6 },
  { id: 6, name: "Fayas", role: "HR", image: member8 }
];

const teamMembers2: TeamMember[] = [
  { id: 7, name: "Anoop", role: "Frontend Developer", image: member12 },
  { id: 8, name: "Developer 8", role: "QA Engineer", image: member2 },
  { id: 9, name: "Developer 9", role: "DevOps Engineer", image: member3 },
  { id: 10, name: "Developer 10", role: "Mobile Developer", image: member4 },
  { id: 11, name: "Sana Salman", role: "UI/UX Developer", image: member5 },
  { id: 12, name: "Cinda Sibichan", role: "Python developer", image: member11 }
];

/* IMAGE POSITION SETTINGS */

const imageSettings = [
  { rotate: 20, offsetX: 20, offsetY: 12, scale: 1.0 },
  { rotate: -25, offsetX: 10, offsetY: 55, scale: 1.0 },
  { rotate: -80, offsetX: 50, offsetY: -25, scale: 1.0 },
  { rotate: -150, offsetX: 30, offsetY: -10, scale: 1.0 },
  { rotate: 150, offsetX: 30, offsetY: -15, scale: 1.1 },
  { rotate: 90, offsetX: -15, offsetY: -25, scale: 1.05 }
];

/* SEGMENT SETTINGS */

const baseAngle = -30;
const step = 60;
const gapAdjust = 4;

const segmentSettings = [
  { angle: baseAngle + step * 0 + gapAdjust, radius: 182, offsetX: 75, offsetY: -22 },
  { angle: baseAngle + step * 1 + gapAdjust, radius: 179, offsetX: 82, offsetY: -87 },
  { angle: baseAngle + step * 2 + gapAdjust, radius: 180, offsetX: 30, offsetY: -123 },
  { angle: baseAngle + step * 3 + gapAdjust, radius: 180, offsetX: -32, offsetY: -93 },
  { angle: baseAngle + step * 4 + gapAdjust, radius: 180, offsetX: -32, offsetY: -30 },
  { angle: baseAngle + step * 5 + gapAdjust, radius: 185, offsetX: 16, offsetY: 5 }
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

const TeamCircle = ({ setActiveMember, scrollYProgress }: Props) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMembers, setActiveMembers] = useState(teamMembers1);

  const center = 350;
  const pivotCX = 105;
  const pivotCY = 155;

  /* SCROLL → SWEEP */

const sweepProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 360]);



const sweep = useSpring(sweepProgress, {
    stiffness: 100,
    damping: 25
  });

  const [sweepValue, setSweepValue] = useState(0);

 useMotionValueEvent(sweep, "change", (v) => {
  const clamped = Math.max(0, Math.min(359.9, v));
  setSweepValue(clamped);
});

  /* TEAM SWITCH */

    useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.7) {
      setActiveMembers(teamMembers2);
    } else {
      setActiveMembers(teamMembers1);
    }
  });





const radiusMask = 1200
const centerX = 350
const centerY = 350


let maskPath = ""

if (sweepValue <= 5) {

  maskPath = `
    M ${centerX} ${centerY}
    L ${centerX + 1} ${centerY}
    Z
  `

} else if (sweepValue >= 359) {

  maskPath = `
    M -1000 -1000
    H 2000
    V 2000
    H -1000
    Z
  `

} else {

const angle = (sweepValue - 90) * Math.PI / 180
const x = centerX + radiusMask * Math.cos(angle)
const y = centerY + radiusMask * Math.sin(angle)

const largeArc = sweepValue >= 180 ? 1 : 0

maskPath = ` 
M ${centerX} ${centerY}
L ${centerX + radiusMask} ${centerY}
A ${radiusMask} ${radiusMask} 0 ${largeArc} 1 ${x} ${y}
Z
`
}

  return (
    <section  className="relative">

      <div className="sticky top-0 h-screen flex items-center justify-center">

        <div className="w-[750px] h-[750px] relative flex items-center justify-center">

          <svg viewBox="0 0 750 750" className="w-[750px] h-[750px]">
 
<defs>
  <clipPath id="radialReveal" clipPathUnits="userSpaceOnUse">
    <path d={maskPath} />
  </clipPath>
</defs>

            {activeMembers.map((member, index) => (

                <Segment
                key={member.id}
                member={member.image}
                memberData={member}
                index={index}
                seg={segmentSettings[index]}
                img={imageSettings[index]}
                segmentPath={segmentPath}
                center={center}
                pivotCX={pivotCX}
                pivotCY={pivotCY}
                sweep={sweep}
                onHoverMember={setActiveMember}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />

            ))}

          </svg>

        </div>

      </div>

    </section>
  );
};

export default TeamCircle;