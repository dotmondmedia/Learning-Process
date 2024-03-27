// function add(){
//     return 1+1
// }

// console.log(add())





function add(Num1,Num2,Num3=0,Num4=0){
    return Num1 + Num2 + Num3 + Num4
}
console.log(add(16,10,13))

//CREATE A CALCULATOR
function calc(input1, operator, input2){
    
    if(operator === "+"){
    return input1 + input2
    }
    else if(operator === "-"){
        return input1 - input2
    }
    else if(operator === "*"){
        return input1 * input2
    }
    else if(operator === "/"){
        return input1 / input2
    }
    else{
        return "invalid operator!!"
    }

}

console.log(calc(2, "+",13))



                //FUNCTION DECLARATION AND FUNCTION EXPRESSION


//function expression(saving a function inside a variable)
const announce = function(){
    console.log("Today is Wednesday")
}




//ASSIGNMENT
shapes=["rectangle","rhomboid","trapezium"]
function addShape(lorem){
    if (addShape === typeof("")){
        addShape = shapes.length-1
    }else{
        
        console.log ("invalid")
    }
}
console.log(addShape("square"))