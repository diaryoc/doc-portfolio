import Image from "next/image";

export default function HeroSection(){
    return(
        <div className={"w-full flex justify-between px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <div>
                <h1>Diary of Curiosity</h1>
                <p>
                    <span>keterangan dari inti diary of curiosity</span>
                </p>
                <p>ini nanti tambahan keterangan</p>
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