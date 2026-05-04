//Hakee tiedot openweathermapista
function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ab7986acaa9bf7aa816c116f71d4779&units=metric`)
  //Muuttaa vastauksen json muotoon
    .then(response => response.json())
    .then(data => {
//Päivitää tiedot sovellukseen, lisää maan kaupungin eteen, Lisää asteet ja muut tiedot
      document.getElementById("cityName").textContent = city + ", FI";
      document.getElementById("temperature").textContent = data.main.temp + " °C";
      document.getElementById("humidity").textContent = data.main.humidity + " %";
      document.getElementById("windSpeed").textContent = data.wind.speed + " m/s";
    });
}
//Event listener eri kaupungeille. Kun nappia painetaan, kutsuu fetchweather funktiot
document.getElementById("helsinkiBtn").addEventListener("click", function() {
  fetchWeather("Helsinki");
});
document.getElementById("turkuBtn").addEventListener("click", function() {
  fetchWeather("Turku"); 
});
document.getElementById("tampereBtn").addEventListener("click", function() {
  fetchWeather("Tampere"); 
});

fetchWeather("Helsinki");