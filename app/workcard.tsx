import Link from "next/link";
import Image from "next/image";

export default function WorkCard({iconadd, alttext, gifadd, children}: any){
    const alttextIcon: string = alttext + 'pic';
    const altextInter: string =  alttext + 'interaction';
    return (
        <div className="bg-white flex flex-col felx-grow shrink-0 rounded-md px-10 py-3 static border-2">
            <div className="flex flex-row">
                <Image src={iconadd} width={200} height={200} alt={alttextIcon}></Image>
                <p className="text-slate-950 px-3">{children}</p>
            </div>
            <div className=" pt-6">
                <Image priority={true} src={gifadd} width={960} height={720} alt={altextInter}></Image>
            </div>
        </div>
    )
}