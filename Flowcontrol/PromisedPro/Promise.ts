function userAge(): Promise<string> // it is a promise based function
{
    return new Promise((resolve,reject)=>{
        let age : number=21 ;
        if (age>18)
        {
            resolve("user can utilize his/her VOTE")
        }
        else {
            reject(new Error("user should not VOTE"))
        }

    });

}

async function agecheck(): Promise<void>
{
    let eligible:string=await userAge();
    console.log(eligible)
}
agecheck();
