        console.log("add two number");
        let a = 10;
        let b = 20;
        let res = a+b;
        console.log(res);


        console.log("Find if the conditions are obeyed or not?");
        let A = 5;
        let B = 7;
        let res2 = (A<10 && B<10 && A>B);
        console.log(res2);

        console.log("Check the conditions");
        let x = 30;
        let y = 20;
        let ans1 = (x%10 ==0 && y%10==0);
        let ans2 = (x%10 !=0 && y%10!=0);
        let ans3 = (x%10 ==0 || y%10 ==0);
        console.log(ans1);
        console.log(ans2);
        console.log(ans3);


        console.log("Find the first digit of a 4 digit number");
        let num = 2398;
        let firstDigit = Math.floor(num/1000);
        console.log(firstDigit);

        console.log("Find the last digit of a 4 digit number");
        let num1 = 2398;
        // let LastDigit = num2%10; // it give negative if the number is negative
        let LastDigit =Math.abs(num1%10); // it gives always postive if the num is negative
        console.log(LastDigit);

        console.log("Find the reminder");
        let c = 9;
        let d = 2;
        let findRem = (c%d);
        console.log(findRem);


        console.log("multipy two numbers");
        let num2 = 5;
        let num3 = 2;
        console.log(num2*num3);


        console.log("marks calculator");
        let hindi = 80;
        let math = 76;
        let engish = 85;
        let total = (hindi+math+engish);
        console.log(total);
        let average = total/3;
        console.log(average);
