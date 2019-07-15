import React from "react";

export default class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <div className="form-group row col-lg-2" offset="5">
          <input className="form-control" type="text" name="city" placeholder="City..." value="Kiev"></input>
          <input className="form-control" type="text" name="country" placeholder="Country..." value="Ua"></input>
          <button className="btn btn-primary">Get Weather</button>
        </div>
      </form>
    )
  }
}