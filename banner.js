let currentIndex = 0; // Current image index

function moveSlide(direction) {
  const slides = document.querySelectorAll(".banner img"); // Get all images in the banner
  const totalSlides = slides.length;

  // Update currentIndex based on the direction (left or right)
  currentIndex += direction;

  // Infinite loop behavior: when it reaches the last image, it goes back to the first one, and vice versa
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // If left too far, go to the last image
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // If right too far, go to the first image
  }

  // Move the slider to show the correct image
  const newTransformValue = `-${currentIndex * 100}%`; // Move the slider to the selected image
  document.querySelector(
    ".banner"
  ).style.transform = `translateX(${newTransformValue})`;
}

// Auto-slide every 3 seconds (Infinite Loop)
setInterval(() => moveSlide(1), 3000); // Move the image every 3 seconds
