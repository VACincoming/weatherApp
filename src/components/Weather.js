import React from "react";

export default class Weather extends React.Component{
  render(){
    return(
      <div>
        <form>
          <div>
            {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
            {this.props.temperature && <p>Temperature:{this.props.temperature}</p>}
            {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
            {this.props.description && <p>Conditions: {this.props.description}</p>}
            {this.props.pressure && <p>Pressure: {this.props.pressure}</p>}
            {this.props.clouds && <p>clouds: {this.props.clouds}%</p>}
            {this.props.error && <p>{this.props.error}</p>}
            {/* Clouds: {this.props.clouds} */}
          </div>
        </form>
      </div>
    )
  }
}