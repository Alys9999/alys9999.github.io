import { AppBar } from "@mui/material";
import HeaderCard from "./headcard";

export default function Header(){
    return (
        <AppBar position="fixed" className="bg-black">
            <div className="flex flex-row mx-12 py-3 min-w-fit">
                <div className="flex w-1/2">
                    <HeaderCard cardname='Home' iconadd='/home.png'></HeaderCard>
                    <div className=" w-6"></div>
                </div>
                <div className="flex flex-row-reverse w-1/2 space-x-6 space-x-reverse">
                    <HeaderCard cardname='Resume' iconadd='/resume.png'></HeaderCard>
                    <HeaderCard cardname='Blog' iconadd='/work.png'></HeaderCard>
                    <HeaderCard cardname='Notes' iconadd='/contact.png'></HeaderCard>
                </div>
            </div>
            
        </AppBar>
    )
}