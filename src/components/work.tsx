import React from "react";
import ChillHangouts from "./chill-hangouts";
import WaverlyShowcase from "./waverly";
import Linkflo from "./linkflo";

const Work = () => {
  return (
    <div id="work" className="min-h-screen  bg-white p-8">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-8xl font-bold text-[#FD652D] tracking-tighter">
          Work
        </h1>
      </div>

      <div className="space-y-6 flex flex-col items-center">
        <ChillHangouts />
        <WaverlyShowcase />
        <Linkflo />
      </div>
    </div>
  );
};

export default Work;
