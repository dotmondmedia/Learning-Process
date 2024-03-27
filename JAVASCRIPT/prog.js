//let state = prompt("where  are you from")
//if(state === "ekiti"){
  //console.log("Ekiti is a Peaceful place")
//}

//let userstate = prompt ("what state are you from")
//if(userstate === "ekiti"){
 // console.log("i love ekiti rice")
//}

//else if(userstate === "lagos"){
  //console.log("lagos is lively with a lot of //traffic!!")
//}



// let age = prompt ("how old are you?")
// if(age < 18){
//   console.log("you cannot buy a drink!!")
// }
// else if(age >= 18){
//   console.log("Welcome order your drink")
// }
// else{
//   console.log("input your age")
// }


//TASK1
// let userage = prompt ("how old are you?")
// if(userage<16){
//   console.log("you're too young to play football!!")
// }
// else if(userage >=16 && userage<=18){
//   console.log("you are eligible for super eaglet")
// }
// else if (userage >=19 && userage<=25){
// console.log("you are eligible to join the super eagles!!")
// }
// else if (userage >=26 && userage<=35){
//   console.log("Go and join kano pillars")
// }
// else if(userage>=36){
//   console.log("you no get future for football")
// }
// else{
//   console.log("input a valid age")
// }


//TASK 2
let team = Number(prompt("WHAT TEAM WOULD YOU LIKE TO JOIN?\n  1.Super Eagles\n  2.Super Eaglet"))

if (team === 1){
    let userAge =  Number(prompt("how old are ya"))
    if(userAge < 16){
        console.log("you should be sucking breast")
    }
    else if(userAge >= 16 && userAge <=18){
        console.log("Try out the super eaglets")
    }
    else if(userAge>=19 && userAge <= 25){
        console.log("Welcome you are eligible to join the superEagles!!")
    }
    else if (userAge>=26 && userAge<=35){
        console.log("Try out Kano Pillars")
    } else if (userAge>36){
        console.log("you no get future for here")
    }
    else{
        console.log("invalid input!!")
    }
} 
else if(team===2){
    let userAge2 =  Number(prompt("how old are ya"))
    if(userAge2 < 16){
        console.log("you should be sucking breast")
    } 
    else if(userAge2 >= 16 && userAge2 <=18){
        console.log("Welcome you are eligible to join the superEaglets!!")
    }
    else if(userAge2>=19 && userAge2 <= 25){
        console.log("Try out the super eagles")
    }
    else if (userAge2>=26 && userAge2<=35){
        console.log("Try out Kano Pillars")
    } else if (userAge2>36){
        console.log("you no get future for here")
    }
    else{
        console.log("invalid input!!")
    }
}
else if(team===0){
  console.log("Choose between 1 & 2")
} 
else{
    console.log("choose a number!!")
}


//TASK 3
// let day = prompt("INPUT A DAY TO VIEW YOUR SCHEDULES")
// if (day === "sunday"){
//   console.log("1.Morning jog\n  2.Work on a presentation for the meeting\n  3.Grocery shopping\n  4.Call Mom\n  5.Yoga class in the evening")
// }
// else if(day === "monday"){
//   console.log("1.Dentist appointment at 10:30 AM\n  2.Respond to emails\n  3.Research for a new project\n  4.Cook dinner\n  5.Read a chapter of your book")
// }
// else if(day === "tuesday"){
//   console.log("1.Attend a team meeting at work\n  2.Pay bills\n  3.Clean the house\n  4.Practice a musical instrument\n  5.Movie night with friends")
// }
// else if(day === "wednesday"){
//   console.log("1.Visit the gym\n  2.Work on a home improvement project\n  3.Catch up on a TV series\n  4.Plan a weekend trip\n  5.Volunteer at a local charity")
// }
// else if(day === "thursday"){
//   console.log("1.Finish the work project\n  2.Buy a birthday gift for a friend\n  3.Visit the library\n  4.Plan a date night\n  5.Try a new restaurant")
// }
// else if(day === "friday"){
//   console.log("1.Outdoor hike\n  2.Gardening\n  3.Home organization\n  4.Go to a museum\n  5.Attend a workshop")
// }
// else if(day === "saturday"){
//   console.log("1.Sleep in\n  2.Brunch with family\n  3.Write in a journal\n  4.Plan meals for the week\n  5.Relax with a good book")
// }
// else{
//   console.log("input a day!!")
// }


//TASK 4
// let makercolor = prompt("Select the color of marker you want")
// if (makercolor === "red"){
//   console.log(`${makercolor} is available`)
// }
// else if (makercolor=== "blue"){
//   console.log(`${makercolor} is available`)
// }
// else if (makercolor=== "green"){
//   console.log(`${makercolor} is available`)
// }
// else if(makercolor=== "black"){
//   console.log(`${makercolor} is available`)
// }
// else{
//   console.log(`${makercolor} is unavailable`)
// }



//SWITCH STATEMENTS


//Task 1

// let makercolor = prompt("Select the color of marker you want")
// switch(makercolor){
//   case "red":
//   console.log(`${makercolor} is available.`)
//   break
  
//   case "blue":
//   console.log(`${makercolor} is available.`)
//   break
  
//   case "green":
//   console.log(`${makercolor} is available.`)
//   break
  
//   case "black":
//   console.log(`${makercolor} is available.`)
//   break
  
//   default:
//   console.log(`${makercolor} is unavailable.`)
// }


//Task 2

// let day = prompt("INPUT A DAY TO VIEW YOUR SCHEDULES")
// switch(day){
//   case "sunday": case "saturday":
//     console.log("1.Morning jog\n  2.Work on a presentation for the meeting\n  3.Grocery shopping\n  4.Call Mom\n  5.Yoga class in the evening")
//     break
  
//   case "monday":
//     console.log("1.Dentist appointment at 10:30 AM\n  2.Respond to emails\n  3.Research for a new project\n  4.Cook dinner\n  5.Read a chapter of your book")
//     break 
    
//   case "tuesday":
//     console.log("1.Attend a team meeting at work\n  2.Pay bills\n  3.Clean the house\n  4.Practice a musical instrument\n  5.Movie night with friends")
//     break
  
//   case "wednesday":
//     console.log("1.Visit the gym\n  2.Work on a home improvement project\n  3.Catch up on a TV series\n  4.Plan a weekend trip\n  5.Volunteer at a local charity")
//     break
    
//   case "thursday":
//     console.log("1.Finish the work project\n  2.Buy a birthday gift for a friend\n  3.Visit the library\n  4.Plan a date night\n  5.Try a new restaurant")
//     break
    
//   case "friday":
//     console.log("1.Outdoor hike\n  2.Gardening\n  3.Home organization\n  4.Go to a museum\n  5.Attend a workshop")
//     break
  
//   default:
//   console.log("input a day!!")
// }



//TENARY OPERATORS
//let weekend = true
// if(weekend){
//   console.log("party after party")
// }
// else{
//   console.log("work,work,work")
// }

//Tenary
// weekend ? console.log("party after party"): console.log("work")

// let day = prompt("INPUT A DAY TO VIEW YOUR SCHEDULES")
// day==="monday"? console.log("everyone hates monday")
// :day==="tuesday"? console.log("tuesdays are great")
// :day==="wednesday"? console.log("wednesdays are awesome")
// :console.log("this are the other days")





