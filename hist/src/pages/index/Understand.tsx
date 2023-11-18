import Image from "next/image";

const Understand = () => {
    return (
        <section id="understand">
            <div className="flex flex-col justify-between items-center p-20 bg-white">
                <h1 className="text-4xl">
                    We understand your <strong className="text-5xl text-[#F02929]">frustration.</strong>
                </h1>
                <div className="flex flex-row gap-x-20">
                    <div className="flex flex-col justify-center w-[70vw] gap-y-4">
                        <h1 className="font-playfair font-bold text-7xl">
                            A straightforward system of care is needed.
                        </h1>
                        <p className="font-lato text-2xl">
                            Hist is designed to connect you with a comprehensive range of health-related solutions. From effortlessly scheduling health consultations to discovering top-quality services and products.
                        </p>
                    </div>
                    <Image
                        src="/index/image4.webp"
                        alt="Image Reshaping Healthcare Accessibility"
                        width={1000}
                        height={1000}
                        className="w-[30vw]"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className="h-[15vh] w-[100vw] bg-accentColor flex flex-row justify-center items-center gap-x-20">
                <h1 className="font-playfair font-bold text-4xl text-backgroundColor">
                    We&apos;re here to empower you on your health journey.
                </h1>
                <div className="flex flex-row justify-center items-center">
                    <button className="bg-primaryColor py-5 px-10 rounded-3xl text-accentColor font-lato font-bold text-2xl hover:scale-110 transition-all">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Understand