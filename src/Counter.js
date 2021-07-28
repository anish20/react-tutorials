import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={name:'Anish',count:0};
        
    }

    setCountData(){
        let{count}=this.state;
        this.setState({
            count:count+1,
            name:"Mohd Anish"
        });
    }
    render() {
        console.log("render call")
        const{name}=this.state;
        return (
            <div>
                <h1>My name is {name}</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.setCountData()}}>Count</button>
            </div>
        );
    }
}




export default Counter
