import React from "react";
import ChillHangouts from "../components/chill-hangouts";
import { WaverlyShowcase } from "../components/waverly1";
import Linkflo from "../components/linkflo";
import SectionHeader from "../components/section-header";

const Work = () => {
  return (
    <div id="work" className="min-h-screen">
      {/* Header */}
      <SectionHeader title="Work" />

      <div className="space-y-6 flex flex-col items-center">
        <ChillHangouts />
        <WaverlyShowcase />
        <Linkflo />
      </div>
    </div>
  );
};

export default Work;
