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
$("form select").focus(function(){
 $(this).css("border-color","$third-color");
 });
$(".booking li a").click(function(){
$(this).css({"border-bottom":"2px solid #337ab7","text-decoration":"none"}).parent().siblings().find("a").css("border-bottom","none");    
   
    });
//$(body).css("padding-top",$("nav.navbar").innerHeight());

$("li.dropdown").hover(function(){
  $(this).find("ul.dropdown-menu").fadeIn().css({"border-radius":"12px","box-shadow":"none"});
//$(this).children("ul.dropdown-menu").css("top","80px").addClass("classz");
});

$("li.dropdown").mouseleave(function(){
  $(this).find("ul.dropdown-menu").fadeOut().css({"border-radius":"12px","box-shadow":"none"});
});

$("nav").mouseleave(function(){
  //$("ul.dropdown-menu").fadeIn().css({"top":"158%","border-radius":"20px"});
$("ul.dropdown-menu").removeClass("classz");

});



//var menu=document.getElementById("dropdown1");
//var list=document.getElementById("list1");

//menu.on=("hover",function(){
//list.style.color="red";    
    
    //});
    
$(".hotel-caption li:last-child i").hover(function(){
 $(this).css("transform","rotateY(90deg)").css("transition","all .5s ease-in-out ");
 $(this).parent().siblings().find("i").css("visibility","visible");
 $(this).parent().parent("ul").css("transform","rotateX(360deg)").css("transition","all .5s ease-in-out .4s");
 
 });


  $(".navbar-default .navbar-toggle ").onclick=(function(){
   $(this).css({"border-color":"transparent"});  
  });
});

var x= document.getElementById("mail");
x.onfocus=function(){
 x.placeholder="";
x.style.outline=0; 
 };
  
x.onblur=function(){
 x.placeholder="type your email";
 };  