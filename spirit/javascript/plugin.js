
/*Write a program that allow to user enter number then printit*/
var x=window.prompt("enter the number");
window.alert(x);


/*Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no*/
var x=window.prompt("enter number which availab by 3");
if(x % 3 === 0)
{alert("yes");}
else
alert("no");

/*Write a program that allows the user to insert 2 integers then print the max*/
var x=window.prompt("enter the first num");
var y=window.prompt("enter the second num");
if(x > y)
alert("the max num is" + x);
else {
  alert("max is" + y);
}

/*Write a program that allows the user to insert an integer then print negative if it is negative
number otherwise print positive.*/
var x=window.prompt("enter number");
if(x > 0)
alert("positive");
else if(x < 0)
alert("negative");

/*Write a program that take 3 integer from user then print the max element and the min
element.*/
var x=prompt("enter first number");
var y=prompt("enter second number");
var z=prompt("enter third number");
if(x>y && x>z)
alert("max elemnet is : "+ x);
else if(y>x && y>z)
alert("max element is : " + y);
else alert("max element is :" + z);
if(x<y && x<z)
alert("min element is : "+ x);
else if(y<x && y<z)
alert("min element is : " + y);
else alert("min element is : " + z);

/*Write a program that allows the user to insert integer number then Even or Odd*/
var x= prompt("enter number : ");
if(x%2 == 0)
alert("even")
else alert("odd");

/* Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print
vowel otherwise print consonant*/
var x=prompt("enter the character : ")
if(x=='a' || x=="e" || x=="o" || x=="i" || x=="u")
alert("it is a vowel number");
else {
  alert("constant");
}


/*Write a program that allows user to insert integer then print all numbers between 1 to
that’s number */
var x=prompt("enter number : "),
i;
for(i=1;i<=x;i++)
{
alert(i);
console.log(i);
}

/*Write a program that allows user to insert integer then print a multiplication table up to 12.*/
var x=prompt("enter number");
var i=1;
while(i<=12)
{
  var z=i*x;
  alert(z);
  i++;
}


/*Write a program that allows to user to insert number then print all even numbers
between 1 to this number*/
var x=prompt("enter number");
for(var i=1; i<=x ;i++)
{
  if(i % 2 ==0)
  alert(i);
}


/*Write a program that take two integers then print the power*/
var x=prompt("enter your number : ");
var y=prompt("enter the power");
var z=Math.pow(x,y);
alert(z);

/*CalculateAverageofNumbersUsingArrays(assumesize=10)*/
var a=[2,4,6,1,9,5,4,3,2,3];
var i;
var z=0;
for(i=0;i<a.length;i++)
{
    z+=a[i];
}
alert(z);
console.log(z);

/*Reverse array in another array*/
var a=[1,2,3]
alert(a.reverse());

/*14- Create function take an integer then print it*/
var x;
function myfun(){
  x=prompt("enter number");
  return x;
}
alert(myfun(x));


/*Createfunctiontakethreeintegersthenreturntheaverage.*/

var x,y,z,ave;
function average(){
  x=prompt("enter number");
  y=prompt("enter number");
  z=prompt("enter number");
  ave = (x+y+z)/3;
 return Number(ave);
}

alert(average(ave));

 /*session*/

var mail="hagersamer@yahoo.com";
var makanelat=mail.indexOf("@");
var name=mail.slice(0,makanelat);
console.log(name);
var domain=mail.slice(makanelat+1,mail.length);
console.log(domain);


/*session*/
var user = {
  name:"hager",
  age:26,
  marry:false,
  car:{
    name:"volvo",
    model:2000,
  }
}

console.log(user.car.model);
