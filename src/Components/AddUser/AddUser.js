import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withAlert } from "react-alert";
import Result from '../Result/Result';
import config from 'react-global-configuration';

class AddUser extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            phoneNumber: "",
            address: ""
        };
      }
      
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if(this.state.name === "" || this.state.phoneNumber === "" || this.state.address === ""){
            this.props.alert.show("Please, fill in all fields");
            return;
        }

        fetch(config.get('proxy') +'/user/add', {
          method: 'POST',
          body: data,
        }).then((resp) => {return resp.json()})
          .then(user => {
              if(user === null || user.length === 0){
                this.props.alert.show("An error occurred during the operation.");
                return;
              }
            this.props.alert.show("Your request proccessed successfully");
            this.setState ({
                name: "",
                phoneNumber: "",
                address: ""
            });
            document.getElementById("create-user-form").reset();
            ReactDOM.render(<Result listResult={[user]}/>,document.getElementById('divResult'));
         });
      }
    render() {
      return ( 
          <div>
            <form  id="create-user-form" onSubmit={this.handleSubmit}>
                
                <div className="form-group col-md-6">
                </div>
                <div className="form-group col-md-6">
                <h4>Add User</h4>
                <br />
                    <div className="row">
                            <label className="control-label col-md-3">Name:</label>
                        <div className="col-md-9">
                            <input className="form-control" type="text" name="name"
                            onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="row">
                            <label className="control-label col-md-3">Phone Number:</label>
                        <div className="col-md-9">
                            <input className="form-control" type="text" name="phoneNumber"
                            onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="row">
                    <label className="control-label col-md-3">Address:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" name="address"
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                    </div>
                    <hr />
                    <div className="row text-right">
                        <div className="col-md-12">
                            <button>Add User</button>
                        </div>
                    </div>
                </div>
            </form> 
            <div id="divResult"></div> 
        </div>
    );
    }
  }
export default withAlert(AddUser);
