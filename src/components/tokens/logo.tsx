import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
        <Link href="/" className={"flex justify-between items-center gap-4"}>
            <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={42}
                height={42}
            />
            <span className={"text-lg tracking-wide hidden md:flex"}>Diary Of Curiosity</span>
        </Link>
    )
}