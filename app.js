const apiKey ='4238cfd0ef2a743d176b024d3d94dbf3';
document.getElementById('searchTemperature').addEventListener("click", () =>{
    const city = document.getElementById('city-name').value
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey }&units=metric`;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data =>displayData(data))
})

function displayData (data) {
    console.log(data)
    const city = document.getElementById('city-name').value
    const location =document.getElementById("city")
    location.innerHTML = city;
    document.getElementById('city-name').value = "";

    const temperature = document.getElementById('temperature')
    temperature.innerHTML=data.main.temp;

    const condition = document.getElementById('condition')
    condition.innerHTML = data.weather[0].main;

    const Latitude = document.getElementById('Latitude')
    Latitude.innerHTML="Lat: "+data.coord.lat;

    const Longitude = document.getElementById('Longitude')
    Longitude.innerHTML="Lon: "+data.coord.lon;
    
    const picture =document.getElementById('weather-icon');
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    picture.setAttribute('src',url)

}
