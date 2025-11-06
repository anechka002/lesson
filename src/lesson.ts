const numbers = [1, 5, 10, 15, 20]
const newNumbers = numbers.map(number => number + 10)
// console.log(newNumbers) // [11, 15, 20, 25, 30] ⬅️ Итоговый результат
//================================
const names = ["Alice", "Bob", "Charlie", "Diana"]
const nameInfo = names.map(name => {
  return { name: name , length: name.length }
})
// console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]
//================================
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
]

const productsWithFinalPrice = products.map(el => {
  return {
    name: el.name,
    price: el.price,
    finalPrice: el.price * (1 - 15 / 100)
  }
})

// console.log(productsWithFinalPrice)
// ⬇️ Итоговый результат
// [
//   { name: 'Laptop', price: 1000, finalPrice: 850 },
//   { name: 'Mouse', price: 50, finalPrice: 42.5 },
//   { name: 'Keyboard', price: 80, finalPrice: 68 }
// ]
//================================
const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
]

const employeesWithTotal = employees.map(el => {
  return {
    name: el.name,
    salary: el.salary,
    experience: el.experience,
    totalSalary: el.salary + el.salary * 0.05 * el.experience }
})
// console.log(employeesWithTotal)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', salary: 50000, experience: 3, totalSalary: 57500 },
//   { name: 'Bob', salary: 60000, experience: 5, totalSalary: 75000 },
//   { name: 'Charlie', salary: 45000, experience: 2, totalSalary: 49500 }
// ]
//================================