const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let menu = document.querySelector('#menu-icon');
let nav1 = document.querySelector('.control-1');
let nav2 = document.querySelector('.control-2');
let nav3 = document.querySelector('.control-3');
let nav4 = document.querySelector('.control-4');
let nav5 = document.querySelector('.control-5');
let nav6 = document.querySelector('.control-6');

menu.onclick =() =>{
    nav1.classList.toggle('open');
    nav2.classList.toggle('open');
    nav3.classList.toggle('open');
    nav4.classList.toggle('open');
    nav5.classList.toggle('open');
    nav6.classList.toggle('open');
}