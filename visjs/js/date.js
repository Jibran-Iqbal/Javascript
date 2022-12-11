myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
// Gives the time in seconds
console.log(myDate.getFullYear());
console.log(myDate.getDay());//Starts with sunday=0;
console.log(myDate.getMinutes());
console.log(myDate.getHours());
// In the console write document to get the html document
// donument.getElementById("Name").click will click it
// Similarly .style.border = '2px solid blue' 
// Will make the respective css changes
// 
// The whole html is dom
// 
// DOM Manipulation
elem=document.getElementById('click');
console.log(elem);
e=document.getElementsByClassName('container'); 
console.log(e);
// Type gebc for gebc and gebi for gebi
// 
// Css in js
e[0].style.background = "yellow"
e[1].classList.add('cl1');
e[1].classList.add("text");
e[1].classList.remove("text");
// In the console type e[1].innerHTML to get its html code
// e[1].innerTEXT to get its text
console.log(e[0].innerHTML)
console.log(e[1].innerText)
// Get element by tag name
t=document.getElementsByTagName('div');
console.log(t);
// 
// Adding and replacing elements
createdElement=document.createElement('h3');
createdElement.innerText="This element has been created"
t[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This element has been created and replaced"
t[0].replaceChild(createdElement2,createdElement);
// removeChild(element);   This removes and element
// 
// Selecting using query
// This gives the first element with container as class name
sel=document.querySelector(".container");
console.log(sel);
// And this gives all
sel=document.querySelectorAll(".container");
console.log(sel);
// 
// 
// Events in JavaScript
// 
// see html of click
function clicked()
{
    console.log("The button was clicked");
    let r=document.getElementsByClassName("container");
}
window.onload=function()
{
    // console.log("The document was loaded");
}
// 
// Event listener works only with id    
// 
click.addEventListener("click", function(){
    console.log("It got clicked");
    click.style.background="Yellow"
})
cont.addEventListener('mouseover', function(){
    cont.style.background='blue';
})
cont.addEventListener('mouseout', function(){
    cont.style.background='cyan';
})
// mouse up when you click and hold
click.addEventListener("mouseup",function(){
    click.style.color="cyan";
})
click.addEventListener("mousedown",function(){
    click.style.background="red";
})
prevHTML=document.querySelectorAll(".container")[2].innerHTML;
click.addEventListener("mousedown",function(){
    document.querySelectorAll(".container")[2].innerHTML="<b>We have clicked</b>"
})
click.addEventListener("mouseup",function(){
    document.querySelectorAll(".container")[2].innerHTML=prevHTML;
})
// Arrow Functions
// function sum(a,b)
// {
//     return a+b;
// }
sum=(a,b)=>{
    return a+b;
}
console.log(sum(33,11));
// 
// settimeout and setinterval
prevHTML=cont.innerHTML
ln=()=>{
    // console.log("I am your log");
    cont.innerHTML="Set timeout fired";
}
lnn=()=>{
    cont.innerHTML=prevHTML;
}
// The first argument of setTimeout is a function
setTimeout(ln,2000);
setTimeout(lnn,4000);
// After 2 seconds it gives that message
// 
// If we want to repeat something then we can use set interval
nn=()=>{
    console.log("I am abc");
}
// setInterval(nn,2000);
// This will get repeated every 2 seconds
// However it can be stopped
// 
// 
// ccc=setInterval(nn,2000);
// clearInterval(ccc); By typing this in the console that is
// 
// Similarly setTimeout can be cancelled by using 
// clearTimeout(name);
// 
// localStorage
// type localStorage.setItem('name','abc')
// localStorage to get the items
// localStorage.clear
// All the websites have localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// 
// localStorage should not store alot of data and important data 
// It is easily accessible in the applications bar of the inspect tools
// 
// JSON
// 
obj={
    name:'abc',
    length:1,
    a:{
        this:'that'
    }
}
js=JSON.stringify(obj);
// Now after making this object a string we can easily transfer it 
console.log(js);
console.log(typeof(obj));
console.log(typeof(js));
// JSON uses only double quotes
// converts single to double and double to escape characters if they are a part of the property
// 
// This is used to convert strings back to objects
// parsed=JSON.parse(js);
// Another way to write that is
// 
parsed=JSON.parse(`{"name":"abc","length":1,"a":{"this":"that"}}`);
// Here I have used back ticks
console.log(parsed);
console.log("Type of parsed="+typeof(parsed));
// backticks = Template Literals
a=10;
console.log(`This is my ${a}`);