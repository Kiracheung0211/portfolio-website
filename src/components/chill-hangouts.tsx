import React from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "./type";
import ProjectScreenshots from "./project-screenshot";

const ChillHangouts = () => {
  const images: ProjectImage[] = [
    {
      src: "/chillhangouts1.png",
      alt: "Project Screenshot 1",
      width: 400,
      height: 500,
    },
    {
      src: "/chillhangouts2.png",
      alt: "Project Screenshot 2",
      width: 300,
      height: 500,
    },
  ];

  return (
    <motion.div
      className="h-[70vh] max-w-7xl mx-auto overflow-hidden p-8 rounded-3xl bg-gray-100 max-sm:h-[75vh]"
      initial={{
        background:
          "linear-gradient(45deg, #F5F5F5 0%, #F5F5F5 40%, #F5F5F5 100%)",
      }}
      whileHover={{
        background:
          "linear-gradient(45deg, transparent 0%, transparent 40%, #FEBA4F 100%)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Header Section */}
      <div className="mx-auto mb-8 max-sm:mb-2">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">Chill Hangouts</h1>
        </div>
        <h2>
          Too many hangouts start with “We should catch up”—but never happen.
        </h2>
        <h2>
          I defined, designed, and built Chill Hangouts, a social app that makes
          it effortless to see when friends are free to meet up in real life.
        </h2>
        <h2>
          Instead of endless group chats or guessing who&apos;s around, it finds
          the best time and a location that works for everyone. Turning a quick
          phone check into real plans.
        </h2>
      </div>

      {/* Screenshots Section */}
      <ProjectScreenshots images={images} />
    </motion.div>
  );
};

export default ChillHangouts;
