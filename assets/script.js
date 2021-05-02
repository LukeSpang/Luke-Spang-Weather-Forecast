var requestUrl = 'pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={2d7b3d6c8f91c546eebe47453238d33a}'

console.log(requestUrl);

var searchBtn = $('#searchBtn');
var userCity = $('#searchBtn').val();

var location = $('#location')


function handleSubmission(event){
    event.preventDefault();

    var locationVal = location.val();

    if (!locationVal){
        console.error('You must search a city');
        return;
    }
    searchApi(locationVal);
}

searchBtn.addeventListener('click', handleSubmission);

