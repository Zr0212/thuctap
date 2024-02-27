window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("logo").style.height = "60px";
        document.getElementById("nav--right").style.padding = "0px";
        document.getElementById("toggler").style.top = "20px";
        document.getElementById("toggler").style.right = "20px";
    } else {
        document.getElementById("navbar").style.height = "80px";
        document.getElementById("logo").style.height = "80px";
        document.getElementById("nav--right").style.padding = "10px 0";
        document.getElementById("toggler").style.top = "30px";
        document.getElementById("toggler").style.right = "30px";
    }
}

const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.classList.remove('show');
    }
});

const lab1 = document.querySelector('#portfolio_content-lab-lab1');
const lab_1 = document.querySelector('.portfolio_content-lab-1');
lab_1.addEventListener('click', () => {
    lab1.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab1' && e.target.className !== 'portfolio_content-lab-1') {
        lab1.classList.remove('showlab');
    }
});

const lab2 = document.querySelector('#portfolio_content-lab-lab2');
const lab_2 = document.querySelector('.portfolio_content-lab-2');
lab_2.addEventListener('click', () => {
    lab2.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab2' && e.target.className !== 'portfolio_content-lab-2') {
        lab2.classList.remove('showlab');
    }
});

const lab3 = document.querySelector('#portfolio_content-lab-lab3');
const lab_3 = document.querySelector('.portfolio_content-lab-3');
lab_3.addEventListener('click', () => {
    lab3.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab3' && e.target.className !== 'portfolio_content-lab-3') {
        lab3.classList.remove('showlab');
    }
});

const lab4 = document.querySelector('#portfolio_content-lab-lab4');
const lab_4 = document.querySelector('.portfolio_content-lab-4');
lab_4.addEventListener('click', () => {
    lab4.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab4' && e.target.className !== 'portfolio_content-lab-4') {
        lab4.classList.remove('showlab');
    }
});

const lab5 = document.querySelector('#portfolio_content-lab-lab5');
const lab_5 = document.querySelector('.portfolio_content-lab-5');
lab_5.addEventListener('click', () => {
    lab5.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab5' && e.target.className !== 'portfolio_content-lab-5') {
        lab5.classList.remove('showlab');
    }
});

const lab6 = document.querySelector('#portfolio_content-lab-lab6');
const lab_6 = document.querySelector('.portfolio_content-lab-6');
lab_6.addEventListener('click', () => {
    lab6.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab6' && e.target.className !== 'portfolio_content-lab-6') {
        lab6.classList.remove('showlab');
    }
});

const lab7 = document.querySelector('#portfolio_content-lab-lab7');
const lab_7 = document.querySelector('.portfolio_content-lab-7');
lab_7.addEventListener('click', () => {
    lab7.classList.toggle('showlab');
});
window.addEventListener('click', (e) => {
    if (e.target.id !== 'portfolio_content-lab-lab7' && e.target.className !== 'portfolio_content-lab-7') {
        lab7.classList.remove('showlab');
    }
});

function show_alert() {
    var x;
    var y;
    var z;
    x = document.forms["Form"]["name"].value;
    y = document.forms["Form"]["mail"].value;
    z = document.forms["Form"]["mess"].value;
    if (x == "") {
        alert("Vui lòng nhập tên");
        return false;
    } else if (y == "") {
        alert("Vui lòng nhập mail");
        return false;
    } else if (z == "") {
        alert("Vui lòng nhập tin nhắn");

        return false;
    } else {
        alert("Gửi thành công");
    }
}
    
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}