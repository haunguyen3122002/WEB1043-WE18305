//thanhcuon
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//thongtin
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (event) => {
    if (nameInput.value === '') {
        event.preventDefault();
        alert('Vui lòng nhập họ và tên');
    }

const form = document.querySelector('form');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', (event) => {
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        event.preventDefault();
        alert('Số điện thoại không hợp lệ');
    }
    const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        alert('Email không hợp lệ');
    }
});

form.addEventListener('submit', (event) => {
    if (phoneInput.value !== '' && emailInput.value === '') {
        event.preventDefault();
    }
});
});
});