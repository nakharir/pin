// assets/js/gallery.js
document.addEventListener("DOMContentLoaded", function () {
  // Lightbox Functionality
  const lightboxTriggers = document.querySelectorAll(
    ".lightbox-trigger, .note-img"
  );
  const body = document.body;

  if (lightboxTriggers.length > 0) {
    let lightbox = document.getElementById("lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      document.body.appendChild(lightbox);
    }

    let lightboxImage = document.getElementById("lightbox-image");
    if (!lightboxImage) {
      lightboxImage = document.createElement("img");
      lightboxImage.id = "lightbox-image";
      lightbox.appendChild(lightboxImage);
    }

    let closeButton = document.getElementById("lightbox-close");
    if (!closeButton) {
      closeButton = document.createElement("span");
      closeButton.id = "lightbox-close";
      closeButton.innerHTML = "&times;"; // Simbol 'x'
      lightbox.appendChild(closeButton);
    }

    lightboxTriggers.forEach((image) => {
      image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImage.src = image.src;
        body.style.overflow = "hidden";
      });
    });

    // --- INI ADALAH LOGIKA YANG DIPERBAIKI ---

    // Menutup lightbox saat di-klik di area gelap (latar belakang)
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        // Hanya tutup jika targetnya adalah latar belakang
        lightbox.classList.remove("active");
        body.style.overflow = "";
      }
    });

    // Menutup lightbox saat di-klik tombol 'x'
    closeButton.addEventListener("click", () => {
      lightbox.classList.remove("active");
      body.style.overflow = "";
    });
  }
});
