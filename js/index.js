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

/* slideshow on homepage
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  console.log(slideIndex);
} */



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

/* hamburger menu */

$(document).ready(function(){

	//toggle menu
	$('.hamburger').click(function(){
		$('#menu').slideToggle();
	});

	//to fix issue that toggle adds style(hides) to nav
	$(window).resize(function(){
		if(window.innerWidth > 1024) {
			$('#menu').removeAttr('style');
		}
	});

	//icon animation
	var topBar = $('.hamburger li:nth-child(1)'),
		middleBar = $('.hamburger li:nth-child(2)'),
		bottomBar = $('.hamburger li:nth-child(3)');

	$('.hamburger').on('click', function() {
		if (middleBar.hasClass('rot-45deg')) {
			topBar.removeClass('rot45deg');
			middleBar.removeClass('rot-45deg');
			bottomBar.removeClass('hidden');
		} else {
			bottomBar.addClass('hidden');
			topBar.addClass('rot45deg');
			middleBar.addClass('rot-45deg');
		}
	});

});








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




$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});
