const myteacher = "Good" //declaring the value
console.log(myteacher)

//myteacher = 100 //re-assigning the value //TypeError: Assignment to constant variable.
console.log(myteacher)

//const myteacher = 2026// redclaring the value //SyntaxError: Identifier 'myteacher' has already been declared
console.log(myteacher)

{
    console.log(myteacher)//outside-inside block data
    const mybottle = "red"
    console.log(mybottle) //inside-inside block data
}
//console.log(mybottle)//inside-ouside block data//ReferenceError: mybottle is not defined