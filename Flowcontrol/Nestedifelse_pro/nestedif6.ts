let a : number = 25
let b : number = 50
let c : number = 100

if(a < b)
{
    console.log("A is less than B")
    if( b < a)
    {
        console.log("A is more than B" )
        if (b < c)
        {
            console.log("B is greater than C")
        }
    }
}