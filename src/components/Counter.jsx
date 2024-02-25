import React from 'react';
import { useState , useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    useEffect(()=>{
      let timer =  setTimeout(()=>{
            setCount(()=>count+1)

        } , 1000)
    })

    if(count >= 30){
        return () => clearTimeout(timer);
    }




  
    return <h1>I have rendered {count} times!</h1>;


}

export default Counter
