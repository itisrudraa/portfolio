import { SiReact, SiTailwindcss, SiPython, SiCplusplus, SiJavascript, SiGit, } from "react-icons/si";

const ICONS = {
    react: SiReact,
    tailwind: SiTailwindcss,
    python: SiPython,
    cpp: SiCplusplus,
    javascript: SiJavascript,
    git: SiGit,
};

function Badge({name, icon}){
    const Icon = ICONS[icon];
    return(
        <div className="inline-flex items-center gap-2  py-0.5 px-2.5 rounded-md text-sm font-bold text-white bg-gray-900">
            {Icon && <Icon />}
            <span>{name}</span>
        </div>
    );
}


export default Badge;