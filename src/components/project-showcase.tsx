import React from "react";
import { motion } from "framer-motion";
import ProjectScreenshots from "./project-screenshot";

interface ProjectDetails {
  title: string;
  description: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  gradientColor?: string;
}

const ProjectShowcase: React.FC<ProjectDetails> = ({
  title,
  description,
  images,
  gradientColor = "#FEBA4F",
}) => {
  return (
    <motion.div
      className="h-[75vh] max-w-screen-xl overflow-hidden p-6 rounded-3xl bg-gray-100 max-sm:h-2/3"
      initial={{
        background:
          "linear-gradient(45deg, #F5F5F5 0%, #F5F5F5 40%, #F5F5F5 100%)",
      }}
      whileHover={{
        background: `linear-gradient(45deg, transparent 0%, transparent 40%, ${gradientColor} 100%)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Header Section */}
      <div className="mx-auto mb-8 max-sm:mb-0">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        {description.map((paragraph, index) => (
          <h2 key={index} className="mb-4 last:mb-0">
            {paragraph}
          </h2>
        ))}
      </div>

      {/* Screenshots Section */}
      <ProjectScreenshots images={images} />
    </motion.div>
  );
};

export default ProjectShowcase;
