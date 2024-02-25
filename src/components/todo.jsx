import React from 'react';
import { useState } from 'react';

const Todo = () => {

    const [editingItem , setEditingItem] = useState({
        id : "",
        isEditing : false
    })
    const [list , setList] = useState([]);
    const [message , setMessage] = useState({
        text : "",
        id : ""

    });
    const changeMessage = (e) =>{
        setMessage({
            ...message,
            text:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let newTodo = {
            text : message.text,
            id : new Date().getTime().toString(),
        }
        setList([...list , newTodo]);
        setMessage({
            text:"",
            id:""
        })

    }

    const handleDelete = (id) =>{
        let newTodo = list.filter((eachItem) => {
            return eachItem.id !== id
        })
        setList(newTodo)

    }
    const changeEditState = (id) =>{
        setEditingItem({
            ...editingItem,
            id : id , 
            isEditing : true
        })
        let editableItem = list.find((eachItem) =>{
            return eachItem.id === id
        })
        setMessage({
            ...message,
            id : editableItem.id, 
            text :editableItem.text
        })
    }
    const handleEdit = (e) =>{
        e.preventDefault();
        let newTodo = list.map((eachItem)=>{
            if(editingItem.id === eachItem.id){
                return {
                    text : message.text,
                    id : editingItem.id
                }

            }else{
                return eachItem
            }
        });
        setList(newTodo);
        setMessage({
            text:"",
            id:""
        });
        setEditingItem({
            id : "",
            isEditing:false
        })
        
    }
  return (
    <div>
    <form>
      <input type='text' name='message' id='message' placeholder='Enter task' value={message.text} onChange={changeMessage}/>
      {
       editingItem.isEditing ?  <button onClick={handleEdit}>Edit</button> :  <button onClick={handleSubmit}>Add</button>
      }
      </form>
      <hr/>
      {list.length === 0 && <h3>No task added yet</h3>
      }
      <ul>
        {
            list.map((eachItem) => {
                const {text , id} = eachItem; 
                return <li key={id}>
                    <span>{text}</span>
                    <button onClick={()=>changeEditState(id)}>Edit</button>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                </li>
            })
        } 
      </ul>
   
    </div>
  )
}

export default Todo;
