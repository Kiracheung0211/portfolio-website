import React from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "./type";
import ProjectScreenshots from "./project-screenshot";

const WaverlyShowcase = () => {
  const images: ProjectImage[] = [
    {
      src: "/waverly1.png",
      alt: "Project Screenshot 1",
      width: 400,
      height: 500,
    },
    {
      src: "/waverly2.png",
      alt: "Project Screenshot 2",
      width: 300,
      height: 500,
    },
  ];

  return (
    <motion.div
      className="h-[70vh] max-w-screen-xl overflow-hidden p-6 rounded-3xl bg-gray-100 max-sm:h-[85vh]"
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
      <div className="mx-auto mb-8 max-sm:mb-0">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">Waverly</h1>
        </div>

        <h2>
          Built an AI-powered social platform where anyone could create and join
          communities—just by using natural language. Backed by Betaworks,
          Greycroft, and Mozilla Ventures, it redefined how people connect
          online.
        </h2>
        <h2>
          To make it even more seamless, I developed smart content filtering and
          community matching, helping users find the right spaces effortlessly.
        </h2>
        <h2>
          Features on BBC News, Betakit, and Collision Conference brought major
          visibility, driving the platform to 10,000+ users and proving the
          demand for a more intuitive way to connect.
        </h2>
      </div>

      {/* Screenshots Section */}
      <ProjectScreenshots images={images} />
    </motion.div>
  );
};

export default WaverlyShowcase;
