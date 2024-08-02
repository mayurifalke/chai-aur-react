import React, {useEffect,useState} from "react";
import { useLoaderData } from "react-router-dom";
 function Github(){
    //useLoaderData is the hook of react-router-dom
     const data = useLoaderData()
    /*const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/mayurifalke')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
    })
        
    },[])*/

    return (
        <div className="text-center bg-gray-600 m-4 text-white p-4 text-3xl">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="picture" width={300}/>
        </div>
    )
}

export default Github;

export const githubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/mayurifalke')
    return response.json()
}