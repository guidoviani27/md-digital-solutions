$(document).ready(function(){

    var apikey;
    var city;

    $('#boton').on('click', function(){        

        apikey = '5a46b71d2b007d58c2ae293dc8e76e4d';
        city = $('#city').val();
        

        $.ajax({
            url: 'http://api.weatherstack.com/current',
            data: {
              access_key: apikey,
              query: city
            },
            dataType: 'json',
            success: function(temp) {

                console.log(temp)                
                $('#data-temp').html('');
                $('#data-temp').append(`<tr><td>${temp.current.temperature}°C</td>
                                            <td>${temp.current.feelslike}°C</td>
                                            <td>${temp.current.weather_descriptions}<br>
                                            <img class="icon" src="${temp.current.weather_icons}"/></td>
                                            <td>${temp.current.humidity}%</td>
                                            <td>${temp.current.precip}mm</td>
                                            <td>${temp.current.wind_speed}km/h</td></tr>`);

            }
          });

    })




    
 });
