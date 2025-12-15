let main = document.querySelector('main')

function getWeather(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=c188cb9153324947b1d133536251412&q=${city}`)

    .then(res => res.json())
    .then(data => {
      // console.log(data);

      const oldWeatherData = document.querySelector(".weather-data");
      if (oldWeatherData) {
        oldWeatherData.remove();
      }

      // target container (card ke andar append hoga)
      const card = document.querySelector(".card");

      // -------- weather-data --------
      const weatherData = document.createElement("div");
      weatherData.className = "weather-data";

      // -------- temperature --------
      const temperature = document.createElement("div");
      temperature.className = "temperature";

      const img = document.createElement("img");
      img.src =
        `${data.current.condition.icon}`;
      img.alt = "";

      const tempH1 = document.createElement("h1");
      tempH1.innerText = `${data.current.temp_c} °C`;

      const cityP = document.createElement("p");
      cityP.innerText = `${data.location.name}`;

      temperature.append(img, tempH1, cityP);

      // -------- bottom --------
      const bottom = document.createElement("div");
      bottom.className = "bottom";

      // humidity
      const humidity = document.createElement("div");
      humidity.className = "humidity";

      const humidityH1 = document.createElement("h1");
      humidityH1.innerText = `${data.current.humidity}%`;

      const humidityP = document.createElement("p");
      humidityP.innerText = "Humidity";

      humidity.append(humidityH1, humidityP);

      // wind
      const wind = document.createElement("div");
      wind.className = "wind";

      const windH1 = document.createElement("h1");
      windH1.innerText = `${data.current.wind_kph} kph`;

      const windP = document.createElement("p");
      windP.innerText = "Wind speed";

      wind.append(windH1, windP);

      // bottom append
      bottom.append(humidity, wind);

      // weather-data append
      weatherData.append(temperature, bottom);

      // -------- FINAL APPEND (IMPORTANT) --------
      // search-box ke baad add kar rahe hain (same as HTML structure)
      const searchBox = document.querySelector(".search-box");
      searchBox.after(weatherData);


    })
    .catch(function (err) {
      alert("Please correct city name")

    })

}

let search = document.querySelector('#search')

let searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener("click", function () {
  const city = search.value.trim();

  if (city === "") return;

  getWeather(city)

  search.value = "";
})




