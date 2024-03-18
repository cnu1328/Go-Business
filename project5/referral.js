const reviews = document.querySelectorAll('.review');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.style.display = 'block';
    } else {
      review.style.display = 'none';
    }
  });
}

function showNextReview() {
  currentIndex++;
  if (currentIndex >= reviews.length) {
    currentIndex = 0;
  }
  showReview(currentIndex);
}

function showPreviousReview() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showReview(currentIndex);
}

prevButton.addEventListener('click', showPreviousReview);
nextButton.addEventListener('click', showNextReview);

showReview(currentIndex);

