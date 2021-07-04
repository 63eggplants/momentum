const API_KEY = 'e8a8bcdcf7de26aec2bbe9cb0013be37';

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find your position");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
