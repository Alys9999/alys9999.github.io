import Link from "next/link";
import Image from "next/image";

export default function WorkCard({iconadd, alttext, gifadd, children, link}: any){
    const alttextIcon: string = alttext + 'pic';
    const altextInter: string =  alttext + 'interaction';
    return (
        <Link href={link} className="bg-[#E6E7EE] flex flex-row felx-grow rounded-md px-10 py-3 my-3 static border-2 font-bold hover:bg-[#dbdde9] hover:shadow-lg">
                <div className=" min-w-max min-h-max">
                    <Image src={iconadd} width={300} height={300} alt={alttextIcon}></Image>
                </div>
                <div className="flex flex-col ml-10">
                    <h3 >{alttext}</h3>
                    <p className="text-slate-950">{children}</p>
                    <Image priority={true} src={gifadd} width={200} height={200} alt={altextInter}></Image>
                </div>
        </Link>
    )
}