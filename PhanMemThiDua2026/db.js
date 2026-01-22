import http from 'http';
import sqlite3 from 'sqlite3'
import {fetchAll} from './fetchALl';


const db = new sqlite3.Database('./database/csdl2.db', (err) =>{
        if (err){
                console.log(err.message);
        }
        console.log("Kết nối đến SQLite Database");
});

let result = {};

(async (err) => {
        let sql = `SELECT * FROM ChiHuyD`;
        
        try {
                const data = await fetchAll(db, sql);
                console.log(data);
                result.ChiHuyD = data;
        }catch{
                console.log(err);
        }finally{
                db.close();
        }
})();

export default result;
