import React from 'react';
export default class ClassProps extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.address}</h1>
            </div>
        );
    }
}