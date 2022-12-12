const images = document.querySelectorAll('.gallery__image');
const imagePopup = document.querySelector('.popup-image');
const popupImageElement = imagePopup.querySelector('.popup-image__content');
const perfomancePopup = document.querySelector('.popup-perfomance');

let currentImage = null;


function showPopup(popupElement) {
  popupElement.classList.add('popup_visible');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_visible');
}

function getCurrentIndex() {
  for (let i = 0; i < images.length; i++) {
    if (images[i] === currentImage)
      return i;
  }

  return 0;
}

function getNextIndex() {
  const currentIndex = getCurrentIndex();
  let nextIndex = currentIndex+1;
  if (nextIndex === images.length)
    nextIndex = 0;

  return nextIndex;
}

function getNextImage() {
  const nextIndex = getNextIndex();
  return images[nextIndex];
}

function switchImageToNext() {
  const nextImage = getNextImage();
  popupImageElement.src = nextImage.src;
  currentImage = nextImage;
}

function addEventListenerArrowRight() {
  const popupArrowRightButton = document.querySelector('.popup-image__arrow')

  popupArrowRightButton.addEventListener("click", () => {
    switchImageToNext();
  });
}

function addEventListenerClose(popupElement) {
  const popupCloseButton = popupElement.querySelector('.popup_close');

  popupCloseButton.addEventListener("click", () => {
    closePopup(popupElement);
  });
}

images.forEach(image => {
  image.addEventListener('click', evt => {
      popupImageElement.src = image.src;
      showPopup(imagePopup);
      currentImage = image;
  });
});


addEventListenerClose(imagePopup);
addEventListenerClose(perfomancePopup);
addEventListenerArrowRight(imagePopup);
