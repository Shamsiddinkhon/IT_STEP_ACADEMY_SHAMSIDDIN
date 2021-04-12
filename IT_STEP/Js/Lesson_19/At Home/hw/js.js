let name = document.getElementById("title");
let section = document.getElementById("section");
let btn = document.getElementById("btn");

let result = document.getElementById("result") 

btn.onclick = function (e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `http://www.omdbapi.com/?apikey=585a4221&t=${name.value}`);
  xhr.onload = function () {
    let obj = JSON.parse(xhr.response);
    console.log(obj);
	


	
	

	let div = document.createElement("div")
	div.classList.add("blocks")

	//======================================
	let about = document.createElement("div")
	about.classList.add("res__about")

	//======================================
	let picture = obj.Poster
	let img = document.createElement(`div`)
	img.innerHTML = `<img src="${picture}" alt="">`
	img.classList.add("img")
	console.log(img)
	
	//======================================
	let type = document.createElement("h5")
	type.classList.add("type")
	type.textContent = obj.Type
	console.log(type)
	//======================================

	let year = obj.Year

	console.log(year)
	//======================================
	let title = document.createElement("h3")
	title.classList.add("result__title")
	title.textContent = obj.Title
	console.log(title)
	//======================================
	about.append(type, title, year)
	result.append(about)

  };
 
  xhr.send();
};