import Link from "next/link";
import Image from "next/image";

export default function WorkCard(){
    return (
        <div className="bg-white flex flex-col felx-grow shrink-0 rounded-md px-10 py-3 static border-2">
            <div className="flex flex-row">
                <Image src='/Prelovedlogo.png'width={200} height={200} alt='Preloved logo pic'></Image>
                <p className="text-slate-950 px-3">Preloved - a second-hand product e-commerce app based on community sections.</p>
            </div>
            <div className=" pt-6">
                <Image priority={true} src='/PrelovedInteraction.gif' width={960} height={720} alt='Preloved Interaction'></Image>
            </div>
        </div>
    )
}