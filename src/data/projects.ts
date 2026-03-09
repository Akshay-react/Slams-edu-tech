import img1 from "../assets/works/works1.png"
import img3 from "../assets/works/works3.png"
import img2 from "../assets/works/works2.png"
import img4 from "../assets/works/works4.png"
import img5 from "../assets/works/works9.png"

export const projects = [
  {
    id: "jungle-laundry",
    title: "Jungle Laundry",
    subtitle: "Mobile App",
heroImage: img1,

    description:
      "Jungle Laundry is a modern laundry service platform designed to simplify the laundry process with seamless booking and tracking.",

    challenge: [
      "Create a simple laundry booking flow",
      "Build a responsive UI for mobile",
      "Improve order tracking experience",
    ],

    features: [
      "User-friendly booking interface",
      "Real-time laundry tracking",
      "Integrated payment system",
    ],

   images: {
  laptop: img2,
  mobile: img3,
  dashboard: img4,
  showcase: img5,
},
  },

  {
    id: "edutech-platform",
    title: "EduTech Platform",
    subtitle: "Web Platform",
    heroImage: "/projects/edutech/hero.jpg",

    description:
      "A modern education platform that allows students to learn, track progress, and access resources online.",

    challenge: [
      "Build scalable architecture",
      "Design responsive learning interface",
      "Improve user engagement",
    ],

    features: [
      "Course management system",
      "Interactive dashboards",
      "Student progress tracking",
    ],

    images: {
      laptop: "/projects/edutech/laptop.jpg",
      mobile: "/projects/edutech/mobile.jpg",
      dashboard: "/projects/edutech/dashboard.jpg",
      showcase: "/projects/edutech/showcase.jpg",
    },
  },
]