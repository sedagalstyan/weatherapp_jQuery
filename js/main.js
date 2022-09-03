$(document).ready(function() {
    city = 'Yerevan';
    getWeather(city);

    // Search with key enter and btn
    $('.search').on('click',function(){
        city = $('input[type=text').val();
        getWeather(city);
    });
    $('input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            city = $('input[type=text').val();
            getWeather(city);
        }
    });

    // Function to get the weather
    function getWeather(city){
        key = '084d0c2d005d49d70de2339181b2b396';
        api = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + key;
        $.ajax(api, {
            dataType: 'json',
            success: function(json) {
                var temp = Math.round(json['main']['temp'] - 273.15);
                $('body').css('backgroundImage', 'url(https://source.unsplash.com/1600x900/?'+json['name']+')');
                $('.city').html('Weather in ' + json['name']);
                $('.temp').html(temp + ' °C');
                $('.main .descr').html(json['weather'][0]['main']);
                $(".icon img").attr("src",'https://openweathermap.org/img/wn/'+json['weather'][0]['icon']+'.png');
                $('.humidity').html('Humidity: ' + json['main']['humidity'] + '%');
                $('.wind').html('Wind: ' + json['wind']['speed'] + 'km/h');
            }
        });
    };
});
