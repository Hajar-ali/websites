$(document).ready(function(){
    
$("section.package main span").hover(function(){
 $(this).css({"background":"transparent","transition":"all .1s ease-in-out"});   
});    
$("section.package main span").mouseleave(function(){
 $(this).css({"background":"#FE5C24","transition":"all .1s ease-in-out"});               
});


$("a").hover(function(){
$(this).css({"color":"#FE5C24","transition":"all .3s ease-in-out"});
//$(this).children("i").css({"display":"none","transition":"all .5s ease-in-out"});
});
$("a").mouseleave(function(){
$(this).css({"color":"#0C3E72","transition":"all .3s ease-in-out"});
//$(this).children.fadeIn().css({"transition":"all .5s ease-in-out"});
});
$("aside a").hover(function(){
$(this).css({"background":"#2493E0","transition":"all .5s ease-in-out"});        
});
$("aside a").mouseleave(function(){
 $(this).css({"background":"#FE5C24","transition":"all .5s ease-in-out"});               
});

$("input").attr("type","text").focus(function(){
$(this).css({"outline":"none","transition":"all .5s ease-in-out"});
$(this).attr("placeholder","");
});

$("input").attr("type","text").blur(function(){
$(this).attr("placeholder","Search");
});


$("aside:nth-child(2)").find("a").hover(function(){
$(this).css({"color":"#FE5C24","background":"transparent"});    
});


$("aside:nth-child(2)").find("a").mouseleave(function(){
$(this).css({"color":"#777","background":"transparent"});    
});


$("aside:nth-child(3)").find("a").hover(function(){
$(this).css({"color":"#FE5C24","background":"transparent"});    
});


$("aside:nth-child(3)").find("a").mouseleave(function(){
$(this).css({"color":"#777","background":"transparent"});    
});





});