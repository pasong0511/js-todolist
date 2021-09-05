const API_KEY = "1ce2c845d77e80991bdaec40c8718f71";

//날씨 가져오기
function onGeoOk(position) {
    const lat = position.coords.latitude;           //위도
    const log = position.coords.longitude;          //경도
    console.log("you live it", lat, log);

    //api.openweathermap.org API를 통해서 날씨 가져오기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("날씨 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);