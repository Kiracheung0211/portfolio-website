import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ChillHangouts = () => {
  return (
    <motion.div
      className="h-[70vh] max-w-screen-xl overflow-hidden p-8 rounded-3xl bg-gray-100"
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
      <div className="mx-auto mb-8">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">Chill Hangouts</h1>
        </div>
        <h2 className="text-lg text-gray-600 font-normal max-w-full pb-3">
          Too many hangouts start with “We should catch up”—but never happen.
        </h2>
        <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
          I defined, designed, and built Chill Hangouts, a social app that makes
          it effortless to see when friends are free to meet up in real life.
        </h2>
        <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
          Instead of endless group chats or guessing who&apos;s around, it finds
          the best time and a location that works for everyone. Turning a quick
          phone check into real plans.
        </h2>
      </div>

      {/* Screenshots Section */}
      <motion.div
        className="max-w-6xl mx-auto relative px-16 cursor-pointer"
        whileHover={{ y: -60 }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-2 gap-16">
            {/* First Screenshot */}
            <motion.div
              className="transform -rotate-12 overflow-hidden flex justify-end"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <Image
                src="/chillhangouts1.png"
                alt="Waverly Community Feed"
                className="w-[300px] h-auto rounded-3xl shadow-2xl"
                width={400}
                height={500}
              />
            </motion.div>

            {/* Second Screenshot */}
            <motion.div
              className="overflow-hidden transform rotate-3"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/chillhangouts2.png"
                alt="Waverly Community Feed"
                className="w-[300px] h-auto rounded-3xl shadow-2xl"
                width={300}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChillHangouts;
