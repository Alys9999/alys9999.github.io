import Link from "next/link";
import Image from "next/image";


export default function HeaderCard({iconadd, cardname, link}: any){
    return (
        <Link href={link}>
            <div className=" bg-[#dcdcdc] flex flex-col shrink-0 rounded-lg static w-20 h-24">
                <Image priority={true} src={iconadd} width={100} height={100} 
                alt='${cardname} icon' className=" p-2 h-3/4 w-full min"></Image>
                <div className="flex flex-col-reverse">
                    <h6 className=" text-zinc-950 text-center font-bold">{cardname}</h6>
                </div>
            </div>
        </Link>
    )
}