import React , { useState , useRef} from 'react';

// even state changed the component wont render again 
// even we can access the dom elements

// const RefComponent = () => {
//   const [firstName , setFirstName] = useState("");
//   const renderCount = useRef(1);


//   useEffect(()=>{
//     renderCount.current = renderCount.current + 1 ;
//   })

//   return (
//     <>
//        <p>Enter some Text</p>
//       <input type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
//       <h5>Typing::{firstName}</h5>
//       <h5>Component Render Count :: {renderCount.current}</h5>
//     </>
//   )
// }
const RefComponent = () => {
  const [firstName , setFirstName] = useState("");
  const inputDom = useRef('');


  const handleFocus = () => {
    inputDom.current.focus();
  }

  return (
    <>
       <p>Enter some Text</p>
      <input ref={inputDom} type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
      <h5>Typing::{firstName}</h5>
      <button onClick={handleFocus}>Focus</button>
      
    </>
  )
}


export default RefComponent
