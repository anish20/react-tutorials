import React, { useState } from "react";
function ReactHook(){
    const[count,setCount]=useState(100);
    const[name,setName]=useState("Anish");
    
    function ChangeName(){
        setName('Ramesh');
    }

    function ChangeCounter(){
        setCount(count+1);
    }

    return(
        <div>
            <h1>ReactHook functional component</h1>
            <h2>Count {count}</h2>
            <h2>Name {name}</h2>
            <button onClick={ChangeCounter}>Increament</button>
            <button onClick={ChangeName}>Change Name</button>
        </div>
    )
}



export default ReactHook;