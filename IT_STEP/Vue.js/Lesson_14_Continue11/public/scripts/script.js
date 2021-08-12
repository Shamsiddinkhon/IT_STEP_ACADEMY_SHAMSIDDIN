const addBtn = document.querySelector(".add-size-btn");

let sizes = [];
let sizesFull = false

addBtn.addEventListener("click", (e) => {
  addBtn.insertAdjacentHTML(
    "beforebegin",
    `<div class="form-group rel">
        
        <select name="" class="form-controls added" required> 
          <option disabled selected>Select Size</option>
          <option value="xs">Extar Small</option>
          <option value="s">Small</option>
          <option value="m">Mediul</option>
          <option value="l">Large</option>
          <option value="xl">Extra Large</option>
        </select>
        <i class="far fa-times-circle deleteElem"></i>
        <input type="number" name="" class="form-control number" id="qty" Placeholder="Quantity of Product" min="1" required> 
    </div>
    `
  );
  addBtn.disabled = true;
  addBtn.classList.add("block");

  const select = document.querySelector(".added");
  const optionElems = Array.from(select.children);

  optionElems.forEach((opt) => {
    for (let size of sizes) {
      if (size === opt.value) opt.disabled = true;
    }
  });

  select.addEventListener("change", function () {
    this.setAttribute("name", "size- ", this.value);
    this.nextElementSibling.setAttribute("name", this.value + "-qty");
    this.nextElementSibling.removeAttribute("disabled");
    this.nextElementSibling.value = 1;
    // *******************
    this.disabled = true;
    addBtn.disabled = false;
    addBtn.classList.remove("block");

    // *******************
    sizes.push(this.value);
    console.log(sizes);
    if (sizes.length === select.children.length - 1) {
      addBtn.disabled = true
      sizesFull =true
    }

  });
  document.querySelector(".added").classList.remove("added");
  const deleteBtns = document.querySelectorAll(".deleteElem");

  deleteBtns.forEach((deleteBtn) => {
      if (!deleteBtn.hasAttribute("eventListener")) {
        deleteBtn.setAttribute("eventListener", true);
        deleteBtn.addEventListener("click", function () {
          this.parentElement.remove();
          if (this.previousElementSibling.hasAttribute("disabled")) {
            sizes = sizes.filter((size) => {
              if (size !== this.previousElementSibling.value) return size;
            });
          }
          if (!sizes.length) addBtn.disabled = false;
          if(sizesFull && sizes.length < optionElems.length - 1) {
            addBtn.disabled = false
            sizesFull = false
          }
          console.log(sizes);
        });
      }
  });
});
