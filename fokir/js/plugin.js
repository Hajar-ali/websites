$(window).scroll(function(){

 if($(window).scrollTop() > 2000)
 { 


    var x=document.getElementsByTagName("h2")[6].innerHTML; 

    setInterval(function(){x++},2000);
    
     
 }  

});


function reInitCount(){
  $("h2").each(function() {
    $(this).html('0');
    count($(this));
  });
}

function count($this) {
  var current = parseInt($this.html(), 10);
  current = current + 1;
  $this.html(++current);
  if (current > $this.data('count')) {
    $this.html($this.data('count'));
  } else {
    setTimeout(function() {
      count($this)
    }, 1);
  }
}

reInitCount();


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
      if(scroll == 0)
         setTimeout(function(){reInitCount();},500);
      
         
});