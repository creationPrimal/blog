

//expanding menu bar
const menu = document.querySelector('.nav-menu');
const minimize = document.querySelector('.minimize-menu');
const minimizediv = document.querySelector('.menu');
const menudiv = document.querySelector('.menudiv');

menu.addEventListener("click", () => {
    menudiv.style.transform = 'translateX(0%)'
    minimizediv.style.width = '100%'
})
minimize.addEventListener("click", () => {
    menudiv.style.transform = 'translateX(-100%)'
    minimizediv.style.width = 'auto'
})
minimizediv.addEventListener("click", () => {
    menudiv.style.transform = 'translateX(-100%)'
    minimizediv.style.width = 'auto'
})