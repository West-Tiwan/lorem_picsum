"use client"
import React,{useState} from 'react'
import axios from 'axios'

const Page = () => {
    const [images, setImages] = useState([]);

    const res = async ()=>{
        try {
            let response = await axios.get('https://picsum.photos/200/300');
            setImages(response.data);
            console.log(images);

        }
        catch (err){
            console.log("err");
        }
    }
    return (
        <div>
            <button onClick={res}>get images</button>
            <div>
                {Array.from(images).map((elem,i)=>{
                    return <img src={elem.url}/>
                })}
            </div>
        </div>
)
}
export default Page
