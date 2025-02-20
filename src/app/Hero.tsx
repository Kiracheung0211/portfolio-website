import { motion } from "framer-motion";
import Image from "next/image";
import { Kalam } from "next/font/google";
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function Hero() {
  enum Position {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left",
  }

  const roles = [
    {
      text: "Product",
      position: Position.Top,
      className: "text-4xl font-bold max-sm:text-2xl",
    },
    { text: "Designer", position: Position.Right, className: "text-xl" },
    { text: "Engineer", position: Position.Bottom, className: "text-xl" },
    { text: "Growth", position: Position.Left, className: "text-xl" },
  ];

  const positionStyles = {
    top: "top-1/3 right-1/3 -translate-x-1/2 -translate-y-2",
    right: "top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 ",
    bottom: "top-1/3 left-1/3 -translate-x-1/2 translate-y-16",
    left: "top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2",
  };

  const arrowStyles = {
    top: "scale-x-[-1]",
    right: "scale-x-[-1]",
    bottom: "",
    left: "",
  };

  const getFlexDirection = (position: Position) => {
    switch (position) {
      case Position.Top:
        return "flex-col gap-2";
      case Position.Right:
        return "flex-row-reverse";
      case Position.Bottom:
        return "flex-col gap-2";
      default:
        return "flex-row";
    }
  };

  return (
    <div
      id="home"
      className="h-screen flex relative w-full overflow-hidden bg-[#EAE7DC]"
    >
      {/* Text */}
      <div className="flex flex-col items-center text-center pt-20 gap-6 max-w-screen-md mx-auto z-40 max-sm:pt-60">
        {/* Im Kira + hand */}
        <div className="flex items-center gap-">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center z-40"
          >
            <h1 className="text-6xl font-bold max-sm:text-4xl">
              Hi there, I&apos;m{" "}
              <span className="text-[#FD652D] z-40">Kira</span>
            </h1>
          </motion.div>
          {/* Hand */}
          <motion.span
            className="text-6xl origin-bottom-right inline-block max-sm:text-4xl"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: 3,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </div>

        <motion.p
          className="text-2xl text-gray-600 z-50 w-full max-sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Bridging design, engineering, and growth to build products that matter
        </motion.p>
      </div>

      {/* Image + Roles*/}
      <div className="">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 max-sm:left-0 max-sm:-translate-x-0">
          <Image
            src="/kira-headshot.png"
            alt="kira headshot"
            width={600}
            height={600}
            className="w-[600px] max-h-[60vh] h-auto max-sm:w-fit object-contain"
            priority
          />
        </div>

        {/* Roles */}
        {roles.map((role, index) => (
          <motion.div
            key={role.text}
            className={`absolute flex items-center z-30 ${
              positionStyles[role.position]
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.div
              className={`${getFlexDirection(role.position)}`}
              whileHover={{ scale: 1.1 }}
            >
              <span
                className={`${kalam.className} ${role.className} max-sm:hidden`}
              >
                {role.text}
              </span>

              <Image
                src="/arrow-right.png"
                alt="right arrow"
                width={100}
                height={100}
                className={`w-12 h-12 object-contain max-sm:hidden ${
                  arrowStyles[role.position]
                }`}
                priority
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* background circle */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-52 w-[80vw] max-w-[800px] aspect-square z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <defs>
            <radialGradient
              id="radiatingGlow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#EAE7DC" />
              <stop offset="45%" stopColor="#FFD5BA" />
              <stop offset="75%" stopColor="#FFCAA3" />
              <stop offset="100%" stopColor="#EAE7DC" />
            </radialGradient>
          </defs>

          <rect
            x="0"
            y="0"
            width="800"
            height="800"
            fill="url(#radiatingGlow)"
            opacity="50%"
          />
        </svg>
      </div>
    </div>
  );
}
