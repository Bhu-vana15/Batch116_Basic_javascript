let myamount :  string = "one thousand and twenty and three rupees @156789!!"


let myremoveAlpha : string = myamount.replace(/[0-9]/g,"$")
console.log(myremoveAlpha)  //one thousand and twenty and three rupees @$$$$$$!!

let myremoveAlpha : string = myamount.replace(/[a-zA-Z]/g,"@")
console.log(myremoveAlpha)  //@@@ @@@@@@@@ @@@ @@@@@@ @@@ @@@@@ @@@@@@ @156789!!

let myremoveAlpha : string = myamount.replace(/[a-zA-Z]/g,"")
console.log(myremoveAlpha)  //    @156789!!











