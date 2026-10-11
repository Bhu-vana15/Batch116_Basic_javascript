function myData(name : string, DOB ?: number )//'?' represents optional
{
    console.log("This is myinformation :" + name)

}
myData("Mahi")

function myData(name : string, DOB ?: number )//'?' represents optional
{
    console.log("This is myinformation :" + DOB)//undefined

}
myData("Mahi" )//DOB is optional


function myData(name : string, DOB : number)
{
    if(DOB==undefined)
    {
     console.log("My name is :"  + name)
    }
    else{
        console.log("My data is = "  + DOB)

    }

}
myData("Bhanu", 1232020)