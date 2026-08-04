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
//Todo List 
let todos = [];

const inputTodo = document.getElementById("inputTodo");
const tombolTodo = document.getElementById("TambahTodo");
const daftarTodo = document.getElementById("daftarTodo");

tombolTodo.addEventListener("click", function () {
    const isiTodo = inputTodo.value;
    if (isiTodo === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }
    todos.push(isiTodo);
    tampilkanTodo();
    inputTodo.value = "";
});

function tampilkanTodo() {
    daftarTodo.innerHTML = "";
    for (let todo of todos) {
        const li = document.createElement("li");
        li.textContent = todo;
        daftarTodo.appendChild(li);
    }
}