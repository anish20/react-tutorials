import React from 'react';

const message=()=>{
    alert("Hello");
}
function Footer(props){
    return(
        <div>
            <p onClick={message}>{props.text}</p>

        </div>
    );
    
}
export default Footer;