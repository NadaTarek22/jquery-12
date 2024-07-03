
$('.paragraph').not($('.paragraph').eq(0)).css({display : 'none'})


//navbar
$('#closeBtn').on('click',function(){
    
    if($('.sideNav').width() == 250 ){   
        $('.sideNav').animate({width: '0'},50) 
        $('.homeContent').css({marginLeft : '0'}, 50)
        $('.countImage').css({width: '100%'})
        $('.row').css({marginRight: '0'})
        $('.countImage').css({marginLeft : '0'}, 50)
        $('#inputs').addClass('col-md-6')
        $('#inputs').removeClass('col-md-5')
        $('.contactSec').css({marginLeft : '0'}, 50)
        $('.sliderDownSec').css({margin: '100px auto'} ,50)
    }
})
$('.open').on('click',function(){
    if($('.sideNav').width() == 0 ){
        $('.sideNav').animate({width: '250px'},50) 
        $('.homeContent').css({marginLeft : '250px'}, 50)
        $('.countImage').css({width: '80%'})
        $('.row').css({marginRight: '0'})
        $('.countImage').css({marginLeft : '250px'}, 50)
        $('#inputs').removeClass('col-md-6')
        $('#inputs').addClass('col-md-5')
        $('.contactSec').css({marginLeft : '300px'}, 50)
        $('.sliderDownSec').css({marginLeft: '370px'} ,50)

    }
})


//Slider
$('.title').on('click',function(e){
    $(e.target).next().slideToggle(500);
    $('.paragraph').not($(e.target).next()).slideUp(500); 
});


//Scroll of body
$(".sideNav a").on('click',function(e){
    
    let sectionId= $(e.target).attr("href");
    let positionOfSection = $(sectionId).offset().top;
    
    //console.log(positionOfSection);

    $("html , body").animate({scrollTop :positionOfSection} ,2000);
    
});


//Date CountDown
$('.countLayer').countdown("2025/10/25", function(e){

    $('#day').text(e.strftime('%D D'));
    $('#hours').text(e.strftime('%H h'));
    $('#minutes').text(e.strftime('%M m'));
    $('#seconds').text(e.strftime('%S s'));

});


// Count the number of characters in the message
$('#textarea').on('keyup', function(e){
   // console.log(e.target.value.length);

   let lenOfChar= $(e.target).val().length;
   //console.log($(e.target).val().length);

   if (lenOfChar > 100){
    $('#number').text('your available character finished')
   }else {
        $('#number').text(100 - lenOfChar);
    }
})


