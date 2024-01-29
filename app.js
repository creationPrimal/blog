

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


  // Get all thumbnail images
  var thumbnails = document.querySelectorAll('.thumbnail');

  // Add click event listener to each thumbnail
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      openModal(thumbnail.src);
    });
  });

  function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = modal.querySelector('.modal-content');
    
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }