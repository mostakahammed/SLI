(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function showTime(){
	//Digital Watch
	let date_time = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	let date = date_time.toLocaleDateString('en-NZ', options);
	let time = date_time.toLocaleTimeString();

	let time_dv = document.getElementById('timetoday');
	let date_dv = document.getElementById('datetoday');

	time_dv.innerHTML = time;
	date_dv.innerHTML = date;

	setTimeout(showTime, 1000);
}

showTime();