import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./weather.css"
export default class Weather extends React.Component{
  render(){
    return(
      <div >
        <Container>
          <Row className="justify-content-start">
            <Col xl={{span:6, offset:0}}>
              <div className="wrapperWeather">
                {this.props.description && <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="sunny"/>}
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}&deg;C</p>}
                {this.props.humidity && <p>humidity: {this.props.humidity}%</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.pressure && <p>Pressure: {this.props.pressure}mm</p>}
                {(this.props.clouds || this.props.clouds === 0) && <p>clouds: {this.props.clouds}%</p>}
                {this.props.error && <p>{this.props.error}</p>}
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}