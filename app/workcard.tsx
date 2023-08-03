import Link from "next/link";
import Image from "next/image";

export default function WorkCard({iconadd, alttext, gifadd, children}: any){
    const alttextIcon: string = alttext + 'pic';
    const altextInter: string =  alttext + 'interaction';
    return (
        <Link href='/'>
            <div className="bg-[#E6E7EE] flex flex-row felx-grow shrink-0 rounded-md px-10 py-3 my-3 static border-2 font-bold">
                <div>
                    <Image src={iconadd} width={300} height={300} alt={alttextIcon}></Image>
                    
                </div>
                <div className="flex flex-col ml-10">
                    <h1 className=" text-black text-2xl">{alttext}</h1>
                    <p className="text-slate-950">{children}</p>
                    <Image priority={true} src={gifadd} width={200} height={200} alt={altextInter}></Image>
                </div>
            </div>
        </Link>
    )
}