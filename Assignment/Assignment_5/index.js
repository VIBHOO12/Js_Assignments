// Q1.
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Q2.
for(let i=1; i<=45; i++){
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz");
    else if(i%3==0)
        console.log("Fizz");
    else if(i%5==0)
        console.log("Buzz");
    else
        console.log(i);
}

// Q3.
var numbersArray = [1,13,22,123,49];
let sum = 0;
for(let i=0; i<numbersArray.length; i++){
    sum += numbersArray[i];
}
console.log("sum of array: "+  sum);


// Q4.
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // 
let sum1 = 0;
let sum2=0;
for(let i=0; i<arr_1.length; i++){
    sum1+=arr_1[i];
}
for(let j=0; j<arr_2.length; j++){
    sum2+=arr_2[j];
}
let totalSum = sum1+sum2;
console.log("sum of two array: "+ totalSum);


// Q5.
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// console.log(arr.reverse());
let res = "";
for(let i=arr.length-1; i>=0; i--){
    res+=arr[i] + " ";
}
console.log(res);
