// Problem 15:

// console.log("Please choose one of the following:\n1-Jan\n2-Feb\n3-Mar\n4-Apr\n5-May\n6-Jun\n7-Jul\n8-Aug\n9-Sep\n10-Oct\n11-Nov\n12-Dec");
// var choice = prompt("Choose....")
// switch (choice) {
//     case "Jan":
//         console.log("No. of days =31");
//         break
//     case "Fab":
//         console.log("No. of days =28");
//         break
//     case "Mar":
//         console.log("No. of days =30");
//         break
//     case "Apr":
//         console.log("No. of days =31");
//         break
//     case "May":
//         console.log("No. of days =30");
//         break
//     case "Jun":
//         console.log("No. of days =31");
//         break
//     case "Jul":
//         console.log("No. of days =30");
//         break
//     case "Aug":
//         console.log("No. of days =31");
//         break
//     case "Sep":
//         console.log("No. of days =30");
//         break
//     case "Oct":
//         console.log("No. of days =31");
//         break
//     case "Nov":
//         console.log("No. of days =30");
//         break
//     case "Dec":
//         console.log("No. of days =31");
//         break
//     default:
//         console.log("Wrong choice");
// }



//Problem 16:

// var letter = prompt("write a letter")
// switch (letter) {
//     case "a":
//         console.log("vowel");
//         break;
//     case "e":
//         console.log("vowel");
//         break;
//     case "i":
//         console.log("vowel");
//         break;
//     case "u":
//         console.log("vowel");
//         break;
//     case "o":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
//         break;
// }


// problem 17:

// var num1 = Number(prompt("Choose 1st Number"))
// var num2 = Number(prompt("Choose 2nd Number"))
// var max = num1 > num2
// switch (max) {
//     case true:
//         console.log("1st number is bigger");
//         break;
//     default:
//         var min = num1 < num2
//         switch (min) {
//             case true:
//                 console.log("2nd number is bigger");
//                 break;
//             default:
//                 console.log("both are equal");
//                 break;
//         }
//         break;
// }


// problem 18:

// var num = Number(prompt("write a number"))
// while (isNaN(num)) {
//     num = Number(prompt("write a number"))
// }
// switch (num%2) {
//     case 0:
//         console.log("number is even");
//         break;

//     default:
//         console.log("Number is odd");
//         break;
// }


// problem 19:

// var num = Number(prompt("Choose a Number"))
// while (isNaN(num)) {
//     num = Number(prompt("write a number"))
// }
// var positive = num > 0
// switch (positive) {
//     case true:
//         console.log("number is positive");
//         break;
//     default:
//         var negative = num < 0
//         switch (negative) {
//             case true:
//                 console.log("number is negative");
//                 break;
//             default:
//                 console.log("number equal 0");
//                 break;
//         }
//         break;
// }


// problem 20:

// var num1 = Number(prompt("write 1st No."))
// while (isNaN(num1)) {
//     num1 = Number(prompt("write a number"))
// }

// var operator = prompt("write arithmetic operator between the following \n    +    -   *    /    %   **")

// var num2 = Number(prompt("write 2nd No."))
// while (isNaN(num2)) {
//     num2 = Number(prompt("write a number"))
// }

// switch (operator) {
//     case "+":
//         console.log("result = " + (num1 + num2));
//         break;
//     case "-":
//         console.log("result = " + (num1 - num2));
//         break;
//     case "*":
//         console.log("result = " + (num1 * num2));
//         break;
//     case "/":
//         console.log("result = " + (num1 / num2));
//         break;
//     case "**":
//         console.log("result = " + (num1 ** num2));
//         break;
//     case "%":
//         console.log("result = " + (num1 % num2));
//         break;

//     default:
//         console.log("wrong operator");
//         break;
// }