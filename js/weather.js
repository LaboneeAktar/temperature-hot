// API Key = 4b8c2e7e6e7baa376ae3eca8c9553af4

const API_KEY = `4b8c2e7e6e7baa376ae3eca8c9553af4`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
loadTemperature('dhaka');