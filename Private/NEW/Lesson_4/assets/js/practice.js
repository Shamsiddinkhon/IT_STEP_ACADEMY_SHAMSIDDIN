

// XMLHTTPRequest
let xhr = new XMLHttpRequest()


xhr.open("GET", "https://jsonplaceholder.typicode.com/users");




xhr.onload = function () {


    let objectsArray = JSON.parse(xhr.response)
        // console.log(xhr.resposne);

    let main = document.createElement("div")
    main.classList.add("main")

    let about = document.createElement("div")
    about.classList.add("about")

for(let i = 0;i < objectsArray.length;i++) {

    let block = document.createElement("div")

    let blocks = document.createElement("div")

    blocks.classList.add("names")

    let name = document.createElement("a")
    name.textContent = objectsArray[i].name
    // console.log(name)
    
    name.onclick = function () {
        

        //Создание таблицы
        let table = document.querySelector('#table')

        let tr = document.createElement('tr')


        
        let name = document.createElement("a")
        name.textContent = objectsArray[i].name
        
        let userName = document.createElement('p')
        userName.textContent = objectsArray[i].username
        
        let address = document.createElement('p')
        address.textContent = objectsArray[i].address

        let email = document.createElement('p')
        email.textContent = objectsArray[i].email
        
        let phone = document.createElement('p')
        phone.textContent = objectsArray[i].phone

        let webSite = document.createElement('p')
        webSite.textContent = objectsArray[i].webSite



    }


    block.append(name)

    blocks.append(block)

    main.append(blocks)

}
    
    document.body.append(main)


}

xhr.send();