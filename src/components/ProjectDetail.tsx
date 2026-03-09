import { useParams } from "react-router-dom"
import { projects } from "../data/projects"

export default function ProjectDetail() {

  const { id } = useParams<{ id: string }>()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <div className="p-10 text-xl">Project not found</div>
  }

  return (
    <section className="px-8 py-20 max-w-full mx-auto">

      {/* SVG clipPaths */}
      <svg width="0" height="0">
        <defs>

          {/* hero image shape */}
         <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
  <path d="
    M0.4,0
    H0.98
    A0.02,0.02 0 0 1 1,0.02
    V0.98
    A0.02,0.02 0 0 1 0.98,1
    H0.02
    A0.02,0.02 0 0 1 0,0.98
    V0.02
    A0.022,0.02 0 0 1 0.02,0
    H0.12
    L0.3,0.11
    Z
  " />

          </clipPath>

          {/* card images */}
          <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
            <path d="
              M0.03,0
              H0.97
              A0.03,0.03 0 0 1 1,0.03
              V0.97
              A0.03,0.03 0 0 1 0.97,1
              H0.03
              A0.03,0.03 0 0 1 0,0.97
              V0.03
              A0.03,0.03 0 0 1 0.03,0
              Z
            " />
          </clipPath>

          {/* wide showcase shape */}
          <clipPath id="showcaseClip" clipPathUnits="objectBoundingBox">
            <path d="
              M0.02,0
              H0.98
              A0.02,0.02 0 0 1 1,0.02
              V0.98
              A0.02,0.02 0 0 1 0.98,1
              H0.02
              A0.02,0.02 0 0 1 0,0.98
              V0.02
              A0.02,0.02 0 0 1 0.02,0
              Z
            " />
          </clipPath>

        </defs>
      </svg>


      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-500">{project.subtitle}</p>
      </div>


      {/* Hero Image */}
      <img
        src={project.heroImage}
        alt={project.title}
        style={{ clipPath: "url(#heroClip)" }}
        className="w-full mb-10 object-cover"
      />


      {/* Description */}
      <p className="text-gray-300 max-w-4xl mb-16 leading-relaxed">
        {project.description}
      </p>


      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <img
          src={project.images.laptop}
          alt="Laptop view"
          style={{ clipPath: "url(#cardClip)" }}
          className="w-full object-cover"
        />

        <img
          src={project.images.mobile}
          alt="Mobile view"
          style={{ clipPath: "url(#cardClip)" }}
          className="w-full object-cover"
        />

      </div>


      {/* Showcase */}
      <img
        src={project.images.showcase}
        alt="Project showcase"
        style={{ clipPath: "url(#showcaseClip)" }}
        className="w-full mb-16 object-cover"
      />


      {/* Challenge + Features */}
      <div className="grid md:grid-cols-2 gap-10">

        <div className="border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Challenge</h3>

          <ul className="space-y-2 text-gray-300">
            {project.challenge.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>

        </div>

        <div className="border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>

          <ul className="space-y-2 text-gray-300">
            {project.features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  )
}