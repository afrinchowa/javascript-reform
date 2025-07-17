// JSON

const student ={
    name:'sakib khan',
    age:32,
    movies:['xo','khan','dhaka']
}

const studentJSON=JSON.stringify(student);
// console.log(student)
// console.log(studentJSON)
const studentObj=JSON.parse(studentJSON);
// console.log(studentObj)

// fetch
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data))

// object keys and values
const keys =Object.keys(student)
const values =Object.values(student)
// console.log(keys);
// console.log(values);

// foreach loop

const numbers = [23,45,65,56,76,34,67,98];
// numbers.forEach(num=>console.log(num));
numbers.map(num =>num *2);

// for of on array like object
// loop on a object  for in used for  
// add or remove from and array

const products =[
  {
    name: "Wireless Headphones",
    brand: "SoundMax",
    price: 59.99,
    color: "Black"
  },
  {
    name: "Smartphone",
    brand: "TechWave",
    price: 699.99,
    color: "Midnight Blue"
  },
  {
    name: "Running Shoes",
    brand: "SprintX",
    price: 89.5,
    color: "Red"
  },
  {
    name: "Laptop",
    brand: "NovaBook",
    price: 1099.0,
    color: "Silver"
  },
  {
    name: "Bluetooth Speaker",
    brand: "BoomPod",
    price: 45.25,
    color: "Green"
  },
  {
    name: "Smartwatch",
    brand: "WristTech",
    price: 149.75,
    color: "Rose Gold"
  },
  {
    name: "Backpack",
    brand: "CarryAll",
    price: 39.99,
    color: "Gray"
  },
  {
    name: "Desk Lamp",
    brand: "GlowLite",
    price: 24.99,
    color: "White"
  },
  {
    name: "Gaming Mouse",
    brand: "ClickStorm",
    price: 49.95,
    color: "Black"
  },

]


const newProduct =  {
    name: "Fitness Tracker",
    brand: "FitCore",
    price: 79.0,
    color: "Blue"
  }
  const newProducts=[...products,newProduct]
  const remainingProducts=products.filter(products =>products.name!=="Gaming Mouse")
  console.log(products);
//   console.log(newProducts);
//   console.log(remainingProducts);
