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
	$('.done-modal .close, .done-modal-overlay').click(function(event){
		event.preventDefault();
		$('.done-modal').fadeOut(500,'easeInOutExpo');
		$('.done-modal-overlay').fadeOut(500,'easeInOutExpo');
		//$('.modal-product-zoom img').attr('src','');
	});
	////////////////////////////////////////////////////////////////////////////



	////////////////////////////////////////////////////////////////////////////
	// steps boxes toggle
	$('.step-wrap .step-title').click(function(){
		
		$('.customizer .step-wrap.active').find('.step-detail').slideUp(800,'easeInOutExpo');
		$('.customizer .step-wrap.active').find('.step-title').removeClass('opened');
		$('.customizer .step-wrap.active').find('.fa-angle-right').removeClass('fa-rotate-90');
		$('.customizer .step-wrap.active').removeClass('active');
		
		if ( !$(this).hasClass('opened') ) {
			$(this).parent('.step-wrap').find('.step-detail').slideDown(800,'easeInOutExpo');
			$(this).find('.fa-angle-right').addClass('fa-rotate-90');
			$(this).parent('.step-wrap').addClass('active');
			$(this).addClass('opened');
		}

	});
	////////////////////////////////////////////////////////////////////////////

	// how many stones selector control
	$('.no-of-stones').change(function(){
		if ( $('.no-of-stones').val() == 1 ){
			$('.stone-two-wrap').hide();
			$('.stone-three-wrap').hide();
			$('.stone-two-wrap option[value=""]').attr('selected', 'selected');
			$('.stone-two-wrap').val('');
			$('.stone-three-wrap option[value=""]').attr('selected', 'selected');
			$('.stone-three-wrap').val('');
			$(".stone-two-wrap option").prop("selected", false);
			$(".stone-three-wrap option").prop("selected", false);
			$('.selected-step1-2').text('');
			$('.selected-step1-3').text('');
		}
		if ( $('.no-of-stones').val() == 2 ){
			$('.stone-two-wrap').show();
			$('.stone-three-wrap').hide();
			$('.stone-three-wrap').val('');
			$('.stone-three-wrap option[value=""]').attr('selected', 'selected');
			$(".stone-three-wrap option").prop("selected", false);
			$('.selected-step1-3').text('');
		}
		if ( $('.no-of-stones').val() == 3 ){
			$('.stone-two-wrap').show();
			$('.stone-three-wrap').show();
		}
	});

	// check stones values and show user selected values
	$('.stone-one, .stone-two, .stone-three').change(function(){
		var getSToneOne = $('.stone-one').val();
		var getSToneTwo = $('.stone-two').val();
		var getSToneThree = $('.stone-three').val();
		if ( getSToneOne != '' ) {
			$('.selected-step1').text('Stone 1: ' + getSToneOne);
		} else {
			$('.selected-step1').text('');
		}
		if ( getSToneTwo != '' ) {
			$('.selected-step1-2').text('Stone 2: ' + getSToneTwo);
		} else {
			$('.selected-step1-2').text('');
		}
		if ( getSToneThree != '' ) {
			$('.selected-step1-3').text('Stone 3: ' + getSToneThree);
		} else {
			$('.selected-step1-3').text('');
		}

		if ( getSToneOne != '' || getSToneTwo != '' || getSToneThree != '' ) {
			$('.step-one-wrap .fa-check-circle').show();
		} else {
			$('.step-one-wrap .fa-check-circle').hide();
		}
	});

	// check metal value

	$('.metal-selection').change(function(){
		var getMetal = $('.metal-selection').val();
		if ( getMetal != '' ) {
			$('.selected-step2').text('Metal: ' + getMetal);
			$('.step-two-wrap .fa-check-circle').show();
		} else {
			$('.selected-step2').text('');
			$('.step-two-wrap .fa-check-circle').hide();
		}
	});

	// check ring size

	$('.ring-size-selection').change(function(){
		var getRingSize = $('.ring-size-selection').val();
		if ( getRingSize != '' ) {
			$('.selected-step3').text('Ring Size: ' + getRingSize);
			$('.step-three-wrap .fa-check-circle').show();
		} else {
			$('.selected-step3').text('');
			$('.step-three-wrap .fa-check-circle').hide();
		}
	});

	// check Engraving Text

	$('.eng-1, .eng-2, .form-check-input').on('keyup change click', function(e) {
		var getEngr1 = $('.eng-1').val();
		var getEngr2 = $('.eng-2').val();
		var caliSelect = $(".form-check-input:checked").val();
		if ( getEngr1 != '' ) {
			$('.selected-step4').text('Engraving Text 1: ' + getEngr1);
		} else {
			$('.selected-step4').text('');
		}
		if ( getEngr2 != '' ) {
			$('.selected-step4-1').text('Engraving Text 2: ' + getEngr2);
		} else {
			$('.selected-step4-1').text('');
		}
		if ( caliSelect != '' ) {
			$('.selected-step4-2').text('Engraving Style: ' + caliSelect);
		} else {
			$('.selected-step4-2').text('');
		}

		if ( getEngr1 != '' || getEngr2 != '' ) {
			$('.step-four-wrap .fa-check-circle').show();
		} else {
			$('.step-four-wrap .fa-check-circle').hide();
		}
	});	

	// limit engraving characters
	var max_length1 = $('.eng-1').attr('maxlength');
	var max_length2 = $('.eng-2').attr('maxlength');
	$('.maxc1').text(max_length1 + " characters");
	$('.maxc2').text(max_length2 + " characters");

  	$('.eng-1').keyup(function(){
	    var length = $(this).val().length;
	    var remaining = max_length1 - length;
	    $('.maxc1').text(remaining + " characters");  
    });
    $('.eng-2').keyup(function(){
	    var length = $(this).val().length;
	    var remaining = max_length2 - length;
	    $('.maxc2').text(remaining + " characters");  
    });


    /////////////////////////////////////////////////////
    // open done modal with entries
    $('.fill-bag').click(function(){
    
    	$('.done-modal').fadeIn(500,'easeInOutExpo');
		$('.done-modal-overlay').fadeIn(500,'easeInOutExpo');

		if( $('.stone-one').val() != '' ) {
			$('.final-Stone-One').text('Stone 1: ' + $('.stone-one').val() );
		}
		if( $('.stone-two').val() != '' ) {
			$('.final-Stone-Two').text('Stone 2: ' + $('.stone-two').val() );
		}
		if( $('.stone-three').val() != '' ) {
		$('.final-Stone-Three').text('Stone 3: ' + $('.stone-three').val() );
		}
		if( $('.metal-selection').val() != '' ) {
			$('.final-Metal').text( $('.metal-selection').val() );
		}
		if( $('.ring-size-selection').val() != '' ) {
			$('.final-Size').text( $('.ring-size-selection').val() );
		}
		if( $('.eng-1').val() != '' ) {
			$('.final-en1').text( $('.eng-1').val() );
		}
		if( $('.eng-2').val() != '' ) {
			$('.final-en2').text( $('.eng-2').val() );
		}
		if( $('.selected-step4-2').text() != '' ) {
			$('.final-eng-style').text( $('.selected-step4-2').text() );
		}
    });
	/////////////////////////////////////////////////////


	// make button disabled for once
	$('.fill-bag').attr('disabled','disabled');



});


// button check //// looop 

setInterval(function(){

	if ( $('.selected-step1').text() != '' && 
		$('.selected-step2').text() != '' && 
		$('.selected-step3').text() != '' ){
		$('.fill-bag').removeAttr('disabled');
	} else {
		$('.fill-bag').attr('disabled','disabled');
	}

},1000);


