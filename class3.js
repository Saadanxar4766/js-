/*let age = prompt("enter your age")
let isstudent = prompt("Are you a student? (yes/no)")
let ticketprice =
if(age <= 12){
  ticketprice = $5;  
}else if (age >= 12 && age<= 18 && isstudent == "yes"){
  ticketprice = $8;
}else if (age >= 12 && age<= 18){
  ticketprice = $8;
}else if (age >= 12 && age<= 18 && isstudent == "no"){
  ticketprice = $10;
}else{ticketprice = $12;}
alert("ticketprice" + ticketprice);*/
let age = prompt("Enter your age");
let isStudent = prompt("Are you a student? (yes/no)");
let ticketPrice;

if (age <= 12) {
  ticketPrice = 5;  
} else if (age >= 12 && age <= 18 && isStudent.toLowerCase() === "yes") {
  ticketPrice = 8;
} else if (age >= 12 && age <= 18 && isStudent.toLowerCase() === "no") {
  ticketPrice = 10;
} else {
  ticketPrice = 12;
}

alert("Ticket price: $" + ticketPrice);


//postIncrement operator
var a = 121
a++
console.log(a)

//post-decrement operator
var a = 121
a--
console.log(a)
