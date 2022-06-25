//slider
const swiper = new Swiper('.swiper', {
    loop: true,
  navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

});

//burger
var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("nav");
    element.classList.toggle("open");

    x.classList.toggle("change");
}



/// theme
document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.themetoggle span').textContent = 'dark_mode';
        }
        else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.themetoggle span').textContent = 'wb_sunny';
        }
    } catch (err) { }
}

addDarkClassToHTML();






