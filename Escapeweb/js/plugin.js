$(document).ready(function(){
$("header").height($(window).height());

$(window).scroll(function(){
    if($(window).scrollTop()>=150)   
       {
         $("nav").css({"background-color":"#41497A","padding":"10px 0","transition":"all .5s ease-in-out"});
        //  $("a").css({"color":"red"});
       }
       else
       $("nav").css({"background-color":"transparent"});
    //    $("nav a").css({"color":"white"});

});
});

document.getElementsByClassName("icon")[2].style.position="relative";
"relative"
document.getElementsByClassName("icon")[2].style.top="40px";

document.getElementsByClassName("icon")[3].style.position="relative";
"relative"
document.getElementsByClassName("icon")[3].style.top="30px";

document.getElementsByClassName("icon")[4].style.position="relative";
"relative"
document.getElementsByClassName("icon")[4].style.top="20px";
document.getElementsByClassName("icon")[5].style.position="relative";
"relative"
document.getElementsByClassName("icon")[5].style.top="10px";

/*form*/
var inputs=document.querySelectorAll("input");
function empty()
{
for(var i=0;i<inputs.length;i++)
{
  inputs[i].value="";
}
}
/*validation*/
function validateform(mail){
var emailRejex=/[A-Za-z0-9_+*&%]{2,6}[A-Za-z0-9]{2,6}@[a-z]{2,7}\.[a-z]{2,3}$/;
if(emailRejex.test(mail)== false)
{
document.getElementById("send").disabled="true";
}
else
{
document.getElementById("send").removeAttribute("disabled");
}
}

function validation()
{
  var name=document.getElementById("myname").value;
  var mail=document.getElementById("email").value;
  var msg=document.getElementById("des").value;
  if(name=="")
  {
    document.querySelector(".name").style.display="block";
    document.querySelector(".name").innerHTML="please enter your email";
  }
  else{document.querySelector(".name").style.display="none";}
  if(mail=="")
  {  
    document.querySelector(".email").style.display="block";
    document.querySelector(".email").innerHTML="please enter your email name";
  }
  else{document.querySelector(".email").style.display="none";}
  if(msg=="")
  {
    document.querySelector(".msg").style.display="block";
    document.querySelector(".msg").innerHTML="please enter your dsecription";
  }
 else{document.querySelector(".msg").style.display="none";}
}