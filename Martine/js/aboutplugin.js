$(document).ready(function(){
 $("a").click(function(e){
  $(this).css("text-decoration","none");
 });
  $(window).scroll(function(){
 if($(window).scrollTop()>=200)   
    {
      $("nav.navbar").css({"position":"fixed","width":"100%","margin-top":"-50px","padding":"10px 0","transition":"all .5s ease-in-out"});
      
    }
    else
    $("nav.navbar").css({"position":"static","padding":"30px 0","margin-top":"0"});
});
 
  });
 
 