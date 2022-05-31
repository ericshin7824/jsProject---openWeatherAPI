let weather = {
    API_KEY: 'd63b30fa31309086449cd34ea984b57e',
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.API_KEY)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon.slice(0, -1) + 'd.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp;
        document.querySelector('.humidity').innerText = humidity;
        document.querySelector('.wind').innerText = speed;
        document.querySelector('.weather').classList.remove('loading');
        // console.log(icon);
        // console.log(icon.slice(0, -1));
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        weather.search();
    }
});

weather.fetchWeather('California');
