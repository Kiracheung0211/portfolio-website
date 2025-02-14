import React from "react";
import ChillHangouts from "./chill-hangouts";
import WaverlyShowcase from "./waverly";

const Work = () => {
  return (
    <div id="work" className="min-h-screen p-8 md:p-16 bg-white">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-8xl font-bold text-[#FD652D] tracking-tighter">
          Work
        </h1>
      </div>

      <div className="space-y-6 flex flex-col items-center">
        <ChillHangouts />
        <WaverlyShowcase />
      </div>
    </div>
  );
};

export default Work;
