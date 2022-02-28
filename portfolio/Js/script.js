// Navbar Scroll mechanism
const navbar = document.querySelector("nav");
var scroll_position = 0;
window.onscroll = function () {
  if (window.pageYOffset > scroll_position) {
    navbar.classList.add("scrolled");
    scroll_position = window.pageYOffset;
  }
  if (window.pageYOffset < scroll_position) {
    navbar.classList.remove("scrolled");
    scroll_position = window.pageYOffset;
  }
};

// Navbar on smaller screen

const menu = document.querySelector('.menu')
const nav_btn = document.querySelector('.nav-btn')

nav_btn.addEventListener("click",() => {
  menu.classList.toggle("clicked")
})
// Slider mechanism

const prev_slide = document.getElementById("prev_slide");
const next_slide = document.getElementById("next_slide");
prev_slide.addEventListener("click", manual_slide);
next_slide.addEventListener("click", manual_slide);

setInterval(auto_slide,2500)

// the first time website reload
function auto_slide(){
  if (document.getElementById("slider1").checked) {
    document.getElementById("slider1").removeAttribute("checked")
    document.getElementById("slider2").setAttribute("checked",true)
  }
  else if (document.getElementById("slider2").checked) {
    document.getElementById("slider2").removeAttribute("checked")
    document.getElementById("slider3").setAttribute("checked",true)
  }

  else if (document.getElementById("slider3").checked) {
    document.getElementById("slider3").removeAttribute("checked")
    document.getElementById("slider1").setAttribute("checked",true)
  }
}

// pressing arrow button

function manual_slide() {
  if (document.getElementById("slider1").checked) {
    prev_slide.setAttribute("for", "slider1");
    next_slide.setAttribute("for", "slider2");
  }
  else if (document.getElementById("slider2").checked) {
    prev_slide.setAttribute("for", "slider1");
    next_slide.setAttribute("for", "slider3");
  }
  else if (document.getElementById("slider3").checked) {
    prev_slide.setAttribute("for", "slider2");
    next_slide.setAttribute("for", "slider3");
  }
}
