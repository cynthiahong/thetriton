/* sticky navigation bar */
$(document).ready(function() {
    var $nav = $('#navigation'),
        posTop = $nav.position().top;
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y > posTop) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});


/* sticky for mobile */
$(document).ready(function() {
    var $nav = $('.menu'),
        posTop = $nav.position().top;
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y > posTop) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});


/* toggle menu open */
$(function() {
    $(".menuExpand").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});

$('.handle').on('click', function() {
    $('nav ul').toggleClass('showing')
});


/* get date */
var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock() {
    var d = new Date();
    var nmonth = d.getMonth(),
        ndate = d.getDate(),
        nyear = d.getYear();
    if (nyear < 1000) nyear += 1900;


    document.getElementById('clock').innerHTML = "" + tmonth[nmonth] + " " + ndate + ", " + nyear + "";
}

window.onload = function() {
    GetClock();
    setInterval(GetClock, 1000);
}


// v3.1.0
//Docs at http://simpleweatherjs.com

$(document).ready(function() {
  $.simpleWeather({
    location: 'La Jolla, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';


      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
