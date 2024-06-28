import Image from "next/image";

export default function HeroSection(){
    return(
        <div className={"w-full flex justify-between px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <div>text</div>
            <div className={"rounded-xl"}>
                <Image
                    src={"/assets/img/banner.jpg"}
                    alt={"banner"}
                    width={720}
                    height={720}
                    className={"object- rounded-xl"}
                />
            </div>
        </div>
    )
}