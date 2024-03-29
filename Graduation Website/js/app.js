// Form Showing
let user = document.querySelector(".user");
let myForm = document.querySelector("form");

user.onclick = () => myForm.classList.add("active");


// Switch Between Login and Register
let formTitle = document.querySelector(".formTitle");
let regform = document.querySelector(".regShow");
let cPassword = document.querySelector(".CPassword");
let btn = document.querySelector(".btn");

regform.onclick = function () {
  formTitle.innerText = "Sign In";
  regform.classList.add("hide");
  cPassword.classList.add("show");
  btn.value = "Sign In";
};


// Landing Album
var slideIndex = 0;
var slides = document.querySelectorAll('.ib');

function showSlides() {
slideIndex++;
if (slideIndex >= slides.length) {
slideIndex = 0;
}

for (var i = 0; i < slides.length; i++) {
slides[i].classList.remove('show');
}

slides[slideIndex].classList.add('show');
}

setInterval(showSlides, 5000);


// Showing Contact Info
const Sline1 = document.getElementById("Sline1");
const Sline2 = document.getElementById("Sline2");

const SelectLabel = document.querySelectorAll(".label");

const Label1 = SelectLabel[0];
const Label2 = SelectLabel[1];


function addingClass1() {
  Label1.classList.add("clicked");
}

function addingClass2() {
  Label2.classList.add("clicked");
}

Sline1.addEventListener("click", addingClass1);
Sline2.addEventListener("click", addingClass2);
