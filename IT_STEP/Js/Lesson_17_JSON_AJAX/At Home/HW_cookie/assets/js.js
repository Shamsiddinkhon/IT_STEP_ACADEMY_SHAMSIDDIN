let color = document.querySelector("#color").value
let type = document.querySelector("#type").value
let code = document.querySelector("#code").value
let btn = document.querySelector("#btn")
let blocks = document.querySelector("#blocks")


btn.onclick = () => {
    let block = document.createElement("div")
    block.classList.add("block")
    color = block.style.cssText = `background-color ${color}`
    let about = document.createElement("div")
    about.classList.add("about")
    about.style.cssText = `background-color: ${color}; `
    block.append(about)
    blocks.append(block)
    console.log()
}
document.body.append(blocks)