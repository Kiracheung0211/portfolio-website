import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectScreenshotsProps {
  images: ProjectImage[];
  hoverOffset?: number;
  className?: string;
}

const ProjectScreenshots = ({
  images,
  hoverOffset = -40,
}: ProjectScreenshotsProps): JSX.Element => {
  return (
    <motion.div
      className="max-w-6xl mx-auto relative px-16 cursor-pointer max-sm:max-w-full max-sm:px-0 justify-center"
      whileHover={{ y: hoverOffset }}
    >
      <div className="mx-auto relative w-full">
        <div className="grid grid-cols-2 gap-16 max-sm:gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`flex ${
                index === 0 ? "justify-end -rotate-6" : "justify-start rotate-6"
              } overflow-hidden transform`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-72 h-auto rounded-3xl"
                width={image.width}
                height={image.height}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectScreenshots;
