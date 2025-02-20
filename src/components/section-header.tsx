import React from "react";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  color = "text-orange-500",
}) => {
  return (
    <div className="flex justify-start w-screen max-w-screen-xl mx-auto">
      <div className="mb-16 ">
        <h1
          className={`text-8xl font-bold ${color} tracking-tighter text-left`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`absolute left-56 -rotate-3 text-base text-gray-600 ${kalam.className}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
