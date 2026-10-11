//Object is a datatype which stores the data in the key-->value formate//
//it is an interface we are creating the rough data and the fare data//

interface studentdata   //rough data
{  studentname : string,
   studentrollno : number,
   studentactive : boolean,
   studentphno :number,
   studentbranch : string,
   studentaddress :                 //sub object 
   {  
                   studentstreet : string,
                   studentlocation :string,
                   studenthouseno :number,
                   studentstate : string,
   }
} 

let studentinfo :studentdata =          //fare data

{
   studentname : "Vaishnavi",
   studentrollno : 25,
   studentactive : true,
   studentphno : 9165348975,
   studentbranch :"EEE",
   studentaddress :                 //sub object 
   {  
                   studentstreet :'Road no 1',
                   studentlocation :'Kukatpally',
                   studenthouseno :1-65,
                   studentstate : 'Telangana',
   }
} 

studentinfo.studentbranch = 'CSE',  //updating the fare data
studentinfo.studentname = 'Rajesh',
studentinfo.studentaddress.studentstate = 'Telangana' //updating the subobject

console.log(studentinfo)


