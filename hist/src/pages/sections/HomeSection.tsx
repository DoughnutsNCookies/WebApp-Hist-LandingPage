const HomeSection = () => {
    return (
        <section id="home">
            <div className="h-screen w-screen flex flex-col text-center justify-center">
                <h1 className="font-bold text-7xl py-10 tracking-tighter">Connecting Users with Providers</h1>
                <div className="p-10 flex flex-col items-center">
                    <h2 className="font-bold text-2xl pb-6">We are dedicated to reshaping healthcare accessibility.</h2>
                    <p className="text-xl w-[40%]">Hist is an innovative platform designed to seamlessly connect you with a comprehensive range of health-related solutions. From effortlessly scheduling health consultations to discovering top-quality services and products.</p>
                </div>
                <div className="pb-10 flex flex-col items-center">
                    <h2 className="font-bold text-2xl pb-6">We&apos;re here to empower you on your health journeey.</h2>
                    <button
                        className="bg-accentColor py-5 px-10 rounded-3xl text-backgroundColor font-bold text-xl hover:scale-105 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HomeSection