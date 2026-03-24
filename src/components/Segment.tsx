import { useRef } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface SegmentProps {
  member: string;
  memberData: TeamMember;
  onHoverMember: (member: TeamMember | null) => void;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  seg: { angle: number; radius: number; offsetX: number; offsetY: number };
  img: { offsetX: number; offsetY: number; rotate: number; scale: number };
  segmentPath: string;
  center: number;
  pivotCX: number;
  pivotCY: number;
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
  memberData,
  onHoverMember,
  hoveredIndex,
  setHoveredIndex,
}: SegmentProps) => {

  const ref = useRef<SVGGElement>(null);

  const offsetX = img?.offsetX ?? 0;
  const offsetY = img?.offsetY ?? 0;
  const rotate = img?.rotate ?? 0;
  const scale = img?.scale ?? 1;

  return (
    <>
      <defs>

        <clipPath id={`segmentClip-${index}`} clipPathUnits="userSpaceOnUse">
          <path d={segmentPath} />
        </clipPath>

      </defs>

      <g
        ref={ref}
        className="team-segment"
        data-index={index}

        onMouseEnter={() => {
          setHoveredIndex(index);
          onHoverMember(memberData);
        }}

        onMouseLeave={() => {
          setHoveredIndex(null);
          onHoverMember(null);
        }}

        opacity={
          hoveredIndex === null
            ? 1
            : hoveredIndex === index
            ? 1
            : 0.35
        }

        transform={`
          translate(${center}, ${center})
          rotate(${seg.angle})
          translate(${seg.radius},0)
          translate(${ -pivotCX + seg.offsetX },
                    ${ -pivotCY + seg.offsetY })
        `}

        clipPath="url(#radialReveal)"
      >

        <path
          d={segmentPath}
          fill="#C5C5C5"
          stroke={hoveredIndex === index ? "#2C5BEA" : "#ffffff"}
          strokeWidth={hoveredIndex === index ? 1.5 : 1}
          style={{
            filter: hoveredIndex === index
              ? "drop-shadow(0px 0px 4px #2C5BEA)"
              : "none"
          }}
        />

        <g clipPath={`url(#segmentClip-${index})`}>
          <g
            transform={`
              translate(${offsetX}, ${offsetY})
              rotate(${rotate},105,155)
              scale(${scale})
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