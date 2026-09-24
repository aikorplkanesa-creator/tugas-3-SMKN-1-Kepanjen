const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = 'Mode Gelap 🌙';
    } else {
        btnTema.textContent = 'Mode Terang ☀️';
    }
});

const btnBukaModal = document.querySelector('#btnKontak'); 
const elemenModal = document.querySelector('#modalKontak'); 
const btnTutupModal = document.querySelector('#btnTutupModal'); 

btnBukaModal.addEventListener('click', function(event) {  
    event.preventDefault(); 
    elemenModal.classList.add('show');
}); 

btnTutupModal.addEventListener('click', function() {  
    elemenModal.classList.remove('show'); 
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (elemenModal.classList.contains('show')) {
            elemenModal.classList.remove('show');
            console.log('modal ditutup menggunakan tombol ESC');
        }
    }
});

function ubahGreetingOtomatis(juniorWebDeveloper) {
    const jam = new Date().getHours();
    let ucapan = "";

    if (jam >= 5 && jam < 11) {
        ucapan = "Selamat Pagi 🌅";
    } else if (jam >= 11 && jam < 15) {
        ucapan = "Selamat Siang ☀️";
    } else if (jam >= 15 && jam < 18) {
        ucapan = "Selamat Sore 🌇";
    } else {
        ucapan = "Selamat Malam 🌙"; 
    }
      const hasilucapan = juniorWebDeveloper.replace(/Junior Web Developer/g, ucapan);

    return hasilucapan;
}

const elemenRole = document.querySelector('.student-role');
elemenRole.textContent = 
ubahGreetingOtomatis(elemenRole.textContent);


const avatarIcon = document.querySelector('.avatar-icon');

if (avatarIcon) {
    avatarIcon.addEventListener('click', function () {
        avatarIcon.classList.remove('putar');

        void avatarIcon.offsetWidth;

        avatarIcon.classList.add('putar');
    });
}
