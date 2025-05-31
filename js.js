function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('active');
}

document.getElementById('formTamu').addEventListener('submit', function(e) {
    e.preventDefault(); //mencegah reload halaman
    
    //ambil nilai input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    //buat elemen baru
    const li = document.createElement('li');
    li.innerHTML = `<strong>${nama}</strong> (${email})<br>${pesan}`

    const notifikasi = document.getElementById('notifikasi');
    notifikasi.style.display = 'block';

    setTimeout(() => {
        notifikasi.style.display = 'none';
    }, 3000)

    //tambahkan ke daftar
    document.getElementById('daftarTamu').appendChild(li);

    //Reser form
    this.reset();
})