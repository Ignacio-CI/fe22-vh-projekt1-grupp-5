$(()=>{
    $('#btn').click(function(event){
        event.preventDefault();
        let cityInput = $('#city-input').val();

        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=8de34fe193f5396bc8ece49b21d39f05`
        $.getJSON(apiUrl, { 
        }).done((data) => {
            console.log(data);
        }) 
    })
})


// toggle button

$('')