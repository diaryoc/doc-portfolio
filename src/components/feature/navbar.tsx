"use client"
import Logo from "@/components/tokens/logo";
import {getNavbar} from "@/data/navbar";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";


export default function Navbar(){
    const dataNavbar = getNavbar();
    const router = usePathname();
    const [active, setActive] = useState(false)
    return(
        <nav className="flex justify-between items-center h-20 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32">
            <div className="">
                <ul className="hidden lg:flex items-center justify-between">
                    {dataNavbar.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li
                                className={router === item.link ? "bg-primary text-slate-200 py-2 px-4 text-center group relative min-w-32 cursor-pointer overflow-hidden" : "group relative min-w-32 cursor-pointer overflow-hidden py-2 px-4 text-center transition-colors duration-700 hover:text-slate-200"}
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
            <Logo/>
            {/*Hamburger Button Start*/}
            <button
                className={active? "block absolute lg:hidden hamburger-active" :"block absolute lg:hidden"}
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={()=>setActive((prev) => !prev)}>
                <span className="origin-top-left w-[30px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
                <span className="w-[20px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
                <span className="origin-bottom-left w-[25px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
            </button>
            {/*Hamburger Button End*/}
            {/*mobile*/}
            {active && (
                <div
                    className="sidebar-active origin-left w-2/3 scale-x-0 fixed h-screen top-[73px] left-0 bg-white transition duration-500 ease-in-out"
                    id="nav-menu">
                    <ul className="flex flex-col">
                        {dataNavbar.map((item, index) => (
                            <li className="mobile-hamburger-list group" key={index}>
                                <Link href={item.link}
                                      className={"group-hover:bg-accent group-hover:text-white"}>
                                    {item.name}
                                    <span
                                        className={"group-hover:bg-accent group-hover:text-white group-hover:border-l-white"}>{`>`}</span>
                                </Link>
                            </li>
                        ))}


                    </ul>
                </div>
            )}
        </nav>
    )
}