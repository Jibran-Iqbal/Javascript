let stocks={
    Fruits:['strawberry','grapes','banana','apple'],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let is_shop_open=true;

// let order=()=>{

//     return new Promise((resolve,reject)=>{
//         if(1){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// .then()
// .then()
// .then()
// .catch()
// .finally()



// async function order(){
//     try{
//         await abc;
//     }

//     catch(error){
//         console.log("abc doesn't exist",error)
//     }

//     finally{
//         console.log("Runs code anyways")
//     }
// }

// order()

// .then(()=>{
//     console.log("Hello")
// })

let toppings_choice= () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(console.log("Which topping would you like?"))
        }, 3000)
    })
}

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()
    console.log(" D ")
    console.log(" E ")
}

kitchen()

console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking the other orders")