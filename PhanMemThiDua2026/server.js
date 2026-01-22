import http from 'http';
import result from './db';
import fs from 'fs'
import {kMaxLength} from 'buffer';

const PORT = 3000;

const server = http.createServer((req, res) => {
        if (req.url === '/' || req.url === './main.html') {
                const html = fs.readFileSync('./main.html', 'utf8');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
        }

        if (req.url === '/DanhSachTinh') {
                res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                });
                res.end(JSON.stringify(result.ChiHuyD || []));
        }
});


server.listen(PORT, () =>{
        console.log(`Sever chạy tại http://localhost:${PORT}`);
});
