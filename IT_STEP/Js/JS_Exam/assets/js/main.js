const tMain = document.querySelector(".t-main");
const dMain = document.querySelector(".d-main");
const today = document.querySelector(".today");
const days = document.querySelector(".week");
const city = document.getElementsByClassName(".search");
const search = document.querySelector(".ico");
const url = 'https://jsonplaceholder.typicode.com/users'

days.onclick = () => {
  tMain.style.display = "none";
  dMain.style.display = "block";
};
today.onclick = () => {
  tMain.style.display = "block";
  dMain.style.display = "none";
};

search.onclick = (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = () => {
    if(xhr.status >= 400) {
        console.error(xhr.response);
    } else {
        console.log(xhr.response);
    }

      let obj = JSON.parse(xhr.response)
      
      console.log(obj);
  }

  xhr.onerror = () => {
      console.log(xhr.response);
  }

  xhr.send();
};
