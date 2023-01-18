$(()=>{

    $('#weather-app-btn').click(function(event){
        event.preventDefault();
        let cityInput = $('#city-input').val();
    
        if(!cityInput) {
          alert("Please enter a city name.");
          return;
        }
        $( ".slider" ).val(0);
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            console.log(data);
            $('#card0 h2').text(data.name)
            $(`#card0 img`).attr('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
            $(`#card0 .headers p`).text(data.weather[0].main);
            $(`#card0 h3`).text(Math.round(data.main.temp) + "°");
            $('#card0 #feels-like').text(Math.round(data.main.feels_like) + "°");
            $('#card0 #temp-max').text(Math.round(data.main.temp_min) + "°");
            $('#card0 #temp-min').text(Math.round(data.main.temp_max) + "°");
            $('#card0 #humidity').text(Math.round(data.main.humidity) + "%");
        }).fail((jqXHR, textStatus, errorThrown) => {
            // console.log(jqXHR, textStatus, errorThrown)
            alert("City not found. Please enter a valid city name.")
            return;
        });
    });

    $( ".slider" ).change(function() {
        let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${$('#card0 h2').text()}&units=metric&cnt=16&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            console.log(data);
            $('#card0 h2').text(data.city.name)
            $(`#card0 img`).attr('src',`http://openweathermap.org/img/wn/${data.list[$('.slider').val()].weather[0].icon}@4x.png`);
            $(`#card0 .headers p`).text(data.list[$('.slider').val()].weather[0].main);
            $(`#card0 h3`).text(Math.round(data.list[$('.slider').val()].main.temp) + "°");
            $('#card0 #feels-like').text(Math.round(data.list[$('.slider').val()].main.feels_like) + "°");
            $('#card0 #temp-max').text(Math.round(data.list[$('.slider').val()].main.temp_min) + "°");
            $('#card0 #temp-min').text(Math.round(data.list[$('.slider').val()].main.temp_max) + "°");
            $('#card0 #humidity').text(Math.round(data.list[$('.slider').val()].main.humidity) + "%");
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

            const d = new Date(data.list[$('.slider').val()].dt_txt);
            let day = weekday[d.getDay()];

            $('#time').text(day + " " + d.getHours() + ":00")
        }).fail((jqXHR, textStatus, errorThrown) => {
            // console.log(jqXHR, textStatus, errorThrown)
            alert("City not found. Please enter a valid city name.")
            return
        });
    });
    

    let apiUrl = `http://api.openweathermap.org/data/2.5/group?id=2673730,3169070,2643743,1850144&units=metric&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            let country = data.list;
            console.log(data);
            country.forEach((element, index) => {
                $(`#card${index} .headers h2`).text(element.name);
                $(`#card${index} img`).attr('src',`http://openweathermap.org/img/wn/${element.weather[0].icon}@4x.png`);
                $(`#card${index} .headers p`).text(element.weather[0].main);
                $(`#card${index} h3`).text(Math.round(element.main.temp) + "°");
                $(`#card${index} #feels-like`).text(Math.round(element.main.feels_like) + "°");
                $(`#card${index} #temp-max`).text(Math.round(element.main.temp_min) + "°");
                $(`#card${index} #temp-min`).text(Math.round(element.main.temp_max) + "°");
                $(`#card${index} #humidity`).text(Math.round(element.main.humidity) + "%");
            });
        }) 

    $('#toggle-button').click(() => {
        $('.nav-links').toggleClass('active');
    })
})


