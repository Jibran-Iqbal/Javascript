//in-line comment
/*Multi-Line
comment*/
// Data Types
// undefinted, null, boolean, string, symbol, number and object

var myName = "Jibran";
// Can be anywhere within the program

myName = 35;

// 3 ways to declare a variable

let myN="JJJJ";
// let will only be used within the scope where you declare that

const pi=3.14;
// This value can never change

// 
// The semi-colon can be skipped
// It is better to use semi-colon
var b;
var a=10;
a=7;
console.log(b);
b=a;

console.log(a);
console.log('Hello')
// This allows us to see things in the console
// Keep js at the end of the body
var c="I am a ";

a=a+1;
b=b+a;
c=c+ "String";
console.log(a);
console.log(b);
console.log(c);
// JS is case-sensitive
// This how we put quotes inside a string
d="I am a string inside a \" double quoted string \"";
console.log(d);
// Another method to put double quotes inside the string is the enclose the string with single quotes
e='Hello" jj';
console.log(e);
/*
other escape sequences are...
\'      single quote
\"      double quote
\\      backslash
\ns     newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*/
var f="FirstLine\n\t\\SecondLine\nThird line";
console.log(f);
g="First"+"Second";
g+="Third\t"+f+"\tFourth";
console.log(g);
h="abcdefghi";
hh=h.length;
console.log(hh);
console.log("hhhhhhhhhhhhh");
console.log(h[4]);
i="Jello world";
// Strings are immutable 
i="Hello world";
var ourArray=["John",23]
// Nested Array
var ourArray1=[["The Universe",42],["Everything",101001]];
console.log(ourArray);
var data=ourArray[1];
console.log(data);
ourArray[1]=55;
console.log(ourArray[1]);
var myArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(myArray[2][1]);
// 
// Using push and pop with arrays
// push adds an element at the end
// pop removes an element from the ending
var ourArray2=["Stimpson","j","cat"];
ourArray2.push(["happy","joy"]);
ourArray2.push("Hiiiiii");
console.log(ourArray2);
var a=[1,2,3];
console.log(a);
var r=a.pop();
console.log(a);
console.log(r);
// 
// Manipulate arrays with shift
// The shift function similar to pop except it removes the first element of the array
var b=[1,2,3];
console.log(b);
var r1=b.shift();
console.log(b);
console.log(r1);
var ar=[["Hello","World"],["abcd","efgh"]];
console.log(ar);
console.log(ar.shift());
console.log(ar);
// 
// The unshift is similar to push but instead of adding an element to the ending of the array it adds it to the beginning of the array
var c=[["John",23],["James",3]];
console.log(c[0]);
c.shift();
console.log(c[0]);
c.unshift(["Paul",35]);
console.log(c[0]);
// 
// Functions
// 
function ReusableFunction(){
    console.log("Hi,world");
}
ReusableFunction();
ReusableFunction();
ReusableFunction();
function withArg(a,b)
{
    console.log(a-b);
}
withArg(10,6);
// 
// Global variables
// 
var myGlobal=10;

function fun1(){
    oopsGlobal=5;
    // Now here even this variable is a global variable as we didn't use the "var" keyword
    // However not many editors support this scrimba doesn't
    // 
    // Variables declared inside the function with the var keyword have a local scope
}
function fun2(){
    var output="";
    if(typeof myGlobal !="undefined")
    {
        output+="MyGlobal: "+myGlobal+"\n";
    }
    if(typeof oopsGlobal!="undefined")
    
    output+="oopsGlobal: "+oopsGlobal;

    console.log(output);
}
fun1();
fun2();
// 
// Local and Global variables can have the same name
// 
//Functions
// 
function minusSeven(num)
{
    return num-7;
}
console.log(minusSeven(10));
var sum=0;
function addThree(){
    sum+=3;
}
// If you log the above function it would be undefined
// 
// Simulating queues
// 
function Q(arr,item){
    arr.push(item);
    return arr.shift();
}

var tarray=[1,2,3,4,5];
console.log("Before: "+JSON.stringify(tarray));
console.log(Q(tarray,6));
console.log("After: "+JSON.stringify(tarray));
// The JSON is used to print the array in a string like manner
// 
// Booleans are supported in the manner of true and false without quotations
//
// Use of if statements
function TorF(t){
    if(t)
        return "Yes,it is true";
    else
        return "No,it is false";
}
console.log(TorF(5<3));
console.log(TorF(5>=3));
// Logical operators are supported
// there is also === which is called strict equality operator
console.log("Checking the === operator")
console.log(TorF(3=="3"));
console.log(TorF(3==="3"));
console.log(TorF(3===3));
console.log("Not equal operator");
console.log(TorF(3!="3"));
console.log("Strict inequality operator");
console.log(TorF(3!=="3"));
//
// Comparison using logicaln AND operator
//
console.log("Using the logical AND operator");
console.log(TorF(5>3 && 6>7));
console.log(TorF(5>3 && 6<7));
//Using the OR operator
console.log("Using the logical OR operator");
console.log(TorF(5>3 || 6<7));
// 
// Switch Case
// 
console.log("Switch Case");
function switchCase(a){
    var answer="";
    switch(a){
            case 1:
                answer="alpha";
                break;
            case 2:
                answer="beta";
                break;
            case 3:
                answer="gamma"
                break;
            case 4:
                answer="delta";
                break;
            default:
                answer="Inavalid choice";
    }
    return(answer);
}
console.log(switchCase(1));
console.log(switchCase(2));
console.log(switchCase(3));
console.log(switchCase(4));
console.log(switchCase(5));
// Switch can be used without break
console.log("Weird Case idea");
function swca(a){
    var answer="";
    switch(a){
            case 1:
            case 2:
            case 3:
                answer="High"
                break;
            case 4:
            case 5:
            case 6:
                answer="Medium"
                break;
            case 7:
            case 8:
            case 9:
                answer="Low"
                break;
            default:
                answer="Inavalid choice";
    }
    return(answer);
}
console.log(swca(2));
console.log(swca(4));
console.log(swca(8));
console.log(swca(10));
function com(a,b){
    return a<b;
}
console.log(com(10,15));
// 
// Objects
// Syntax:-
/* var varname={
    "property":"value",
    "property":"value",
};
*/
var stu={
    "name":"Sam",
    "subjects":6,
    "friends":["Many"],
    "likes dislikes":"something"
};
// Access objects using dot operator or bracker notation
// BRACKET notation is must if the obj property has space in it
var stuName=stu.name;
var subNum=stu.subjects;
var stuFrie=stu['friends'];
var stuLik=stu["likes dislikes"];
console.log(stuName);
console.log(subNum);
console.log(stuFrie);
console.log(stuLik);
// Bracker notation can also be used to access the property of the object using value
var testObj={
    10: "Hello",
    "Greetings": "Hi",
    11:"Nod",
    12: "Hola"
};
var objnum=10;
var player=testObj[objnum];
// Updating object property
testObj.Greetings="Hiii";
// Adding new property
testObj.wave="farewell";
testObj.salutations="Welcome";
// 2 new properties added
console.log(testObj[12]);
// Deleting the properties
delete testObj[11];
// We can use objects to lookup for certain values
console.log("Look");
function look(val){
    var result="";
    var tobj=testObj;
    result=tobj[val];
    return result;
}
console.log(look("Greetings"));
//The value of "Greetings" changed in a previous statement
// 
// Testing objects for particular properties
// 
function checkObj(checkProp){
    if(testObj.hasOwnProperty(checkProp))
    {
        return testObj[checkProp];
    }
    else
    {
        return "Not Found";
    }
}
console.log(checkObj("Greetings"));
console.log(checkObj("Salutations"));
// 
// Object within an array OR an array of objects
// 
var stuInfo=[
    {
    "name":"Sam",
    "subjects":6,
    "friends":["Many"],
    "likes dislikes":["something","Apples",44]
    },
    "Array can have anything inside of them",
    {
    "name":"Peter",
    "subjects":8,
    "friends":["Super"],
    "likes dislikes":["something",
    "Oranges",
    55]
    }
]
// 
// Objects inside an object can simply be accessed using multiple dots
// 
var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
        "trunk":"jack"
    }
    }
    };
var gloveBoxContents= myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
var myPlants=[
    {
        type:"Flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];
// Accessing nested array object elements
var myPlant=myPlants[1].list[1];
console.log(myPlant);
// delete objectName[property1][property2] to delete the object elements
//Assigning object elements
// objectName[property1][property2]=new_element
// 
// a=a || [] 
// That assigns a and empty array if a doesn't exist or has no value
i=0;
while(i<5)
{
    console.log(i++);
}
for(i=0;i<5;i++)
console.log((i+64));
var Arr=[];
for(i=0;i<10;i+=2)
Arr.push(i);
console.log(Arr);
var Ara=[1,2,3,4];
var total=0;
for(i=0;i<Ara.length;i++)
total+=Arr[i];
console.log(total);
function pro(arr)
{
    a=[];
    p=1;
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr[i].length;j++)
        p*=arr[i][j];
        a[i]=p
        p=1;
    }
    return a;
}
var b=[[1,2,3],[4,5,6,7],[2,2,2,2,2]];
console.log(pro(b));
var i=10;
var a=[];
do{
    console.log(i);
}while(i!=10)
// 
// Function to get a random fraction value between 0 and 1
// 
console.log(Math.random()); 
// 
// How to get random whole number within a range
// 
// Here we use floor function and the range is 0-19
var r=Math.floor(Math.random()*20);
console.log(r);
// Generating a random within a range that doesn't start with 0
function ran(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(ran(25,50))
// Integer parseInt converts strings to integers
function conv(a){
    return parseInt(a);
}
b=conv('45')
console.log(b);
// Passing numbers of different bases to parseInt other than 10 that is
function conv(c){
    return parseInt(c,2);
}
// Here the computer is aware that the number is of base 2 that is binary
d=conv('1100')
console.log(d);
// Ternary operator
function comp(a,b)
{
    return a>b?a:b;
}
console.log(comp(4,3));
// Nested ternary operator
function checkSign(num)
{
    return num>0?"Positive":num<0?"Negative":"Zero";
}
console.log(checkSign(-10));
console.log(checkSign(0));
console.log(checkSign(10));
// 
// var v/s let
// 
// var allows us to declare a variable more than once using the same name
// let doesn't
var a=10;
var a=20;
let jkl=10;
// let jkl=20; This will give an error 
jkl=30;
// However this is allowed
// var variable is a global variable
// let makes local variables
// Another thing is to use strict in functions
// 
// let variables if declared inside a block then their scope is in that block only
// This prevents from doing errors like using a variable without declaring it

function checkSign(num)
{
    "use strict";
    return num>0?"Positive":num<0?"Negative":"Zero";
}
// const can also be used to declare variables and those values cannot be changed
const JLK=10;
console.log(10);
// JLK=20; //This line throws an error
// Conventionally const varialbles have capital lettered names
// 
// Mutate an array using const
const ARR=[3,2,1]
console.log(ARR);
// ARR=[4,5,6] This gives and error however
ARR[0]=4;
ARR[1]=5;
ARR[2]=6;
// No error here
console.log(ARR)
// Preventing object mutation;
function freezeObj()
{
    "use strict";
    const MATH_CONSTANTS={
        PI:3.14,
        AD:33
    };
    // However we can still change object values
    MATH_CONSTANTS.AD=44;
    // To prevent this we use
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI=99;
    }
    catch(er){
        console.log(er);
    }
    return MATH_CONSTANTS.PI;
}
console.log(freezeObj());
// 
// Shortening anonymous functions
var magic=function(){
    return Date();
};
// A shorter way to write that is
var magic=() => Date();
var concat= function(a1,a2){
    return a1.concat(a2);
};
// A shorter way to write that is
var cc=(a1,a2) => a1.concat(a2);
console.log(cc([1,2],[3,4,5]));
// We can set default values for the parameters of a function
function de(a,b=1)
{
    // Here the default value of b is 1
    return [a,b];
}
console.log(de(3,4));
console.log(de(3));
// 
// We can use the rest operator to change all the passed values to an array values
function re(...args)
{
    // Here args is the name of the array
    return args;
}
console.log(re(1,2));
console.log(re(2,3,4));
// Copying arrays and spread operator
const ar1=['jan','feb','mar'];
console.log(ar1)
let ar2;
ar2=ar1;
ar1[0]='Jan'
console.log(ar2);
// Here changing ar1 also changed ar2
let ar3;
ar3=[...ar1];
ar1[1]='jjj';
console.log(ar3);
// Here changing ar1 did not change ar3
// 
// Destructuring assignment to assign object values to variables
// 
var v={x:2,y:6,z:5};

// One way to do this is 
var x=v.x;
var y=v.y;
var z=v.z;
// An easier way to do the same is
const {x:aa,y:bb,z:ccc} = v;
// So this is like get the value of x from v and assign it to aa
console.log(aa);
console.log(bb);
console.log(ccc);
// We can do the same to get value out from nested object
function getValOut(m)
{
    const {t:{m:h}}=m;
    return h;
}
l={
    t:{
        m:234,
        c:4
    },
    y:{
        n:3,
        u:5
    }
}
console.log(getValOut(l));
// Destructuring assignment on arrays
[a,b,,,e]=[1,2,3,4,5,6];
console.log(a);
console.log(b);
console.log(e);
// Using destructuring assignment of arrays and rest operator

[a,b,,...arr]=[1,2,3,4,5,6,7,8,9,10]
// What this means is to assign a to 1 and b to 2 and leave the 3rd element and the rest to arr
console.log(a);
console.log(b);
console.log(arr);
// Using destructuring with functions to get only the information we need

obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
function abc({ a , b })
{
    return [a,b];
}
console.log(abc(obj));
// 
// Making strings using template literals
// Here we can have values used in strings
person={
    name:"Something",
    age:34
}
greeting=`Hello, my name is ${person.name}..
I am ${person.age} years old`;
console.log(greeting);
// Easier way to declare objects
obj=(name,age,gender) => ({ name, age, gender});
// This is the same as
//      return {
//              name:name,
//              age:age,
//              gender:gender
//             };
// It is the same as returning an object with the same properties and the parameters of the function
console.log(obj("Something",34,"Male"));
// Objects can contain functions
// There are 2 ways for this
obj={
    gear:2,
    setGear: function(newGear){
        "use strict"
        this.gear=newGear;
    },
    SetGear(newGear){
        return "New gear has been set";
    }
}
obj.setGear(3);
console.log(obj.gear);
console.log(obj.SetGear(4));
// constructor syntaxes
var spaceShuttle=function(target)
{
    this.target=target;
}
var z=new spaceShuttle('Jupiter');
console.log(z.target);
// Another syntax
class SpaceShuttle
{
    constructor(Planet){
        this.Planet=Planet;
        this._et=Planet;
    }
}
// This variable means this variable is accessible only in the class here
// We can use underscore to signify that the variables are private and aren't supposed to be accessed outside of the class 
var z=new SpaceShuttle('Planet');
console.log(z.Planet)
console.log(z._et)
// A getter function is a normal function that only gets a value by simply returning a value
// A setter function is a normal function that updates the value of the class variables
function makeClass(){
    class Thermostat{
        constructor(temp)
        {
            this._temp=5/9*(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp)
        {
            this._temp=updatedTemp;
        }
    }
    return Thermostat;
}
// This class takes temperature in farenheit and converts it in celsius
Thermostat=makeClass();
thermos=new Thermostat(76);
console.log(thermos._temp);
let temp=thermos.temperature;//Here we call the getter function
thermos.temperature=26;//Here we call the setter function
temp=thermos.temperature;
console.log(temp);
