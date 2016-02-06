var isRunning = false;
console.log($("#amount").val());
var currentSeconds = $("#amount").val();
var myCounter = new Countdown({  
    seconds: currentSeconds,  // number of seconds to count down
    onUpdateStatus: function(sec){$("#amount").val(sec);}, // callback for each second
    onCounterEnd: function(){ alert('Time up!'); $("#timer").show();} // final action
});
var phrases = ["You got this!", "I believe in you!", "We can pengWIN <br> this together!", "You're doing great.", "Sending you love...", "Where am I?", "Good job!", "Keep going! <br> Power on!", "We can relax <br> together soon.", "Sending hugs <br> and love...", "Who am I? <br> What is happening?", "Hello. It's me.", "Keep working like <br> this and you'll get <br> the Best Worker <br> Award!", "I was wondering <br> if after all these <br> years you'd like to <br> meet...", "To go over, <br> everything."];

$(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 45,
      min: 0,
      max: 90,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value );
      }
    });
    
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
});

$('#timer').on('click', function() {
	if (!isRunning){
		isRunning = true;
        $("#timer").hide();
		$(this).css('color','green');
        console.log("HEY "+$("#amount").val());
        myCounter.start();
	}
});

function Countdown(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    console.log("yo"+seconds);
    updateStatus(seconds);
    if (seconds == 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = $("#amount").val();
    console.log("gday"+seconds)
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

var rotator = -1;
$("#my_image").on('click', function(){
    var random = Math.floor((Math.random() * 15));
    console.log(random);
    console.log(phrases[random]);
    $("#text").html(phrases[random]);
    rotator++;
    if(rotator%3==0){
        $(this).attr('src','css/pinguino2.png');
    }
    else if(rotator%3==1){
        $(this).attr('src','css/pinguino3.png');
    }
    else if(rotator%3==2){
        $(this).attr('src','css/pinguino1.png');
    }
    if(rotator==666){
        $(this).attr('src','css/pinguino4.png');
        $('h1, p').html('work bit');
        $('body').css({
            "background": "url(hell.jpg) no-repeat center center fixed",
            "-webkit-background-size" : "cover",
            "-moz-background-size" : "cover",
            "-o-background-size" : "cover",
            "background-size" : "cover"
        });
    }
});