//Definitions
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind-speed");
let description = document.querySelector("#description");
let iconElement = document.querySelector("#icon");
let form = document.querySelector("#city-form");
let newCity = document.querySelector("#city-input");
let apiKey = "3ab87d04f7c37deb36b8t663978f41oc";

//Change Temperature
function changeTemperature(response) {
  city.innerHTML = response.data.city;
  let newTemperature = Math.round(response.data.temperature.current);
  temperature.innerHTML = `${newTemperature}`;
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = response.data.wind.speed;
  description.innerHTML = response.data.condition.description;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon-condition"/>`;
  console.log(response.data.condition.icon_url);
}

// Form
function changeCity(event) {
  event.preventDefault();
  let cityName = newCity.value;
searchCity(cityName);
}

function searchCity(city){
    //Call API
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(changeTemperature);
}

form.addEventListener("submit", changeCity);

// Date & Time
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentTime = new Date();
let weekDay = weekDays[currentTime.getDay()];
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let date = document.querySelector("#time");
let formatedDate = `${weekDay} ${hour}:${minutes}`;

date.innerHTML = `${formatedDate}`;
searchCity("Paris");
