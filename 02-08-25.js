// Q1. Write a named function that prints "Good Morning" to the console.
function good(){
    console.log("Good Morning");
}
good();

// Q2. Write a named function that takes one parameter name and prints "Welcome, <name>".
function  welcome(name){
    console.log("welcome" + name);

}
welcome("Mounika");

// Q3. Write a named function that takes two numbers and prints their sum.
function add(a,b){
    console.log(a+b);
}
add(10,20);


// Q4. Write a named function that checks if a number is even and prints true or false.
function even(n){
    if (n%2==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
even(10);

// Q5. Write a named function that loops from 1 to 5 and prints each number.
function hi(){
    for (var i=1;i<=5;i++){
        console.log(i);
    }
}
hi()

// Q6. Write an arrow function to print "I love JavaScript".
var c=()=>console.log("i love java script");
c();

// Q7. Write an arrow function that multiplies two numbers and prints the result.
var m=(a,b)=>console.log(a*b);
m(10,20);

// Q8. Write an arrow function that checks if a number is negative.
var num=(n)=>{
    if (n<0){
        console.log("negative");
    }
}
num(-1);

// Q9. Write an arrow function that takes a number and prints whether it is odd/even.
var n=(a)=>{
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
n(2);

// Q10. function greet() {
//   console.log("Hello, friend!");
// }

var c=()=>console.log("Hello,friend!");
c();

// // Q11. function square(num) {
//   console.log(num * num);
// }

var s=(num)=>console.log(num*num);
s(3);

// Q12.  function isPositive(n) {
//   console.log(n > 0);
// }

var n=(num)=>console.log(num>0);
n(2);

// Q13.  function displayAge(name, age) {
//   console.log(`${name} is ${age} years old.`);
// }

var c = (n, a) => console.log(`${n} is ${a} years old`);
c("Mounika", 22);


// Q14.  function countdown() {
//   for(let i = 5; i >= 1; i--) {
//     console.log(i);
//   }
// }

var c=()=>{
    for(var i=5;i>=1;i--){
        console.log(i);

    }
}
c();

// Q15.  const sayHi = () => console.log("Hi there!");
function sayHi(){
    console.log("Hi there!");
}
sayHi();

// Q16.  const cube = x => console.log(x ** 3);
function cube(x){
    console.log(x**3);
}
cube(3);

// Q17.  const printName = name => console.log("Name is:", name);
function printName(name){
    console.log("Name is",name);
}
printName("Mounika");

// Q18. const isEven = num => console.log(num % 2 === 0);
function isEven(num){
    console.log(num%2===0);
}
isEven(2);

// Q19. const greetUser = (user, lang) => console.log(`${user} speaks ${lang}`);
function greetuser(user,lang){
    console.log(`${user} speaks ${lang}`);
}
greetuser("mounika","telugu");