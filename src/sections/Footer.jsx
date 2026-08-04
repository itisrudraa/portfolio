function Footer(){
    return (
        <section id="#footer" className="pt-20 pb-40">
            <div className="text-center">
                <div className="relative flex justify-center">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>
                    <div className="relative z-10 inline-block py-1 px-2.5 rounded-full bg-black text-white font-bold">Contact</div>
                </div>
                <h2 className="mt-6 text-5xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">Want to chat or discuss opportunities? Just drop me an email and I'll respond whenever I can. I will ignore all soliciting..</p>
                <a href="mailto:merudra01@gmail.com" className="mt-6 inline-block text-lg font-medium text-black hover:underline" >merudra01@gmail.com </a>
            </div>
        </section>
    );
}

export default Footer;