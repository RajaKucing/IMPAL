function cancel() {
    // Clear input field when cancel is pressed
    document.getElementById('user-input').value = '';
    goBackToMainMenu();
}

function submit() {
    const userInput = document.getElementById('user-input').value;

    // Daftar paket
    const packages = {
        '1': "80GB Internet/28 hr Rp100.000",
        '2': "100GB Internet/28 hr Rp120.000",
        '3': "125GB Internet/28 hr Rp150.000",
        '4': "150GB Internet/28 hr Rp180.000",
        '5': "170GB Internet/28 hr Rp200.000",
        '6': "Paket Hadiah 50GB (valid 7 hari) - Cocok untuk teman atau keluarga",
        '7': "Paket Lainnya" // Indikasi untuk menampilkan submenu
    };

    // Cek input untuk pemilihan paket yang valid
    if (packages[userInput]) {
        if (userInput === '7') {
            // Tampilkan paket tambahan dan sembunyikan menu utama
            document.querySelector('.menu').style.display = 'none';
            document.getElementById('additional-packages').style.display = 'block';
            return;
        }

        // Perbarui layar konfirmasi dengan detail paket dan tampilkan
        document.querySelector('.menu').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('confirmation-message').textContent = `Anda akan membeli ${packages[userInput]}?`;

        // Bersihkan field input konfirmasi
        document.getElementById('confirmation-input').value = '';
    } else {
        alert("Silakan pilih opsi yang valid (1-7).");
    }
}

function cancelAdditional() {
    // Kembali ke menu utama dari submenu paket tambahan
    document.getElementById('additional-packages').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
    document.getElementById('additional-input').value = '';
}

function submitAdditional() {
    const additionalInput = document.getElementById('additional-input').value;

    const additionalPackages = {
        '1': "50GB/28hr/Rp70.000",
        '2': "200GB/28hr/Rp300.000",
        '3': "10GB/3hr/Rp20.000",
        '4': "300GB/30hr/Rp450.000",
        '5': "5GB/1hr/Rp10.000",
    };

    if (additionalPackages[additionalInput]) {
        // Perbarui layar konfirmasi dengan detail paket tambahan
        document.querySelector('.menu').style.display = 'none';
        document.getElementById('additional-packages').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('confirmation-message').textContent = `Anda akan membeli Paket Lainnya: ${additionalPackages[additionalInput]}?`;

        // Bersihkan field input konfirmasi
        document.getElementById('confirmation-input').value = '';
    } else {
        alert("Silakan pilih opsi yang valid (1-5).");
    }
}

function buy() {
    const confirmationInput = document.getElementById('confirmation-input').value;

    if (confirmationInput === '1') {
        // Pengguna mengonfirmasi pembelian
        alert("Pembelian berhasil! Terima kasih.");
        goBackToMainMenu();
    } else if (confirmationInput === '9') {
        // Pengguna memilih untuk kembali
        goBack();
    } else {
        // Input tidak valid, tampilkan kesalahan
        alert("Silakan masukkan '1' untuk Beli atau '9' untuk Kembali.");
    }
}

function goBack() {
    // Kembali ke menu utama dari layar konfirmasi
    document.getElementById('confirmation').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
}

function goBackToMainMenu() {
    // Reset seluruh form dan kembali ke menu utama
    document.getElementById('user-input').value = '';
    document.getElementById('confirmation').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
    document.getElementById('additional-packages').style.display = 'none';
}
