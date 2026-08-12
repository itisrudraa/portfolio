import HackathonCard from "../components/HackathonCard"
import PORTFOLIO from "../data/portfolio"

function Hackathons(){
    return(
        <section id="Hackathon" className="py-8">
            <div className="max-w-2xl mx-auto p-4">
                <div className="text-center">
                    <div className="relative flex justify-center">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>
                        <div className="relative z-10 inline-block py-1 px-2.5 rounded-full bg-black text-white font-bold">Hackathons</div>
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight">I like building things</h2>
                    <p className="mt-5 text-lg text-gray-600 leading-relaxed">I attended hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.</p>
                </div>
                <div className="flex flex-col gap-6 mt-10">
                    {PORTFOLIO.hackathons.map(({title, organizer, date, status, description, logoURL}) => (
                        <HackathonCard 
                            key={title} 
                            title={title} 
                            organizer={organizer} 
                            date={date} 
                            status={status} 
                            description={description}
                            logoURL={logoURL}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hackathons;