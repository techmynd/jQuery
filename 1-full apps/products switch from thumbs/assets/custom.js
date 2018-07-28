$(window).resize(function(){

});

$(document).ready(function(){

	////////////////////////////////////////////////////////////////////////////
	// thumb click functionality
	// on thumb click change preview image and zoom image sources for main image
	$('.product-thumbs-wrap a').click(function(event){
		event.preventDefault();

		// add class active at clicked thumb but first remove previous active class
		$('.product-thumbs-wrap a').removeClass('active');
		$(this).addClass('active');

		// get preview image
		var imgPreview = $(this).find('img').attr('data-img-preview');
		// get zoom image
		var imgZoom = $(this).find('img').attr('data-img-zoom');

		// replace preview image source
		$('.main-photo-wrap img').attr('src',imgPreview);
		// replace zoom image source
		$('.main-photo-wrap img').attr('data-photo-large-url',imgZoom);
	});
	////////////////////////////////////////////////////////////////////////////
	


	////////////////////////////////////////////////////////////////////////////
	// main image click zoom functionality // open modal and insert image in it
	$('.enlarge a, .main-photo-wrap').click(function(event){
		event.preventDefault();
		
		// open modal	
		$('.modal-product-zoom').fadeIn(500,'easeInOutExpo');
		$('.custom-modal-overlay').fadeIn(500,'easeInOutExpo');

		// insert image in modal
		// get image zoom data from main image
		var imgZoomData = $('.main-photo-wrap img').attr('data-photo-large-url');
		// replace image in modal
		$('.modal-product-zoom img').attr('src',imgZoomData);
	});
	////////////////////////////////////////////////////////////////////////////
	


	////////////////////////////////////////////////////////////////////////////
	// close modal
	$('.modal-product-zoom .close, .custom-modal-overlay').click(function(event){
		event.preventDefault();
		$('.modal-product-zoom').fadeOut(500,'easeInOutExpo');
		$('.custom-modal-overlay').fadeOut(500,'easeInOutExpo');
		//$('.modal-product-zoom img').attr('src','');
	});
	////////////////////////////////////////////////////////////////////////////

});


