interface dog      //rough data
{
dogname : string,
dognumber : number,
dogbark :string,
dogstatus :boolean,
}

interface cat    //rough data
{
    catname : string,
    catbark : string,
    catnumber : number,
    catstatus : boolean,
}
let  doginfo : dog =
{
dogname : "Shero",
dognumber : 20,
dogbark :"bow bow",
dogstatus : true,
}

let catinfo : cat =
{
   catname : "Cutiee",
    catbark : "meow meow",
    catnumber : 10,
    catstatus : true , 
}


let dogcat = {...doginfo,...catinfo}
console.log(dogcat)