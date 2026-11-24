 let num: number = 1;

for (let i = 1; i <= 2; i++) {
    let result: string = "";

    for (let j = 1; j <= 3; j++) {
        let letter: string = String.fromCharCode(64 + num);

        result += num + letter + " ";
        num++;
    }

    console.log(result);
}