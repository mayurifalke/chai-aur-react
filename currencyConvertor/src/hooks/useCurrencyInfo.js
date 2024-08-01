import {useState,useEffect} from "react"

function useCurrencyInfo(currency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data)
      //  setdata(res)
    },[currency])    //if currency is changed then call the function again thus it is depency
    
    console.log(data)
    return data
}

export default useCurrencyInfo