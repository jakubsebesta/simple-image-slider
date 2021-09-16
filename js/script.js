(function($){
var covers = $('.fadecovers'),
    next = $('#next'),
    previous = $('#previous');


next.on('click', function(){

    if (covers.children(':last').hasClass('active')){

        $('.active').removeClass('active');
        covers.children(':first-child').addClass('active');
        console.log('konec');
    }

    else{

        $('.active').removeClass('active').next().addClass('active');

    }
    
});


previous.on('click', function(){

    if(covers.children(':first-child').hasClass('active')){
        $('.active').removeClass('active');
        covers.children(':last-child').addClass('active');
        console.log('zaciatok');

    }

    else{

        $('.active').removeClass('active').prev().addClass('active');

    }
   
    
});


       
   
})(jQuery);
   

   
  

  

  
