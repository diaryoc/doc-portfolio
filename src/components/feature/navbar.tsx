import Logo from "@/components/tokens/logo";
import ListComponent from "@/components/component/listComponent";
import {getNavbar} from "@/data/navbar";


export default function Navbar(){
    const dataNavbar = getNavbar();
    return(
        <nav className="flex justify-between items-center h-20 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32">
            <Logo/>
            <div className="">
                <ListComponent list={dataNavbar} ulClass={"flex justify-between gap-4"} />
            </div>
        </nav>
    )
}