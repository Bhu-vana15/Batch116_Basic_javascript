let k: string ="";
for(let r: number = 1; r<=8 ; r++)
{
    for(let c: number =1; c<=r; c++)
    {
        k+= c;
    }
    k+="\n";
}
console.log(k)