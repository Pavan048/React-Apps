import { useState , useEffect } from "react"

const useFetch = (url) => {

const [data , setData] = useState("");
const [loading , setLoading] = useState(false);
const [isError , setIsError]  = useState({status:false , msg:""});

const makeApiCall = async (url) => {
  setLoading(true);
  setIsError({status:false , msg:""});
  try {
    const comingData = await fetch(url);
    const response = await comingData.json();
    setData(response);
    setLoading(false);
    
} catch (error) {
    setIsError({status:true , msg: error.message || "Something went wrong"});
    setLoading(false);
  }

}

useEffect(() => {
  makeApiCall(url);
  setIsError({status:false , msg:""});

},[])

return [data , loading , isError]

 
}

export default useFetch

