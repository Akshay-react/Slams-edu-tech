import LogoLoop from './LogoScroll';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import img1 from "../../assets/member1.png"
import img2 from "../../assets/member2.png"
import img3 from "../../assets/member3.png"
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: img1, alt: "Company 1", href: "https://company1.com" },
  { src: img2, alt: "Company 2", href: "https://company2.com" },
  { src: img3, alt: "Company 3", href: "https://company3.com" },
];

function Loop() {
  return (
    <div style={{ height: '70px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
     
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/>
    </div>
  );
}
export default Loop;