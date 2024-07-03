import Link from "next/link";
import Image from "next/image";

export default function FooterSection(){
    return(
        <div className={"flex justify-between items-center h-20 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-32"}>
            <div className={"flex gap-4"}>
                <Link href="/">
                    <Image src={"/assets/img/icon/wa.png"} alt={"wa"} width={30} height={30} />
                </Link>
                <Link href="/">
                    <Image src={"/assets/img/icon/instagram.png"} alt={"instagram"} width={30} height={30} />
                </Link>
                <Link href="/">
                    <Image src={"/assets/img/icon/linkedin.png"} alt={"linkedin"} width={30} height={30} />
                </Link>
                <Link href="/">
                    <Image src={"/assets/img/icon/github.png"} alt={"github"} width={30} height={30} />
                </Link>
            </div>
            <div className={"font-bold text-[#2f2f2f] text-xl"}>Copyright©️2024</div>
        </div>
    )
}