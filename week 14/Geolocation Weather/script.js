const runWeatherApi = () => {
  let weatherCheckBtn = document.querySelector("#temperature-button");

  const checkTemperature = () => {
    fetch(
      `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`
    ).then(function (response) {
      console.log(response);
      return response.json();
    });
  };
  weatherCheckBtn.addEventListener("click", checkTemperature);
  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude is: " + latitude);
    console.log("Longitude is: " + longitude);
  };
  navigator.geolocation.getCurrentPosition(showPosition);
};

window.addEventListener("load", function () {
  runWeatherApi();
});
