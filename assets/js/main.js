document.addEventListener("DOMContentLoaded",function(){

const buttons=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".service-card");
const searchInput=document.getElementById("serviceSearch");
let currentFilter="all";

function filterServices(){
const searchValue=searchInput?searchInput.value.toLowerCase():"";
cards.forEach(card=>{
const category=card.getAttribute("data-category");
const title=card.querySelector("h4").textContent.toLowerCase();
const matchesCategory=currentFilter==="all"||category===currentFilter;
const matchesSearch=title.includes(searchValue);
if(matchesCategory&&matchesSearch){
card.style.display="block";
}else{
card.style.display="none";
}
});
}

if(buttons){
buttons.forEach(btn=>{
btn.addEventListener("click",()=>{
buttons.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
currentFilter=btn.getAttribute("data-filter");
filterServices();
});
});
}

if(searchInput){
searchInput.addEventListener("keyup",filterServices);
}

/* Scroll Reveal */
const reveals=document.querySelectorAll(".reveal");
function revealOnScroll(){
const windowHeight=window.innerHeight;
reveals.forEach(el=>{
const elementTop=el.getBoundingClientRect().top;
if(elementTop<windowHeight-50){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

});