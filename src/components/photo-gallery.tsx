import React, { useRef, useEffect, useState } from "react";
import { Kalam } from "next/font/google";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback } from "react";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const PhotoGallery = () => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photoWidth = 416;
  const photoGap = 50;
  const totalWidth = photoWidth + photoGap;

  const photos = [
    {
      id: 1,
      src: "/mikey.png",
      title: "Meet Mikey, my best friend who brings sunshine to every day.",
      icon: "🐱",
    },
    {
      id: 2,
      src: "/north-korea.png",
      title:
        "I love traveling, and North Korea stands out as my most surreal adventure.",
      icon: "🇰🇵",
    },
    {
      id: 3,
      src: "/kenya.png",
      title: "Another standout trip was Kenya, where I met incredible people.",
      icon: "🦒",
    },
    {
      id: 4,
      src: "/food.png",
      title:
        "My adventures are driven by food, always searching for the next amazing meal.",
      icon: "😋",
    },
    {
      id: 5,
      src: "/painting.png",
      title:
        "This is my very first oil painting! I wanted to play with contrast, one side with makeup and one without, to show two different sides of beauty.",
      icon: "🎨",
    },
  ];

  const scrollToNext = useCallback(async () => {
    const nextIndex = (currentIndex + 1) % photos.length;

    await controls.start({
      x: -totalWidth * nextIndex,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    });

    setCurrentIndex(nextIndex);
  }, [currentIndex, controls, totalWidth, photos.length]);

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, scrollToNext]);

  return (
    <div className="overflow-hidden w-full" ref={containerRef}>
      <motion.div
        className="flex"
        animate={controls}
        drag="x"
        dragConstraints={containerRef}
        style={{
          paddingLeft: "50%",
          marginLeft: -photoWidth / 2,
          gap: `${photoGap}px`,
        }}
        onDragEnd={(_, info) => {
          const dragDistance = info.offset.x;

          if (Math.abs(dragDistance) > totalWidth / 5) {
            const direction = dragDistance > 0 ? -1 : 1;
            const nextIndex =
              (currentIndex + direction + photos.length) % photos.length;
            setCurrentIndex(nextIndex);
            controls.start({
              x: -totalWidth * nextIndex,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          } else {
            controls.start({
              x: -totalWidth * currentIndex,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          }
        }}
      >
        {[...photos, ...photos].map((photo, index) => (
          <motion.div
            key={`${photo.id}-${index}`}
            className={`relative flex-shrink-0 bg-white rounded-sm shadow-lg h-fit ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            }`}
            style={{
              padding: "12px 12px 20px 12px",
              width: `${photoWidth}px`,
            }}
          >
            {/* Doodle */}
            <span className="absolute top-6 right-6 text-2xl">
              {photo.icon}
            </span>

            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.title}
                width={400}
                height={450}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Caption */}
            <p
              className={`${kalam.className} text-center mt-4 text-lg text-gray-800`}
            >
              {photo.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
