"use client"
import Logo from "@/components/tokens/logo";
import {getNavbar} from "@/data/navbar";
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Navbar(){
    const dataNavbar = getNavbar();
    const router = usePathname();
    return(
        <nav className="flex justify-between items-center h-20 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32">
            <Logo/>
            <div className="">
                <ul className="flex items-center justify-between">
                    {dataNavbar.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li
                                className={router === item.link ? "bg-primary text-slate-200 py-2 px-4 text-center group relative min-w-32 cursor-pointer overflow-hidden":"group relative min-w-32 cursor-pointer overflow-hidden py-2 px-4 text-center transition-colors duration-700 hover:text-slate-200"}
                            >
                                {item.name}
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 z-[-1] -translate-x-full bg-primary transition-transform duration-700 group-hover:translate-x-0"></span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}