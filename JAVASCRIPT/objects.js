//let students = ["kenny", "ola", "Daniel", "Dotun", "Victor"]

// const studentsBehaviour={
//     sleep:"kenny",
//     maguire:"victor",
//     latecomer:"ola",
//     onphone:"daniel",
//     idk:"dotun"
// }
// console.log(studentsBehaviour)

// console.log(studentsBehaviour["sleep"]);
// console.log(studentsBehaviour.sleep);
// studentsBehaviour.tall="bukunmi"
// console.log(studentsBehaviour)


// const profile={
//     Firstname: "David",
//     Lastname: "Jones",
//     Age: "16",
//     occupation: "Student",
//     sex: "Male",
//     Nationality: "American",
//     Height: "7ft tall",
//     weight: "200 lbs"
// }
// console.log(profile)

// console.log("Firstname:",profile.Firstname)
// console.log("Lastname:",profile.Lastname)
// console.log("Age:",profile.Age)
// console.log("occupation:",profile.occupation)
// console.log("sex:",profile.sex)
// console.log("Nationality:",profile.Nationality)
// console.log("Height:",profile.Height)
// console.log("Weight:",profile.weight)


// console.log(`
// Firstname:${profile.Firstname}
// Lastname:${profile.Lastname}
// Age:${"",profile.Age}
// occupation:${profile.occupation}
// sex:${profile.sex}
// Nationality:${profile.Nationality}
// Height:${profile.Height}
// Weight:${profile.weight}
// `)


// //et message= prompt("What is your name?")
// let app={
//     firstname: "Daniel",
//     greetings: function(){return `Hello ${this.firstname}, good afternoon`}

// }
// console.log(app.greetings())
// window.alert("from windows")



const database ={
    Firstname: "Adedotun",
    Lastname: "Samuel",
    Age: "16",
    occupation: "Student",
    sex: "Male",
    Nationality: "American",
    Height: "7ft tall",
    weight: "200 lbs",
    fulldata: function(){console.log(`Firstname: ${this.Firstname}\nLastmane: ${this.Lastname}\nAge: ${this.Age}\nOccupation: ${this.occupation}\nSex: ${this.sex}\nNationality: ${this.Nationality}\nHeight: ${this.Height}\nWeight: ${this.weight}`)}
}
database.fulldata()
//console.log(database.Firstname)


const biograph={
    name: "pa moses",
    Job: 1920,
    nationality: "Nigerian",
    state: "Oyo",
    education: "Phd.in science",
    carrer: "Physics teacher",
    ismarried: true,
    wives: ["felicia", "cicilia", "Eunice", "Beatrice"],
    sons: { felicia:    ["Dayo", "Dele", "Dejo"],
            cicilia:    ["Ayo", "Dapo"],
            eunice:     ["John", "James"],
            beatrice:   ["Kayode","Kunle"]
    },
    daughters: {    felicia:    ["Moji", "Moyo"],
                    cicilia:    ["Bunmi"],
                    eunice:     ["Wumi", "Tola"],
                    beatrice:   ["Adesola","Ike"]
    }
}

console.log(`Pa moses has ${biograph.wives.length} wives and ${biograph.sons.felicia.length + biograph.sons.cicilia.length + biograph.sons.eunice.length + biograph.sons.beatrice.length} sons and ${biograph.daughters.felicia.length + biograph.daughters.cicilia.length + biograph.daughters.eunice.length + biograph.daughters.beatrice.length} daughters. `)



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
    }
]
// const highrom = product.filter((product)=>{
//     return product.rom >=128
// })
// console.log(highrom)


const hirom= product.forEach((product)=>{
    if(product.rom>=128){
        console.log(product)
    }
})


const phoneprdct= product.filter((product)=>{
        return product.productType==="Mobile Phone"
})
console.log(phoneprdct)


