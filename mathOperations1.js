function solve (num1, num2, string){
    let result;
    switch(string){
        case "+":result=num1+num2; break;
        case "-":result=num1-num2; break;
        case "/":result=num1/num2; break;
        case "%":result=num1%num2; break;
        case "*":result=num1*num2; break;
        case "**":result=num1**num2; break;
    }
    console.log(result);
}
solve(5, 6, '+')