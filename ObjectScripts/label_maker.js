let myInfo = {
    fname:"Pavi",
    address:"btm layout",
    city:"Bengaluru",
    state:"karnataka",
    zip:"560029"
};

const printContact = () => `${myInfo.fname}\n${myInfo.address}\n${myInfo.city}, ${myInfo.state} ${myInfo.zip}`;


console.log(printContact(myInfo));