import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube, } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { LuNotebookText } from "react-icons/lu";
import { MdLightMode } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";


function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md">
        <DockIcon>
          <HiHome />
        </DockIcon>

        <DockIcon href="https://medium.com/@itisrudra">
          <LuNotebookText />
        </DockIcon>

        <div className="h-8 w-px bg-gray-300" />

        <DockIcon href="https://github.com/itisrudraa">
          <FaGithub />
        </DockIcon>

        <DockIcon href="https://www.linkedin.com/in/itisrudra/">
          <FaLinkedin />
        </DockIcon>

        <DockIcon href="">
          <FaXTwitter />
        </DockIcon>

        <DockIcon href="https://leetcode.com/u/itisrudra/">
          <SiLeetcode />
        </DockIcon>

        <div className="h-8 w-px bg-gray-300" />

        <DockIcon onClick={() => {}}>
          <MdLightMode />
        </DockIcon>
      </div>
    </div>
  );
}

function DockIcon({ children, href, onClick }) {
  const className =
    "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-xl text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:text-gray-900";

  if (href !== undefined) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default FloatingDock;