// distructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y]=[42,65];
const [x, y] = numbers;
console.log(x, y);
function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(90, 34));
// object destructuring
const { name, age } = { name: "alu", age: 14 };
const { name1, age1, id } = { name: "alu", age: 14, id: 12 };
const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 53,
    address: "kumarkhali",
    drink: "wine",
    watch: {
      color: black,
      price: 5600,
      brand: carmin,
    },
  },
};
// optional chaining used for if there is no property or value incase;

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
