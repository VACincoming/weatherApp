// var unirest = require('unirest');

// const req1 =  fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=Chernihiv%2Cua&appid=${APP_ID}`)
//                     .then((res) => {
//                       return res.json();
//                     })
//                     .then((body) => {
//                       console.log(body);
//                     })

// const req = unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=Chernihiv%2Cua")
//   .header("X-RapidAPI-Key", "aa233b35bamshb99bc285cfc9e2cp1a1572jsnf10893ec0e0d")
//   .end(function (result) {
//     const answer = result.body;
//     const data = [{
//       'id': answer.city.id,
//       'cityName':answer.city.name,
//       'countryName': answer.city.country,
//       'population': answer.city.population,
//       'data': answer.list[0].dt_txt,
//       'temp': Math.floor(answer.list[0].main.temp - 273.15),
//       'rain': answer.list[0].weather[0].description,
//       'icon': answer.list[0].weather[0].icon,
//       'clouds': answer.list[0].clouds.all,
//       'humidity': answer.list[0].main.humidity,
//       'pressure': answer.list[0].main.pressure
//       }
//     ]
//     console.log(data);
//     return data;
// });
// console.log(req)


import React from "react";

export default class Title extends React.Component{
  render(){
    return(
      <form>
        <div>Weather Forecast</div>
      </form>
    )
  }
}