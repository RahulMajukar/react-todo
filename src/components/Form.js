import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid";
const Form = ({input,setInput,todo,setTodo,editTodo,setEditTodo}) => {

    const handleChange=(event)=>{
        setInput(event.target.value)
    }


    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((todo) =>
            todo.id === id ? { ...todo, title, completed } : todo
        );
        setTodo(newTodo);
        setEditTodo("");
    };
    

    // const updateTodo = (title, id, completed) => {
    //     const newTodo = todo.map((todo) =>
    //         todo.id === id ? { ...todo, title, completed } : todo
    //     );
    //     setTodo(newTodo);
    //     setEditTodo("");
    // };
    
    // useEffect(()=>{
    //     if(editTodo){
    //         setEditTodo(editTodo.title);

    //     }else{
    //         setEditTodo("")
    //     }
    // },[setInput,editTodo]);
    useEffect(() => {
        if (editTodo) {
            setEditTodo(editTodo);
        } else {
            setEditTodo("");
        }
    }, [editTodo]);
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodo([...todo,{id: uuidv4(),title:input,completed:false}]);
        setInput("");
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a todo ...'
            className='task-input'
            value={input} required
            onChange={handleChange}
            />
            <button className='button-add'>Add</button>
        </form>
    </div>
  )
}

export default Form