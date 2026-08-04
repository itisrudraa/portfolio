import Badge from "../components/ui/Badge"
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Project({title, description, image, tech, github, live}){
    return (
        <div className="rounded-xl border border-gray-300 shadow-sm overflow-hidden bg-white">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-6">
                <div className="flex justify-between">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <a href={live} target="_blank"> 
                        <MdArrowOutward className="text-xl"/>
                    </a>
                </div>
                <p className="mt-3 text-sm text-gray-600">{description}</p>
                <div className="flex flex-wrap gap-1 mt-5">
                    {tech.map(({name, icon}) => (
                        <Badge key={name} name={name} icon={icon} />
                    ))}
                </div>
                <div className="mt-6 flex justify-between">
                    <a href={github} target="_blank">
                        <div className="flex items-center gap-2 rounded-lg px-2 border border-gray-300">
                            <FaGithub className="text-lg" />
                            <span className="font-semibold">GitHub</span>
                        </div>
                    </a>
                    <a href={live} target="_blank">
                        <div className="flex items-center gap-2 rounded-lg px-2 border border-gray-300">
                            <span className="font-semibold">Live Demo</span>
                            <MdArrowOutward className="text-lg" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;