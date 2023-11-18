import Image from 'next/image'

const Interest = () => {
    return (
        <section id="interest">
            <div
                className="h-[40vh] flex flex-col justify-center items-between p-20 text-center font-bold text-6xl tracking-tight"
                style={{
                    background: "linear-gradient(90deg, #E94142 1.17%, #4569C7 19.59%, #027EF6 32.9%, #1091CE 47.69%, #21AC93 54.6%, #31C55D 66.43%, #4AC851 77.28%, #6CC840 82.71%, #ECCA05 95.86%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}

            >
                <h1>A single touchpoint to</h1>
                <h1>manage all your</h1>
                <h1>healthcare needs.</h1>
            </div>
            <div className="h-[30vh] w-full bg-[#0156B4] flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2 justify-center items-start p-20">
                    <h1 className="font-bold text-6xl text-backgroundColor">Sounds Interesting?</h1>
                    <p className="text-3xl text-backgroundColor">Sign up as our beta user now!</p>
                </div>
                <button className="h-[10vh] m-20 bg-primaryColor py-5 px-10 rounded-3xl text-accentColor font-bold text-2xl hover:scale-110 transition-all">
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