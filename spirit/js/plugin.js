$(document).ready(function(){
$("nav li a").hover(function(){
$(this).css({color:"#8C8DCA",transition:"all 0s ease-in-out"});
$(this).children("span").css("visibility","visible");
    });
$("nav li a").mouseleave(function(){
$(this).css({color:"#fff",transition:"all 0s ease-in-out"});
$(this).children("span").css("visibility","hidden");
    });

$(window).scroll(function(){
if($(window).scrollTop()>100)
{$("nav").css({position:"fixed",
              backgroundColor:"#fff",
              width:"100%",padding:"15px 0",
              transition:"all .3s ease-in-out"});
$("nav a").css({color:"rgb(85,85,85)"});
}
else
{
    $("nav").css({position:"relative",zIndex:"9999999999",backgroundColor:"transparent"});
    $("nav a").css({color:"#fff"});
}

    });
$(".personal-info span").hover(function(){
$(this).css({cursor:"pointer",color:"#fff",transition:"all .3s ease-in-out"});  
    });
$(".personal-info span").mouseleave(function(){
$(this).css({color:"#8C8DCA",transition:"all .3s ease-in-out"});
});

$(window).scroll(function(){
 if($(window).scrollTop() > 1000)
 {
$(".progressz span").each(function(){
$(this).animate({width:$(this).attr('data-progress')},2000);
});
}
});

$(".portfolio-model a").click(function(e){
e.preventDefault();
});


$(".model").click(function(){
$(".description").css({display:"block",transition:"all .3s ease-in-out"});     
});


$(".description").click(function(){
$(this).css("display","none");
$(".info").click(function(e){
  e.stopPropagation();
$(".info span").click(function(){
  $("this .description").css({display:"none",transition:"all .3s ease-in-out"});   
    });
	$(document).keyup(function(event) { //keypress event, fadeout on 'escape'
				if(event.keyCode == 27) {
                    $(".description").css({display:"none",transition:"all .3s ease-in-out"}); 
                }
    });
    });
    });




$("a .modeltwo").click(function(){
$(".descriptiontwo").css({display:"block",transition:"all .3s ease-in-out"}); 
    });

$(".descriptiontwo").click(function(){
$(this).css("display","none");
$(".info").click(function(e){
  e.stopPropagation();
$(".info span").click(function(){
  $(".descriptiontwo").css({display:"none",transition:"all .3s ease-in-out"});   
    });
	$(document).keyup(function(event) { //keypress event, fadeout on 'escape'
				if(event.keyCode == 27) {
                    $(".descriptiontwo").css({display:"none",transition:"all .3s ease-in-out"}); 
                }
    });
    });
    });

    
    
$("a .modelthree").click(function(){
$(".descriptionthree").css({display:"block",transition:"all .3s ease-in-out"}); 
    });

$(".descriptionthree").click(function(){
$(this).css("display","none");
$(".info").click(function(e){
  e.stopPropagation();
$(".info span").click(function(){
  $(".descriptionthree").css({display:"none",transition:"all .3s ease-in-out"});   
    });
	$(document).keyup(function(event) { //keypress event, fadeout on 'escape'
				if(event.keyCode == 27) {
                    $(".descriptionthree").css({display:"none",transition:"all .3s ease-in-out"}); 
                }
    });
    });
    });

   $(".mynav a").click(function(e){
   e.preventDefault();
    }); 

   $(".mynav li:nth-of-type(2) a").click(function(){
    $(".model").fadeOut(200);
    $(".modelthree").fadeOut(200);
    $(".modeltwo").fadeIn(2000);
    });
   
    $(".mynav li:nth-of-type(3) a").click(function(){
    $(".modeltwo").fadeOut(200);
    $(".modelthree").fadeOut(200);
    $(".model").fadeIn(200);
    });
    
   $(".mynav li:nth-of-type(1) a").click(function(){
    $(".model").fadeIn(200);
    $(".modelthree").fadeIn(200);
    $(".modeltwo").fadeIn(200);
    });
   
   $(".mynav li:last-of-type a").click(function(){
    $(".model").fadeOut(200);
    $(".modeltwo").fadeOut(200);
    $(".modelthree").fadeIn(200);
   
    });
   
$('.carousel').carousel({
  interval: 2000
});

$(".contact input").focus(function(){
$(this).attr("placeholder","");
    });

$(".contact input").blur(function(){
$(this).attr("placeholder","type");
    });
$(".option span").click(function(){
$(".option .color").fadeToggle(200);
 });
});