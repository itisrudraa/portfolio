import Badge from "../components/ui/Badge";
import PORTFOLIO from "../data/portfolio";

function Skills(){
    return(
        <section id="skills" className="py-5">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {PORTFOLIO.skills.map(({name, icon})=>{
                        return(
                            <Badge key={name} name={name} icon={icon} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;