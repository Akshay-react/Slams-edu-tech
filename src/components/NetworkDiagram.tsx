import React from "react"

const NetworkDiagram = () => {

  const nodes = [
    { x: 300, y: 160 },
    { x:220, y: 150 },
    { x: 375, y: 170 },

    { x: 390, y: 245 },
    { x: 380, y: 337 },

    { x: 210, y: 254 },
    { x: 300, y: 340 },

  { x: 220, y: 355 },
  ]

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center bg-black">

      <svg viewBox="0 0 600 500" className="absolute w-full h-full">

       {/* ================= CENTER LINE ================= */}
<path
  d="M300 250 L300 225"
  stroke="white"
  strokeWidth="2.5"
  strokeDasharray="4 6"
/>

{/* ================= TOP ================= */}

/* CENTER */
<path d="M300 225 L300 205 L300 185 L300 165"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* INNER LEFT */
<path d="
  M285 230
  L285 200 
  L270 190 
  L270 165 
  L285 145 
  L285 105"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* INNER RIGHT */
<path d="
  M315 230 
  L315 200 
  L330 190 
  L330 165 
  L315 165 
  L315 145 
  L330 145 
  L330 130 
  L315 120 
  L315 105"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* OUTER LEFT */
<path d="
  M270 225 
  L265 205
  L245 195
  L245 170
  L245 165
  L220 150"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* OUTER RIGHT */
<path d="
  M330 225
  L350 205
  L355 175
  L375 170"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />


{/* ================= BOTTOM ================= */}

/* CENTER */
<path d="M300 275 L300 295 L300 315 L300 335"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* INNER LEFT */
<path d="
  M285 270
  L285 300 
  L270 310 
  L270 335 
  L285 355 
  L285 395"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* INNER RIGHT */
<path d="
  M315 270 
  L315 300 
  L330 310 
  L330 335 
  L315 335 
  L315 355 
  L330 355 
  L330 370 
  L315 380 
  L315 395"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* OUTER LEFT */
<path d="
  M270 275 
  L265 295
  L245 305
  L245 335
  L245 340
  L220 355"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

/* OUTER RIGHT */
<path d="
  M330 275
  L350 295
  L355 325
  L375 335"
  stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />


{/* ================= LEFT ================= */}
<g transform="rotate(-90 300 250)">

  <path d="M315 230 L315 200 L330 190 L330 165 L315 165 L315 145 L330 145 L330 130 L315 120 L315 105"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

  <path d="M295 230 L295 200 L295 185 L295 165"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

  <path d="M275 230 L275 200 L260 190 L260 165 L275 145 L275 105"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

</g>


{/* ================= RIGHT ================= */}
<g transform="rotate(90 300 250)">

  <path d="M315 230 L315 200 L330 190 L330 165 L315 165 L315 145 L330 145 L330 130 L315 120 L315 105"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

  <path d="M295 230 L295 200 L295 185 L295 165"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

  <path d="M275 230 L275 200 L260 190 L260 165 L275 145 L275 105"
    stroke="white" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

</g>

        {/* ================= NODES ================= */}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="5" fill="white" />
        ))}

      </svg>

      {/* CENTER CHIP */}
      <div className="absolute w-[70px] h-[70px] bg-black border border-gray-700 rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.7)]">
        <span className="text-white text-2xl">?</span>
      </div>

      {/* TOP CARD */}
<div className="absolute top-6 left-1/2 translate-y-[-25px] -translate-x-1/2 w-[260px]">

  <svg viewBox="0 0 254 198" className="w-full h-full">

    <defs>
      <clipPath id="topCardClip">
        <path d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z" />
      </clipPath>
    </defs>

    {/* CONTENT */}
    <foreignObject
      x="0"
      y="0"
      width="254"
      height="198"
      clipPath="url(#topCardClip)"
    >
      <div className="w-full h-full bg-black p-5 min-h-[200px] text-white flex flex-col justify-center">
        <h3 className="font-semibold text-lg">Scalable Solutions</h3>
        <p className="text-sm text-gray-400 mt-2">
          Track record of successful projects and satisfied clients worldwide.
        </p>
      </div>
    </foreignObject>

    {/* BORDER */}
    <path
      d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
    />

  </svg>
</div>

     {/* RIGHT CARD */}
<div className="absolute right-0 translate-x-[30%] top-1/2 -translate-y-1/2 w-[260px]">

  <svg viewBox="0 0 254 198" className="w-full h-full">

    <defs>
      {/* CLIP */}
      <clipPath id="rightCardClip">
        <path d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z" />
      </clipPath>

      {/* GRADIENT BORDER */}
      <linearGradient id="borderGradient" x1="0" y1="0" x2="254" y2="198">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>

    {/* CONTENT */}
    <foreignObject
      x="0"
      y="0"
      width="254"
      height="198"
      clipPath="url(#rightCardClip)"
    >
      <div className="w-full h-full bg-black p-5 min-h-[200px] text-white flex flex-col justify-center">
        <h3 className="font-semibold text-lg">Security-Focused</h3>
        <p className="text-sm text-gray-400 mt-2">
          We follow best practices to keep your data and systems protected.
        </p>
      </div>
    </foreignObject>

    {/* BORDER (GRADIENT) */}
    <path
      d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z"
      fill="none"
      stroke="url(#borderGradient)"
      strokeWidth="2"
    />

  </svg>
</div>

      {/* LEFT CARD */}
    <div className="absolute left-0 -translate-x-[35%] top-1/2 -translate-y-1/2 w-[260px]">

  <svg viewBox="0 0 254 198" className="w-full h-full">

    <defs>
      <clipPath id="leftCardClip">
        <path d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z" />
      </clipPath>
    </defs>

    {/* CONTENT */}
    <foreignObject
      x="0"
      y="0"
      width="254"
      height="198"
      clipPath="url(#leftCardClip)"
    >
      <div className="w-full h-full bg-black p-5 text-white flex flex-col justify-center">
        <h3 className="font-semibold text-lg">Cross-Platform</h3>
        <p className="text-sm text-gray-400 mt-2">
          One solution for multiple platforms across web and mobile experiences.
        </p>
      </div>
    </foreignObject>

    {/* BORDER */}
    <path
      d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z"
      fill="none"
      stroke="#969696"
      strokeWidth="1.5"
    />

  </svg>
</div>

{/* BOTTOM CARD */}
<div className="absolute bottom-6 left-1/2 translate-y-[35px] -translate-x-1/2 w-[260px]">

  <svg viewBox="0 0 254 198" className="w-full h-full">

    <defs>
      <clipPath id="bottomCardClip">
        <path d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z" />
      </clipPath>
    </defs>

    {/* CONTENT */}
    <foreignObject
      x="0"
      y="0"
      width="254"
      height="198"
      clipPath="url(#bottomCardClip)"
    >
      <div className="w-full h-full bg-black p-5 min-h-[200px] text-white flex flex-col justify-center">
        <h3 className="font-semibold text-lg">Quality Obsessed</h3>
        <p className="text-sm text-gray-400 mt-2">
          Every feature is tested for performance, stability, and UX.
        </p>
      </div>
    </foreignObject>

    {/* BORDER */}
    <path
      d="M28.171 4.82974L4.95743 27.7655C2.10524 30.5836 0.5 34.4262 0.5 38.4358V182.236C0.5 190.52 7.21574 197.236 15.5 197.236H212.651C216.448 197.236 220.103 195.796 222.88 193.207L248.269 169.534C251.312 166.697 253.04 162.724 253.04 158.563V33.2542C253.04 24.9699 246.325 18.2542 238.04 18.2542H198.124C193.546 18.2542 189.218 16.1632 186.372 12.5764L181.297 6.17782C178.451 2.59097 174.124 0.5 169.545 0.5H38.7136C34.7666 0.5 30.9787 2.05566 28.171 4.82974Z"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
    />

  </svg>
</div>

    </div>
  )
}

export default NetworkDiagram