import React from "react";
//import { useState } from "react";

const Child=({todos,handlefn})=>{
//    const[selected,setSelected]=useState(false)
    return (
        <div>
            <ul>
                <h2>Child Component</h2>
               {
                todos.map(value=>(
                    <div className="child">
                    <li>{value.title}
                    {(!value.state) &&
                    <button onClick={()=>{
                        handlefn(value.id)
                    }}>Complete</button>
                    }</li>
                    </div>
                ))
               }
            </ul>
            
        </div>
    )
}

export default Child;