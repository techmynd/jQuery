/*document ready starts*/
$(document).ready(function() {

  $('a').click(function(event){ event.preventDefault(); });

  // hide sections initially
  $('#component-ring, #component-bar, #component-bracelet').hide();

  // onclick index select boxes switch class active
  $("#component-home .index-product-block").click(function(){
    $(".index-product-block").removeClass('active');
    $(this).addClass('active');
  });

  // on index selector button click decide what section to show
  $('#component-home .btn').click(function(event){
      event.preventDefault();
      
      $('.choose-metal-wrap').show();
      $('.choose-stones-wrap').hide();
      $('.choose-engraving-wrap').hide();
      $('.checkout-wrap').hide();

      // start over
      $('.selected-metal,.selected-stone1,.selected-stone2,.selected-stone3,.selected-typo,.selected-text1,.selected-text2').text("");
      $('.typed-line-one,.typed-line-two').val("");
      $('.metal-box').removeClass('active');
      $('.metal-check').prop("checked", false);
      $('.typo-box').removeClass('active');
      $('.typo-check').prop("checked", false); 
      $('.selected-stones').text("");
      $('.stone-check').prop("checked", false);
      $('.stone-box').removeClass('active');

    if($('.index-selector-ring').hasClass('active')) {
      $('#component-main-wrap').show();
      $('#component-ring').show();
      $('#component-bar').hide();
      $('#component-bracelet').hide();
      $('#component-home').hide();
      $('.sections-control .progress-control').val(1);
      maxRange = 4;
      $('.step-box-wrap').removeClass('three-steps');
      $('.step-box-wrap .step-box:nth-child(2) h6').text('CHOOSE YOUR STONES');
      $('.step-box-wrap .step-box:nth-child(4) h5').text('STEP 4:');
      $('.step-box-wrap .step-box:nth-child(3)').show();
      $('.show-yellow-case').show();
      $('.show-white-case').hide();
      $('.typo-caption-one').text("LINE 1");
      $('.typo-caption-two').text("LINE 2");
      $('.typo-caption-two').show();
      $('.typed-line-two').show();
    } else if ($('.index-selector-bar').hasClass('active')) {
      $('#component-main-wrap').show();
      $('#component-ring').hide();
      $('#component-bar').show();
      $('#component-bracelet').hide();
      $('#component-home').hide();
      $('.sections-control .progress-control').val(1);
      maxRange = 4;
      $('.step-box-wrap').removeClass('three-steps');
      $('.step-box-wrap .step-box:nth-child(2) h6').text('CHOOSE YOUR STONES');
      $('.step-box-wrap .step-box:nth-child(4) h5').text('STEP 4:');
      $('.step-box-wrap .step-box:nth-child(3)').show();
      $('.show-yellow-case').hide();
      $('.show-white-case').show();
      $('.typo-caption-two').show();
      $('.typed-line-two').show();
      $('.typo-caption-one').text("FRONT");
      $('.typo-caption-two').text("BACK");
    } else if ($('.index-selector-bracelet').hasClass('active')) {
      $('#component-main-wrap').show();
      $('#component-ring').hide();
      $('#component-bar').hide();
      $('#component-bracelet').show();
      $('#component-home').hide();
      $('.sections-control .progress-control').val(1);
      maxRange = 3;
      $('.step-box-wrap').addClass('three-steps');
      $('.step-box-wrap .step-box:nth-child(2) h6').text('CUSTOMIZE YOUR NAME');
      $('.step-box-wrap .step-box:nth-child(4) h5').text('STEP 3:');
      $('.step-box-wrap .step-box:nth-child(3)').hide();
      $('.show-yellow-case').hide();
      $('.show-white-case').show();
      $('.typo-caption-one').text("NAME");
      $('.typo-caption-two').hide();
      $('.typed-line-two').hide();
    } else {
      $('.main-alert').fadeIn();
      $('.main-alert').text('Please select a Category').delay(1000).fadeOut('slow');
    } 
  });

  // progress control
  $('.sections-control .next').click(function(event){
    event.preventDefault();
    var currentProgress = $('.sections-control .progress-control').val();
    if(currentProgress < maxRange) {
      var newProgress = parseInt(currentProgress) + 1;
      $('.sections-control .progress-control').val(newProgress);

      if(newProgress == maxRange) {
      $('.sections-control .next').text('CHECKOUT');
      } else {
        $('.sections-control .next').text('NEXT');
      }

      updateProgress();
    }
  });

  // progress control
  $('.sections-control .back').click(function(event){
    event.preventDefault();
    var currentProgress = $('.sections-control .progress-control').val();
    if(currentProgress == 1) {
        $("#component-home").show();
        $("#component-main-wrap").hide();
        $('.sections-control .progress-control').val();
    }
    if(currentProgress > 1) {
      var newProgress = parseInt(currentProgress) - 1;
      $('.sections-control .progress-control').val(newProgress);

      if(newProgress == maxRange) {
      $('.sections-control .next').text('CHECKOUT');
      } else {
        $('.sections-control .next').text('NEXT');
      }

      updateProgress();
    }

  });





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

  // choose metal toggle
  $('.choose-metal-wrap .metal-box').click(function(){
    $('.choose-metal-wrap .metal-box').not(this).removeClass('active');
    $(this).toggleClass('active');
    
    if ( $(this).find('.metal-check').is(':checked') ) {
      $(this).find('.metal-check').prop("checked", false);
      $('.selected-metal').text("");
    } else {
      $(this).find('.metal-check').prop("checked", true);
      $('.selected-metal').text( $(this).find('.metal-check').val() );
    }

  });

  // Choose Typography toggle
  $('.choose-engraving-wrap .typo-box').click(function(){
    $('.choose-engraving-wrap .typo-box').not(this).removeClass('active');
    $(this).toggleClass('active');
    
    if ( $(this).find('.typo-check').is(':checked') ) {
      $(this).find('.typo-check').prop("checked", false);  
      $('.selected-typo').text("");
    } else {
      $(this).find('.typo-check').prop("checked", true);
      $('.selected-typo').text("Typography: " + $(this).find('.typo-check').val() );
    }

  });

  // typo text 1
  $('.typed-line-one').keyup(function(){
    if ( $('.typed-line-one').val() != '' ){
      $('.selected-text1').text("Line 1: " + $('.typed-line-one').val() );
    } else {
      $('.selected-text1').text("");
    }
  });
  // typo text 2
  $('.typed-line-two').keyup(function(){
    if ( $('.typed-line-two').val() != '' ) {  
      $('.selected-text2').text("Line 2: " + $('.typed-line-two').val() );
    } else {
     $('.selected-text2').text(""); 
    }
  });


  // number of stones
  $('.stone-number').change(function(){
    $('.selected-stones').text("");
    $('.stone-check').prop("checked", false);
    $('.stone-box').removeClass('active');
    // howManyStones = $('.stone-number').val();
  });

  // choose stones toggle
  $('.choose-stones-wrap .stone-box').click(function(){
  
    alreadyCheckedVirtual = $('.stone-check:checked').size();
    alreadyCheckedActual = alreadyCheckedVirtual +1;
    //console.log(alreadyCheckedActual);
    howManyStones = $('.stone-number').val();

    if (alreadyCheckedActual <= howManyStones) {

        $(this).toggleClass('active');
        if ( $(this).find('.stone-check').is(':checked') ) {
          $(this).find('.stone-check').prop("checked", false);
          getStones();
        } else {
            $(this).find('.stone-check').prop("checked", true);
            getStones();
        }

    }    

  });

  // get stones
  function getStones() {
    $('.selected-stones').text("");
    var getStones = $(".choose-stones-wrap input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); // <----
    $('.selected-stones').text(getStones);
  }
  /*
  $(".stone-check").click(function(){
  $('.selected-stones').text("");
    var getStones = $(".choose-stones-wrap input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); // <----
    $('.selected-stones').text(getStones);
  });
  */


}); /*document ready ends*/


// sections change control function
function updateProgress() {
  // get the progress value
  $('.step-box-wrap .step-box').removeClass('active');
  var progressNumber = $('.sections-control .progress-control').val();
    
  if(progressNumber == 1) {
    $('.step-box-wrap .step-box:nth-child(1)').addClass('active');
    $('.section-title').text('Choose A Metal');
    $('.choose-metal-wrap').show();
    $('.choose-stones-wrap').hide();
    $('.choose-engraving-wrap').hide();
    $('.checkout-wrap').hide();
  } else if (progressNumber == 2) {
    $('.step-box-wrap .step-box:nth-child(2)').addClass('active');
    if(maxRange == 4){
      $('.section-title').text('Choose Your Stones');
      $('.choose-stones-wrap').show();
      $('.choose-metal-wrap').hide();
      $('.choose-engraving-wrap').hide();
      $('.checkout-wrap').hide();
    }
    if(maxRange == 3){
      $('.section-title').text('Customize Your Name');
      $('.choose-engraving-wrap').show();
      $('.choose-metal-wrap').hide();
      $('.choose-stones-wrap').hide();
      $('.checkout-wrap').hide();
    }
  } else if (progressNumber == 3) {
    if(maxRange == 4){
      $('.section-title').text('Choose Your Engraved Message');
      $('.step-box-wrap .step-box:nth-child(3)').addClass('active');
      $('.choose-engraving-wrap').show();
      $('.choose-metal-wrap').hide();
      $('.choose-stones-wrap').hide();
      $('.checkout-wrap').hide();
    }
    if(maxRange == 3){
      $('.section-title').text('CheckOut');
      $('.step-box-wrap .step-box:nth-child(4)').addClass('active');
      $('.checkout-wrap').show();
      $('.choose-metal-wrap').hide();
      $('.choose-stones-wrap').hide();
      $('.choose-engraving-wrap').hide();
    }
  } else if (progressNumber == 4) {
    $('.step-box-wrap .step-box:nth-child(4)').addClass('active');
    $('.section-title').text('CheckOut');
    $('.checkout-wrap').show();
    $('.choose-metal-wrap').hide();
    $('.choose-stones-wrap').hide();
    $('.choose-engraving-wrap').hide();
  } else {
    // do nothing
  }

}


/*window load starts*/
$(window).load(function() {
  
});
/*window load ends*/

/*if window is resized - check*/
$(window).resize(function(){
  // code here
});
/*window resize ends*/

/*Plain JS*/

