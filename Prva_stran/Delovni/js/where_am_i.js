 $(document).ready(function() {
		//Refresh rate of the "Where the hell am i" function
		$(function(){
		setInterval(oneSecondFunction, 1);
		});

		function oneSecondFunction() {
  		console.log("Where am I?!");
  		$('li').each(function(i) {
  			if ($(this).is('.active')) console.log(i);
  		});
		}


});
