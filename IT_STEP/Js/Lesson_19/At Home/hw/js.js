let name = document.getElementById("title");
let section = document.getElementById("section");
let btn = document.getElementById("btn");

let block = document.getElementById("block")

btn.onclick = function (e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

	

  xhr.open("GET", `http://www.omdbapi.com/?apikey=585a4221&t=${name.value}`);
  xhr.onload = function () {
    let obj = JSON.parse(xhr.response);
    console.log(obj);
	
	let second__block = document.getElementById("second__block")
	
	let type = obj.Type
	let title = obj.Title
	let img = obj.Poster
	let year = obj.Year
	
	//console.log(type)
	//console.log(title)
	//console.log(img)
	//console.log(year)
	
	
	
	
	let section = document.createElement("div")
	section.innerHTML = `
	<div class="result" id="result">
      <div class="img">
	  <img src="${img}" alt="${img}">
      </div>
      <div class="about">
            <h5 class="atype">${type}</h5>
            <h3 class="atitle">${title}</h3>
            <p class="year">${year}</p>
			<div class="rbtn">
          <button class="result__btn" id="result__btn">
		  Details
		  </button>
			</div>
      </div>
	  `
	  
	  
	
	
	second__block.append(section)
		
	  let resultBtn = document.getElementById("result__btn")
	  
	    resultBtn.onclick = function () {
			
		let section__three = document.getElementById("section__three")
		
		let details = document.getElementById("details")
		details.classList.add("details")
			console.log(details)
			details.innerHTML =`
			<div class"detail__img" id="detail__img">
				<img src="${img}" alt="${img}">
			</div>
			
			<div id="detail__about"> 
				<div> 
					<h5>Title: ${obj.Title}</h5>
				</div>
				<div> 
					<h5>Released: ${obj.Released}</h5>
				</div>
				<div> 
					<h5>Genre: ${obj.Genre}</h5>
				</div>
				<div> 
					<h5>Country: ${obj.Country}</h5>
				</div>
				<div> 
					<h5>Director: ${obj.Director}</h5>
				</div>
				<div> 
					<h5>Writer: ${obj.Writer}</h5>
				</div>
				<div> 
					<h5>Actors: ${obj.Actors}</h5>
				</div>
				<div> 
					<h5>Awards: ${obj.Awards}</h5>
				</div>
			</div>
			`
			
			console.log(details)
			section__three.append(details)
	}
  };
  

 
  xhr.send();
};







