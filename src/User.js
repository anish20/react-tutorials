import React from 'react';
class User extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillUnmount(){
        alert("Data has been deleted");
    }

    render() {
        return (
            <div>
                <ul style={{listStyle:"none"}}>
                    <li>Name : Anish</li>
                    <li>Email : anish15.786@gmail.com</li>
                    <li>Contact : +91846526520</li>
                </ul>
            </div>
        );
    }
}



export default User
