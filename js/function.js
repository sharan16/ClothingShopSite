$(window).scroll(function(){

  var wScroll=$(this).scrollTop();

  //console.log(wScroll)

  $('h1').css({

    'transform':'translate(0px,'+ wScroll /10 +'%)'
  });



  if(wScroll>$('.model-pics').offset().top-($(window).height() / 1.15)){
    $('.model-pics figure').each(function(i){

      setTimeout(function(){
      $('.model-pics figure').eq(i).addClass('is-showing');
      console.log("hi")
    }, 300 * (i+1));
    });
  }

});
