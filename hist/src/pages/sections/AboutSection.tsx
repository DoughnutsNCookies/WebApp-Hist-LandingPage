import Image from 'next/image'

const AboutSection = () => {
    return (
        <section id="about">
            <div className="h-screen flex flex-col items-center text-center justify-center">
                <div className="pb-10 flex flex-col gap-y-4">
                    <p className="text-lg">
                        We focus on <strong className="text-4xl">ACCESSIBILITY</strong>
                    </p>
                    <p className="text-lg">which means</p>
                    <strong className="text-4xl">Simplicity + Efficiency</strong>
                </div>
                <div className="flex flex-row gap-40 jusitfy-center items-center">
                    <Image
                        src="/image-1.webp"
                        alt="Image User-friendly Interface"
                        width={250}
                        height={250}
                        className="border-4 border-primaryColor rounded-xl"
                        priority
                    />
                    <div className="text-start">
                        <h1 className="font-bold text-3xl">User-friendly Interface</h1>
                        <p className="text-xl">We make things clear and easy to understand.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-40 justify-center items-center">
                    <div className="text-start w-[40%]">
                        <h1 className="font-bold text-3xl">Fast and Secure</h1>
                        <p className="text-xl">We allow you to browse provider profiles and schedule appointment.</p>
                    </div>
                    <Image
                        src="/image-2.webp"
                        alt="Image Fast and Secure"
                        width={250}
                        height={250}
                        className=" border-4 border-primaryColor rounded-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection