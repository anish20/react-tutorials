import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'Anish',address:'Sulatnapur'}
    }
    //LifeCycle Method
    componentDidMount(){
        console.log("Life Cycle method");
    }
    render(){
        const data=this.state;
        const{address}=this.state;
        return(
        <div>
            <h1>Profile Component</h1>
            <p>My Name is {data.name} from {address}</p>
        </div>
        );
    }
}

export default Profile;