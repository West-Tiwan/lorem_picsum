"use client"
import React,{useState} from 'react'
import colors from "tailwindcss/colors";

const Page = () => {
    const [marks, setMarks] = useState(80);
    function fun(){
        if (marks===80||marks===30){
            setMarks(99)}
        else {setMarks((30))}
    }
    return (
        <>
        <div className={"text-7xl text-cyan-400"}>"Marks are {marks}"</div>
        <button onClick={fun} className={"bg-amber-500 text-blue-500"}>Update</button>
        </>
    )
}
export default Page
