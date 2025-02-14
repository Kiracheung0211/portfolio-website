import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageWithCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div
        className="relative max-w-4xl w-full aspect-video  rounded-lg overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Standard img tag with placeholder */}
        <Image
          src="/waverly.png"
          alt="title"
          width={500}
          height={600}
          className="w-auto h-full rounded-r-lg"
          priority
        />

        {/* Custom cursor */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute rounded-fullv mix-blend-difference"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: 1,
              opacity: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithCursor;
