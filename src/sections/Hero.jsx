import PORTFOLIO from "../data/portfolio";
import TypingEffect from "@/components/ui/TypingEffect.jsx";
import DottedBackground from "@/components/ui/DottedBackground.jsx";

function Hero(){
    return(
        <section id="hero" className=" relative pt-20 pb-5">
            <DottedBackground />
            <div className="max-w-2xl z-10 px-4 mx-auto flex flex-col md:flex-row items-start md:items-center gap-20">
                <div className="shrink-0 md:order-2">
                    <img 
                        src={PORTFOLIO.avatarUrl} 
                        alt={PORTFOLIO.name}
                        className="w-40 h-40 rounded-full border-3 border-gray-300 object-cover" 
                    />
                </div>
                <div className="flex-1 md:order-1">
                    <h1 className="text-5xl font-bold tracking-tight"><TypingEffect text={`Hi, I'm ${PORTFOLIO.name} 👋`}/></h1>
                    <p className="mt-4 text-xl text-gray-600 leading-relaxed">{PORTFOLIO.description}</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;