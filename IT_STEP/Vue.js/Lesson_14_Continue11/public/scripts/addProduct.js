const form = document.querySelector("form");
const btn = document.querySelector(".submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const obj = {};
  console.dir(form);
  for (let elem of form) {
      console.log(elem.value);
      obj[elem.name] = elem.value;
  }
  console.log(obj);
  const readyObj = {
      title:obj.title 
  }
  console.log(readyObj, ' it is');
});
