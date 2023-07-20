const API_KEY = "e2efc7c089a250f09734fba3f43a98bb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("당신은 위도", lat+", 경도", lon+"에 위치하고 있습니다.");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json()
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    }));
}

function onGeoError() {
    alert("위치 정보를 찾지 못했습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);