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
    var $div = $('#navigation2'),
        posTop = $div.position().top;

    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y > posTop) {
            $div.addClass('fixed');
        } else {
            $div.removeClass('fixed');
        }
    });
});

/* makes the Triton logo appear when scrolled down on desktop */
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 65) {
        $('.tritonlogo').fadeIn();
    } else {
        $('.tritonlogo').fadeOut();
    }
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

/* takes you back to the top of the page */
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

});




$.fn.extend({

  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){

    // Set the default options
    var defaults = {
      color: 'black',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options);

    return this.each(function(){

      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },

  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){

    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){

      $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });

    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({color: 'white', width: 30, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu').accordionMenu();


/* share button appears when reading the article and then hides completely on mobile */
$(document).ready(function() {

    $('#socialarea').hide(); //hide your div initially
    var myWidth = window.innerWidth;
    var topOfOthDiv1 = $('#start').offset().top;
    var topOfOthDiv3 = $('#end').offset().top;
    if (myWidth > 1000) {
    //load file for screen width 1000 and up here
    $(window).scroll(function() {
        if($(window).scrollTop() < topOfOthDiv1)
        {
             $('#socialarea').fadeOut(200);
        }
        else
        {
            if($(window).scrollTop() < topOfOthDiv3) {
                $('#socialarea').fadeIn(200);
            }
            else if($(window).scrollTop() > topOfOthDiv3) {
                $('#socialarea').fadeOut(200);
            }
        }
    });
  }
  else{
    $('#socialarea').hide();
  }
});
