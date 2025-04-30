let scale = 1;
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();

    if (e.deltaY < 0) {
      scale += 0.1;
    } else {
      scale = Math.max(0.2, scale - 0.1);
    }

    document.getElementById('zoomable-header').style.transform = `scale(${scale})`;
  }
}, { passive: false });


let menuScale = 1;
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();

    if (e.deltaY < 0) {
      menuScale += 0.1;
    } else {
      menuScale = Math.max(0.5, menuScale - 0.1);
    }

    const menu = document.querySelector('.navbar');
    if (menu) {
      menu.style.transform = `scale(${menuScale})`;
    }

    // 👉 
    const deskripsi = document.getElementById('deskripsi-container');
    if (deskripsi) {
      deskripsi.style.transform = `scale(${menuScale})`;
      deskripsi.style.transformOrigin = 'top center';
    }
  }
}, { passive: false });


document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('shake');
    setTimeout(() => {
      item.classList.remove('shake');
    }, 400);
  });
});

let isTav = true;
document.addEventListener('DOMContentLoaded', function () {
  const deskripsiContainer = document.getElementById('deskripsi-container');
  const button = document.getElementById('toggleButton');

  button.addEventListener('click', function () {
    deskripsiContainer.classList.add('shake');
    setTimeout(() => deskripsiContainer.classList.remove('shake'), 500);

    if (isTav) {
      deskripsiContainer.innerHTML = `
        Mekatronika adalah kompetensi yang menggabungkan teknik mesin, elektronika, kontrol, dan pemrograman. Peserta didik akan mempelajari cara membuat dan memelihara sistem otomasi industri yang kompleks.
      `;
      button.textContent = '🤖 Mekatronika';
    } else {
      deskripsiContainer.innerHTML = `
        Teknik Audio Video (TAV) adalah sebuah kompetensi keahlian yang mempelajari tentang produksi, pengolahan, dan distribusi konten audio dan video. Kompetensi ini membekali peserta didik dengan pengetahuan, keterampilan, dan sikap di bidang elektronika, khususnya dalam pembuatan, perawatan, perbaikan, instalasi, dan pengolahan sistem audio dan video. TAV juga mencakup aspek produksi, perekaman, dan pengeditan, serta distribusi konten audio visual.
      `;
      button.textContent = '🎬 TAV';
    }

    isTav = !isTav;
  });
});
console.log("Halaman Profil Jurusan dimuat!");
let globalScale = 1;

window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
    if (e.deltaY < 0) {
      globalScale = Math.min(2, globalScale + 0.1);
    } else {
      globalScale = Math.max(0.5, globalScale - 0.1);
    }

    document.body.style.transform = `scale(${globalScale})`;
    document.body.style.transformOrigin = 'top center';
  }
}, { passive: false });

let showingTAV = true;

function toggleJurusan() {
  const tav = document.getElementById("tav");
  const meka = document.getElementById("meka");

  tav.style.display = showingTAV ? "none" : "block";
  meka.style.display = showingTAV ? "block" : "none";
  showingTAV = !showingTAV;
}

function showStructureInfo() {
  const img = document.querySelector(".struktur-img");

  // Restart animasi bounce
  img.classList.remove("animate__bounce");
  void img.offsetWidth;
  img.classList.add("animate__bounce");

  alert("🎉 Ini struktur organisasi jurusan TAV! Klik tombol 'Ganti Jurusan' buat lihat jurusan lainnya~");
}

window.onload = () => {
  document.getElementById("tav").style.display = "block";
  document.getElementById("meka").style.display = "none";
}
function zoomImage(src) {
  document.getElementById('zoomImg').src = src;
  document.getElementById('zoomViewer').style.display = 'flex';
}
const images = document.querySelectorAll('.card img');

images.forEach(img => {
  img.addEventListener('click', () => {
    zoomImage(img.src);
  });
  
});
function createParticles() {
  const container = document.getElementById('particle-container');
  container.innerHTML = ''; // bersihin dulu

  for (let i = 0; i < 25; i++) { // banyaknya partikel
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${10 + Math.random() * 10}px`; // ukuran random
    particle.style.height = particle.style.width;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`; // speed random
    particle.style.backgroundColor = getRandomColor();

    container.appendChild(particle);
  }
}

// Warna random buat partikel biar lucu
function getRandomColor() {
  const colors = ['#ffffff', '#ffecd1', '#ffe4e1', '#d0f0fd', '#ffeaa7', '#fab1a0'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Panggil pas zoom muncul
function zoomImage(src) {
  document.getElementById('zoomImg').src = src;
  document.getElementById('zoomViewer').style.display = 'flex';
  createParticles();
}

// Menambahkan animasi bounce ke tombol kirim
const submitBtn = document.getElementById('submitBtn');
submitBtn.classList.add('bounce');
setTimeout(() => {
  submitBtn.classList.remove('bounce');
}, 600);
// Tombol scroll ke atas
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


      