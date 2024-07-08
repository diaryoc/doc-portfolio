"use client"
import Image from "next/image";
import {useState} from "react";

export default function ProjectSection(){
    const [modal, setModal] = useState(false);
    return (
        <div className={"w-full px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <h1 className={"text-5xl text-primary font-extrabold mb-3 mt-12 capitalize"}>Project</h1>
            <div className={"w-24 h-[4px] bg-primary mb-12"}></div>
            <div className={"w-1/2 md:w-1/4 aspect-square "}>
                <div className="aspect-square m-3 relative flex flex-col justify-center overflow-hidden bg-gray-50"
                     onClick={() => setModal(true)}>
                    <div className="absolute inset-0 bg-center"></div>
                    <div className="group relative m-0 flex aspect-square shadow-xl ring-gray-900/5 ">
                        <div
                            className="z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 rounded-md">

                            <Image
                                src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                alt="portfolio"
                                width={500}
                                height={500}/>
                        </div>
                        <div
                            className="absolute max-w-60 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className="font-serif text-2xl font-bold text-secondary shadow-inner shadow-ternary px-2 group-hover:text-primary">
                                Project Name tes
                            </h1>
                            <h1 className="text-sm font-light text-primary shadow-ternary shadow-inner px-2 truncate">
                                Personal Portfolio Website tralalalalalalalalalalalalalalalalalal
                            </h1>
                        </div>
                    </div>
                </div>
                {/*modal*/}
                {modal && (
                    <div
                        className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-60 py-10 z-50">
                        <div className="max-h-full w-full max-w-6xl overflow-y-auto sm:rounded-2xl bg-white relative">
                            <div className={"w-full flex flex-row-reverse"}>
                                <div className={"cursor-pointer flex items-center justify-center rounded-full m-5"}
                                     onClick={() => setModal(false)}>
                                    <Image src={"/assets/img/close.png"} alt={"close"} width={35} height={35}/>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="m-8 my-20 max-w-4xl mx-auto">
                                    <div className="mb-8 flex flex-col">
                                        <h1 className="mb-12 text-3xl font-extrabold capitalize">Project Name</h1>
                                        <Image
                                            src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 mb-12"
                                            alt="portfolio"
                                            width={500}
                                            height={500}
                                        />
                                        <h1 className="mb-4 text-xl font-extrabold capitalize">Description</h1>
                                        <p className="text-gray-600">Get the most out of Twitter by staying up to
                                            date
                                            with
                                            whats happening.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}