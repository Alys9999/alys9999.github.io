import Link from "next/link";
import Image from "next/image";

export default function HeaderCard({iconadd, cardname}: any){
    return (
        <div className="bg-white flex flex-col rounded-lg static w-20">
            <Image priority={true} src={iconadd} width={100} height={100} 
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
            alt='${cardname} icon' className=" p-2 h-3/4 w-full/"></Image>
            <div className="flex flex-col-reverse">
                <h6 className=" text-zinc-950 text-center">{cardname}</h6>
            </div>
        </div>
    )
}