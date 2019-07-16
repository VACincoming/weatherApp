import React from 'react';
import Form from './components/Form'
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
    error: undefined,
    icon: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
                            .catch((err) => {
                              console.log('Could not fetch', err);
                            })
    if(!api_call.ok){
      throw new Error(`Could not fetch http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric , received ${api_call.status}` )
    }
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        id: data.city.id,
        pressure: Math.floor(data.list[0].main.pressure),
        clouds: data.list[0].clouds.all,
        temperature: Math.floor(data.list[0].main.temp),
        city: data.city.name,
        country: data.city.country,
        humidity: Math.floor(data.list[0].main.humidity),
        description: data.list[0].weather[0].description,
        icon: data.list[0].weather[0].icon,
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
        icon: undefined,
        error: "Please enter the values."
      });
    }
  }


  
  render() {
    
    return (
      <div>
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
          icon={this.state.icon}
        />
      </div>
    );
  }
}
