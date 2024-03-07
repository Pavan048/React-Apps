import React , {useState , useMemo } from 'react'

const MemoComponent = () => {
    const [number , setNumber] = useState(0);
    const [dark , setDark] = useState(false);
    const themeChange = {
        backgroundColor: dark ? "black" : "white" , 
        color:  dark ? "white" : "black",
    }
    const doubleNumber = useMemo(()  => {
        return slowFunction(number)
    },[number])

  return (
    <>
      <div>
         <input type='number' value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
        <p style={themeChange}>Number :: {number} doubleNumber :: {doubleNumber}</p>
        <button  onClick={()=>{setDark(!dark)}}>ChangeTheme</button>
      </div>
    </>
  )
}


const slowFunction = (number) => {
    console.log("slow Func");
    for(let i = 0; i <= 1000000; i++){}
    return number*2;
}
export default MemoComponent
