function sumOfTotal(...marks :number[])     //2,96,54,21,35,6
{ let x : number=0;
    for(let n of marks)
        {
            x = x + n;
        } 
console.log("The sum of Marks : " + x)
}
sumOfTotal(12,23,51,34,98)