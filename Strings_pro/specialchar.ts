let myamount : string = "one thousand and twenty and three rupees @156789!!"
let myRemovespec : string = myamount.replace(/[^a-zA-z0-9]/g,"")
console.log(myRemovespec) //onethousandandtwentyandthreerupees156789


let removespec : string = myamount.replace(/[^a-zA-z)0-9]/g,"")
console.log(removespec) //onethousandandtwentyandthreerupees156789
