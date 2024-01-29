/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var ticketFare=800;
var age=18;
var students= false;


if(age < 10){
    console.log('free ride for children')
}else if(students == true){
    // 50% discount
   var discount =ticketFare * 50 / 100;
   payAmount =ticketFare - discount;
    console.log(payAmount)
}else if(age >= 60){
    // senior citizen discount
    var discount =ticketFare * 15 / 100;
    payAmount =ticketFare - discount;
     console.log(payAmount)
}else{
    console.log('pay full fare')
}
