const images = document.querySelectorAll('.gallery__image');
const imagePopup = document.querySelector('.popup-image');
const popupImageElement = imagePopup.querySelector('.popup-image__content');
const perfomancePopup = document.querySelector('.popup-perfomance');

let currentImage = null;

const formsElement = document.querySelector('.cooperation__forms');
const formInput = formsElement.querySelector('.cooperation__input');
const formButton = formsElement.querySelector('.cooperation__button');

const formError = formsElement.querySelector(`.${formInput.id}-error`); 

const showInputError = (element) => {
  element.classList.add('cooperation__input_type_error');
};

const hideInputError = (element) => {
  element.classList.remove('cooperation__input_type_error');
};

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};

formInput.addEventListener('input', isValid); 

formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity.valid);
}); 

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


addEventListenerClose(imagePopup);
addEventListenerClose(perfomancePopup);
addEventListenerArrowRight(imagePopup);
addEventListenerArrowLeft(imagePopup);
