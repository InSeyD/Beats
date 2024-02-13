var slidesContainer = document.querySelector('.slides-container');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var slideWidth = document.querySelector('.slide').offsetWidth;
var currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = 0;
  } else if (index >= slidesContainer.children.length) {
    index = slidesContainer.children.length - 1;
  }

  var translateX = -index * slideWidth;
  slidesContainer.style.transform = 'translateX(' + translateX + 'px)';
  currentIndex = index;
}

prevButton.addEventListener('click', function() {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', function() {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);