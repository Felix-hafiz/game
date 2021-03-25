let btnStart = document.getElementById("btn-start");
let btnTaman = document.querySelector('.btn-taman');
let btnTamanAnak = document.querySelector('.btn-taman-anak');
let dialog = document.querySelector('.dialog');
let img = document.getElementById("img-bg")
console.log("nyari apa?")

const kamar = '/bg/kamar.png';
const taman = '/bg/taman.png';
const tamanAnak = "/bg/taman-anak.png";




// ganti bacground
function gantiScene(scene){

    let gambar = scene
    const local = "https://felix-hafiz.github.io/game"

    // cek di kamar, hilangin button start + munculin button opsi
    let startCheck = btnStart.style.display = 'none'
    if(startCheck){
        btnTaman.classList.toggle("hidden")
        btnTamanAnak.classList.toggle("hidden")
    }

    img.src = gambar;

    switch (img.src){
        case local + kamar :
            dialog.classList.toggle("hidden")
            return dialog.innerHTML = "Astaga aku sudah terlambat! aku harus kesekolah lewat jalan pintas!";

        case local + taman :
            return dialog.innerHTML = "itu sumarni kan? murid kelas sebelah ku....";
         
        case local + tamanAnak :
            return dialog.innerHTML = "wah ada yanti, semoga dia cepat besar dan lulus sekolah :)";
           
    }
}
