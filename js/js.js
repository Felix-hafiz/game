let btnStart = document.getElementById("btn-start");
let bg = document.querySelector('.container');
let btnTaman = document.querySelector('.btn-taman');
let btnTamanAnak = document.querySelector('.btn-taman-anak');
let dialog = document.querySelector('.dialog');
console.log("nyari apa?")
const kamar = "url(bg/kamar.png)";
const taman = "url(bg/taman.png)";
const tamanAnak = "url(bg/taman-anak.png)";




// gantiScene( "url('/bg/kamar.png')");

btnStart.addEventListener("click",function(){

    bg.style.backgroundImage = kamar;

    btnStart.style.display = 'none';

 


        btnTaman.style.display = 'block';
        btnTamanAnak.style.display = 'block';
        dialog.style.display = 'block';

        // dialog
             // cek di scene kamar
                if(bg.style.backgroundImage = kamar){
                    dialog.innerHTML = 'Ya ammpun aku sudah kesiangan, aku harus segera pergi ke sekolah!!!!';
                };
            
    

},true);

btnTaman.addEventListener("click",function(){
    bg.style.backgroundImage = taman;
    btnTaman.style.display = 'none';
        btnTamanAnak.style.display = 'none';

        // cek di scene taman

            dialog.innerHTML = 'Dia Yanti yang ada disebelah kelas ku kan? Apa yang dia lakukan disini??';
 
});

btnTamanAnak.addEventListener("click",function(){
    bg.style.backgroundImage = tamanAnak;
    btnTaman.style.display = 'none';
        btnTamanAnak.style.display = 'none';

         // cek di scene taman anak
      
            dialog.innerHTML = 'anak kecil itu lucu yah, semoga dia cepat besar :)';

});



