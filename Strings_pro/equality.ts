let A: string = "AABBCCDD"
let B : string = "AABBCCDD"
let C : number = 12345;
let D : string = 11223;
console.log(A == B)     // loose equality(same elements without considering the datatypes)--->true
console.log(A === B)    // strict equality(same elements considering datatypes and datavalues)-->true
console.log(A==C)   //false
console.log(B===C)  //false
console.log(A===D)  //false