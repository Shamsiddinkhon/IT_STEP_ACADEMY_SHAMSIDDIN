let enter = document.getElementById("enter")
let formatted = document.getElementById("formetted")
let btn = document.querySelector("button")

btn.addEventListener("click", function() {
    try{
    let object = JSON.parse(enter.value)
    alert('Mistake')
    }
    catch(err) {
        alert('Mistake')
    }
    finally{
        alert("Finaly")
    }
   let result = JSON.stringify(obj, null, 4)

   formatted.value = result
})


// terrarniy operator 


// regex101.com RegEx

