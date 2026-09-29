<img src="eNVision Preview.PNG" alt="eNVision Banner - Follow Your Vision" width="800">

1.  Struktur Folder & Modularitas File
    Proyek ini menggunakan pendekatan modular untuk memisahkan logika struktur (HTML), desain (CSS), dan fungsionalitas (JS) agar kode lebih mudah dikelola dan dikembangkan.

    A. Dokumen HTML (Struktur Halaman)
        1. Home[eNVision].html    : Halaman utama yang menampilkan banner dan New Arrival.
        2. Product[eNVision].html : Katalog produk lengkap dengan berbagai koleksi kacamata.
        3. AboutUs[eNVision].html : Informasi sejarah, filosofi, dan profil pemilik perusahaan.
        4. Reward[eNVision].html  : Halaman khusus member untuk klaim keuntungan eksklusif.
        5. Order[eNVision].html   : Antarmuka transaksi dan formulir pemesanan produk.

    B. Cascading Style Sheets
        1. global.css : Mengatur elemen yang muncul di semua halaman (Header & Footer).
        2. home.css   : Mengatur layout banner, grid produk, dan tipografi khusus halaman Home.
        3. about.css  : Mengatur grid khusus layout Owner Card dan History Box.
        4. reward.css : Desain kartu reward yang responsif dan interaktif.
        5. product.css: Mengatur tampilan katalog kartu produk terlihat rapih.
        6. order.css  : Mengatur tata letak formulir (inputs) dan panel summary yang bersifat sticky.

    C. JavaScript
        1. validate.js: Mengatur logika validasi formulir pada halaman Order, termasuk pemeriksaan format email
        , verifikasi nomor telepon, dan pencegahan pengiriman data kosong.

    D. Assets (Sumber Daya Visual)
        - /Assets/Header : Logo eNVision dan latar belakang navigasi.
        - /Assets/Home   : Banner promosi dan foto produk New Arrival.
        - /Assets/Product: Gambar katalog kacamata dan lensa.
        - /Assets/AboutUs: Foto founder dan aset visual pendukung sejarah perusahaan.
        - /Assets/Rewards: Foto promo untuk member.
        - /Assets/Footer : Ikon media sosial (IG, YT, FB, TW).
