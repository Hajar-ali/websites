
function del(){
    var x= document.getElementsByClassName("btn-danger");
    for(var i=0;i<x.length;i++)
    {
   x[i].addEventListener("click",function(e){console.log(arr.indexOf(e.target))});
    }
}


var arr=[];
var button=document.querySelector("button");
button.addEventListener("click",function(){add();});

function add()
{
    var name=document.getElementById("productName").value;
    var price=document.getElementById("productPrice").value;
    var cat=document.getElementById("productCategory").value;
    var onsale;
    var check=document.getElementsByName("sale")[0].checked;
    if(check == true)
      {
        onsale=true;
      }

      else {onsale=false}
    
//     var obj={
//         name:name,
//         price:price,
//         cat:cat,
//         sale:onsale
//     }

// var Obj=function(name,price,cat,onsale)
// {
//     this.name=name;
//     this.price=price;
//     this.cat=cat;
//     this.sale=onsale;
// }

// var data=new Obj(name,price,cat,onsale);

class Obj{
    constructor(){
    this.name=name;
    this.price=price;
    this.cat=cat;
    this.sale=onsale;  
    }   
}
var data=new Obj(name,price,cat,onsale);

arr.push(data);
display();
clear();
del();
}

function display(){
    var temp=``;
for(var i=0;i<arr.length;i++)
{
    
    temp+=`
    <div class="col-md-3">
    <img src="images/1.jpg" class="img-fluid">
    <p>${arr[i].name}</p>
    <p>${arr[i].price}</p>
    <p>${arr[i].cat}</p>
    <button class="btn btn-danger">delete</button>
    `
     
    if(arr[i].sale==true)
    {
    temp+=`
    <span>sale</span>`
    }
    temp +=`</div>
    </div>`;

}

document.getElementById("productRow").innerHTML=temp;
}

function searchProducts(term)
{
    temp=``;
  for(var i=0;i<arr.length;i++)
  {  
if(arr[i].name.toLowerCase().includes(term.toLowerCase()))
{
    temp+=`
    <div class="col-md-3">
    <p>${arr[i].name}</p>
    <p>${arr[i].price}</p>
    <p>${arr[i].cat}</p>
    <button class="btn btn-danger">delete</button>
    `
     
    if(arr[i].sale==true)
    {
    temp+=`
    <span>sale</span>`
    }
    temp +=`</div>
    </div>`;

}
}

document.getElementById("productRow").innerHTML=temp;
}

searchProducts();

function clear(){
    var c=document.getElementsByClassName("form-control");
    for(var i=0;i<c.length;i++)
    {
        c[i].value="";
    }
}

// $(".item").click(function(){
// var source=$(this).attr("src");
// $(".big").attr("src",source);    
// });