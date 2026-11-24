let m : number =5;
let row : string = "";
for(let a = 1; a<=m ; a++)
{
    for(let b = 1; b<=m; b++)
    {
        if(a===1||a===m||b===1||b===m)
            {     
            row +="*";
            }
             else{

        row +=" ";
    }
 
    }
     console.log(row);
}
  