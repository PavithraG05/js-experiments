//conditionals

let payRate = 12.5;
let hoursWorked = 20;

if(hoursWorked <= 40)
{
    let grossPay = payRate * hoursWorked;
    console.log(`Gross Pay: ${grossPay}`)
}
if(hoursWorked > 40)
{
    let pay = payRate * 40;
    let hoursOverWorkedPay = (hoursWorked-40)*payRate *1.5;
    let grossPay = pay + hoursOverWorkedPay;
    console.log(`Gross Pay: ${grossPay}`)
}