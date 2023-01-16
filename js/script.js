$('#btn').click(function(event){
    event.preventDefault();
    let cityInput = $('#city-input').val();
    let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6dfc3427f390e2925376be035ae60bdf`
    $.getJSON(apiUrl,{ 
    }).done(function(data){
        console.log(data)
    }
    ) 
})