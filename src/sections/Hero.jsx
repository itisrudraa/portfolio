import PORTFOLIO from "../data/portfolio";

function Hero(){
    return(
        <section id="hero" className="py-20">
            <div className="max-w-2xl px-4 mx-auto flex items-center gap-20">
                <div>
                    <h1 className="text-5xl font-bold tracking-tight">Hi, I'm {PORTFOLIO.name} 👋</h1>
                    <p className="mt-4 text-xl text-gray-600 leading-relaxed">{PORTFOLIO.description}</p>
                </div>
                <div className="shrink-0">
                    <img 
                        src={PORTFOLIO.avatarUrl} 
                        alt={PORTFOLIO.name}
                        className="w-40 h-40 rounded-full object-cover" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;