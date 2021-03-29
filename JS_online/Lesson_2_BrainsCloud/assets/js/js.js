// console.log("Test 1");
 const header = document.querySelector(".header")
 const btn = document.querySelector('.btn')
 const navLinks = document.querySelectorAll(".nav__link")
console.log(navLinks)
window.addEventListener("scroll", function() {
    checkScroll()
    console.log(scrollPos);
    // header.classList.add('red')
})

document.addEventListener("DOMContentLoaded" , function() {
    checkScroll()
})

function checkScroll() {
    let scrollPos = window.scrollY 
    if (scrollPos > 200) {
        header.classList.add('red')
    } else if (scrollPos < 600) {
        header.classList.remove('red')
    }
}



btn.addEventListener("click", function() {
    console.log('clicked');
})

// navLinks.addEventListener("click", function() {
//     console.log('link clicked')
// })

for( let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text)
    })
}
