//ARRAYS

// let student1= "victor"
// let student2= "dotun"
// let student3= "bukunmi"
// let student4= "kenny"
// let student5= "daniel"

let students=["kenny", "daniel", "bukunmi", "dotun", "victor"]
console.log(students)
console.log(students[1]+" is always on his phone")

let arr=[[1,2,3,4], "abs", "biceps"]
console.log(arr[0][2])

let weekdays=["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(weekdays[weekdays.length-1])

// weekdays[1][0]

console.log(weekdays)

// let lastweekdays = weekdays.pop()
// console.log(lastweekdays)

console.log(weekdays[1] = "Tuesday")

// weekdays[1][0] = "jhsvjhkabjhmsbhm"

console.log(weekdays.length)


//ARRAY METHODS
//1. Push() used to add data to the end of an array
//2. Pop()  used to remove data from the end of an array
//3. Shift() used to remove data from the begining of an array
//4. Unshift() used to add data to the begining of an array
//5. Length _to know the number of elements in an array
//6. Delete()
//7. Concat()
//8. Indexof __to know the index of an element in an array
//9. Slice() used to remove data anywhere in your array
//10.Splice()
//11.forEach()
//12.filter()
//13.reverse()
//14.flat()
//15.reduce()

weekdays.push("sunday")
console.log(weekdays)

weekdays.pop()
console.log(weekdays)

weekdays.unshift("week1")
console.log(weekdays)

weekdays.shift()
console.log(weekdays)

// delete weekdays
// console.log(weekdays)


const cats=["lion", "kitty", "pat", "henry"]
const dogs=["bingo", "zina", "jeffery", "drake"]
mypets= cats.concat(dogs)
console.log(mypets)

console.log(dogs.indexOf("zina"))

let newcats=cats.slice(1)
console.log(newcats)


let name =["Ben", "Kent", "Dave", "Ron"]
name.forEach(element => {
    console.log("hi you're welcome "+element)
});


name.filter((item)=> console.log(item.length <= 3))


let num = [1,2,3,4,5,6,7,8,9,10]
//num.filter((item)=>{
    //if(item%2===0) console.log(item)
//})

//console.log(num.flat())



let initnum = 0
let sumnum = num.reduce((sum,itemval)=> sum+itemval, initnum)
console.log(sumnum)
//console.log(num.reverse())




//ASSIGNMENT
let people = ["vic","ben", "dav","dan","del","mel","dot","sam","cam"]
people.forEach(name =>{
    console.log("Hello ",name," you are welcome")
})