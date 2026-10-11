function studentInfo(stdId : number , stdName : string) : string 
{
 return "studentId :" + stdId + "studentName :" + stdName;
}
let result : string = studentInfo(25, "Priya")
console.log(result)




function add (a: number ,b :number) : number
{
    console.log("The sum of a and b is : " + (a+b))
    return a + b;

}
add(30,20);