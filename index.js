const baseURL = "https://api.sunrise-sunset.org/json?";
const wrapperDiv = document.querySelector('.wrapper');
const tomorrowButton = document.querySelector('.tomorrow');

function getToday(latitude, longitude) {
  fetch(`${baseURL}lat=${latitude}&lng=${longitude}&date=today`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      let sunrise = data.results.sunrise;
      let sunset = data.results.sunset;
      wrapperDiv.innerHTML = `<div class="today">
        <h3>Sunrise time today: ${sunrise}</h3>
        <h3>Sunset time today: ${sunset}</h3>
      </div>`;
    })
}

function getTomorrow(latitude, longitude) {
  fetch(`${baseURL}lat=${latitude}&lng=${longitude}&date=tomorrow`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      let sunrise = data.results.sunrise;
      let sunset = data.results.sunset;
      wrapperDiv.innerHTML = `<div class="tomorrowDetails">
        <h3>Sunrise time tomorow: ${sunrise}</h3>
        <h3>Sunset time tomorrow: ${sunset}</h3>
      </div>`;
    })
}

tomorrow.addEventListener('click', event => {
  event.preventDefault();
  // getTomorrow()
})
