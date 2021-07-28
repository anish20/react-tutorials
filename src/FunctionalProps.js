import React from 'react';

export default function FunctionalProps(props){
    return(
        <div>
            <h1>My name is {props.data.name}</h1>
            <h1>My address is {props.data.address}</h1>
        </div>
    );
}
