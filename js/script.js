$(()=>{
    $('#weather-app-btn').click(function(event){
        event.preventDefault();
        let cityInput = $('#city-input').val();

        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            console.log(data);
        }) 
    })

    let apiUrl = `http://api.openweathermap.org/data/2.5/group?id=2673730,3169070,2643743,1850144&units=metric&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            let country = data.list;
            console.log(country);
            country.forEach((element, index) => {
                $(`#card${index} .headers h2`).text(element.name);
                $(`#card${index} img`).attr('src',`http://openweathermap.org/img/wn/${element.weather[0].icon}@4x.png`);
                $(`#card${index} .headers p`).text(element.weather[0].main);
                $(`#card${index} h3`).text(Math.round(element.main.temp) + " °C");
            });
        }) 
})

const toggleButton = document.querySelector('#toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
