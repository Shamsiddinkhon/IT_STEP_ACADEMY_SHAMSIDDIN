// //First
// let btn = document.querySelector('#btn')

// btn.onclick = function() {
//     document.getElementById('random').innerHTML = Math.random() * 10
// }

// //SECOND
// document.querySelector('body').onmousemove = function(e){
//     document.getElementById('x').innerHTML = e.screenX
//     document.getElementById('y').innerHTML = e.screenY
// }



//THIRD
// let text = document.querySelector('#text')
// let hidden = document.querySelector('.intext')

// text.onclick = function() {
//     console.log(hidden.style.display)
//     if(hidden.style.display != "block"){
//         hidden.style.display = "block"
//     }else{
//         hidden.style.display = "none"
//     }
// }

//FOURTH



// let first = document.getElementById('link1')
// let second = document.getElementById('link2')
// let third = document.getElementById('link3')

// let text1 = document.querySelector('.first')
// let text2 = document.querySelector('.second')
// let text3 = document.querySelector('.third')

// let lastText = 1;

// function removeLast(num){
//     if(num == 1)
//         text1.id = ""
//     else if(num == 2)
//         text2.id = ""
//     else
//         text3.id = ""
// }

// first.onclick = function () {

//     removeLast(lastText)
//     if(!text1.id == "active")
//         text1.id = ""
//     else
//         text1.id = "active"
    
    
//     lastText = 1
// }

// second.onclick = function () {
//     removeLast(lastText)

//     if(!text2.id == "active")
//         text2.id = ""
//     else
//         text2.id = "active"
    
//     lastText = 2
// }

// third.onclick = function () {
//     removeLast(lastText)

//     if(!text3.id == "active")
//         text3.id = ""
//     else
//         text3.id = "active"

//     lastText = 3
// }


//FIVE


// let btn = document.querySelector("#bar")
// let color = document.querySelector(".color")

// let percent = 0;

// btn.onclick = () => {
//     if (percent === 100)
//         return;

//         percent += 5;
//         color.style.width = num + "%"
// }



//SIX COLORS

let color = document.querySelector(".colors")
let btn = document.querySelector('#btncolor')


let colorArray = [];
let arrayLengh = 0;

btn.onclick = () => { 
    let color = document.createElement("div");
    color.style.cssText = `width: 50px; height: 50px; background-color: rgb(${randThird},${randFirst},${randSecond});`


    colorArray.push(block)
    colorArray
}







