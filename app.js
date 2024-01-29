

//displaying menu
const menu = document.querySelector('.menu');
const menudiv = document.querySelector('.menudiv');
const menuclose = document.querySelector('.menuclose');

menu.addEventListener("click", ()=>{
    menudiv.style.display = 'flex'
})
menuclose.addEventListener("click", ()=>{
    menudiv.style.display = 'none'
})
