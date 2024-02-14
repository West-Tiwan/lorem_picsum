"use client"
import React,{useState} from 'react'
import Navi from "@/Components/Navigation";
import colors from "tailwindcss/colors";

const Page = () => {
    const [marks, setMarks] = useState(80);
    const [compname, setCompname] = useState("East India Company");

    function fun(){
        if (marks===80||marks===30){
            setMarks(99)}
        else {setMarks((30))}
    }
    return (
        <>
            <Navi name={compname}/>
            <div className={"text-7xl text-cyan-400"}>"Marks are {marks}"</div>
            <button onClick={fun} className={"bg-amber-500 text-blue-500"}>Update</button>
        </>
    )
}
export default Page
