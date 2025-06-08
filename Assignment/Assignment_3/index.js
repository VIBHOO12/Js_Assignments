console.log("Q-1");
let S = "AbaDd"; 
let B = [0, 0]; 
for (let i = 0; i < S.length; i++) {
    if (S[i] === 'A') {
        B[0]++;
    } else if (S[i] === 'D') {
        B[1]++;
    }
}
console.log(B[0], B[1]);

// =====================================================>

console.log("Q-2");
let str = "proggggramming";
let arr =  str.split("").sort();
let finalarr = [];
for(let i = 0 ; i<arr.length; i++){
     let temp = arr[i];
     let first =  arr.indexOf(temp);
     let last =  arr.lastIndexOf(temp);
      i = last;
     let final = last-first+1;
     if(final >=2)
     finalarr.push(`${arr[i] + final}`);
};
console.log(finalarr.join(""));


// =====================================================>

console.log("Q-3");
let str1 = "Prepbytes";
let countVovel = 0;
for(let i = 0; i<str1.length; i++){
    let ch = str[i].toLowerCase();
    if(ch == 'a' || ch == 'e'|| ch == 'i'|| ch == 'o'|| ch == 'u'){
        countVovel++;
    }
}
console.log(countVovel);

// =====================================================>


console.log("Q-4");
let str2 = "Prep";
let str3 = "Byte";
console.log(str2.concat(str3));

// =====================================================>

console.log("Q-5");
let str4 ="Vishwakarma";
let len = str4.length;
console.log(len);

// =====================================================>

console.log("Q-6");
let s ="ADDDAAADDAA";
let countA = 0;
let countD = 0;
for(let i=0; i<s.length; i++){
    if(str[i] == "A"){
        countA++;
    } else{
        countD++;
    }
}
if(countA>countD){
    console.log("Aditya");
} else if(countA<countD){
    console.log("Danish");
} else{
    console.log("Draw");
}

// =====================================================>

console.log("Q-7");
let s1 = "Vibhoo";
let s2 = "Sharma";
console.log(s1+s2);

// =====================================================>

console.log("Q-8");
let str5 = "namaAn"; 
let flag = true;

for (let i = 0; i < str5.length / 2; i++) {
  if (str5[i] !== str5[str5.length - 1 - i]) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// =====================================================>

console.log("Q-9");
let s3 = "I am utkarsh raj";
let res = s3.split("").reverse().join("");
console.log(res); //TC=O(n)


// =====================================================>

console.log("Q-10");
let w1 = "Prepbytes";
let w2= "Prepbytes";
if(w1 == w2){
    console.log("Yes");
}else{
    console.log("No");
}

// =====================================================>

console.log("Q-11");
let s4 = "Hi, I am You.You";
let pattern = "You";
let text = "Propbyte";
let res2 = s4.replaceAll(pattern, text);
console.log(res2);

// =====================================================>

console.log("Q-12");
let s5="I am Vibhoo Sharma";
let res3= s5.split(" ");
for(let word of res3){
  console.log(word);
}

// =====================================================>

console.log("Q-13");
let str6="PropbytesAAB";
let vovel=0;
let consonants = 0;
for(let i=0; i<str6.length; i++){
    let ch = str6[i].toLowerCase();
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
      vovel++;
    } else{
      consonants++;
    }

}
console.log(vovel + " " + consonants);





