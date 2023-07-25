import { AppBar } from "@mui/material";
import HeaderCard from "./headcard";

export default function Header(){
    return (
        <AppBar position="static" className="flex flex-row w-full px-24 bg-black py-3 ">
            <div className="flex w-1/2 ">
                <HeaderCard cardname='Home' iconadd='/home.png'></HeaderCard>
            </div>
            <div className=" bg-black flex flex-row-reverse w-1/2 space-x-6 space-x-reverse">
                <HeaderCard cardname='Resume' iconadd='/resume.png'></HeaderCard>
                <HeaderCard cardname='Work' iconadd='/work.png'></HeaderCard>
                <HeaderCard cardname='Contact' iconadd='/contact.png'></HeaderCard>
            </div>
        </AppBar>
    )
}