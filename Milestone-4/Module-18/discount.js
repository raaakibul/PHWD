age = 17;
const price = 710;
if(age<12){
    console.log("Free");
}else if(age>=60){
    const discount = price *50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}else{
    console.log(price);
}