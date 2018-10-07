import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withAlert } from "react-alert";
import Result from '../Result/Result';
import config from 'react-global-configuration';

class SearchUser extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: ""
        };
      }
      
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit(event) {
            event.preventDefault();

            if(this.state.name === ""){
                this.props.alert.show("Please, fill field of name");
                return;
            }

            var url = config.get('proxy') + "/user/list?name=" + this.state.name.trim();
            fetch(url, {
                method: 'GET',
            }).then((resp) => {return resp.json()})
            .then(listResult => {
                ReactDOM.render(<Result listResult={listResult}/>,document.getElementById('divResult'));
            });
      }
    render() {
      return ( 
          <div>
            <form  id="search-user-form" onSubmit={this.handleSubmit}>
                
                <div className="form-group col-md-6">
                </div>
                <div className="form-group col-md-6">
                <h4>Search User</h4>
                <br />
                    <div className="row">
                            <label className="control-label col-md-3">Name:</label>
                        <div className="col-md-9">
                            <input className="form-control" type="text" name="name"
                            onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <hr />
                    <div className="row text-right">
                        <div className="col-md-12">
                            <button>Search User</button>
                        </div>
                    </div>
                </div>
            </form>
            <div id="divResult"></div> 
        </div>
        
    );
    }
  }
export default withAlert(SearchUser);
