const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const filterButtons = document.querySelectorAll(".filter-buttons button");

let currentIndex = 0;

const allImages = Array.from(images);

function showLightbox(index) {
  lightbox.classList.remove("hidden");
  lightboxImg.src = allImages[index].src;
  currentIndex = index;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showLightbox(index);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % allImages.length;
  lightboxImg.src = allImages[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  lightboxImg.src = allImages[currentIndex].src;
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    document.querySelectorAll(".gallery .image").forEach(image => {
      if (filter === "all" || image.getAttribute("data-category") === filter) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});