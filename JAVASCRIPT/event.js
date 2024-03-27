const header2 = document.querySelector("h2")
function changeText(){
    header2.textContent = "click event worked!"
    header2.style.color = "red"
}

const button2 = document.querySelector("button")
button2.addEventListener("click",()=>{
    changeText()

})

const num = 3

header2.addEventListener("mouseover", ()=>{
    if(num < 4){
        header2.style.backgroundColor = "black"
    } 
})


// select input/check button
// create the random number
// add event listener to the check button