import React from "react";
import { useState } from "react";
import Child from "./Child";
import './../styles/App.css';

const Parent=()=>{

    
    const [todos,setTodos]=useState(
        [
            {id:1,title:"Learn React",state:false},
            {id:2,title:"Build a React app",state:false},
            {id:3,title:"Deploy the React app",state:false},
        ])
        
        function handlefn(id){
            const updatedTodos = todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, state: true };
                }
                return todo;
            });
            setTodos(updatedTodos);
        }

    return(
        <div>
            <h1>Parent Component</h1>
            <Child todos={todos} handlefn={handlefn}/>
        </div>
    )
}
export default Parent