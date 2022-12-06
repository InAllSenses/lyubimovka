const images = document.querySelectorAll('.gallery__image');
const closeButton = document.querySelector('.popup-image__close');
const popup = document.querySelector('.popup-image');
const image = document.querySelector('.popup-image__content')


images.forEach(image => {
    image.addEventListener('click', evt => {
        console.log(evt);
        popup.classList.add('popup-image_visible');
    });
});


function closePopup() {
  closeButton.addEventListener("click", function () {
    popup.classList.remove("popup-image_visible");
  });
}

closePopup();

