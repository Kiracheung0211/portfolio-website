// Navigation.jsx
import girl from "../../public/girl.svg";
import Image from "next/image";
import GirlSVG from "./GirlSVG";

const Navigation = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-6 z-50 flex justify-end">
      <div className="px-8 py-4 flex items-center justify-center bg-white rounded-full">
        <div className="flex items-center space-x-8 ">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-600 hover:text-black hover:font-bold transition-colors"
          >
            <GirlSVG />
            {/* <Image
              src={girl}
              alt="Girl icon"
              width={36}
              height={36}
              className="w-10 h-10"
            /> */}
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-gray-600 hover:text-[#FD652D] hover:font-bold transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("writing")}
            className="text-gray-600 hover:text-[#FD652D] hover:font-bold transition-colors"
          >
            Writing
          </button>
          <button
            onClick={() => scrollToSection("story")}
            className="text-gray-600 hover:text-[#FD652D] hover:font-bold transition-colors"
          >
            Story
          </button>
          <button
            onClick={() => scrollToSection("connect")}
            className="text-gray-600 hover:text-[#FD652D] hover:font-bold transition-colors"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
