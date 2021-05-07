console.log('hello');

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=2d7b3d6c8f91c546eebe47453238d33a';
var units = '&units=imperial';
var input = document.getElementById('location');
var userChoice = input.value
//var input = document.querySelector('#location').val();
//var completeURL = 
var forecastList = document.getElementById('forecastList')



var city = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humidity = document.getElementById('currentHumidity')
var date = document.getElementById('currentDate')

var dOne = document.querySelector('.dateOne')
var tOne = document.querySelector('.tempOne')
var wOne = document.querySelector('.windOne')
var hOne = document.querySelector('.humidOne')



var forecastApi = 'http://api.openweathermap.org/data/2.5/forecast?q='



$('#searchBtn').on('click',function(){
    fetch(api+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        
        var currentCity = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']
        var currentDate = moment().format("MMMM Do YYYY")

        city.innerHTML = `${currentCity}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humidity.innerHTML = `${currentHum}`
        date.innerHTML = `${currentDate}`
    })
    
    .catch(console.log())
    localStorage.setItem('previous city', input.value)
});



$('#searchBtn').on('click',function(){
    fetch(forecastApi+input.value+apiKey+units)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i < 5; i++) {
            var cityContainer = document.createElement('div')
            var cityDateContainer = document.createElement('p') 
            var tempContainer = document.createElement('p')
            var windSpeedContainer = document.createElement('p')
            var humidityContainer = document.createElement('p')
            
            cityContainer.classList.add('card')

            cityContainer.append(cityDateContainer, tempContainer, windSpeedContainer, humidityContainer)

            tempContainer.textContent = 'Temperature in F: '
            windSpeedContainer.textContent = 'Wind Speed: '
            humidityContainer.textContent = 'Humidity: '
            cityDateContainer

            

            var tempF = data.list[i].main.temp
            tempContainer.append(tempF)

            var windSpeedF = data.list[i].wind.speed
            windSpeedContainer.append(windSpeedF)

            var humidityF = data.list[i].main.humidity
            humidityContainer.append(humidityF)

            forecastList.append(cityContainer)

        

        }
    })
}
)



$('#searchBtn').on('click',function(event){
    var lastCity = localStorage.getItem('previous city')
    $('#previousSearch').prepend(`<button class="btn btn-secondary col mb-2 searchBtn">${lastCity}</button>`)
})