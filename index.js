window.addEventListener('load', () => {
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      document.getElementById('geo').style.display = 'none';
      getToday(lat, long);
    });
  }
});

const baseURL = "https://api.sunrise-sunset.org/json?";
const wrapperDiv = document.querySelector('.wrapper');
const tomorrowButton = document.querySelector('.tomorrow');
const todayButtonDiv = document.querySelector('.todayButton');

function getToday(latitude, longitude) {
  fetch(`${baseURL}lat=${latitude}&lng=${longitude}&date=today`)
    .then(response => response.json())
    .then(data => {
      let sunrise = data.results.sunrise.slice(0,4);
      let sunset = data.results.sunset.slice(0,4);
      wrapperDiv.innerHTML = `<div class="today">
        <h3>Sunrise time today: <span class="time">${sunrise} AM</span></h3>
        <h3>Sunset time today: <span class="time">${sunset} PM</span></h3>
      </div>`;
      todayButtonDiv.style.display = 'none';
      tomorrowButton.style.display = 'block';
    })
}

function getTomorrow(latitude, longitude) {
  fetch(`${baseURL}lat=${latitude}&lng=${longitude}&date=tomorrow`)
    .then(response => response.json())
    .then(data => {
      let sunrise = data.results.sunrise.slice(0,4);
      let sunset = data.results.sunset.slice(0,4);
      wrapperDiv.innerHTML = `<div class="tomorrowDetails">
        <h3>Sunrise time tomorow: <span class="time">${sunrise} AM</span></h3>
        <h3>Sunset time tomorrow: <span class="time">${sunset} PM</span></h3>
      </div>`;
      document.querySelector('.tomorrow').style.display = 'none';
      document.querySelector('.todayButton').style.display = 'block';
    })
}

tomorrowButton.addEventListener('click', event => {
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    getTomorrow(lat, long);
  });
})

todayButtonDiv.addEventListener('click', event => {
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    getToday(lat, long);
  });
});
