import Image from 'next/image'

const ReshapingSection = () => {
    return (
        <section id="reshaping">
            <div className="h-screen">
                <div>
                    <h1 className="text-6xl font-bold text-center pt-20 tracking-tighter">
                        Reshaping Healthcare Accessibility
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/image-3.webp"
                            alt="Image Reshaping Healthcare Accessibility"
                            width={1000}
                            height={1000}
                            className="h-[30vh] mt-10 border-4 border-primaryColor rounded-xl object-cover"
                            style={{
                                objectPosition: "0% 30%"
                            }}
                            priority
                        />
                    </div>
                </div>
                <div className="px-20">
                    <h1 className="text-4xl font-bold text-center pt-6">
                        What is Accessibility?
                    </h1>
                    <div className="flex flex-row justify-between pt-10">
                        <div className="bg-secondaryColor p-10 rounded-md w-[25%]">
                            <h2 className="text-xl font-bold text-accentColor">Accessibility of:</h2>
                            <ul className="list-disc pl-4 items-center">
                                <li>Providers</li>
                                <li>Organizations</li>
                                <li>Institutions</li>
                                <li>systems</li>
                            </ul>
                        </div>
                        <div className="w-[30%] flex flex-col justify-center items-center gap-5">
                            <h1 className="text-5xl font-bold text-center text-accentColor">Access</h1>
                            <p className="text-center text-md italic">Defined as: The opportunity to have healthcare needs fulfilled</p>
                        </div>
                        <div className="bg-secondaryColor p-10 rounded-md w-[25%]">
                            <h2 className="text-xl font-bold text-accentColor">Ability of:</h2>
                            <ul className="list-disc pl-4 items-center">
                                <li>Populations</li>
                                <li>Communities</li>
                                <li>Households</li>
                                <li>Individuals</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <ul className="flex flex-row mt-6 h-32 justify-between gap-x-4">
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">Healthcare needs</li>
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">
                                Perception of needs and desire for care
                            </li>
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">Healthcare seeking</li>
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">Healthcare reaching</li>
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">
                                <div>
                                    <h1>Healthcare Utilization</h1>
                                    <ul className="list-disc text-start pl-4 text-textColor font-normal">
                                        <li className="text-xs">Primary Access</li>
                                        <li className="text-xs">Secondary Access</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="w-[15%] bg-secondaryColor rounded-md grid justify-center items-center text-center text-accentColor font-bold">
                                <div>
                                    <h1>Healthcare Consequences</h1>
                                    <ul className="list-disc text-start pl-4 text-textColor font-normal">
                                        <li className="text-xs">Economic</li>
                                        <li className="text-xs">Satisfaction</li>
                                        <li className="text-xs">Health</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReshapingSection