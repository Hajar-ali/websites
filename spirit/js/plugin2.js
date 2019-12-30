$(document).ready(function(){

$(".contact input").focus(function(){
$(this).attr("placeholder","");
    });

$(".contact input").blur(function(){
$(this).attr("placeholder","type");
    }); 
    });