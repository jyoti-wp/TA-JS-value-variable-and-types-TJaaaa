// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
  alert("The number is even");
} else {
  alert("Number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Enter a num1"));

let num2 = Number(prompt("Enter a num2"));

if (num1 > num2) {
  alert(`${num1} is greater`);
} else {
  alert(`${num2} is greater`);
}

// 3. Convert the above code using`?` terniary operator

let numA = Number(prompt("Enter a number"));

let numB = Number(prompt("Enter a number"));

numA > numB ? alert(`${numA} is greater`) : alert(`${numB} is greater`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = Number(prompt("Please enter your house name"));

if (houseName === "Stark") {
  alert("Winter is coming");
} else if (houseName === "Lannister") {
  alert(`A lannister always pays his debt`);
} else {
  alert(`All men must die`);
}

// 5. Convert the above code using`?` terniary operator

houseName === "stark"
  ? alert("Winter is coming")
  : houseName === "Lannister"
  ? alert(`A lannister always pays his debt`)
  : alert(`All men must die`);

// Switch

switch (houseName) {
  case houseName === "stark":
    alert("Winter is coming");
    break;
  case houseName === "Lannister":
    alert("A Lannister always pays his debt");
    break;
  default:
    alert("No match found");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let mNum = prompt("Enter the month");

switch (mNum) {
  case "January":
    alert("The number of the days are 31");
    break;
  case "February":
    alert("The number of the days are 28");
    break;
  case "March":
    alert("The number of the days are 30");
    break;
  case "April":
    alert("The number of the days are 31");
    break;
  case "May":
    alert("The number of the days are 30");
    break;
  case "June":
    alert("The number of the days are 31");
    break;
  case "July":
    alert("The number of the days are 30");
    break;
  case "August":
    alert("The number of the days are 31");
    break;
  case "September":
    alert("The number of the days are 30");
    break;
  case "October":
    alert("The number of the days are 31");
    break;
  case "November":
    alert("The number of the days are 30");
    break;
  case "December":
    alert("The number of the days are 31");
    break;
  default:
    alert("Not a valid entry");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the taxAmount amoun from salery.Conditions are given below.
  - `Salary <= 20000` taxAmount is 10 %
  - `Salary <= 40000` taxAmount is 20 %
  - `Salary > 50000` taxAmount is 30 %

*/

let salary = prompt("Enter the salary amount");

switch (true) {
  case Salary <= 20000:
    let taxAmount = (salary * 10) / 100;
    alert(`Your inhand salary is ${salary - taxAmount}`);
    break;
  case Salary <= 40000:
    let taxAmount = (salary * 20) / 100;
    alert(`Your inhand salary is ${salary - taxAmount}`);
    break;
  case Salary > 50000:
    let taxAmount = (salary * 30) / 100;
    alert(`Your inhand salary is ${salary - taxAmount}`);
    break;
  default:
    alert(`Not a valid input`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt("enter marks here");

if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C");
} else if (marks > 0) {
  alert("Grade D");
}

switch (true) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  default:
    alert("Grade D");
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("Enter your answer");

switch (weather) {
  case "sunny":
    alert("Wear a T - shirt");
    break;
  case "Rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "Hot":
    alert(`Get a hanky`);
    break;
  case "Freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
    break;
}
