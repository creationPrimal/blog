//code to clear search input 
const searchinput = document.getElementById('searchinput');
const clearbutton = document.getElementById('clearbutton');

clearbutton.addEventListener("click", () => {
    searchinput.value = '';
})

//Menu bar toggle code

const minimizeNav = document.getElementById("minimize");
const expandNav = document.getElementById('expand');
const navbody = document.getElementById('navbody')
const mobilemenu = document.getElementById('mobilemenu')


minimizeNav.addEventListener("click", function (){
    navbody.style.width = '73px';
    navbody.style.transition = '300ms';
    minimizeNav.style.display = 'none';
})


expandNav.addEventListener("click", function() {
    navbody.style.width =  '270px' ; 
    navbody.style.transition = '300ms';
    minimizeNav.style.display = 'flex';
})

// code to minimize and maxmize mobile nav bar

const menuButton = document.getElementById("mobilemenu");
const mobilenavminimize = document.getElementById("mobilenavminimize");
const mobilenav = document.getElementById("mobilenav");

menuButton.addEventListener("click", () => {
    if (mobilenav.style.display === "block") {
        mobilenav.style.display = "none";
      } else {
        mobilenav.style.display = "block";
      }

});
mobilenavminimize.addEventListener("click", () => {
    mobilenav.style.display = "none";
      
});



//code to count products in product page

            const more = document.querySelector('.more');
            const less = document.querySelector('.less');
            const countamount = document.querySelector('.count-amount');

            let counter = 0;
            // Function to update the counter and display it in the <p> element
            function updateCounter() {
                countamount.textContent = counter;
            }

            // Event listener for the increment button
            more.addEventListener('click', function() {
                counter++;
                updateCounter();
            });

            // Event listener for the decrement button
            less.addEventListener('click', function() {
                counter--;
                updateCounter();
            });

            // Initial counter display
            updateCounter();

 



// JavaScript to handle full-screen image display
            const thumbnails = document.querySelectorAll('.thumbnail');
            const fullscreenImageContainer = document.getElementById('fullscreen-image-container');
            const fullscreenImage = document.getElementById('fullscreen-image');

            thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                fullscreenImage.src = thumbnail.src;
                fullscreenImageContainer.style.display = 'block';
            });
            });

            fullscreenImageContainer.addEventListener('click', () => {
            fullscreenImageContainer.style.display = 'none';
            });

      