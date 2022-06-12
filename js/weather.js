const API_KEY = "5d6991de565cd9c83c9687e748e18eb6"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("you live in ",lat,long)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            weather.innerText = data.name;
            city.innerText = `${data.weather[0].main}/${data.main.temp}`;
        });
}

function onGetError() {
    alert("can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGetError) 