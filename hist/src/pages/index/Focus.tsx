import Image from 'next/image'

const Focus = () => {
    return (
        <section id="focus">
            <div className="flex flex-col items-center text-center justify-center gap-y-10 p-20 bg-white">
                <div className="flex flex-col gap-y-4 font-lato">
                    <p className="text-2xl">
                        We focus on <strong className="pl-4 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#DB1E1A] to-accentColor">ACCESSIBILITY</strong>
                    </p>
                    <p className="text-2xl">which means</p>
                    <strong className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#46CCF6] to-[#4AC851]">Simplicity + Efficiency</strong>
                </div>
                <LeftWidget
                    title="User-friendly Interface"
                    description="We make things clear and easy to understand."
                    image="/index/image5.webp"
                    alt="Image User-friendly Interface"
                />
                <RightWidget
                    title="Fast and Secure"
                    description="We allow you to browse provider profiles and schedule appointment."
                    image="/index/image6.webp"
                    alt="Image Fast and Secure"
                />
                <LeftWidget
                    title="Easy follow-up"
                    description="We allow you to keep all your medical records in one place."
                    image="/index/image7.webp"
                    alt="Image Easy follow-up"
                />
            </div>
        </section>
    )
}

interface LeftWidgetProps {
    title: string;
    description: string;
    image: string;
    alt: string;
}

const LeftWidget = (props: LeftWidgetProps) => {
    const { title, description, image, alt } = props;

    return (
        <div className="flex flex-row w-full gap-40 justify-center items-center">
            <Image
                src={image}
                alt={alt}
                width={250}
                height={250}
                className="w-[30%]"
                priority
            />
            <div className="text-start w-[40%]">
                <h1 className="font-bold font-playfair text-4xl">{title}</h1>
                <p className="text-2xl font-lato">{description}</p>
            </div>
        </div>
    )
}

interface RightWidgetProps {
    title: string;
    description: string;
    image: string;
    alt: string;
}

const RightWidget = (props: RightWidgetProps) => {
    const { title, description, image, alt } = props;

    return (
        <div className="flex flex-row w-full gap-40 justify-center items-center">
            <div className="text-start w-[40%]">
                <h1 className="font-bold font-playfair text-4xl">{title}</h1>
                <p className="text-2xl font-lato">{description}</p>
            </div>
            <Image
                src={image}
                alt={alt}
                width={250}
                height={250}
                className="w=[30%]"
                priority
            />
        </div>
    )
}

export default Focus
