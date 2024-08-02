import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    //useParams is used to take the parameter or url 
    const {userid} = useParams()
    return (
    <div className="p-4 bg-gray-700 text-white text-3xl">User: {userid}</div>

);

}