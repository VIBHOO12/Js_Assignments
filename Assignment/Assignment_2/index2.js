console.log("Q-1")
let marks = parseInt(prompt("Enter your marks out of 50:"));
let grad;
switch(true){
    case marks<=10:
        grad = "E";
    break;
    case marks<=20:
        grad = "D";
    break;
    case marks<=30:
        grad = "C";
    break;
    case marks<=40:
        grad = "B";
    break;
    case marks<=50:
        grad = "A";
    break;
    default:
        console.log("out of 50");
}
console.log("grad: ", grad);


console.log("Q-2");
let table = {
    "P" : "PrepBytes",
    "Z" : "Zenith",
    "E" :  "Expert Coder",
    "D" :   "Data Structure"
};
let value = prompt("Enter the value name: ");
value = value.toUpperCase();
console.log(table[value]);


console.log("Q-3");
let num1 = parseInt(prompt("Enter num1"));
let num2 = parseInt(prompt("Enter num2"));
let num3 = parseInt(prompt("Enter num3"));
if(num1 == num2 == num3){
    console.log("-1");
}
if(num1>num2 && num1>num3){
    console.log("maximum num: ",num1);
} else if(num2>num3){
    console.log("maximum is: ", num2);
} else{
    console.log("maximum is ", num3);
}


console.log("Q-4");
let a1 = parseInt(prompt("Enter num1"));
let a2 = parseInt(prompt("Enter num2"));
let a3 = parseInt(prompt("Enter num3"));
let secSmallest;
if (a1 === a2 && a2 === a3) {
    console.log("All numbers are equal. No second smallest.");
} else if ((a1 > a2 && a1 < a3) || (a1 < a2 && a1 > a3)) {
    secSmallest = a1;
} else if ((a2 > a1 && a2 < a3) || (a2 < a1 && a2 > a3)) {
    secSmallest = a2;
} else {
    secSmallest = a3;
}
if (secSmallest !== undefined) {
    console.log("Second smallest number is:", secSmallest);
}


console.log("Q-5");
let angle1 = parseInt(prompt("Enter first angle:"));
let angle2 = parseInt(prompt("Enter second angle:"));
let angle3 = parseInt(prompt("Enter third angle:"));
if(angle1+angle2+angle3 != 180){
    console.log("invalid triangle");
} else if(angle1 > 90 || angle2 > 90 || angle3 > 90){
    console.log("Triangle is Obtuse");
} else {
    console.log("Triangle is Acute");
}