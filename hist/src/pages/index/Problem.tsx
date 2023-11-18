import Image from "next/image"

const Problem = () => {
    return (
        <section id="problem">
            <div className="h-[60vh] flex flex-row">
                <Image
                    src="/index/image2.webp"
                    alt="Problem Image"
                    width={1920}
                    height={1080}
                    className='w-[50vw] h-[60vh]'
                    quality={100}
                    priority
                />
                <div className="bg-[#083B64] w-[50vw] flex flex-col pl-20 items-start justify-center gap-y-4">
                    <h1 className="text-6xl tracking-tight font-bold text-backgroundColor">
                        Have you been in a situation where:
                    </h1>
                    <ul>
                        <Pointers text="Lack of clarity about the health conditions" />
                        <Pointers text="Uncertainty about the right specialist to consult" />
                        <Pointers text="Difficulty finding the suitable doctor" />
                        <Pointers text="Not knowing the available solutions" />
                        <Pointers text="Lost track of previous medical records" />
                    </ul>
                </div>
            </div>
            <div className="h-[40vh] bg-[#4B4B71] flex flex-row justify-center">
                <div className="w-[50vw] flex flex-col justify-center items-start text-4xl text-backgroundColor">
                    <p>And in the end, spending</p>
                    <p>more <strong>TIME</strong> and</p>
                    <p> more <strong>MONEY</strong>.</p>
                </div>
                <Image
                    src="/index/image3.webp"
                    alt="Time is money Image"
                    width={1080}
                    height={1080}
                    className='w-[40vh] h-[40vh]]'
                    quality={100}
                    priority
                />
            </div>
        </section>
    )
}

interface PointerProps {
    text: string
}

const Pointers = (props: PointerProps) => {
    const { text } = props

    return (
        <li className="flex flex-row gap-x-2">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-2"
            >
                <g id="close-circle-m">
                    <path
                        id="Vector"
                        d="M13.4142 12L16.2426 9.17159L14.8284 7.75737L12 10.5858L9.17157 7.75737L7.75736 9.17159L10.5858 12L7.75736 14.8284L9.17157 16.2427L12 13.4142L14.8284 16.2427L16.2426 14.8284L13.4142 12Z"
                        fill="#ED0000"
                    />
                    <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                        fill="#ED0000"
                    />
                </g>
            </svg>
            <p className="text-2xl text-backgroundColor">
                {text}
            </p>
        </li>
    )
}

export default Problem