console.log('hello');

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=2d7b3d6c8f91c546eebe47453238d33a';
var units = '&units=imperial';
var input = document.getElementById('location');
var userChoice = input.value 
var forecastList = document.getElementById('forecastList')



var city = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humidity = document.getElementById('currentHumidity')
var date = document.getElementById('currentDate')
var currentIcon = document.getElementById('currentIcon')





var forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q='



$('#searchBtn').on('click',function(currentWeather){
    fetch(api+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        
        var currentCity = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']
        var currentDate = moment().format("MMMM Do YYYY")
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png' 

        city.innerHTML = `${currentCity}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humidity.innerHTML = `${currentHum}`
        date.innerHTML = `${currentDate}`
        currentIcon.src = weatherIcon
    })
    
    .catch(console.log())
    localStorage.setItem('previous city', input.value)
});



$('#searchBtn').on('click',function(fiveForecast){
    fetch(forecastApi+input.value+apiKey+units)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        $('#forecastList').empty();
        for (let i = 4; i < 40; i+=8) {
            var cityContainer = document.createElement('div')
            var cityDateContainer = document.createElement('p') 
            var weatherIconContainer = document.createElement('img')
            var tempContainer = document.createElement('p')
            var windSpeedContainer = document.createElement('p')
            var humidityContainer = document.createElement('p')
            
            cityContainer.classList.add('card')

            cityContainer.append(cityDateContainer, weatherIconContainer, tempContainer, windSpeedContainer, humidityContainer)

            tempContainer.textContent = 'Temperature in F: '
            windSpeedContainer.textContent = 'Wind Speed: '
            humidityContainer.textContent = 'Humidity: '
            cityDateContainer

            
            var cityDate = data.list[i].dt_txt
            cityDateContainer.append(cityDate)
            
            var tempF = data.list[i].main.temp
            tempContainer.append(tempF)

            var windSpeedF = data.list[i].wind.speed
            windSpeedContainer.append(windSpeedF)

            var humidityF = data.list[i].main.humidity
            humidityContainer.append(humidityF)

            var weatherIcon = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png'
            weatherIconContainer.src = weatherIcon


            forecastList.append(cityContainer)

        

        }
        var lastCity = localStorage.getItem('previous city')
    $('#previousSearch').prepend(`<button class="btn btn-secondary col mb-2 searchBtn">${lastCity}</button>`)
    })
}
)
//history button research, not working
$('.searchBtn').on('click', function(event){
    var recallCity = event.target.innerText
    fiveForecast(recallCity);
    currentWeather(recallCity);
})


