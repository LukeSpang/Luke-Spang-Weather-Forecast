console.log('hello');

var searchBtn = document.getElementById("searchBtn");
var citySearched = $('#location').val();


$('#searchBtn').on('click', function(){
    var currentSearched = $('#location').val();
    console.log('this is the city searched', currentSearched);
})

var weatherUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${citySearched}&appid=2d7b3d6c8f91c546eebe47453238d33a`

$.ajax({
    url: weatherUrl,
    method: 'GET',
})
.then(function (response){
    console.log('ajax response');
    console.log(response);
})
