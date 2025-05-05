const numbers = [1,2,3,4,5,6,7,8];
console.log(numbers);
console.log(numbers.reverse());

for(const number of numbers){
    console.log(number);
}

const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers);

const reversed_numbers = [];
for(let i=0;i<numbers.length;i++){
    const num = numbers[i];
    reversed_numbers.unshift(num)
}
console.log(reversed_numbers);
