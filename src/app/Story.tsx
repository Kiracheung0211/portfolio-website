import React from "react";
import { motion } from "framer-motion";
import PhotoGallery from "../components/photo-gallery";
import SectionHeader from "../components/section-header";

const Story = () => {
  return (
    <motion.div id="story" transition={{ duration: 0.3 }}>
      <div className="flex flex-col justify-center items-center w-full px-8 max-sm:px-2 gap-6">
        {/* Title */}
        <SectionHeader title="Story" subtitle="Artist on the Move 🌍" />
        <div className="flex flex-col  max-w-screen-xl mx-auto lg:flex-row h-[70vh] justify-between items-center gap-5 max-sm:h-fit">
          {/* Story Text */}
          <div className="lg:w-1/2 flex flex-col h-full rounded-3xl justify-end px-8 py-10 bg-gray-100 gap-8">
            <h2>
              I&apos;m someone who can&apos;t stop exploring - whether it&apos;s
              wandering through 20+ countries or diving into new fields that
              spark my imagination. Through experiencing different cultures and
              perspectives, I discovered my love for combining creativity with
              technology to solve problems in unexpected ways.
            </h2>
            <h2>
              My startup journey pulled me away from my business studies at
              UofT, and building Waverly opened my eyes to the magic of AI.
              Working alongside top AI researchers really lit a fire in me, I
              couldn&apos;t resist diving deeper, so I headed to UPenn for an AI
              master&apos;s.
            </h2>
            <h2>
              These days, I&apos;m on a mission to use technology to bring
              people closer together (and maybe make the world a little less
              lonely while we&apos;re at it!).
            </h2>
          </div>
          {/* Story Image */}
          <div className="max-w-3xl lg:w-1/2 h-full flex items-center justify-center rounded-3xl bg-gray-100 max-sm:bg-transparent">
            <PhotoGallery />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
