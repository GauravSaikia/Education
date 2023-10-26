let navBar = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = () => {
navBar.classList.toggle("active");
}
let header =document.querySelector("header");
document.addEventListener("scroll" ,()=>{
    header.classList.toggle("shadow", window.scrollY>0)
});