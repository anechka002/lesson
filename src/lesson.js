// map()
// const numbers = [1, 5, 10, 15, 20]
// const newNumbers = numbers.map(number => number + 10)
// console.log(newNumbers) // [11, 15, 20, 25, 30] ⬅️ Итоговый результат
//================================
// const names = ["Alice", "Bob", "Charlie", "Diana"]
// const nameInfo = names.map(name => {
//   return { name: name , length: name.length }
// })
// console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]
//================================
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
// ]
//
// const productsWithFinalPrice = products.map(el => {
//   return {
//     name: el.name,
//     price: el.price,
//     finalPrice: el.price * (1 - 15 / 100)
//   }
// })

// console.log(productsWithFinalPrice)
// ⬇️ Итоговый результат
// [
//   { name: 'Laptop', price: 1000, finalPrice: 850 },
//   { name: 'Mouse', price: 50, finalPrice: 42.5 },
//   { name: 'Keyboard', price: 80, finalPrice: 68 }
// ]
//================================
// const employees = [
//   { name: "Alice", salary: 50000, experience: 3 },
//   { name: "Bob", salary: 60000, experience: 5 },
//   { name: "Charlie", salary: 45000, experience: 2 },
// ]

// const employeesWithTotal = employees.map(el => {
//   return {
//     name: el.name,
//     salary: el.salary,
//     experience: el.experience,
//     totalSalary: el.salary + el.salary * 0.05 * el.experience }
// })
// console.log(employeesWithTotal)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', salary: 50000, experience: 3, totalSalary: 57500 },
//   { name: 'Bob', salary: 60000, experience: 5, totalSalary: 75000 },
//   { name: 'Charlie', salary: 45000, experience: 2, totalSalary: 49500 }
// ]
//================================
// filter, find
// const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33]
// // Найди все четные числа
// const evenNumbers = numbers.filter(el => el % 2 === 0) // твой код
// console.log(evenNumbers)
// // Найди числа больше 10
// const bigNumbers = numbers.filter(el => el > 10) // твой код
// console.log(bigNumbers)
// // Найди первое число больше 20
// const firstBig = numbers.find(el => el > 20) // твой код
// console.log(firstBig)
// ================================
// const students = [
//   { name: "Анна", age: 19, grade: 7, course: 2 },
//   { name: "Диана", age: 17, grade: 8, course: 1 },
//   { name: "Виктория", age: 21, grade: 5, course: 3 },
//   { name: "Григорий", age: 18, grade: 9, course: 2 },
//   { name: "Борис", age: 20, grade: 4, course: 3 },
//   { name: "Евгений", age: 16, grade: 6, course: 1 },
// ]
// // Найди студентов 18+ лет
// const adults = students.filter(el => el.age >= 18)
// console.log(adults)
// // Найди студентов с оценкой 8+
// const excellentStudents = students.filter(el => el.grade >= 8) // твой код
// console.log(excellentStudents)
// // Найди студентов 2 курса
// const secondCourse = students.filter(el => el.course === 2) // твой код
// console.log(secondCourse)
// // Найди взрослых студентов с оценкой выше 6
// const adultGoodStudents = students.filter(el => el.grade >= 6 && el.age >= 18) // твой код
// console.log(adultGoodStudents)
// // Найди студента по имени 'Виктория'
// const victoria = students.find(el => el.name === 'Виктория') // твой код
// console.log(victoria)
// // Найди первого студента с оценкой 8+
// const firstExcellent = students.find(el => el.grade > 8)  // твой код
// console.log(firstExcellent)
// // Попытайся найти студента младше 16 лет
// const tooYoung = students.find(el => el.age < 16) // твой код
// console.log(tooYoung) // должно быть undefined
// ================================
// 1. Функция для проверки совершеннолетия
// function isAdult(person) {
//   return person.age >= 18
// }
//
// // 2. Функция для проверки отличника (8+)
// function isExcellent(student) {
//   return student.grade >= 8
// }
//
// // 3. Функция для проверки курса
// function isSecondCourse(student) {
//   return student.course === 2
// }

// Используй эти функции с методами filter и find
// const adultStudents = students.filter(isAdult)
// const firstExcellent = students.find(isExcellent)
// const secondCourse = students.filter(isSecondCourse)
// const firstSecondCourse = students.find(isSecondCourse)
// console.log('adultStudents', adultStudents)
// console.log('firstExcellent', firstExcellent)
// console.log('secondCourse', secondCourse)
// console.log('firstSecondCourse', firstSecondCourse)
// ================================
const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]
//
// // 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((_, index) => index % 2 === 0)
//
// // 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((_, index) => index > 2)

// console.log('evenIndexColors', evenIndexColors)
// console.log('colorAfterIndex2', colorAfterIndex2)
// ================================
// console.log(true && "Hello") // ? Hello
// console.log(false && "World") // ? false
// console.log("" && "JavaScript") // ?
// console.log("React" && "Vue") // ?
// console.log(5 && 10) // ?
// console.log(0 && 100) // ?
// console.log(null && "Test") // ?
// console.log(undefined && 42) // ?


// console.log("A" && "B" && "C") // ?
// console.log("X" && "" && "Z") // ?
// console.log(1 && 2 && 0 && 4) // ?
// console.log(true && "Yes" && 7) // ?


// console.log(false || "Default") // ?
// console.log("" || "Fallback") // ?
// console.log(null || "Backup") // ?
// console.log("First" || "Second") // ?
// console.log(0 || 42) // ?
// console.log(undefined || "Value") // ?


// console.log("" || 0 || "Found") // ?
// console.log(false || null || "OK") // ?
// console.log(undefined || "" || 0 || "Final") // ?
// console.log("Start" || false || "End") // ?


// console.log("A" && ("B" || "C")) // ? 
// console.log(false || ("X" && "Y")) // ? 
// console.log(("" && "Test") || "Default") // ? 
// console.log("Hi" || (false && "Bye")) // ? 
// console.log((true && "Yes") || "No") // ? 
// console.log(null || (0 && "Zero")) // ? 


// console.log("A" || ("B" && "C")) // ?
// console.log(("A" || "B") && "C") // ?
// console.log(("A" && "B") || ("C" && "D")) // ?
// console.log((false && true) || (true && "Result")) // ?


// function getUserName(user) {
//   return user.name || "Гость"
// }

// // Тесты:
// console.log(getUserName({ name: "Анна" })) // "Анна"
// console.log(getUserName({})) // "Гость"
// console.log(getUserName({ name: "" })) // "Гость"


// function canAccess(user, resource) {
//   return user.isAuth && (user.role === "admin" || user.id === resource.owner)
// }

// // Тесты:
// console.log(canAccess({ isAuth: true, role: "admin" }, { owner: "user1" })) // true
// console.log(canAccess({ isAuth: true, id: "user1" }, { owner: "user1" })) // true
// console.log(canAccess({ isAuth: false, role: "admin" }, { owner: "user1" })) // false
// ================================

