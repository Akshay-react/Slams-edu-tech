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
  color = "#ffffff",
  c1 = "from-black",
  c2 = "via-gray-800",
  c3 = "to-gray-900",
  speed = "3s",
  thickness = 2,
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
      {/* Smooth Rotating Glow Layer */}
      <div
        className="absolute inset-0 z-0 rounded-[50px]"
        style={{
          padding: thickness,
        }}
      >
        <div
          className="absolute inset-[-150%] rounded-full blur-2xl opacity-90 animate-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`,
            animationDuration: speed,
          }}
        />
      </div>

      {/* Button Content */}
      <div
        className={`relative z-[1] bg-gradient-to-b ${c1} ${c2} ${c3} border border-gray-800 text-white text-center text-[16px] rounded-[20px]`}
        style={{
          margin: thickness,
          padding: "10px 6px",
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;