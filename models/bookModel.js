import pool from ' . ./config/db.js';

//Retreive 
export const fetch = async () => { 
    const [rows] = await pool.query ("SELECT * FROM book");
    return rows;
};