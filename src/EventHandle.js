import React from 'react';
class EventHandle extends React.Component {
    constructor(props) {
        super(props);
        this.state={name:"Mashesh"}
    }
   
    setName(){
        this.setState({name:"Anish"});
        setTimeout(()=>{
            this.setState({name:'Neeraj'});
        },5000)
    }

    render() {
        return (
            <div>
                Name : {this.state.name}
                <br/>
                <button onClick={this.setName.bind(this)}>GetName</button>
            </div>
        );
    }
}




export default EventHandle
