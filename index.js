//Open weather Api used in this project ton fetch the realtime data

const apiKey = "886e5572536e9a75e0e7436643e6f234";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".container .search input");
const searchBtn = document.querySelector(".container .search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}

if(searchBtn){
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
    
}

