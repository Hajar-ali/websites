$("nav span").click(function(){
$(".hall-overlay").css({opacity:"1",width:"100%",transition:"all 3s ease-in-out"});
$("nav span").css({display:"none",transition:"all 3s ease-in-out"});
$("nav .fa-times").css({display:"block",transition:"all 3s ease-in-out"});
})
$("i").click(function(){
  $(".hall-overlay").css({opacity:"0",width:"0%",transition:"all 3s ease-in-out"});
$("nav span").css({display:"block",transition:"all 3s ease-in-out"});
$("nav i").css({display:"none",transition:"all 3s ease-in-out"});
})
