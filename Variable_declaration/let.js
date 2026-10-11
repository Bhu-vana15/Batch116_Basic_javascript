let myHostel="womens" //declaring the value
console.log(myHostel)

myHostel=12 //reassigning the value
console.log(myHostel)

//let myHostel=345 //redeclaring the value //SyntaxError: Identifier 'myHostel' has already been declared

{
    console.log(myHostel)
    let myData = "Work"//inside-inide blockdata
    console.log(myData)
}

console.log(myData)//inside-outside data //Reference error :myData is not defined