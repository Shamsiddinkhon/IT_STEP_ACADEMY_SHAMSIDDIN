// let myIndex = 0;
// carousel();

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000);
// }
// let qty = document.querySelector('#qty').value
// console.log(qty);
document.querySelector(".add-size-btn").addEventListener("click", (e) => {
  console.log(e);
  e.target.insertAdjacentHTML(
    "beforebegin",
    `<div class="form-group">
      <select name="" class="form-controls added" required>
      <option disabled selected>Select Size</option>
      <option value="xs">Extar Small</option>
      <option value="s">Small</option>
      <option value="m">Mediul</option>
      <option value="l">Large</option>
      <option value="xl">Extra Large</option>
    </select>
      <input type="number" name="" class="form-control number" id="qty" Placeholder="Quantity of Product" required>
      </div>
    `
  );
  document.querySelector('.added').addEventListener('change',function(){
    this.setAttribute('name',"size- ", this.value.toLowerCase())
    this.nextElementSibling.setAttribute('name', this.value + '-qty')
    this.nextElementSibling.removeAttribute('disabled')
    this.nextElementSibling.value = 1
  })
  document.querySelector('.added').classList.remove('added')
});
