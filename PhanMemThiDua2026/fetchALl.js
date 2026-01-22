import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database/csdl2.db");

export const fetchAll = async (db, sql, params) => {
        return new Promise ((resove, reject) =>{
                db.all(sql, params, (err, row) =>{
                        if (err) reject(err);
                        resove(row);
                });
        });
};


export const fetchFirst = async (db, sql, params) => {
        return new Promise ((resove, reject) =>{
                db.get(sql, params, (err, row) =>{
                        if (err) reject(err);
                        resove(row);
                });
        });
};

