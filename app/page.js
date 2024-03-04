"use client"
import React from 'react'
import axios from "axios";

const Page = () => {
    const getimg = async  ()=> {
        const  response = await axios.get("https://picsum.photos/v2/list")
        console.log(response)
    }
    return (
        <>
            <button onClick={getimg}>get images</button>
            <div>

            </div>
        </>
    )
}
export default Page
