import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:0,
            name:"",
            address:"",
            nameError:"",
            addressError:"",
            userData:[],
            tableShowHide:"d-none"
        }
        this.SaveData=this.SaveData.bind(this);
    }

    nameOnchange(e){

    this.setState({
        name:e.target.value,nameError:''
    })
    }

    addressOnchange(e){
        this.setState({ address:e.target.value,addressError:'' });
    }

    SaveData(e){
        e.preventDefault();
        debugger
        let{id,name,address,userData}=this.state;
        if(name===''){
            this.setState({ nameError:'Please enter the name' });
        }
        if(address===''){
            this.setState({ addressError:'Please enter the address' }); 
        }
        if(name!='' && address!=''){
            let idGenerate=Math.floor(Math.random() * 10);
            id=idGenerate;
            let data={id:id,name:name,address:address};
            userData.push(data);
            //console.log(userData);
            this.clearForm();
            
        }
    }

     clearForm=()=>{
        this.setState({id:0, name:'',address:'',tableShowHide:'d-block' });
    }

    editData(id){
        alert(id);
    }


    renderTableBody(){
        
        debugger
        let{userData}=this.state;
        if(userData!=null){
            return userData.map((data,index)=>{
                const{id,name,address}=data;
                return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td><a href="#" className="btn btn-sm btn-warning" onClick={this.editData.bind(this,id)} >Edit</a> <a href="#" className="btn btn-sm btn-danger">Delete</a></td>
                </tr>
                )
            });
        }

    }
    renderUserData(){
    
        return(
            <div>
                <div className={this.state.tableShowHide}>
                    <table className="table table-bordered">
                        <thead className="bg-warning">
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableBody()}
                        </tbody>
                    </table>    
                </div>
            </div>
        )
    }

    render() {
        const{id,name,address,nameError,addressError}=this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-2">
                            <div className="card-header">User Data</div>
                            <div className="card-body">
                            <div className="formData">
                                <div class="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="hidden" className="form-control" id="id"   value={id}  />
                                    <input type="text" className="form-control" id="name"  placeholder="Enater the Name" value={name} onChange={this.nameOnchange.bind(this)} />
                                    <div style={{color:"red"}}><small>{nameError}</small></div>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address" value={address}  onChange={this.addressOnchange.bind(this)} />
                                    <div><small style={{color:"red"}}>{addressError}</small></div>
                                </div>
                                
                                <button  onClick={this.SaveData} className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        {this.renderUserData()}
                    </div>
                    
                </div>
               
                
            </div>
        );
    }
}

export default Form
