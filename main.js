//Counter

let count = 0;

const angka = document.getElementById("angka");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");

function tampilkanAngka() {
    angka.textContent = count;
}

tambah.addEventListener("click", function () {
    count++;
    tampilkanAngka();
});

kurang.addEventListener("click", function () {
   if (count > 0){
    count--;
    tampilkanAngka();
   }
});
