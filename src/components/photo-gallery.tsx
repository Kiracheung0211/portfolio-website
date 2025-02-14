import React, { useRef, useEffect, useState } from "react";
import { Kalam } from "next/font/google";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const PhotoGallery = () => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      id: 1,
      src: "/mikey.png",
      title: "Mikey",
      icon: "☀️",
    },
    {
      id: 2,
      src: "/north-korea.png",
      title: "North Korea",
      icon: "☀️",
    },
    {
      id: 3,
      src: "/food.png",
      title: "food",
      icon: "☀️",
    },
    {
      id: 4,
      src: "/kenya.png",
      title: "kenya",
      icon: "☀️",
    },
    {
      id: 5,
      src: "/haiway.png",
      title: "Haiway",
      icon: "☀️",
    },
  ];

  const scrollToNext = async () => {
    const photoWidth = 316; // 300px width + 16px gap
    const nextIndex = (currentIndex + 1) % photos.length;

    await controls.start({
      x: -photoWidth * nextIndex,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    });

    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000); // Change photo every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const photoWidth = 416;
  return (
    <div
      className="overflow-hidden w-full flex justify-center"
      ref={containerRef}
    >
      <motion.div
        className="flex gap-8 py-8 pl-[calc(50%-200px)]"
        animate={controls}
        drag="x"
        dragConstraints={containerRef}
        onDragEnd={(_, info) => {
          const dragDistance = info.offset.x;

          if (Math.abs(dragDistance) > photoWidth / 5) {
            const direction = dragDistance > 0 ? -1 : 1;
            const nextIndex =
              (currentIndex + direction + photos.length) % photos.length;
            setCurrentIndex(nextIndex);
            controls.start({
              x: -photoWidth * nextIndex,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          } else {
            controls.start({
              x: -photoWidth * currentIndex,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          }
        }}
      >
        {[...photos, ...photos].map((photo, index) => (
          <motion.div
            key={`${photo.id}-${index}`}
            className="relative flex-shrink-0 bg-white p-4 rounded-sm shadow-lg h-fit"
            style={{
              transform: "rotate(-2deg)",
              padding: "12px 12px 20px 12px",
              width: "400px",
            }}
          >
            {/* Doodle */}
            {/* <span className="absolute top-6 right-6 text-2xl">
              {photo.doodle}
            </span> */}

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
