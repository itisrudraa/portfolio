import PORTFOLIO from "../data/portfolio";

function Hero(){
    return(
        <section id="hero">
            <div className="max-w-4xl px-4 mx-auto flex items-center gap-20">
                <div>
                    <h1>Hi, I'm {PORTFOLIO.name}</h1>
                    <p>{PORTFOLIO.description}</p>
                </div>
                <div>
                    <img 
                        src={PORTFOLIO.avatarUrl} 
                        alt={PORTFOLIO.name}
                        className="w-20 h-20 rounded-full object-cover" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;