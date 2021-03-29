// alert('Hello')
// // 1 Про переменные
// var firstName = 'Shamsiddinxon' //string
// // const lastname = 'Shukurov' //string
// // let age = 24 //number
// const isProgrammer = true //Boolean


// // name = 'Shamsiddinxon'
// console.log(name)
// // console.log(age)

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' //error  
// const withNum5 = '5'// error


// 2 МУТИРОВАНИЕ 
// console.log('Humans Name: ' + name + ', Humans age: ' + age)
// alert('Humans Name: ' + name + ', Humans age: ' + age)

// const lastName = prompt('write your Lastname')
// alert(firstName + ' ' + lastName)

// 3 Операторы
//Операторы чисел
// const currentYear = 2021
// const birthYear = 1997

// const age = currentYear - birthYear
// console.log(age)

// let currentYear = 2021
// const a = 10
// const b = 5

// let c = 32
// c += a
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)


// 4 типы данных
// const isProgrammer = true 
// const name = 'Shamsiddinxon'
// const age = 24
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(x)
// console.log(typeof null)

// 5 Приоритет Операторов
// const fullAge = 23
// const birthYear = 1197
// const currentYear = 2021

//> < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //24 >= 25 true 
// console.log(isFullAge)

// 6 Условные Операторы 
// const coursStatus = 'pending' //ready, fail ,pending
// if (coursStatus === 'ready') {
//     console.log('Course is ready and you can learn')
// }else if (coursStatus === 'pending') {
//     console.log('The cours is now on the proccess developping')
// }else {
//     console.log('The course is Failed')
// }

// const isReady = false
// if (isReady === true) {
//     console.log('Any thing is Ready!')
// } else {
//     console.log('Any thing is not Ready!')
// }
// Тернарное выражение
// isReady ? console.log('Any thing is Ready!') :  console.log('Any thing is not Ready!')


// const num1 = 42 //number
// const num2 = '42' //string

// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 Functions

// function calcAge(year) {
//     return 2021 - year
// }
// const myAge = calcAge(1997)
// console.log(calcAge(2000))

// function logInfoAbout (name, year) {
//     const age = calcAge(year)
//     // console.log('Human with: ' + name + 'now has age: ' + age)

//     if (age > 0) {
//         console.log('Human with: ' + name + 'now has age: ' + age)
//     }else {
//         console.log('It not born now =)')
//     }
// }

// logInfoAbout('Shamsiddinxon', 1997)
// logInfoAbout('Muxriddin', 2022)

// 9 Массивы 
// const cars = ['Mazda', 'Mersedes', 'Ford']
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[0])


// cars[0] = 'BMW'
// console.log(cars)
// cars[3] = 'Mustang'
// console.log(cars)
// cars[cars.length] = 'Mazda' // Это чтобы добавить в конец
// console.log(cars)


// 10 Циклы
// const cars = ['Mazda', 'Mersedes', 'Ford']

// // for (let i = 0; i < cars.length; i++) {
// //     // console.log(i)
// //     const car = cars[i]
// //     console.log(car)
// // }
// for (let car of cars) {
//     console.log(car)
// }


//11 Обекты
// const person = {
//     firstName: 'Shamsiddinxon',
//     lastName: 'Shukurov',
//     year: 1993,
//     languages: ['RU', 'EN', 'UZ'],
//     hasWife: false,

//     greet: function() {
//         console.log('greet')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// const keys = 'year'
// console.log(person['year'])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)

// person.greet()



