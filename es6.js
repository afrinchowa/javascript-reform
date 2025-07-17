// template string
const numbers =[89,54,67,98 ]
const student ={
    name:'sakib khan',
    age:32,
    movies:['xo','khan','dhaka']
}

const about=`My name is ${student.name} my age is ${student.age} has number ${numbers[2]} also like movies is }`
console.log(about)
// 2.arrow function 
const getfiftyFive =()=>55;
const addsixtyFive =(num)=>num+65;
const isEven = x=>x%2==0;
const addThree= (x,y,z)=>x+y+z;
const doMath = (num1,num2)=>{
const sum = num1+num2;
    return sum;
}
// spread operator
const newNumbers=[...numbers];
const newNumbers2=[...numbers,23];

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers)
console.log(newNumbers)
console.log(newNumbers2)