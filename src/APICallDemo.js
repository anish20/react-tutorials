import React from 'react';
class APICallDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state={users:null}
        
    }

    componentDidMount(){
        const api_url="https://reqres.in/api/users";
        fetch(api_url).then((res)=>{
            res.json().then((result)=>{
                // console.warn(result.data);
                this.setState({ users:result.data });
            })
        })
    }

    render() { 
        const{users}=this.state;
        if(users!=null){
        return (
            <div>
                <h1>Fetch Api </h1>
                <table className="table"> 
                    <thead className="bg-primary">
                   <tr>
                    <th>Id</th>
                    <th>Email</th>   
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr> 
                </thead>
                <tbody>
                { users.map((item,i)=>
                   
                    <tr key={i}>
                        <th>{item.id}</th>
                        <th>{item.email}</th>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>
                        
                    </tr>
                ) }
                </tbody>
                </table>
            </div>
        );
        }else{
            return(
                <div> Blank</div>
            )
        }
    }
}

export default APICallDemo
