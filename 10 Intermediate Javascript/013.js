function fibonacciGenerator(n) {
    var firstNum = 0;
    var secondNum = 1;
    var fibArr= [0,1];
    for (i = 2; i <n; i++) {
        var result = firstNum + secondNum;
        // console.log(result);
        fibArr[i] = result;
        firstNum = secondNum;
        secondNum = result;
    }
    return fibArr;

}

console.log(fibonacciGenerator(10));