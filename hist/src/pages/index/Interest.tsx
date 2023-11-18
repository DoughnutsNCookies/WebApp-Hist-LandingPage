import Image from 'next/image'

const Interest = () => {
    return (
        <section id="interest">
            <div className="h-[40vh] flex flex-col justify-center p-20 text-center font-playfair font-bold text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#DB1E1A] to-accentColor" >
                <h1>A single touchpoint to</h1>
                <h1>manage all your</h1>
                <h1>healthcare needs.</h1>
            </div>
            <div className="h-[30vh] w-full bg-[#0156B4] flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2 justify-center items-start p-20">
                    <h1 className="font-bold font-playfair text-6xl text-backgroundColor">Sounds Interesting?</h1>
                    <p className="font-lato text-3xl text-backgroundColor">Sign up as our beta user now!</p>
                </div>
                <button className="h-[10vh] m-20 bg-primaryColor py-5 px-10 rounded-3xl text-accentColor font-lato font-bold text-2xl hover:scale-110 transition-all">
                    Get Started Now
                </button>
            </div>
            <div className="h-[30vh] flex flex-row justify-center items-center gap-x-20">
                <Image
                    src="/index/image12.webp"
                    alt="Image MyStartup"
                    width={1920}
                    height={1080}
                    className="w-[30vw]"
                    quality={100}
                    priority
                />
                <Image
                    src="/index/image13.webp"
                    alt="Image TechInAsia"
                    width={1920}
                    height={1080}
                    className="w-[30vw]"
                    quality={100}
                    priority
                />
            </div>
        </section>
    )
}

export default Interest