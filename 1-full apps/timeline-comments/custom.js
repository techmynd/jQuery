$(document).ready(function(){
    
    
    // stop form submission
    $('form.new-comment-form').submit(function(event){
        event.preventDefault();
        
        // check if commenmt value is empty
        if($('.new-comment-text').val() == '') {
            $('.new-comment-text').css({"border-color":"red"});
        }
        else {
            $('.new-comment-text').css({"border-color":"#ced4da"});

            // post new comment

            var newlyBakedComment = $('.dummy-comment').html();
            $('.new-comment-populate-area').prepend(newlyBakedComment);
            
            // add new comment
            $('.new-comment-populate-area .comment-wrap:first-child .comment-text').text( $('.new-comment-text').val() );

        }

        // process form here
        ////////////////////
        // > 
        ////////////////////

        // clear value on form submission
        $('.new-comment-text').val("");

        // initialize all functionality again
        initAll();

    });

    $('form.update-comment-form').submit(function(event){
        event.preventDefault();
    });

    // initialize all functionality
    initAll();

    // notification block hidden detail

    $('.notification-block .inner .fa').click(function(){
        $(this).closest('.inner').find('.hidden-details').stop().slideToggle();
        $(this).closest('.inner').find('.fa').stop().toggleClass('fa-caret-right fa-caret-down');
    });

});




function initAll(){

    $('form.update-comment-form, form.new-comment-form').submit(function(event){
        event.preventDefault();
    });

    // delete comment 
    $('.delete-comment').click(function(){
        $(this).closest('.comment-wrap').remove();
        // process comment delete here
        ////////////////////
        // > 
        ////////////////////
    });

    // comment edit trigger
    $('.edit-comment').click(function(){
        
        $(this).closest('.comment-matter').find('.comment-text').hide();
        $(this).closest('.comment-matter').find('.comment-editor').show();

        var oldvalue = $(this).closest('.comment-matter').find('.comment-text').text();
        $(this).closest('.comment-matter').find('.old-comment-text').val(oldvalue);
    });

    // comment eddited done trigger
    $('.edit-comment-done').click(function(){
        $(this).closest('.comment-matter').find('.comment-text').show();
        $(this).closest('.comment-matter').find('.comment-editor').hide();
    });

    // cancel update // comment
    $('.btn-cancel-comment').click(function(){
        $(this).closest('.comment-matter').find('.comment-text').show();
        $(this).closest('.comment-matter').find('.comment-editor').hide();
        // empty editor value
        $(this).closest('.comment-matter').find('.old-comment-text').val("");
    });

    // update comment
    $('.btn-update-comment').click(function(){

        // new value
        var newValue = $(this).closest('.comment-matter').find('.old-comment-text').val();
        // value to replace
        if(newValue) {
            $(this).closest('.comment-matter').find('.comment-text').text(newValue);
        }

        $(this).closest('.comment-matter').find('.tick').show().css({"opacity":"1"}).animate({"opacity":"0"}, 'slow');

        $(this).closest('.comment-matter').find('.comment-text').show();
        $(this).closest('.comment-matter').find('.comment-editor').hide();

        // empty editor value
        $(this).closest('.comment-matter').find('.old-comment-text').val("");

    });
}