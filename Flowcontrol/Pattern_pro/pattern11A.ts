let k: string ="";
for(let r: number = 1; r<=10 ; r++)
{
    for(let c: number = 10; c>=r; c--)
    {
        k+= c;
        
    }
    k+="\n";

    
}
console.log(k)
