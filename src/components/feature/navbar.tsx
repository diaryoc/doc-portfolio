import Logo from "@/components/tokens/logo";


export default function Navbar(){
    return(
        <nav className="flex justify-between items-center h-20 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32">
            <Logo/>
            <div className=""> hamburger</div>
        </nav>
    )
}