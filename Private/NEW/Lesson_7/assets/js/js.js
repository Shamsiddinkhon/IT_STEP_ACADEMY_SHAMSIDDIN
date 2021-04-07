//  event.keyCode
// quokka.js
 
//  let elements = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"]

//  let [elem1, elem2, elem3, ...other] = elements
//  console.log(elem1, elem2, elem3, other);


//  let array = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"]
//     array.reverse()
//  let [elem1, elem2, ] = array
//  console.log(elem1, elem2);


// let array = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"]

//  let [, elem2,,,,, ] = array
//  console.log(elem2);

//  let array = ["elem1" ]
//  let [,elem2 = "elem2",elem3 = "elem3"] = array
//  console.log(elem2, elem3);


// let obj = {
//     name: 'Petr',
//     surname: 'Petrov',
//     age: ' 20 let'
// }
// console.log(obj)

// let {name, age} = obj

// console.log(name, age)



// let obj = {
//     name: 'Petr',
// }
// let {name, surname = "abc", age = 999  + "year old"} = obj
// console.log(name, surname, age)


//Practice

let btn = document.getElementById("btn")
btn.onclick = function (e) {
    e.preventDefault()
    let question = document.getElementById("question").value
    let answer = document.getElementById("answer").value
    let wrong = document.getElementById("wrong").value
    console.log(question,answer,wrong)
    let create = document.createElement("div")
    create.innerHTML = `
    <h2>${question}</h2>
    <p>Corrent answer: ${answer}</p>
    <p>Wrong answer: ${wrong}</p>
    <hr>`


    document.getElementById("questions").append(create)



}

if(e.ctrlKey || e.key == "H")