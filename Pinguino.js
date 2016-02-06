//VERY VERY MESSY

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

var CountDown = (function ($) {
    // Length ms 
    var timeOut = 10000;
    // Interval ms
    var timeInterval = 1000;

    var currentTime = ( new Date() ).getTime();
    var endTime = ( new Date() ).getTime() + timeOut;

    var guiTimer = $('#time');

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
		CountDown.Start(10000);
		isRunning = true;
		$(this).css('color','green');
	}
});

// ms
