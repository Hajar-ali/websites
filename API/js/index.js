var allData=[];
var request=new XMLHttpRequest();

request.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2XeP3uEbymdUJBSn1IJLysdTCxx1q9j3pHUPpwcwtDbHRAb9-SSYmZ4Pc");

request.send();

request.onreadystatechange=function(){
if(request.readyState == 4 && request.status==200)
{
    allData=JSON.parse(request.response).results;
    console.log(allData);
    display();

}
}

function display()
{
    var temp=``;
    for(var i=0;i<allData.length;i++)
    {
  temp+=`
  <div class="col-md-4">
  <div class="item my-4">
  <img src="https://image.tmdb.org/t/p/w500/`+allData[i].poster_path+`" class="img-fluid ">
  <div class="overlay text-center">
  <h2>${allData[i].title}</h2>
  <p>${allData[i].overview}</p>
  <p>${allData[i].vote_average}</p>
  <p>${allData[i].release_date}</p>
  </div>
  </div>
  </div>
  `;
    }

    document.querySelector(".movies").innerHTML=temp;
}

// $(document).ready(function(){
//  $(".item").hover(function(){
//  $(this).find(".overlay").animate({transition:"all .5s ease-in-out",top: '0px'});
//  });
//  $(".item").mouseleave(function(){
//   $(this).find(".overlay").animate({transition:"all .5s ease-in-out",top: '100%'});
// });
//  });

function search(term){
    var temp=``;

if(term != undefined)
{
for(var i=0 ;i<allData.length;i++)
{


if(allData[i].title.toLowerCase().includes(term.toLowerCase() ))
{
    temp+=`
    <div class="col-md-4">
    <div class="item my-4">
    <img src="https://image.tmdb.org/t/p/w500/`+allData[i].poster_path+`" class="img-fluid ">
    <div class="overlay text-center">
    <h2>${allData[i].title}</h2>
    <p>${allData[i].overview}</p>
    <p>${allData[i].vote_average}</p>
    <p>${allData[i].release_date}</p>
    </div>
    </div>
    </div>`;
}
}
}
document.getElementById("mymovie").innerHTML=temp;
}

$("li").eq(2).click(function(){
allData.sort();
allData.sort(function(a, b){
    return a - b;
});
display();

});
/*navbar*/
var wids=$("nav").outerWidth(true);
$(".aside").animate({left:`-${wids}`});
$("i").click(function(){
$(this).toggleClass("fa-sliders-h");
$(this).toggleClass("fa-times");
$(".aside").animate({left:"0px"});
if($(".aside").css("left")=="0px")
{
  $(".aside").animate({left:`-${wids}`});
}
$("li").animate({top:"10px"},1000);

if($(".aside").css("left")==`-${wids}`)
{
  $(".aside").animate({left:"0px"});
}
});

/*form*/
$("input").focus(function(){
  $(this).next().css("display","block");
});

$("input").blur(function(){
  $(this).next().css("display","none");
});

$("input").keydown(function(){
$(this).next().css("display","none");
});

function validateformname(name){
var nameRejex=/[A-Za-z]{2,6}$/;
if(nameRejex.test(name)== false)
{
document.getElementById("send").disabled="true";
}
else
{
document.getElementById("send").removeAttribute("disabled");
}
}

function validateformphone(phone){
var phoneRejex=/^(01)[0125][0-9]{7}$/;
if(phoneRejex.test(phone)== false)
{
document.getElementById("send").disabled="true";
}
else
{
document.getElementById("send").removeAttribute("disabled");
}
}

function validateformmail(mail){
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

function validateformpass(pass){
var passRejex=/[A-Za-z0-9+_#$%]{4,10}$/;
if(passRejex.test(pass)== false)
{
document.getElementById("send").disabled="true";
}
else
{
document.getElementById("send").removeAttribute("disabled");
}
}

function validateformage(age){
var ageRejex=/[0-9][0-9]$/;
if(ageRejex.test(age)== false)
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
   var name=document.getElementById("name").value;
   var mail=document.getElementById("email").value;
   var pass=document.getElementById("pass").value;
   var phone=document.getElementById("phone").value;
   var age=document.getElementById("age").value;
   if(name=="")
   {
     document.querySelector(".name").style.display="block";
     document.querySelector(".name").innerHTML="please enter your email";
   }
   else{document.querySelector(".name").style.display="none";}
   if(mail=="")
   {
     document.querySelector(".mail").style.display="block";
     document.querySelector(".mail").innerHTML="please enter your email name";
   }
   else{document.querySelector(".mail").style.display="none";}
   if(pass=="")
   {
     document.querySelector(".pass").style.display="block";
     document.querySelector(".pass").innerHTML="please enter your dsecription";
   }
  else{document.querySelector(".pass").style.display="none";}
    if(phone=="")
   {
     document.querySelector(".phone").style.display="block";
     document.querySelector(".phone").innerHTML="please enter your dsecription";
   }
  else{document.querySelector(".phone").style.display="none";}
   if(age=="")
   {
     document.querySelector(".age").style.display="block";
     document.querySelector(".age").innerHTML="please enter your dsecription";
   }
  else{document.querySelector(".age").style.display="none";}
 }
