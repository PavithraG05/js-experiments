let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];

function lunchTotal(lunch)
{   
    let sum = 0;
    for(let i in lunch)
    {
        sum += lunch[i].price;
    }
    return sum;
}

output = lunchTotal(lunch);
console.log(`Subtotal: ${output}`);
console.log(`Tax:${(output * 0.08).toFixed(2)}`);
console.log(`Tip:${(output*0.18).toFixed(2)}`);
console.log(`Total due: ${(output + output * 0.08 + output*0.18).toFixed(2)}`);