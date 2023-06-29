// challenge -- complete the calculator function 

// solution ---
// Higher order functions in javascript, lets built a calculator to understand these functions in detail


function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function modulo(num1,num2){
    return num1%num2;
}

// higher order function 
function calculator(num1, num2, operator){
    return operator(num1,num2);
}


// function call
calculator(3,4,add);
calculator(3,4,multiply);
calculator(3,4,divide);
calculator(3,4,modulo);
calculator(3,4,subtract);
