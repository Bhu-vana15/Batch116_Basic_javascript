let myamount :  string = "one thousand and twenty and three rupees @156789!!"
let myremoveNum : string = myamount.replace(/[0-9]/g,"")
console.log(myremoveNum)    //one thousand and twenty and three rupees @!!

let myremoveAlpha : string = myamount.replace(/[a-zA-z0-9]/g,"")
console.log(myremoveAlpha)