const againButton = document.getElementById("Again_button")
againButton.innerText="Play Again"

const tagnames = document.getElementsByTagName("h1")
const headerTag = document.querySelectorAll("header")

for(let head of headerTag){
    head.style.backgroundColor = "green"
}

console.log(tagnames)
console.log(againButton)
console.log(headerTag)
// tagname.innerHt="You Are Correct!!"

for (let tagname of tagnames) {
    tagname.innerText = "You Are Correct!!"
}

const headTwo= document.createElement("h2")
headTwo.innerText="I am heading Two"
headTwo.style.color = "white"

const bodyel= document.querySelector("body")

bodyel.append(headTwo) 