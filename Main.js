// main.js
import { dataMahasiswa } from './data.js';

// Ambil elemen tbody dari HTML
const tabelBody = document.getElementById('tabel-mahasiswa');

function tampilkanData() {
    // Kosongkan dulu isinya
    tabelBody.innerHTML = '';

    dataMahasiswa.forEach((mhs, index) => {
        // Tentukan status kelulusan (misal KKM = 70)
        const status = mhs.nilai >= 70 ? '<span class="text-green-600 font-semibold">Lulus</span>' : '<span class="text-red-600 font-semibold">Remedial</span>';

        // Buat elemen baris tabel (tr)
        const tr = document.createElement('tr');
        tr.className = "border-b hover:bg-gray-50";

        tr.innerHTML = `
            <td class="p-3 border">${index + 1}</td>
            <td class="p-3 border">${mhs.nim}</td>
            <td class="p-3 border">${mhs.nama}</td>
            <td class="p-3 border">${mhs.prodi}</td>
            <td class="p-3 border">${mhs.nilai}</td>
            <td class="p-3 border">${status}</td>
        `;

        // Masukkan baris ke dalam tbody di HTML
        tabelBody.appendChild(tr);
    });
}

// Jalankan fungsi saat web dimuat
tampilkanData();
