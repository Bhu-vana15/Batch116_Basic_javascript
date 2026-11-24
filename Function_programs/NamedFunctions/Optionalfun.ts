function myData(name : string, DOB ?: number )//'?' represents optional
{
    console.log("This is myinformation :" + name)

}
myData("Mahi")

function myDay(name : string, DOB ?: number )//'?' represents optional
{
    console.log("This is myinformation :" + DOB)//undefined

}
myDay("Mahi" )//DOB is optional


function Data(name : string, DOB : number)
{
    if(DOB==undefined)
    {
     console.log("My name is :"  + name)
    }
    else{
        console.log("My data is = "  + DOB)

    }

}
Data("Bhanu", 1232020)