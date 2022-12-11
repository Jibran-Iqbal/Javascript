// Synchrouous
console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");


// Asynchrouous
console.log(" I ");
console.log(" eat ");
// setTimeout(()=>{console.log(" ice cream ");},4000);
console.log(" with a ");
console.log(" spoon ");

// Callback
function one(call_two){
    console.log(" step 1 complete. Call step 2 ");
    call_two();
}
function two(){
    console.log(' step 2 ');
}

one (two);




// console.log(stocks.Fruits[2]);

// let order=(call_func)=>{
//     console.log("order placed, call production");
//     call_func();
// };
// let production=()=>{
//     console.log("Order received, starting production");
// };
// order(production);
let stocks={
    Fruits:['strawberry','grapes','banana','apple'],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};
console.log(stocks.Fruits[2]);

let order=(Fruit_name,call_func)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_func();
    },2000)

};
let production=()=>{
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                
                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                
                                console.log("Serve Ice Cream")
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};
order(0,production);
// That coned shaped format is called callback hell
// 
// Promises