// import React from 'react';
// import { useReducer } from 'react';
// // advanced usestate it interally use the usestate // alernative for usestate
// // state modification ---> reducer
// // data --- intial state

// const reducer = (state , action) => {

//     if(action.type === "DELETE_PERSON"){
//         const newPerson = state.data.filter((eachPerson) => {
//             return eachPerson.id !== action.payload;
//         })
//         return{
//             ...state,
//             data:newPerson,
//             length:state.length-1,
//         }
//     }
//     return state

// }
// const ReducerComponent = () => {
//  const intialState ={
//     data: [
//     {id : 123 , name:"Pavan" , email:"pavan@1234"},
//     {id : 456 , name:"Ravi" , email:"ravi@1234"},
//  ],
//  length:2,
// }
//  const [state , dispatch] = useReducer(reducer , intialState);

//  const handleDelete = (id) => {
//     dispatch({
//         type : "DELETE_PERSON" , 
//         payload: id
//     });
//  }
//   return (
//     <div>
//     <h3>length :{state.length}</h3>
//     {
//         state.data.map((element) => {
//             const {id , name , email} = element;
//             return <div key={id}>
//                 <h3>{name}</h3>
//                 <p>{email}</p>
//                 <button onClick={()=>{handleDelete(id)}}>Delete</button>
//             </div>

//         })
//     }
//     </div>
//   )
// }

// export default ReducerComponent


import React from 'react';
import { useReducer } from 'react';

const reducer = (state , action) => {
    switch(action.type) {
        case 'DELETE_PERSON':
            const newPerson = state.data.filter((eachPerson) =>{
                return eachPerson.id !== action.payload
            })
            return {
                ...state, 
                data:newPerson,
                length:state.length-1
            }
        


        default:
            return state;
            
    }
    

}

const ReducerComponent = () => {
    const initalState = {
        data:[
            {id : 123 ,name:"Pavan" , email:"pavan@1234"},
            {id : 456 ,name:"nirupa" , email:"nirupa@123"},
        ] , 
        length : 2
    }


    const [state , dispatch] = useReducer(reducer , initalState);

    const handleDelete = (id) => {
        dispatch({
            type : "DELETE_PERSON",
            payload:id
        })
    }
    return <div>
        <h4>Length :: {state.data.length}</h4>
        {
            state.data.map((eachPerson) => {
                const {id ,name , email} = eachPerson;
                return <div key={id}>
                    <h3>Name:{name}</h3>
                    <p>Email:{email}</p>
                    <button  onClick={()=>handleDelete(id)}>Delete</button>
                </div>
            })
        }
    </div>
}


export default ReducerComponent;