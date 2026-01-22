import {result} from './db.js'

fetch('http://localhost:3000/DanhSachTinh')
    .then(res => res.json())
    .then(data => {
        const tbody = document.getElementById('tbody');

        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.ID}</td>
                <td>${row.HoVaTen}</td>
                <td>${row.ChucVu}</td>
            `;
        });
    });

