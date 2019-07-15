import React from 'react';
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY = 'f5795a4d5f87e58a619ac306f9d0447d';

export default class App extends React.Component {
  state = {
    id: undefined,
    data: undefined,
    pressure: undefined,
    clouds: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log({'data':data});
    if (city && country) {
      this.setState({
        id: data.id,
        pressure: data.main.pressure,
        clouds: data.clouds.all,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        id: undefined,
        pressure: undefined,
        clouds: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
        city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        description={this.state.description}
        pressure={this.state.pressure}
        clouds={this.state.clouds}
        error={this.state.error}
        />
      </div>
    );
  }
}
