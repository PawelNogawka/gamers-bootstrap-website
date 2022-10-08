const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".navbar-toggler");

navBtn.addEventListener("click", function () {});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("change");
  } else {
    nav.classList.remove("change");
  }
});


navLinks.forEach(link=>{
    console.log("ok")
 link.addEventListener("click",function(){
    console.log("ok")
   const temp =  document.querySelector(".collapse")
   temp.classList.remove("show")
 })
})