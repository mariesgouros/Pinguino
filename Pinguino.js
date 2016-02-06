<<<<<<< HEAD
// Helpful source: http://stackoverflow.com/questions/23262434/javascript-countdown-timer-pause-resume
=======
//VERY VERY MESSY
$(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
});

$('#x').on('click', function() {
	$('#x').fadeOut(100);
	setTimeout(function(){
		$(".main").prepend('<div class="darken"></div>');
		$('#popup').fadeIn(1000);
		$('#x').fadeIn(1000);
	},6000);
});

$('#time').on('click', function() {
	if (isRunning){
		isRunning = false;

	}
	setTimeout(function(){
		$(".main").prepend('<div class="darken"></div>');
		$('#popup').fadeIn(1000);
		$('#x').fadeIn(1000);
	},6000);
});

>>>>>>> 847584dd50beebaaf9b096f3af4eda582649299a
var CountDown = (function ($) {
    // Length ms 
    var timeOut = 10000;
    // Interval ms
    var timeInterval = 1000;

    var currentTime = ( new Date() ).getTime();
    var endTime = ( new Date() ).getTime() + timeOut;

    var guiTimer = $('#time');
    var guiSlider = $('#slider');

    var isRunning = true;

    var UpdateTimer = function() {
        // Run till timeout
        if(currentTime + timeInterval < endTime) {
            setTimeout( UpdateTimer, timeInterval );
        }
        // Countdown if running
        if(isRunning) {
            currentTime += timeInterval;
            if( currentTime >= endTime ) {
                guiTimer.css('color','red');
            }
        }
        // Update Gui
        var Time = new Date();
        Time.setTime(endTime - currentTime);
        var Minutes = Time.getMinutes();
        guiTimer.html( 
            (Minutes < 10 ? '0' : '') + Minutes);
    };

    var Pause = function() {
        isRunning = false;
        guiPause.hide();
        guiResume.show();
    };

    var Resume = function() {
        isRunning = true;
        guiPause.show();
        guiResume.hide();
    };

    var Start = function( Timeout ) {
        timeOut = timeout;
        currentTime = ( new Date() ).getTime();
        endTime = ( new Date() ).getTime() + timeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

$('#time').on('click', function() {
	if (isRunning){
		isRunning = false;
		$(this).css('color','red');
	}
	else{
		CountDown.Start(slider);
		isRunning = true;
		$(this).css('color','green');
	}
});

$(function() {
	console.log('test lol');
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
});