import React, { Component } from 'react';

class Result extends Component {

    render() {
        var resultHtml = null;
            if(this.props.listResult !== null && this.props.listResult.length !== 0){
                    
                const list = this.props.listResult.map(user => 
                    <tr key={user.id.toString()}>
                        <td>{user.name}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.address}</td>
                    </tr>);
                resultHtml = <div>  <div className="form-group col-md-6"></div>
                <div className="form-group col-md-6">
                    <h4>Result</h4>
                    <br/>
                    <table className="table table-striped table-sm">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
                </div>;
        }else{
           
            resultHtml = <div> 
                <div className="form-group col-md-6"></div>
                <div className="form-group col-md-6">
                    <h4>Result</h4>
                    <br/>
                    <h6>Nothing Found!</h6>
                </div> 
                </div> ;
        }
            
        return ( <div>
            {resultHtml}
        </div>);
    }
}

export default Result;