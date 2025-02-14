import React from "react";
import { motion } from "framer-motion";
import PhotoGallery from "./photo-gallery";
import { Kalam } from "next/font/google";
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Story = () => {
  return (
    <motion.div id="story" className="p-8" transition={{ duration: 0.3 }}>
      <div className="mb-16">
        <h1 className="text-8xl font-bold text-[#FD652D] tracking-tighter">
          Story
        </h1>
        <p
          className={`absolute pl-32 -rotate-3 text-base text-gray-600 ${kalam.className} -normal max-w-full"`}
        >
          Artist on the Move 🌍
        </p>
      </div>

      <div className="flex flex-col lg:flex-row h-[70vh] max-w-screen-xl mx-auto justify-between items-center gap-5">
        {/* Story Text */}
        <div className="max-w-3xl lg:w-1/2 h-full flex flex-col rounded-3xl p-12 justify-end bg-gray-100">
          <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
            I&apos;m someone who can&apos;t stop exploring - whether it&apos;s
            wandering through 20+ countries or diving into new fields that spark
            my imagination. Through experiencing different cultures and
            perspectives, I discovered my love for combining creativity with
            technology to solve problems in unexpected ways.
          </h2>
          <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
            My startup journey pulled me away from my business studies at UofT,
            and building Waverly opened my eyes to the magic of AI. Working
            alongside top AI researchers really lit a fire in me, I
            couldn&apos;t resist diving deeper, so I headed to UPenn for an AI
            master&apos;s.
          </h2>
          <h2 className="text-xl text-gray-600 font-normal max-w-full">
            These days, I&apos;m on a mission to use technology to bring people
            closer together (and maybe make the world a little less lonely while
            we&apos;re at it!).
          </h2>
        </div>
        {/* Story Image */}
        <div className="max-w-3xl lg:w-1/2 h-full flex items-center justify-center rounded-3xl bg-gray-100">
          <PhotoGallery />
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
