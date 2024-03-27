// const box1 = document.createElement("box")
// box1.innerHTML=document.createElement("boxx")
// // box1.style.outlineColor = "red"
// const bodyel= document.querySelector("body")
// bodyel.append(box1)

// box1.style.height="20px"
// box1.style.color="black"



//SOLUTION
//1. CREATE HTML PAGE AND LINK YOUR JS FILE
//2. SELECT THE BODY
const bodyel= document.querySelector("body")
//3. CREATE AN ELEMENT
const h1el = document.createElement("h1")
//4. EDIT THE CONTENT
h1el.textContent= "SKY SCRAPPERS"
//5. APPEND TO BODY TO DISPLAY
bodyel.append(h1el)
//6. STYLE IT
h1el.style.textDecoration= "underline"
h1el.style.textAlign="center"
//7. REPEAT FOR OTHER ELEMENTS

// BOX 1 SECTION
const box1 = document.createElement("section")
const box1h2 = document.createElement("h2")
const box1Image = document.createElement("img")
const box1Para = document.createElement("p")
const box1Infocon = document.createElement("div")

box1h2.textContent = "Burj Khalifa"
box1Image.src = "../IMAGES/runway.jpg"
box1Para.textContent = "This is the tallest sky scrapper in the world"

box1Infocon.append(box1h2)
box1Infocon.append(box1Para)

box1.append(box1Image)
box1.append(box1Infocon)


//box1.style.outline = "2px solid red"
// box1.style.width = "40%"
box1.style.display = "flex"
box1.style.gap= "20%"
//box1Infocon.style.outline = "2px solid red"
box1Infocon.style.textAlign = "center"
bodyel.append(box1)


const box2 = document.createElement("section")
const box2h2 = document.createElement("h2")
const box2Image = document.createElement("img")
const box2Para = document.createElement("p")
const box2Infocon = document.createElement("div")


box2h2.textContent = "Burj Khalifa"
box2Image.src = "../IMAGES/runway.jpg"
box2Para.textContent = "This is the tallest sky scrapper in the world"

box2Infocon.append(box2h2)
box2Infocon.append(box2Para)
box2.append(box2Image)
box2.append(box2Infocon)

box2.style.display = "flex"
box2.style.gap= "20%"

box2Infocon.style.textAlign = "center"
bodyel.append(box2)




const box3 = document.createElement("section")
const box3h2 = document.createElement("h2")
const box3Image = document.createElement("img")
const box3Para = document.createElement("p")
const box3Infocon = document.createElement("div")


box3h2.textContent = "Burj Khalifa"
box3Image.src = "../IMAGES/runway.jpg"
box3Para.textContent = "This is the tallest sky scrapper in the world"

box3Infocon.append(box3h2)
box3Infocon.append(box3Para)
box3.append(box3Image)
box3.append(box3Infocon)

box3.style.display = "flex"
box3.style.gap= "20%"

box3Infocon.style.textAlign = "center"
bodyel.append(box3)


const box4 = document.createElement("section")

function boxcontent(imgSrc, headTwo, para){
    const content = `
             <img src =${imgSrc}>
            <div>
            <h2>${headTwo}</h2>
            <p>${para}</p>
            </div>
    `
    return content
}

// box4.append()

box4.innerHTML = boxcontent("../IMAGES/5351.webp", "The box four", "The better approach")

bodyel.append(box4)
box4.style.display = "flex"
box4.style.gap= "20%"



//EVENT

