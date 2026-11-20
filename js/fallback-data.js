/**
 * Fallback Data untuk Mendukung Protokol file://
 * Menjamin grafik tetap tampil jika browser memblokir fetch() lokal
 */
window.DATA_BIVARIAT_FALLBACK = {
  "statistik": {
    "n": 92,
    "rata_rata_x": 34.1739,
    "rata_rata_y": 32.3370,
    "slope_b": 0.4908,
    "intersep_a": 15.5652,
    "persamaan_regresi": "Y = 15.5652 + 0.4908X",
    "koefisien_korelasi_r": 0.4151,
    "koefisien_determinasi_d": 0.1723,
    "persen_determinasi": 17.23
  },
  "sampel": [
    {"x":30,"y":30},{"x":33,"y":32},{"x":28,"y":35},{"x":37,"y":30},{"x":33,"y":28},
    {"x":31,"y":28},{"x":31,"y":28},{"x":38,"y":33},{"x":35,"y":35},{"x":32,"y":26},
    {"x":34,"y":34},{"x":31,"y":32},{"x":38,"y":40},{"x":30,"y":29},{"x":34,"y":32},
    {"x":33,"y":33},{"x":32,"y":32},{"x":36,"y":30},{"x":39,"y":35},{"x":40,"y":31},
    {"x":32,"y":31},{"x":35,"y":38},{"x":36,"y":34},{"x":35,"y":30},{"x":32,"y":33},
    {"x":37,"y":34},{"x":27,"y":28},{"x":33,"y":34},{"x":31,"y":24},{"x":34,"y":33},
    {"x":30,"y":29},{"x":40,"y":35},{"x":38,"y":27},{"x":36,"y":26},{"x":36,"y":27},
    {"x":30,"y":32},{"x":39,"y":40},{"x":27,"y":31},{"x":30,"y":34},{"x":30,"y":29},
    {"x":39,"y":25},{"x":38,"y":29},{"x":28,"y":27},{"x":34,"y":23},{"x":36,"y":29},
    {"x":34,"y":30},{"x":38,"y":34},{"x":31,"y":35},{"x":36,"y":38},{"x":34,"y":32},
    {"x":35,"y":27},{"x":32,"y":34},{"x":30,"y":40},{"x":29,"y":22},{"x":33,"y":28},
    {"x":29,"y":30},{"x":40,"y":31},{"x":28,"y":29},{"x":30,"y":27},{"x":38,"y":37},
    {"x":37,"y":31},{"x":39,"y":36},{"x":38,"y":40},{"x":31,"y":35},{"x":38,"y":39},
    {"x":40,"y":40},{"x":40,"y":30},{"x":31,"y":28},{"x":38,"y":37},{"x":38,"y":33},
    {"x":32,"y":31},{"x":40,"y":40},{"x":40,"y":31},{"x":28,"y":24},{"x":30,"y":34},
    {"x":30,"y":29},{"x":36,"y":40},{"x":40,"y":40},{"x":33,"y":30},{"x":31,"y":39},
    {"x":32,"y":38},{"x":31,"y":32},{"x":33,"y":34},{"x":36,"y":36},{"x":30,"y":33},
    {"x":35,"y":31},{"x":40,"y":39},{"x":39,"y":37},{"x":39,"y":40},{"x":31,"y":30},
    {"x":36,"y":31},{"x":37,"y":38}
  ]
};

window.DATA_ENERGI_FALLBACK = {
  "meta": {
    "judul": "Hasil Kuesioner Perilaku Hemat Energi Siswa Kelas XI",
    "jumlah_responden": 636,
    "persen_partisipasi": 99.4
  },
  "ringkasan": {
    "rata_rata_skor": 3.36,
    "kategori": { "Sangat Baik": 378, "Baik": 234, "Cukup": 23, "Kurang": 1 },
    "kategori_persen": { "Sangat Baik": 59.4, "Baik": 36.8, "Cukup": 3.6, "Kurang": 0.2 },
    "persen_sering_rata_rata": 90.79
  },
  "per_butir": [
    { "kode": "P01", "label": "Praktik hemat energi sehari-hari", "rata_rata": 3.51, "persen_sering": 98.6, "persen_jarang": 1.4 },
    { "kode": "P02", "label": "Tindakan nyata di bengkel, lab, kelas, rumah", "rata_rata": 3.46, "persen_sering": 95.4, "persen_jarang": 4.6 },
    { "kode": "P03", "label": "Matikan lampu/AC/kipas saat kelas kosong", "rata_rata": 3.37, "persen_sering": 90.6, "persen_jarang": 9.4 },
    { "kode": "P04", "label": "Batasi penggunaan gawai/laptop", "rata_rata": 3.22, "persen_sering": 86.3, "persen_jarang": 13.7 },
    { "kode": "P05", "label": "Pilih fasilitas/transportasi hemat energi", "rata_rata": 3.30, "persen_sering": 86.6, "persen_jarang": 13.4 },
    { "kode": "P06", "label": "Cabut charger/steker setelah dipakai", "rata_rata": 3.45, "persen_sering": 92.0, "persen_jarang": 8.0 },
    { "kode": "P07", "label": "Manfaatkan cahaya matahari (buka tirai/jendela)", "rata_rata": 3.36, "persen_sering": 89.5, "persen_jarang": 10.5 },
    { "kode": "P08", "label": "Atur suhu AC/kipas secukupnya", "rata_rata": 3.31, "persen_sering": 90.4, "persen_jarang": 9.6 },
    { "kode": "P09", "label": "Berani menegur/mengajak teman hemat listrik", "rata_rata": 3.22, "persen_sering": 86.8, "persen_jarang": 13.2 },
    { "kode": "P10", "label": "Pastikan peralatan mati sebelum pulang", "rata_rata": 3.41, "persen_sering": 91.7, "persen_jarang": 8.3 }
  ],
  "per_jurusan": [
    { "kode": "PMN", "nama": "Pemasaran", "jumlah_responden": 72, "rata_rata_skor": 3.51, "kategori_persen": { "Sangat Baik": 70.8, "Baik": 27.8 } },
    { "kode": "HTL", "nama": "Perhotelan", "jumlah_responden": 69, "rata_rata_skor": 3.46, "kategori_persen": { "Sangat Baik": 65.2, "Baik": 34.8 } },
    { "kode": "KLN", "nama": "Kuliner", "jumlah_responden": 71, "rata_rata_skor": 3.43, "kategori_persen": { "Sangat Baik": 64.8, "Baik": 31.0 } },
    { "kode": "TJKT", "nama": "Teknik Jaringan Komputer & Telko", "jumlah_responden": 104, "rata_rata_skor": 3.42, "kategori_persen": { "Sangat Baik": 67.3, "Baik": 28.8 } },
    { "kode": "DKV", "nama": "Desain Komunikasi Visual", "jumlah_responden": 107, "rata_rata_skor": 3.34, "kategori_persen": { "Sangat Baik": 57.9, "Baik": 39.3 } },
    { "kode": "MPLB", "nama": "Manajemen Perkantoran & Bisnis", "jumlah_responden": 37, "rata_rata_skor": 3.24, "kategori_persen": { "Sangat Baik": 51.4, "Baik": 43.2 } },
    { "kode": "PPLG", "nama": "Pengemb. Perangkat Lunak & Gim", "jumlah_responden": 176, "rata_rata_skor": 3.24, "kategori_persen": { "Sangat Baik": 48.3, "Baik": 45.5 } }
  ],
  "per_rombel": [
    { "rombel": "KLN XI-1", "jurusan": "KLN", "jumlah_responden": 36, "rata_rata_skor": 3.55, "kategori_persen": { "Sangat Baik": 75.0 } },
    { "rombel": "PMN XI-1", "jurusan": "PMN", "jumlah_responden": 36, "rata_rata_skor": 3.54, "kategori_persen": { "Sangat Baik": 75.0 } },
    { "rombel": "DKV XI-2", "jurusan": "DKV", "jumlah_responden": 35, "rata_rata_skor": 3.51, "kategori_persen": { "Sangat Baik": 71.4 } },
    { "rombel": "HTL XI-1", "jurusan": "HTL", "jumlah_responden": 33, "rata_rata_skor": 3.51, "kategori_persen": { "Sangat Baik": 66.7 } },
    { "rombel": "TJKT XI-1", "jurusan": "TJKT", "jumlah_responden": 35, "rata_rata_skor": 3.50, "kategori_persen": { "Sangat Baik": 77.1 } },
    { "rombel": "PMN XI-2", "jurusan": "PMN", "jumlah_responden": 36, "rata_rata_skor": 3.47, "kategori_persen": { "Sangat Baik": 66.7 } },
    { "rombel": "PPLG XI-3", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.43, "kategori_persen": { "Sangat Baik": 62.9 } },
    { "rombel": "HTL XI-2", "jurusan": "HTL", "jumlah_responden": 36, "rata_rata_skor": 3.41, "kategori_persen": { "Sangat Baik": 63.9 } },
    { "rombel": "TJKT XI-3", "jurusan": "TJKT", "jumlah_responden": 34, "rata_rata_skor": 3.41, "kategori_persen": { "Sangat Baik": 64.7 } },
    { "rombel": "TJKT XI-2", "jurusan": "TJKT", "jumlah_responden": 35, "rata_rata_skor": 3.36, "kategori_persen": { "Sangat Baik": 60.0 } },
    { "rombel": "DKV XI-3", "jurusan": "DKV", "jumlah_responden": 36, "rata_rata_skor": 3.34, "kategori_persen": { "Sangat Baik": 55.6 } },
    { "rombel": "PPLG XI-1", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.31, "kategori_persen": { "Sangat Baik": 54.3 } },
    { "rombel": "KLN XI-2", "jurusan": "KLN", "jumlah_responden": 35, "rata_rata_skor": 3.30, "kategori_persen": { "Sangat Baik": 54.3 } },
    { "rombel": "MPLB XI-1", "jurusan": "MPLB", "jumlah_responden": 37, "rata_rata_skor": 3.24, "kategori_persen": { "Sangat Baik": 51.4 } },
    { "rombel": "PPLG XI-4", "jurusan": "PPLG", "jumlah_responden": 36, "rata_rata_skor": 3.21, "kategori_persen": { "Sangat Baik": 47.2 } },
    { "rombel": "DKV XI-1", "jurusan": "DKV", "jumlah_responden": 36, "rata_rata_skor": 3.19, "kategori_persen": { "Sangat Baik": 47.2 } },
    { "rombel": "PPLG XI-5", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.15, "kategori_persen": { "Sangat Baik": 42.9 } },
    { "rombel": "PPLG XI-2", "jurusan": "PPLG", "jumlah_responden": 35, "rata_rata_skor": 3.08, "kategori_persen": { "Sangat Baik": 34.3 } }
  ],
  "per_rayon": [
    { "rayon": "Tajur", "jumlah_responden": 83, "rata_rata_skor": 3.41, "kategori_persen": { "Sangat Baik": 61.4, "Baik": 37.3 } },
    { "rayon": "Cicurug", "jumlah_responden": 178, "rata_rata_skor": 3.38, "kategori_persen": { "Sangat Baik": 62.4, "Baik": 34.8 } },
    { "rayon": "Cibedug", "jumlah_responden": 61, "rata_rata_skor": 3.37, "kategori_persen": { "Sangat Baik": 63.9, "Baik": 29.5 } },
    { "rayon": "Ciawi", "jumlah_responden": 98, "rata_rata_skor": 3.34, "kategori_persen": { "Sangat Baik": 59.2, "Baik": 34.7 } },
    { "rayon": "Cisarua", "jumlah_responden": 118, "rata_rata_skor": 3.34, "kategori_persen": { "Sangat Baik": 58.5, "Baik": 38.1 } },
    { "rayon": "Sukasari", "jumlah_responden": 33, "rata_rata_skor": 3.33, "kategori_persen": { "Sangat Baik": 60.6, "Baik": 33.3 } },
    { "rayon": "Wikrama", "jumlah_responden": 65, "rata_rata_skor": 3.31, "kategori_persen": { "Sangat Baik": 46.2, "Baik": 50.8 } }
  ],
  "per_gaya_belajar": [
    { "gaya_belajar": "Kinestetik", "jumlah_responden": 201, "rata_rata_skor": 3.40, "kategori_persen": { "Sangat Baik": 62.2, "Baik": 34.3, "Cukup": 3.5 } },
    { "gaya_belajar": "Auditori", "jumlah_responden": 145, "rata_rata_skor": 3.39, "kategori_persen": { "Sangat Baik": 60.7, "Baik": 37.2, "Cukup": 2.1 } },
    { "gaya_belajar": "Visual", "jumlah_responden": 289, "rata_rata_skor": 3.32, "kategori_persen": { "Sangat Baik": 56.7, "Baik": 38.4, "Cukup": 4.5, "Kurang": 0.3 } }
  ]
};

