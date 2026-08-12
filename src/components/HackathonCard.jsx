

function HackathonCard({title, organizer, date, status, description, logoURL}){
    return(
        <div className="flex items-start gap-8 p-4">
            <div className="flex items-center justify-center shrink-0">
                <img alt={title} src={logoURL} className="h-10 w-10 rounded-full object-contain bg-gray-100" />
            </div>
            <div>
                <p className="text-xs text-gray-700">{date}</p>
                <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-sm text-gray-800">{organizer}</p>
                <p className="font-mono tracking-tight">{status}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default HackathonCard