let btn = document.getElementById("btn")
let blocks = document.querySelectorAll(".block")
let icon = document.querySelectorAll("i")

console.log(icon[0]);

for(let i = 0; i < blocks.length; i++) {
    let click = 0;
console.log(i);

    blocks[i].onclick = function (e) {
        click +=1
        icon[i].style.transform = "rotateY(0deg)"
    }
}


btn.onclick = function (e) {
    console.log(e);
}