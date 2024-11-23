document.getElementById('formSapaan').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form reload
    const namaInput = document.getElementById('nama');
    const feedback = document.getElementById('feedback');

    // Ambil nama dari input
    const nama = namaInput.value.trim();

    // Validasi input kosong
    if (!nama) {
        feedback.className = 'error';
        feedback.textContent = 'Nama tidak boleh kosong, cangtip! 🌸';
        return;
    }

    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);

        // Tampilkan feedback berdasarkan respons PHP
        if (response.success) {
            feedback.className = 'success';
            feedback.textContent = response.message + ' 💖';
        } else {
            feedback.className = 'error';
            feedback.textContent = response.message + ' 🌸';
        }
    };

    // Kirim data ke server
    xhr.send(`nama=${encodeURIComponent(nama)}`);
});
