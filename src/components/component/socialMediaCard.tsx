import Image from "next/image";

export default function SocialMediaCard(props:{
    title: string;
    description: string;
    imgWhite:string;
    imgBlack:string;
}){
    return (
        <div className={"w-1/2 md:w-1/4 aspect-square"}>
            <div className="group aspect-square m-3 flex flex-col items-center justify-center gap-2 overflow-hidden border-2 border-ternary hover:bg-primary hover:border-0 rounded-xl">
                <div className={"flex items-center"}>
                    <Image src={props.imgBlack} alt={"icon black"} width={150} height={150} className={"group-hover:hidden"}/>
                    <Image src={props.imgWhite} alt={"icon white"} width={150} height={150} className={"hidden group-hover:flex"}/>
                </div>
                <div className={"flex items-center"}>
                    <h1 className={"font-semibold text-3xl text-primary group-hover:text-contras"}>{props.title}</h1>
                </div>
                <div className={"max-h-20 w-full px-5 flex items-center text-sm text-secondary group-hover:text-contras"}>
                        {props.description}
                </div>
            </div>
        </div>
    )
}