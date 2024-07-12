import SocialMediaCard from "@/components/component/socialMediaCard";
import {getSocmed} from "@/data/socmed";

export default function SocialMediaSection(){
    const dataSocmed = getSocmed();
    return(
        <div className={"px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <h1 className={"text-5xl text-primary font-extrabold mb-3 mt-12 capitalize"}>Social Media</h1>
            <div className={"w-24 h-[4px] bg-primary mb-12"}></div>
            <div className="flex flex-wrap">
                {dataSocmed.map((item)=>(
                    <SocialMediaCard
                        title={item.title}
                        description={item.description}
                        imgBlack={item.imgBlack}
                        imgWhite={item.imgWhite}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}