/**
 * Script Visualisasi Data Kampanye Konservasi & Hemat Energi
 * Fase 2: Menggunakan Chart.js (CDN) & Data JSON Terpisah
 */

document.addEventListener('DOMContentLoaded', async function () {
  let dataEnergi = null;
  let dataBivariat = null;

  // Coba ambil dari file JSON eksternal, fallback ke window globals jika dibuka lewat file://
  try {
    const resEnergi = await fetch('data/data-perilaku-energi.json');
    if (resEnergi.ok) {
      dataEnergi = await resEnergi.json();
    }
  } catch (err) {
    console.warn('Gagal memuat data-perilaku-energi.json via fetch, menggunakan data cadangan.');
  }

  try {
    const resBivariat = await fetch('data/data-bivariat.json');
    if (resBivariat.ok) {
      dataBivariat = await resBivariat.json();
    }
  } catch (err) {
    console.warn('Gagal memuat data-bivariat.json via fetch, menggunakan data cadangan.');
  }

  // Jika fetch gagal (misal file:// di beberapa browser), gunakan fallback data inline
  if (!dataEnergi && window.DATA_ENERGI_FALLBACK) {
    dataEnergi = window.DATA_ENERGI_FALLBACK;
  }
  if (!dataBivariat && window.DATA_BIVARIAT_FALLBACK) {
    dataBivariat = window.DATA_BIVARIAT_FALLBACK;
  }

  if (dataEnergi) {
    initChartKategori(dataEnergi);
    initChartButir(dataEnergi);
    initChartJurusan(dataEnergi);
    initTabelEksplorasi(dataEnergi);
  }

  if (dataBivariat) {
    initChartBivariat(dataBivariat);
  }
});

/**
 * 1. Grafik Donat Kategori Perilaku (Sangat Baik, Baik, Cukup, Kurang)
 */
function initChartKategori(data) {
  const ctx = document.getElementById('chartKategori');
  if (!ctx) return;

  const kategori = data.ringkasan.kategori_persen;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Sangat Baik (3.26 - 4.00)', 'Baik (2.51 - 3.25)', 'Cukup (1.76 - 2.50)', 'Kurang (1.00 - 1.75)'],
      datasets: [{
        data: [kategori['Sangat Baik'], kategori['Baik'], kategori['Cukup'], kategori['Kurang']],
        backgroundColor: [
          '#059669', // Emerald
          '#10b981', // Hijau muda
          '#f59e0b', // Amber/Cukup
          '#ef4444'  // Merah/Kurang
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 14,
            padding: 16,
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 }
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return ` ${context.label}: ${context.raw}% (${data.ringkasan.kategori[context.label.split(' ')[0]]} siswa)`;
            }
          }
        }
      },
      cutout: '62%'
    }
  });
}

/**
 * 2. Grafik Batang Horizontal: Rata-Rata Skor per Butir Pernyataan (P01 - P10)
 */
function initChartButir(data) {
  const ctx = document.getElementById('chartButir');
  if (!ctx) return;

  const labels = data.per_butir.map(b => `${b.kode}: ${b.label}`);
  const scores = data.per_butir.map(b => b.rata_rata);

  // Pewarnaan khusus: Aksen oranye untuk 2 butir terendah (P04 & P09), Hijau gelap untuk 3 butir tertinggi (P01, P02, P06)
  const colors = data.per_butir.map(b => {
    if (b.kode === 'P04' || b.kode === 'P09') return '#f59e0b'; // Butir terendah perhatian khusus
    if (b.kode === 'P01' || b.kode === 'P02' || b.kode === 'P06') return '#059669'; // Butir tertinggi
    return '#34d399'; // Butir standar
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Skor Rata-Rata (Skala 1 - 4)',
        data: scores,
        backgroundColor: colors,
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel: function (context) {
              const item = data.per_butir[context.dataIndex];
              return `Persen Sering: ${item.persen_sering}%\nPersen Jarang: ${item.persen_jarang}%`;
            }
          }
        }
      },
      scales: {
        x: {
          min: 2.8,
          max: 4.0,
          grid: { color: '#f1f5f9' },
          ticks: { font: { family: "'Plus Jakarta Sans', sans-serif" } }
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 } }
        }
      }
    }
  });
}

/**
 * 3. Grafik Bivariat: Diagram Pencar (Scatter Plot) & Garis Regresi Linear (KIK vs PP)
 */
function initChartBivariat(data) {
  const ctx = document.getElementById('chartBivariat');
  if (!ctx) return;

  // Titik-titik sampel bivariat (X: KIK, Y: PP)
  const scatterPoints = data.sampel.map(s => ({ x: s.x, y: s.y }));

  // Garis regresi linear: Y = 15.5652 + 0.4908X (dari rentang X min 26 s.d. X max 41)
  const linePoints = [
    { x: 26, y: Number((15.5652 + 0.4908 * 26).toFixed(2)) },
    { x: 40, y: Number((15.5652 + 0.4908 * 40).toFixed(2)) }
  ];

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Data Sampel Siswa (92 Responden)',
          data: scatterPoints,
          backgroundColor: 'rgba(5, 150, 105, 0.65)',
          borderColor: '#047857',
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          type: 'line',
          label: 'Garis Regresi Linear (Y = 15.5652 + 0.4908X)',
          data: linePoints,
          borderColor: '#dc2626',
          borderWidth: 2.5,
          borderDash: [6, 4],
          fill: false,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: { font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              if (context.datasetIndex === 0) {
                return ` Skor KIK (X): ${context.parsed.x} | Skor PP (Y): ${context.parsed.y}`;
              }
              return ` Tren Regresi: Y = ${context.parsed.y.toFixed(2)} pada X = ${context.parsed.x}`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Nilai Pengetahuan Konservasi Energi / Skor KIK (Variabel X)',
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 'bold', size: 12 }
          },
          min: 24,
          max: 42,
          grid: { color: '#f1f5f9' }
        },
        y: {
          title: {
            display: true,
            text: 'Nilai Perilaku Penghematan Listrik / Skor PP (Variabel Y)',
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 'bold', size: 12 }
          },
          min: 20,
          max: 42,
          grid: { color: '#f1f5f9' }
        }
      }
    }
  });
}

/**
 * 4. Grafik Batang: Perbandingan Rata-Rata Skor per Jurusan
 */
function initChartJurusan(data) {
  const ctx = document.getElementById('chartJurusan');
  if (!ctx) return;

  const jurusanSorted = [...data.per_jurusan].sort((a, b) => b.rata_rata_skor - a.rata_rata_skor);
  const labels = jurusanSorted.map(j => `${j.kode} (${j.nama})`);
  const values = jurusanSorted.map(j => j.rata_rata_skor);

  // Pewarnaan: Hijau pekat untuk tertinggi (PMN), Oranye untuk terendah (PPLG)
  const colors = jurusanSorted.map(j => {
    if (j.kode === 'PMN') return '#059669';
    if (j.kode === 'PPLG' || j.kode === 'MPLB') return '#f59e0b';
    return '#10b981';
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Rata-Rata Skor Perilaku (1.00 - 4.00)',
        data: values,
        backgroundColor: colors,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel: function (context) {
              const j = jurusanSorted[context.dataIndex];
              return `Responden: ${j.jumlah_responden} siswa\nSangat Baik: ${j.kategori_persen['Sangat Baik']}%\nBaik: ${j.kategori_persen['Baik']}%`;
            }
          }
        }
      },
      scales: {
        y: {
          min: 2.8,
          max: 3.8,
          grid: { color: '#f1f5f9' },
          ticks: { font: { family: "'Plus Jakarta Sans', sans-serif" } }
        },
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
            maxRotation: 45,
            minRotation: 20
          }
        }
      }
    }
  });
}

/**
 * 5. Tab Interaktif & Tabel Eksplorasi (Rombel, Rayon, Gaya Belajar)
 */
function initTabelEksplorasi(data) {
  const container = document.getElementById('kontenTabelEksplorasi');
  const tabs = document.querySelectorAll('.tab-btn[data-target]');
  if (!container || !tabs.length) return;

  function renderTable(tipe) {
    let rowsHtml = '';
    if (tipe === 'rombel') {
      rowsHtml = `
        <table class="tabel-data">
          <thead>
            <tr>
              <th>Rombel</th>
              <th>Jurusan</th>
              <th>Responden</th>
              <th>Rata-Rata Skor</th>
              <th>Kategori Dominan</th>
              <th>% Sangat Baik</th>
            </tr>
          </thead>
          <tbody>
            ${data.per_rombel.map(r => `
              <tr>
                <td><strong>${r.rombel}</strong></td>
                <td>${r.jurusan}</td>
                <td>${r.jumlah_responden} siswa</td>
                <td><strong>${r.rata_rata_skor.toFixed(2)}</strong></td>
                <td><span class="badge badge--hijau">Sangat Baik</span></td>
                <td>${r.kategori_persen['Sangat Baik']}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tipe === 'rayon') {
      rowsHtml = `
        <table class="tabel-data">
          <thead>
            <tr>
              <th>Rayon</th>
              <th>Jumlah Responden</th>
              <th>Rata-Rata Skor</th>
              <th>% Sangat Baik</th>
              <th>% Baik</th>
            </tr>
          </thead>
          <tbody>
            ${data.per_rayon.map(r => `
              <tr>
                <td><strong>Rayon ${r.rayon}</strong></td>
                <td>${r.jumlah_responden} siswa</td>
                <td><strong>${r.rata_rata_skor.toFixed(2)}</strong></td>
                <td>${r.kategori_persen['Sangat Baik']}%</td>
                <td>${r.kategori_persen['Baik']}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tipe === 'gaya-belajar') {
      rowsHtml = `
        <table class="tabel-data">
          <thead>
            <tr>
              <th>Gaya Belajar</th>
              <th>Responden</th>
              <th>Rata-Rata Skor</th>
              <th>Sangat Baik</th>
              <th>Baik</th>
              <th>Cukup / Kurang</th>
            </tr>
          </thead>
          <tbody>
            ${data.per_gaya_belajar.map(g => `
              <tr>
                <td><strong>${g.gaya_belajar}</strong></td>
                <td>${g.jumlah_responden} siswa</td>
                <td><strong>${g.rata_rata_skor.toFixed(2)}</strong></td>
                <td>${g.kategori_persen['Sangat Baik']}%</td>
                <td>${g.kategori_persen['Baik']}%</td>
                <td>${(g.kategori_persen['Cukup'] + (g.kategori_persen['Kurang'] || 0)).toFixed(1)}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
    container.innerHTML = `<div class="tabel-wrapper">${rowsHtml}</div>`;
  }

  // Event listener untuk tombol tab
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('aktif'));
      this.classList.add('aktif');
      renderTable(this.getAttribute('data-target'));
    });
  });

  // Render awal (rombel)
  renderTable('rombel');
}

