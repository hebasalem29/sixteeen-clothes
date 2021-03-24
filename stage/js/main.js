$(function()
{
    "use strict";
    $(".div8").on('click',function()
    {
        $('.sub1').fadeToggle();
      //  console.log("hi");
    });
    $(window).on('scroll',function()
    {
        if($(this).scrollTop()>600)
        {
            $(".navbar").addClass('po');
            $(".ji").addClass('med');
           // $(".navbar").css('position','fixed');
        }
        else{
            $(".navbar").removeClass('po');
            $(".ji").removeClass('med');
        
        }
    });


    $(window).on('load',function()
    {
        $('.overlay').fadeIn(500);
       // $(".sk-spinner-double-bounce").fadeOut(400);
    
        $('.overlay').fadeOut();
    });

    

});