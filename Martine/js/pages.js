$(document).ready(function(){
$("header nav.navbar-default ul.nav li a").click(function(){
 $("html,body").animate({
 scrollTop:$('#' + $(this).data("scroll")).offset().top   
    },2000);    
   });

   
$("header nav.navbar-default ul.nav li a").click(function(){
$(this).parent("li").addClass("activeme").siblings().removeClass("activeme");
});
 
 $(window).scroll(function(){
 $(".blocke").each(function(){
    
    if($(window).scrollTop() >= $(this).offset().top)
    {
        var id= $(this).attr('id');
        //$('nav.navbar-default ul.nav li a[data-scroll="' +id+ '"]').parent("li").addClass("activeme");
        console.log(id);
    }
        
    });   
    
    
    });
 
 
 $(window).scroll(function(){
if($(window).scrollTop()>300)
{
$("button.top").show();
$("button.top").click(function(){
 $("body,html").animate({
    scrollTop:0
    },2000);   
 //$(window).scrollTop(0);   
    });
}
else
$("button.top").hide();
    
    });

 
   
});  