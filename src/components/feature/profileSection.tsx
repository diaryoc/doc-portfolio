import Image from "next/image";

export default function ProfileSection(){
    return(
        <div className={"flex justify-between mt-6 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <div className={"w-1/2"}>
                <div className={"flex justify-center items-center"}>
                    <Image src={"/assets/img/logo.png"} alt={"logo"} width={500} height={500} />
                </div>
            </div>
            <div className={"w-1/2 flex ml-8 flex-col"}>
                <div className={"mb-12"}>
                    <h1 className={"text-2xl text-primary font-extrabold mb-3 capitalize"}>Biography</h1>
                    <div className={"w-16 h-[2px] bg-primary mb-3"}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dicta fugiat harum labore nemo praesentium quaerat quisquam repellendus rerum tenetur, ullam ut! Autem eaque fuga incidunt nobis, odio possimus!
                    </p>
                </div>
                <div className={"mb-12"}>
                    <h1 className={"text-2xl text-primary font-extrabold mb-3 capitalize"}>Time Line</h1>
                    <div className={"w-16 h-[2px] bg-primary mb-3"}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dicta fugiat harum labore nemo praesentium quaerat quisquam repellendus rerum tenetur, ullam ut! Autem eaque fuga incidunt nobis, odio possimus!
                    </p>
                </div>
                <div className={"mb-12"}>
                    <h1 className={"text-2xl text-primary font-extrabold mb-3 capitalize"}>Information</h1>
                    <div className={"w-16 h-[2px] bg-primary mb-3"}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dicta fugiat harum labore nemo praesentium quaerat quisquam repellendus rerum tenetur, ullam ut! Autem eaque fuga incidunt nobis, odio possimus!
                    </p>
                </div>
            </div>
        </div>
    )
}