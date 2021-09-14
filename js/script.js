let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let hummidity = document.querySelector('.weather_indicator--hummidity>.value');
let wind = document.querySelector('.weather_indicator--wind>.value');
let pressure = document.querySelector('.weather_indicator--pressure>.value');
let image = document.querySelector('.weather_image');
let temperature = document.querySelector('.weather_temperature');
let weatherAPIKey = '749764725e75169d71f289ceab73d6ee';
let weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();

    return weather;
}

searchInp.addEventListener('keydown', async (e) => {
    if(e.keyCode === 13) {
      let weather =await getWeatherByCityName(searchInp.value);
      updateCurrentWeather(weather);
    }
});

let updateCurrentWeather = (data) => {
    city.textContent = data.name + ', ' + data.sys.country;
    day.textContent = dayOfweek();
}
let dayOfweek = (data) => {
   return new Date().toLocaleDateString('en-EN', {'weekday':'long'});
}