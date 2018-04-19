$( document ).ready(function() {

	// Smooth scrolling to the top of the webpage when 'Back to Top link is clicked'
	$('footer h4 a').click(function(e) {
	  	console.log('footer a clicked');
	    
	    e.preventDefault();
	    
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 700 );
  	});

  	$('.bars-click-area').on('click', function(){
  		$('.responsive-menu').show();
  		$('.site-grid').hide();
  	});

  	$('.times-click-area').on('click', function(){
  		$('.responsive-menu').hide();
  		$('.site-grid').show();
  	})

  	$(window).resize(function(){
        if($( window ).width() > 835) {
        	$('.responsive-menu').hide();
  			$('.site-grid').show();
        }
    });  	

	console.log('ready');
});