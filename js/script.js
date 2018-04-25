$(document).ready(function(){

	 $('.home-icon').click(function(){
			$('.home-search').toggleClass('active');
			$('#home-text > h1').toggleClass('isOn');
			$('#home-text > a').toggleClass('isOn');
	});

	 $('.menu-icon').click(function(){
				$('.menu-icon').toggleClass('activeMenu');
			});


			$('.menu-icon').click(function(){
				$('.sidebar').toggleClass('activeMenu');
	});

			 new WOW().init();


});

  $(function() {
                
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500);
    
})();


