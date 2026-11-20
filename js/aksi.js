/**
 * Script Interaktif Halaman Aksi & Rekomendasi (Fase 3)
 * 1. Kalkulator Prediksi Regresi Linear (Y = a + bX)
 * 2. Tantangan 7 Hari Hemat Energi (Checklist Interaktif dengan LocalStorage)
 */

document.addEventListener('DOMContentLoaded', function () {
  initKalkulatorRegresi();
  initTantanganHematEnergi();
});

/**
 * 1. Kalkulator Prediksi Regresi Linear:
 * Rumus dari LKM Matematika Bivariat:
 * Y = 15.5652 + 0.4908X
 * Dimana:
 * X = Skor Pengetahuan Konservasi Energi (KIK) [Rentang 10 - 40]
 * Y = Estimasi Skor Perilaku Realistis (PP) [Rentang 10 - 40]
 */
function initKalkulatorRegresi() {
  const slider = document.getElementById('inputKIKRange');
  const numberInput = document.getElementById('inputKIKNumber');
  const skorDisplay = document.getElementById('skorPrediksiPP');
  const badgeKategori = document.getElementById('badgeKategoriPP');
  const pesanDisplay = document.getElementById('pesanPrediksiPP');

  if (!slider || !numberInput || !skorDisplay) return;

  const a = 15.5652;
  const b = 0.4908;

  function hitungPrediksi(x) {
    // Y = a + b * X
    const y = a + b * x;
    const yClamped = Math.min(40, Math.max(10, y));

    skorDisplay.textContent = yClamped.toFixed(2);

    // Kategori berdasarkan rentang skor total kuesioner (Total 10 butir: 10 - 40)
    // 32.6 - 40.0: Sangat Baik | 25.1 - 32.5: Baik | 17.6 - 25.0: Cukup | < 17.6: Kurang
    let kategori = '';
    let badgeClass = '';
    let pesan = '';

    if (yClamped >= 32.6) {
      kategori = 'Kategori: Sangat Baik';
      badgeClass = 'badge badge--hijau';
      pesan = 'Prediksi perilaku sangat positif. Namun ingat: berdasarkan riset kelompok kami, tingkat pengetahuan (X) hanya berkontribusi 17.23% pada tindakan nyata (Y). Komitmen harian tetap menjadi kunci utama!';
    } else if (yClamped >= 25.1) {
      kategori = 'Kategori: Baik';
      badgeClass = 'badge badge--biru';
      pesan = 'Tingkat pemahaman cukup baik, tetapi perilaku nyata masih berpeluang ditingkatkan melalui pembiasaan piket energi dan keberanian menegur rekan satu kelas.';
    } else if (yClamped >= 17.6) {
      kategori = 'Kategori: Cukup';
      badgeClass = 'badge badge--kuning';
      pesan = 'Nilai pengetahuan dan perilaku berada di rentang rata-rata bawah. Diperlukan sosialisasi dasar mengenai dampak pemborosan energi dan latihan disiplin mematikan saklar.';
    } else {
      kategori = 'Kategori: Kurang';
      badgeClass = 'badge badge--merah';
      pesan = 'Perlu pendampingan edukatif segera dari duta energi kelas untuk menumbuhkan kepedulian lingkungan.';
    }

    if (badgeKategori) {
      badgeKategori.textContent = kategori;
      badgeKategori.className = badgeClass;
    }
    if (pesanDisplay) {
      pesanDisplay.textContent = pesan;
    }
  }

  // Sinkronisasi slider dan number input
  slider.addEventListener('input', function () {
    numberInput.value = this.value;
    hitungPrediksi(parseFloat(this.value));
  });

  numberInput.addEventListener('input', function () {
    let val = parseFloat(this.value);
    if (isNaN(val)) val = 25;
    if (val < 10) val = 10;
    if (val > 40) val = 40;
    slider.value = val;
    hitungPrediksi(val);
  });

  // Hitung awal dengan nilai default slider
  hitungPrediksi(parseFloat(slider.value));
}

/**
 * 2. Tantangan 7 Hari Hemat Energi Siswa
 * Menyimpan progres di localStorage agar siswa dapat melanjutkan tantangan
 */
function initTantanganHematEnergi() {
  const container = document.getElementById('daftarTantangan');
  const progressBar = document.getElementById('progressTantangan');
  const progressText = document.getElementById('progressTeks');
  const btnReset = document.getElementById('btnResetTantangan');

  if (!container || !progressBar || !progressText) return;

  const storageKey = 'kampanye_energi_tantangan_v1';
  let savedState = [];

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) savedState = JSON.parse(raw);
  } catch (e) {
    savedState = [];
  }

  const checkboxes = container.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;

  function updateProgress() {
    let checkedCount = 0;
    const currentState = [];

    checkboxes.forEach((cb, index) => {
      const parent = cb.closest('.item-tantangan');
      if (cb.checked) {
        checkedCount++;
        currentState.push(index);
        if (parent) parent.classList.add('selesai');
      } else {
        if (parent) parent.classList.remove('selesai');
      }
    });

    const percent = Math.round((checkedCount / total) * 100);
    progressBar.style.width = percent + '%';
    progressText.textContent = `${checkedCount} dari ${total} Aksi Selesai (${percent}%)`;

    try {
      localStorage.setItem(storageKey, JSON.stringify(currentState));
    } catch (e) {}

    // Feedback jika 100%
    const lencana = document.getElementById('lencanaSelesai');
    if (lencana) {
      lencana.style.display = checkedCount === total ? 'block' : 'none';
    }
  }

  // Terapkan state tersimpan
  checkboxes.forEach((cb, index) => {
    if (savedState.includes(index)) {
      cb.checked = true;
    }
    cb.addEventListener('change', updateProgress);
  });

  // Reset button
  if (btnReset) {
    btnReset.addEventListener('click', function () {
      if (confirm('Ulangi tantangan hemat energi dari awal?')) {
        checkboxes.forEach(cb => (cb.checked = false));
        updateProgress();
      }
    });
  }

  updateProgress();
}

