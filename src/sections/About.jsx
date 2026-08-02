import PORTFOLIO from "../data/portfolio";

function About(){
    return (
        <section id="about" className="pt-5">
            <div className="max-w-2xl px-4 mx-auto">
                <h2 className="text-3xl font-bold">About</h2>
                <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                    {PORTFOLIO.summary}
                </p>
            </div>
        </section>
    );
}

export default About;