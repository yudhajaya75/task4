let namePerson = document.getElementById("nm");
let jobPerson = document.getElementById("jb");
let hobbyPerson = document.getElementById("hb");
let nationalPerson = document.getElementById("nt");
let element = document.getElementById("myform");
let submitButton = document.getElementById("btn-add");
let edit = document.getElementById("btn-edit");
let card = document.getElementById("card");
let data = [];

const myform = document.getElementById('myform');
const cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('click', (event) => {
  if (event.target.id === 'btn-remove') {
    const cardElement = event.target.closest('.card');

    cardElement.remove();
  }
});


myform.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nm').value;
  const job = document.getElementById('jb').value;
  const hobby = document.getElementById('hb').value;
  const nationality = document.getElementById('nt').value;

  const card = `
    <div class="card">
      <div class="head">
        <img src="profile.png" alt="">
      </div>
      <div class="body">
        <p>Nama : ${name}</p>
        <p>Pekerjaan : ${job}</p>
        <p>Hobi : ${hobby}</p>
        <p>Nationality : ${nationality}</p>
        <button id="btn-edit">Edit</button>
        <button id="btn-remove">Delete</button>
      </div>
    </div>
  `;

  cardContainer.innerHTML += card;
  myform.reset();
});



// Dapatkan referensi ke tombol Hapus
const btnRemove = document.getElementById('btn-remove');

// Tambahkan pendengar acara klik ke tombol Hapus
btnRemove.addEventListener('click', function () {
    // Dapatkan referensi ke elemen kartu yang akan dihapus
    const cardToRemove = btnRemove.parentNode.parentNode;

    // Hapus elemen kartu dari DOM
    cardToRemove.remove();
});

const search = document.getElementById('search');

search.addEventListener('keyup', function (e) {
    const cards = cardContainer.querySelectorAll('.card');
    const searchText = e.target.value.toLowerCase();

    cards.forEach(function (card) {
        const cardText = card.innerText.toLowerCase();

        if (cardText.indexOf(searchText) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

    // Dapatkan referensi ke tombol Edit
    const btnEdit = document.getElementById('btn-edit');

    // Tambahkan pendengar acara klik ke tombol Edit
    btnEdit.addEventListener('click', function () {

    // Dapatkan referensi ke elemen kartu yang akan diedit
    const cardToEdit = btnEdit.parentNode.parentNode;

    // Dapatkan referensi ke elemen konten kartu yang akan diedit
    const cardName = cardToEdit.querySelector('#cardname');
    const cardJob = cardToEdit.querySelector('#cardjob');
    const cardHobby = cardToEdit.querySelector('#cardhobby');
    const cardNationality = cardToEdit.querySelector('#cardNationality');

    // Minta pengguna untuk nilai baru untuk setiap elemen konten
    const newName = prompt("Enter new name:");
    const newJob = prompt("Enter new job:");
    const newHobby = prompt("Enter new hobby:");
    const newNationality = prompt("Enter new nationality:");

    // Ubah konten elemen kartu dengan nilai baru
    cardName.textContent = "Nama : " + newName;
    cardJob.textContent = "Pekerjaan : " + newJob;
    cardHobby.textContent = "Hobi : " + newHobby;
    cardNationality.textContent = "Nationality : " + newNationality;
}); 

