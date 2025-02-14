import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WaverlyShowcase = () => {
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
          <h1 className="text-4xl font-bold">Waverly</h1>
        </div>

        <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
          Built an AI-powered social platform where anyone could create and join
          communities—just by using natural language. Backed by Betaworks,
          Greycroft, and Mozilla Ventures, it redefined how people connect
          online.
        </h2>
        <h2 className="text-xl text-gray-600 font-normal max-w-full pb-3">
          To make it even more seamless, I developed smart content filtering and
          community matching, helping users find the right spaces effortlessly.
        </h2>
        <h2 className="text-xl text-gray-600 font-normal max-w-full">
          Features on BBC News, Betakit, and Collision Conference brought major
          visibility, driving the platform to 10,000+ users and proving the
          demand for a more intuitive way to connect.
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
                src="/waverly1.png"
                alt="Waverly Community Feed"
                className="w-[300px] h-auto object-contain"
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
                src="/waverly2.png"
                alt="Waverly Community Feed"
                className="w-[300px] h-auto rounded-3xl"
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

export default WaverlyShowcase;
