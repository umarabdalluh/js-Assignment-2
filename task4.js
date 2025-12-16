var number = prompt ("Enter any number")
var number1 = prompt ("Enter your number")
var operator = prompt ("Enter your operator")

switch (operator){
    case "+" :
        console.log(number + number1)
    break;
    case"-":
        console.log(number - number1)
    break;
    case "*":
    console.log (number * number1)
    break;
    case "/":
        console.log (number / number1)
    break;
    case "%" :
    console.log(number % number1)
    break ;
    default:
    console.log ("Invalid number")
}