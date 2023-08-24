var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
    })

    slides[manual].classList.add("active")
    btns[manual].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i)
        currentSlide = i
    })
})




let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 1150;
});
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 1150;
});
