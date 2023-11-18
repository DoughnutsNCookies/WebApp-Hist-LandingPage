import Image from 'next/image'

const Mobile = () => {
    return (
        <section id="mobile">
            <div className="flex flex-col justify-center gap-y-6 items-center bg-white">
                <h1 className="font-playfair font-bold text-9xl text-[#46CCF6] pb-4">Just 4 steps</h1>
                <div className="h-[100vh] w-full flex flex-row justify-between bg-[#46CCF6] px-20 py-10">
                    <MobileUpper
                        step={"01"}
                        title="Search"
                        image="/index/image8.webp"
                        alt="Image Search"
                    />
                    <MobileLower
                        step={"02"}
                        title="Compare"
                        image="/index/image9.webp"
                        alt="Image Compare"
                    />
                    <MobileUpper
                        step={"03"}
                        title="Book"
                        image="/index/image10.webp"
                        alt="Image Book"
                    />
                    <MobileLower
                        step={"04"}
                        title="Track"
                        image="/index/image11.webp"
                        alt="Image Track"
                    />
                </div>
            </div>
        </section>
    )
}

interface MobileUpperProps {
    step: string
    title: string
    image: string
    alt: string
}

const MobileUpper = (props: MobileUpperProps) => {
    const { step, title, image, alt } = props

    return (
        <div>
            <h1 className="text-backgroundColor font-playfair text-4xl text-center pb-4">
                <strong className="text-8xl font-bold pr-4">{step}</strong>
                {title}
            </h1>
            <Image
                src={image}
                alt={alt}
                width={500}
                height={1000}
                quality={100}
                className="h-[80vh] w-[25vw]"
                priority
            />
        </div>
    )
}

interface MobileLowerProps {
    step: string
    title: string
    image: string
    alt: string
}

const MobileLower = (props: MobileLowerProps) => {
    const { step, title, image, alt } = props

    return (
        <div>
            <Image
                src={image}
                alt={alt}
                width={500}
                height={1000}
                quality={100}
                className="h-[80vh] w-[25vw]"
                priority
            />
            <h1 className="text-backgroundColor font-playfair text-4xl text-center">
                <strong className="text-8xl font-bold pr-4">{step}</strong>
                {title}
            </h1>
        </div>
    )
}

export default Mobile