function SearchClick() {
  var txtCity = document.getElementById('txtCity').value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${txtCity}&appid=92733f51a4be3ccd4699a2cb6cbbab81`;

  fetch(url).then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById('txtlocation').innerHTML = `<span>Location: ${data.name}</span>`;
    document.getElementById('txtTemp').innerHTML = `<span>Tempurature: ${data.main.temp} &deg;C</span>`;
    document.getElementById('txtPressure').innerHTML = `<span>Pressure: ${data.main.pressure} Pascal</span>`;
    document.getElementById('txtHumidity').innerHTML = `<span>Humidity: ${data.main.humidity} gm/m^3</span>`;
    document.getElementById('txtSpeed').innerHTML = `<span>Wind Speed: ${data.wind.speed} Kmph</span>`;
    document.getElementById('txtWheather').innerHTML = `<span>${data.weather[0].description}</span>`;
    
  })
}