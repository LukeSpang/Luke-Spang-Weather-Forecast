console.log('hello');

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=2d7b3d6c8f91c546eebe47453238d33a';
var units = '&units=imperial';
var input = document.getElementById('location');
//var input = document.querySelector('#location').val();

var city = document.getElementById('currentCity')
var temperature = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humidity = document.getElementById('currentHumidity')

var forecastApi = 'http://api.openweathermap.org/data/2.5/forecast?q='



$('#searchBtn').on('click',function(){
    fetch(api+input.value+apiKey+units)
    .then(response=>response.json())
    .then(data=>{
        var currentCity = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']
    
        city.innerHTML = `${currentCity}`
        temperature.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humidity.innerHTML = `${currentHum}`
    })
    .catch(console.error);
})


$('#searchBtn').on('click',function(){
    fetch(forecastApi+input.value+apiKey+units)
    .then(response=>response.json())
    .then(data=>{
        
    })
})
