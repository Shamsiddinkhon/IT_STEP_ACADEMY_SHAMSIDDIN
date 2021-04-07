btn.onclick= function () {
    let xhr = new XMLHttpRequest()

    xhr.open("GET", `https://jsonplaceholder.typicode.com/comments`)

    xhr.onload = function () {
        let obj = JSON.parse(xhr.response)
        // console.log(xhr.response)

        let main = document.createElement("div")
        main.classList.add("main")

        let about = document.createElement("div")
        about.classList.add("coments")

        let btn = document.querySelector("#btn")


            for(let i = 0; i < obj.length; i++) {

                let block = document.createElement("div")

                let postId = document.createElement("H2")
                postId.textContent = obj[i].postId
                
                let name = document.createElement("p")
                name.classList.add("name")
                name.textContent = obj[i].name
            
                let email = document.createElement("p")
                email.classList.add("email")
                email.textContent = obj[i].email

                let body = document.createElement("p")
                body.classList.add("comment")
                body.textContent = obj[i].body
                
                if ( i == 12) break;

                console.log(postId);
                block.append(postId, name, email, body)
            
                document.body.append(block, "===================================================================================================================================================================")
            


        
            
            // main.append(id)
            

    }
        document.body.append(main)
    }


    xhr.send()


}