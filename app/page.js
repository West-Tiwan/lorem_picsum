"use client"
import React, {useState} from 'react'
import axios from "axios";

const Page = () => {
    const [imag, setImag] = useState([]);

    const getimg = async  ()=> {
        const  response = await axios.get("https://picsum.photos/v2/list")
        console.log(response)
        setImag(response.data)
    }
    return (
        <>
            <button onClick={getimg}>get images</button>
            <div>
                {imag.map((elem,index)=>{
                    return <img key={index} src={elem.download_url} alt={}/>
                })}
            </div>
        </>
    )
}
export default Page
