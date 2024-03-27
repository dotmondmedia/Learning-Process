const product=[
    {
        name: "Galaxy S23 ultra",
        productType: "Mobile Phone",
        ram: 16,
        rom:256,
        MAH: "7000mah",
        camera: "84mp + 25mp",
        androidv: 13,
        quantity: 17
    },
    {
        name: "Pavoir 4",
        productType: "Mobile Phone",
        ram: 12,
        rom: 128,
        MAH: "6000mah",
        camera: "72mp + 24mp",
        androidv: 12,
        quantity: 22
    },
    {
        name: "Apple Air",
        productType: "I pad",
        ram: 14,
        rom: 64,
        MAH: "4000mah",
        camera: "92mp + 34mp",
        androidv: 13,
        quantity: 20
    },
    {
        name: "Apple pro",
        productType: "Laptop",
        ram: 16,
        rom: 512,
        MAH: "7000mah",
        camera: "82mp + 44mp",
        androidv: 12,
        quantity: 15
    },
    {
        name: "Tecno Camon 15",
        productType: "Mobile Phone",
        ram: 16,
        rom: 128,
        MAH: "5000mah",
        camera: "90mp + 27mp",
        androidv: 13,
        quantity: 23
    },
    {
        name: "UMIDIGI",
        productType: "Mobile Phone",
        ram: 16,
        rom: 128,
        MAH: "5000mah",
        camera: "90mp + 27mp",
        androidv: 13,
        quantity: 23
    }
]

//for(let i=1; i<=50; i++)
//console.log("hello world",i)



//ASSIGNMENT
//for(let i=0; i<product.length; i++){
 //   console.log(product[i])
//}


// for(let produce of product){
//     if(produce.productType==="Mobile Phone"){
//     console.log(produce)
//     }
// }




//CLASS 2

// name=prompt("What is your name")
// while (name !== "kenny") {
//     let name= prompt("what is your name")
//     if(name === "kenny") break
// }



// A SIMPLE RANDOM GAME


let randNum = Math.floor(Math.random()*20)+1
const maxAttempts = 5
let attempts = 0
//guess = attempts
let guess= Number(prompt("guess my number"))

while(guess !== randNum){
    attempts++
    // if (guess > randNum){
    //     guess = Number(prompt("wrong guess\nguess is too high\nguess my number"))
    // }
    // else if(guess < randNum){
    //     guess = Number(prompt("wrong guess\nguess is too low\nguess my number"))
    // }
//or
    guess = Number(prompt(`Guess my number\n${guess > randNum? "too high" : "too low"}\nAttempts: ${attempts}`))



    if (guess === randNum){
        alert(`YAY!!, you got it right 🥳, the answer is, ${randNum}\nAttempts: ${attempts}`)
    }
    
    if(attempts === 5){
        alert(`Game Over😥!!\nLimits Exeeded\nAttempts: ${attempts}`) 
        break
    }
}

// while(attempts < maxAttempts){
//     prompt("GAME OVER!!")
//     console.log("Game Over")
//     attempts++
// }








// SIMPLE EXPLANATION OF DO WHILE

// let num = 4
// do{
//     console.log("kenny")
//     num++
// }while(num<7)


// while(num<7){
//     console.log("kenny2")
// }


// let me = 3
// do{
//     console.log ("Dotun")
//     me++
// }while(me <10)






