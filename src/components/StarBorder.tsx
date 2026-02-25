import React, { type ElementType, type ComponentPropsWithoutRef } from "react";

type StarBorderProps<T extends ElementType> = {
  as?: T;
  className?: string;
  color?: string;
  c1?: string;
  c2?: string;
  c3?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const StarBorder = <T extends ElementType = "button">({
  as,
  className = "",
  color = "white",
  c1 = "from-black",
  c2 = "via-gray-800",
  c3 = "to-gray-900",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block w-[130px] overflow-hidden rounded-[50px] ${className}`}
     style={{
  padding: 0,
  ...(rest as any).style,
}}
      {...rest}
    >
      {/* Bottom moving stars */}
      <div
        className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `repeating-radial-gradient(circle, ${color} 0 2px, transparent 80px 40px)`,
          animationDuration: speed,
        }}
      />

      {/* Top moving stars */}
      <div
        className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `repeating-radial-gradient(circle, ${color} 0 2px, transparent 80px 40px)`,
          animationDuration: speed,
        }}
      />

      {/* Content */}
      <div
        className={`relative z-[1] bg-gradient-to-b ${c1} ${c2} ${c3} border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]`}
      style={{
    margin: thickness,
    padding: "10px 6px"
  }} >
        {children}
      </div>

    </Component>
  );
};

export default StarBorder;