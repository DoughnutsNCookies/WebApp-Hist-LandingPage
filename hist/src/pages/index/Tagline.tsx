import Image from 'next/image'

const Tagline = () => {
    return (
        <section id="tagline">
            <div className="h-screen bg-[#A7D9DD] flex flex-col items-start p-24 justify-center gap-y-20">
                <div className="text-9xl font-bold flex flex-col tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#DB1E1A] to-accentColor" >
                    <h1>Connecting Users</h1>
                    <h1>with</h1>
                    <h1>Providers</h1>
                </div>
                <p className="text-3xl text-textColor font-bold w-[35vw]">
                    We make quality healthcare services accessible, affordable, and sustainable.
                </p>
            </div>
            <Image
                src="/index/image1.webp"
                alt="Landing Image"
                width={1920}
                height={1080}
                className='absolute bottom-24 right-20 w-[50vw] h-[50vh]'
                quality={100}
                priority
            />
        </section>
    )
}

export default Tagline