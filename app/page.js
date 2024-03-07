"use client"
import React, {useState} from 'react'
import axios from "axios";

const Page = () => {
    const [imag, setImag] = useState([]);

    const getimg = async  ()=> {
        try {
            const  response = await axios.get("https://picsum.photos/v2/list")
            console.log(response)
            setImag(response.data)
        }
        catch (err){
            console.log("error occured : "+err)
        }
    }
    return (
        <>
            <div className={"flex justify-center items-center min-h-44"}>
                <button onClick={getimg} className={"border-2 border-black bg-green-300 p-5"}>get images</button>
            </div>
            <div className={"grid grid-cols-3 gap-2 overflow-hidden"}>
                {imag.map((elem, index) => {
                    return <img className={"m-3 h-32"} key={index} src={elem.download_url} alt=""/>
                })}
            </div>
        </>
    )
}
export default Page
