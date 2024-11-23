<?php
header('Content-Type: application/json');

// Cek apakah request adalah POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil input nama
    $nama = trim($_POST['nama'] ?? '');

    // Validasi input
    if (empty($nama)) {
        echo json_encode([
            'success' => false,
            'message' => 'Nama tidak boleh kosong cangtip!',
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'message' => "Hai $nama! Your Gorgeus Today! 🌸",
        ]);
    }
    exit;
}
?>
