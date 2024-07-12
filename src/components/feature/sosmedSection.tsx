import SocialMediaCard from "@/components/component/socialMediaCard";

export default function SocialMediaSection(){
    return(
        <div className={"px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <h1 className={"text-5xl text-primary font-extrabold mb-3 mt-12 capitalize"}>Social Media</h1>
            <div className={"w-24 h-[4px] bg-primary mb-12"}></div>
            <div className="flex flex-wrap">
                <SocialMediaCard title={"Instagram"} description={"Alvillage"} imgBlack={"/assets/img/icon/instagram.png"} imgWhite={"/assets/img/icon/instagram.png"}/>
            </div>
        </div>
    )
}