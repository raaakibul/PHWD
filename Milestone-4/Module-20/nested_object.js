const computer = {
    brand: 'Lenovo',
    price: 55000,
    processor: 'intel',
    hdd: '512gb'
}
const keys = Object.keys(computer)
console.log(keys);

const values = Object.values(computer)
console.log(values);

const college = {
    name: 'VNC',
    class: ['10','11','12'],
    events : ['A', 'B', 'V'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top',
        }
    }
}
console.log(college.unique.color);
console.log(college.unique);
console.log(college.unique.result);
console.log(college.unique.result.merit);
college.events[1] = 'D';
console.log(college.events[1]);