import { Meteor } from 'meteor/meteor';
import {Forecast} from "../imports/api/forecast";

Meteor.startup(() => {

    if (Forecast.find({}).fetch().length == 0){
        let arr = [
            { nombre: "dia", dayName: "Sun", minTemp: 20, maxTemp: 40, status: "Mostly sunny", img: "https://cdn0.iconfinder.com/data/icons/weather-web-app-ui-colored/100/weather-20-512.png" },
            { nombre: "dia", dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day", img: "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png"},
            { nombre: "dia", dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like", img: "https://www.wave3.com/pb/resources/images/weather/weather-condition-icons/400x400/66_daily_forecast.png" },
            { nombre: "dia", dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers", img: "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-showers-512.png" },
            { nombre: "dia", dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower", img: "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_CloudSunRAin.png" },
            { nombre: "dia", dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder", img: "https://www.fox19.com/pb/resources/images/weather/weather-condition-icons/400x400/82_daily_forecast.png" },
            { nombre: "dia", dayName: "Sat", minTemp: 20, maxTemp: 38, status: "Chilly", img: "https://cdn1.iconfinder.com/data/icons/travel-pack-outlines/75/SNOW-512.png" }
        ];

        arr.forEach(day => {
            Forecast.insert(day);
        });

        let month = [
            {nombre: "semana", week: 1},
            {nombre: "semana", week: 2},
            {nombre: "semana", week: 3},
            {nombre: "semana", week: 4}
        ];

        month.forEach(week => {
            Forecast.insert(week);
        });
    }

});
