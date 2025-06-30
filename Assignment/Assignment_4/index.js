
// // Q-1
// let size = parseInt(prompt("enter the number of array: "));
// let arr = [size];
// for(let i=0; i<size; i++){
//     arr[i] = parseInt(prompt("inter the value of "+ i+ "index:" ));
// }
// function find_prod(arr){
//     let product = 1;
//     let unique  = new Set();
//     for(let i=0; i<arr.length; i++){
//         if(!unique.has(arr[i]))
//         product *=arr[i];
//         unique.add(arr[i]);
//     }

//     return product;
// }

// console.log(find_prod(arr));

// Q-2
// let len = parseInt(prompt("enter the number of array: "));
// let arr2 = [len];
// for(let i=0; i<len; i++){
//     arr2[i] = parseInt(prompt("inter the value of "+ i+ "index:" ));
// }
// function find_sum(arr2){
//     let sum = 0;
//     let unique  = new Set();
//     for(let i=0; i<arr2.length; i++){
//         if(!unique.has(arr2[i]))
//         sum +=arr2[i];
//         unique.add(arr2[i]);
//     }

//     return sum;
// }

// console.log(find_sum(arr2));


// Q-3
// function findCount(arr,k){
//      var freq = 0;
//     for(var i = 0  ; i<arr.length; i++){
//        if(arr[i] == k) freq++;
//     };
//     return freq;
// };
// var arr = [1,2,3,4,4,4,5,6,6,7,7,7,1];
// var k = 4;
// console.log(findCount(arr,k));

// Q-4
// let arr = [7, 1, 2, 3, 4, 5, 6, 7];
// let evenSum=0;
// let oddSum = 0;
// let tempArr = [];
// function findEvenOdd(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             evenSum += arr[i];
//         } else{
//             oddSum += arr[i];
//         }
//     }
//     tempArr.push(evenSum);
//     tempArr.push(oddSum);
//     return tempArr;
// }

// console.log(findEvenOdd(arr));


// Q-5
// function Find_Num(arr,num){
//     if(arr.includes(num)){
//         console.log("Yes");
//     } else{
//         console.log("No");
//     }       
// }
// let arr = [5, 1, 2, 3, 4, 5, 2];
// let numToFind = parseInt(prompt("Enter the number to find: "));
// Find_Num(arr,numToFind);

// Q-6
// function highAge(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 18) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let inputArray = [11, 23, 3, 45, 72, 68];
// let output = highAge(inputArray);
// console.log(output.join(" ")); 


// Q-7
// let newArr = [];
// function Inc_Arr(arr){
//     for(let i=0; i<arr.length; i++){
//         newArr.push(arr[i]+1);
//     }
//     return newArr.join(" ");
// }

// let arr = [5, 1, 2, 3, 4, 5];
// console.log(Inc_Arr(arr));

// Q-8
// function isAllPass(marks){
//         if(marks >= 32) {
//             return "Yes";
//         } else{
//             return "No";
//         }
// }

// let marks = [7, 13, 89, 45, 98, 67, 45, 54];
// let rahulMarks = marks[2];
// console.log("Rahul Pass? " + isAllPass(rahulMarks));


// Q-9
// var ts =[1,2,3,5,5,5,6,7,7,74,45,33,3,3];
// function unique(ts){
//      var arr =[];
//     for(var i = 0 ; i<ts.length ;i++){
       
//         if(ts.indexOf(ts[i]) == ts.lastIndexOf(ts[i])){
//             arr.push(ts[i]);
//         };
//     };
//     return arr;
// };
// console.log(unique(ts));

// Q-10
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return min + " " + max;
}
let arr = [33, 11, 44, 66, 22, 77]; 
console.log(findMinMax(arr)); 



