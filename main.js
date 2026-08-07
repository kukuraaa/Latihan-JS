//Counter

let count = 0;

const angka = document.getElementById("angka");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const reset = document.getElementById("reset");

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
reset.addEventListener("click", function () {
    count = 0;
    tampilkanAngka();
});
// Todo List
let todos = [];

const inputTodo = document.getElementById("inputTodo");
const tombolTodo = document.getElementById("TambahTodo");
const daftarTodo = document.getElementById("daftarTodo");

tombolTodo.addEventListener("click", function () {

    const isiTodo = inputTodo.value.trim();

    if (isiTodo === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }
    todos.push({
        text: isiTodo,
        selesai: false
    });
    tampilkanTodo();
    inputTodo.value = "";
});

const tugasAktif = document.getElementById("tugasAktif");

function tampilkanTodo() {
    daftarTodo.innerHTML = "";

    todos.forEach(function(todo, index){
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.selesai;
        checkbox.addEventListener("change", function(){
            todo.selesai = checkbox.checked;
            tampilkanTodo();
        });

        const span = document.createElement("span");
        span.textContent = todo.text;
        if(todo.selesai){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }

        const hapus = document.createElement("button");
        hapus.textContent = "Hapus";
        hapus.addEventListener("click", function(){
            todos.splice(index,1);
            tampilkanTodo();
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(hapus);
        daftarTodo.appendChild(li);
    });
    let aktif = todos.filter(function(todo){
        return !todo.selesai;
    }).length;

    tugasAktif.textContent = aktif;
}

// Calculator

const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

const tambahBtn = document.getElementById("tambahBtn");
const kurangBtn = document.getElementById("kurangBtn");
const kaliBtn = document.getElementById("kaliBtn");
const bagiBtn = document.getElementById("bagiBtn");

// Tambah
tambahBtn.addEventListener("click", function () {

    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.textContent = a + b;
});

// Kurang
kurangBtn.addEventListener("click", function () {

    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.textContent = a - b;
});

// Kali
kaliBtn.addEventListener("click", function () {

    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.textContent = a * b;
});

// Bagi
bagiBtn.addEventListener("click", function () {

    let a = Number(angka1.value);
    let b = Number(angka2.value);
    if (b === 0) {
        hasil.textContent = "Tidak bisa dibagi 0";
        return;
    }
    hasil.textContent = a / b;
});

//APII
const loadUser = document.getElementById("btnLoadUser");
const searchUser = document.getElementById("searchUser");
const userList = document.getElementById("userList");
const btnTutup = document.getElementById("btnTutup");

let semuaUser = [];

function tampilkanUser(data){
    userList.innerHTML = "";

    data.forEach(function(user){
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email : ${user.email}</p>
            <p>City : ${user.address.city}</p>
        `;
        userList.appendChild(card);
    });
}
loadUser.addEventListener("click", function(){
    userList.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response){
            return response.json();
        })
        .then(function(users){
            semuaUser = users;
            tampilkanUser(semuaUser);
            searchUser.style.display = "block";
            loadUser.style.display = "none";
            btnTutup.style.display = "block";
        })
        .catch(function(){
            userList.innerHTML = "Gagal mengambil data.";
        });
});
searchUser.addEventListener("input", function(){

    const keyword = searchUser.value.toLowerCase();
    const hasilFilter = semuaUser.filter(function(user){

        return user.name.toLowerCase().includes(keyword);
    });
    tampilkanUser(hasilFilter);
});
btnTutup.addEventListener("click", function(){

    searchUser.style.display = "none";
    btnTutup.style.display = "none";
    loadUser.style.display = "block";
    searchUser.value = "";
    userList.innerHTML = "";
    semuaUser = [];
});

//Dark Mode
const button = document.querySelector("#btnDark");
const body = document.querySelector("body");

button.addEventListener("click", function () {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button.innerHTML = "Dark";
    } else {
        button.innerHTML = "Light";
    }
});