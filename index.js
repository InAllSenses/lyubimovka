const images = document.querySelectorAll('.gallery__image');
const imagePopup = document.querySelector('.popup-image');
const popupImageElement = imagePopup.querySelector('.popup-image__content');
const perfomancePopup = document.querySelector('.popup-perfomance');

let currentImage = null;


const formButton = document.querySelector('.cooperation__button');
const nameform = document.querySelector('.name-form');
const forms = document.querySelector('.forms');

const formsOpenButton = document.querySelector('.cooperation__arrow-down')


formButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

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

function getPreviousIndex() {
  const currentIndex = getCurrentIndex();
  let previousIndex = currentIndex-1;
  if (previousIndex === -1)
    previousIndex = images.length-1;

  return previousIndex;
}

function getNextImage() {
  const nextIndex = getNextIndex();
  return images[nextIndex];
}

function getPreviousImage() {
  const previousIndex = getPreviousIndex();
  return images[previousIndex];
}

function switchImageToNext() {
  const nextImage = getNextImage();
  popupImageElement.src = nextImage.src;
  currentImage = nextImage;
}

function switchImageToPrevious() {
  const previousImage = getPreviousImage();
  popupImageElement.src = previousImage.src;
  currentImage = previousImage;
}

function addEventListenerArrowRight() {
  const popupArrowRightButton = document.querySelector('.popup-image__arrow_right')

  popupArrowRightButton.addEventListener("click", () => {
    switchImageToNext();
  });
}

function addEventListenerArrowLeft() {
  const popupArrowLeftButton = document.querySelector('.popup-image__arrow_left')

  popupArrowLeftButton.addEventListener("click", () => {
    switchImageToPrevious();
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

// function setSubmitButtonState(isFormValid) {
//   if (isFormValid) {
//     formButton.removeAttribute('disabled');
//     formButton.classList.remove('input__btn_disabled');
//   }
//   else {
//     formButton.setAttribute('disabled', true);
//     formButton.classList.add('input__btn_disabled');
//   }
// }

// nameform.addEventListener('input', function (evt) {
//   const isValid = nameform.value.length > 4;
//   setSubmitButtonState(isValid);
//   forms.reset();
// });


addEventListenerClose(imagePopup);
addEventListenerClose(perfomancePopup);
addEventListenerArrowRight(imagePopup);
addEventListenerArrowLeft(imagePopup);
