console.log("Temperature Categorization")

var Temperature = prompt("Write the temperature of your area")

if(Temperature>40){
    console.log("Extremely hot")
}
else if (Temperature>30){
    console.log("Hot")
}
else if (Temperature>20){
    console.log("Warm")
}
else if (Temperature>10)(
    console.log("Cool")
)
else{
    (Temperature<10)
    console.log("Cold")
}

console.log("Days in Month Determination")

var Month =+ prompt("Write a Month")

switch(Month){
   case 1:
    console.log("31 Days")
    break;
   case 2:
    console.log("28 Days")
    break;
   case 3:
    console.log("31 Days")
    break;
   case 4:
    console.log("30 Days")
    break;
   case 5:
    console.log("31 Days")
    break;
   case 6:
   console.log("30 Days")
   break;
   case 7:
    console.log("31 Days")
    break;
   case 8:
    console.log("31 Days")
    break;
   case 9:
    console.log("30 Days")
    break;
   case 10:
    console.log("31 Days")
    break;
   case 11:
    console.log("30 Days")
    break;
   case 12:
    console.log("31 Days")
    break;
    default:
    console.log("This month does not exist")
}

console.log(" Sequential Count")

for (var i=1; i<=20; i++){
    console.log(i)
}

console.log(" Reverse Count with Filtering ")

  var num1 = prompt("Write a number")

  while( num1 >= 1){
     console.log(num1)
     if(num1 % 3 === 0){
        console.log(num1)
     }
     num1--
  } 

console.log("Input Validation Loop")

var num ="";

do{
 num = prompt("write any number")
}
while(num <= 50)

    console.log("You have guessed the right number" );

console.log("USER-DEFINED NESTED LOOP: Conditional Dynamic Iteration")

for(var v = 1; v<=10; v++){
    if(v % 2 === 0){
        for(var j = v; j >= 1; j-- ){
            console.log ( v , j)
        }
    }
}

console.log("Conditional Printing")

for(a=1; a<=15; a++){
 if(a % 3 === 0){
    console.log("Fizz")
}
else if  ( a % 5 === 0) {
console.log("Bizz")
}
}
console.log(a)

console.log("Variable Update")

var prompt1 =+ prompt("Write your score")

console.log(prompt1)
console.log(prompt1 + 20)

console.log("String Concatenation")

var name1 = prompt("Write your first name")
var name2 = prompt("Write your second name")

console.log(name1)
console.log(name1 + name2)

console.log("Price Calculation")

var price = prompt("Write the price of this product")

console.log(price)
console.log(price / 10)

console.log("Array Creation and Iteration")

var items = []

for(var y = 1 ; y<=5; y++){
    var input =  prompt ("Write any items") 
}

items.push(input , y) 

console.log(items)

console.log(" Index-Based Array Modification")

var numbers = [5 , 10 , 15 , 20 , 25]
numbers.splice(2,2, 8 )
numbers.splice(4,4, 22)

console.log(numbers)

console.log("Bulk Array Transformation")

var array1 = [1 , 2 , 3 , 4 , 5]
for (var g = 0; g<=array1.length; g++){
    console.log(array1[g] * 2)
}

console.log("Array Merging")

var array3 = [1 , 2 , 3];
var array4 = [,4 , 5 , 6]
var array5 = [];

for(var h = 0; h<=array5.length; h++){
    array5.push = (array3 + array4 )
}

console.log(array5)

console.log(" Conditional Array Element Update")

var array6 = [10 , 15 , 20 , 25 , 30]
for(var t = 0; t<array6.length; t++){
    if(array6[t] % 10 === 0){
        array6[t] = array6[t] + 5
    }
}

console.log(array6)