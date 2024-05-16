
//   // Fetch city data from OpenWeatherMap API
//       fetch(
//   // `https://api.openweathermap.org/data/2.5/weather?q=london&appid=08ae10625529a4e6e8b72cc16762f13f&units=metric`
// );

const apiKey = "08ae10625529a4e6e8b72cc16762f13f"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  city = city.toLowerCase();
  
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    weatherIcon.innerHTML = '<span class="material-symbols-outlined size-200"> clear_day </span>';
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.innerHTML = '<span class="material-symbols-outlined size-200"> cloud </span>';
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.innerHTML = '<span class="material-symbols-outlined size-200"> rainy </span>';
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.innerHTML = '<span class="<span class="material-symbols-outlined size-200"> rainy_light </span>';
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.innerHTML = '<span class="material-symbols-outlined size-200"> partly_cloudy_day </span>';
  } 
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);

})

