console.log('hello');

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=2d7b3d6c8f91c546eebe47453238d33a';
var units = '&units=imperial';
var input = document.getElementById('location');
//var input = document.querySelector('#location').val();


$('#searchBtn').on('click',function(){
    fetch(api+input.value+apiKey+units)
    .then(function (response){
        console.log(response.json());
    })
})







//http://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=2d7b3d6c8f91c546eebe47453238d33a&units=imperial