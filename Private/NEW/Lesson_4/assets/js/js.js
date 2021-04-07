// XMLHTTPRequest
let xhr = new XMLHttpRequest()

console.log(xhr.readyState); // 1
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

console.log(xhr.readyState); //2


xhr.onload = function () {


    let objectsArray = JSON.parse(xhr.response)

    console.log(xhr.status)

    console.log(xhr.readyState);

for(let i = 0;i < objectsArray.length;i++) {
    let block = document.createElement("div")

    let nameHeader = document.createElement("H2")
    nameHeader.textContent = objectsArray[i].id
    
    let titleP = document.createElement("p")
    titleP.textContent = objectsArray[i].title

    let bodyP = document.createElement("p")
    bodyP.textContent = objectsArray[i].body

    block.append(nameHeader, titleP, bodyP)

    document.body.append(block, "====================")

}

}

xhr.send();