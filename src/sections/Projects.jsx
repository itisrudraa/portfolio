import Project from "../components/ProjectCard";
import PORTFOLIO from "../data/portfolio";

function Projects(){
    return (
        <section id="projects" className="py-7">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center">
                    <div className="relative flex justify-center">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>
                        <div className="relative z-10 inline-block py-1 px-2.5 rounded-full bg-black text-white font-bold">My Projects</div>
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight">Check out my latest work</h2>
                    <p className="mt-5 text-lg text-gray-600 leading-relaxed">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                    {PORTFOLIO.projects.map(({title, description, image, tech, github, live}) => (
                        <Project 
                            key={title}
                            title={title}
                            description={description}
                            image={image}
                            tech={tech}
                            github={github}
                            live={live}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;