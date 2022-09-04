// API Key = 4b8c2e7e6e7baa376ae3eca8c9553af4

const API_KEY = `4b8c2e7e6e7baa376ae3eca8c9553af4`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

const displayTemperature = data => {
    console.log(data);
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('conditon', data.weather[0].main);
    // setInnerTextById('description', data.weather[0].description);
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //set city name
    document.getElementById('city-name').innerText = searchText;
    loadTemperature(searchText);
})


loadTemperature('dhaka');