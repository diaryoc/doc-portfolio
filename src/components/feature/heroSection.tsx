import Image from "next/image";

export default function HeroSection(){
    return(
        <div className={"w-full flex justify-between px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <div className={"flex flex-col justify-center gap-8"}>
                <h1 className={"font-bold text-primary text-2xl"}>Diary of Curiosity</h1>
                <span className={"text-6xl font-bold tracking-wider capitalize text-accent"}>Just someone,<br/> who is always curious to <br/>learn new things.</span>
                <button className={"bg-primary py-3 px-4 rounded-md shadow-md shadow-slate-400 hover:bg-secondary hover:text-slate-600 w-40 text-lg font-bold text-white tracking-wide"}>Get in Touch!</button>
            </div>
            <div className={"rounded-2xl relative h-1/2"}>
                <Image
                    src={"/assets/img/banner.jpg"}
                    alt={"banner"}
                    width={720}
                    height={720}
                    className={"object-cover rounded-2xl"}
                />
            </div>
        </div>
    )
}