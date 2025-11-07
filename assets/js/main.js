// main.js - Script umum untuk semua halaman

// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  console.log("Scrapbook dimuat!");

  // --- Fitur: Menandai Link Navigasi yang Aktif ---

  // Dapatkan path halaman saat ini (misal: "/gallery.html")
  const currentPage = window.location.pathname.split("/").pop();

  // Dapatkan semua link di dalam navigasi
  const navLinks = document.querySelectorAll("nav ul li a");

  // Loop setiap link
  navLinks.forEach((link) => {
    // Hapus dulu kelas 'active' (jika ada)
    link.classList.remove("active");

    // Dapatkan nama file dari href link (misal: "gallery.html")
    const linkPage = link.getAttribute("href").split("/").pop();

    // Jika link ini mengarah ke halaman yang sedang dibuka
    if (linkPage === currentPage) {
      // Tambahkan kelas 'active'
      link.classList.add("active");
    }
  });

  // Anda bisa tambahkan fungsi lain di sini,
  // misalnya untuk tombol "back to top" atau animasi menu.
});
