const pool = require('../config/db');


class User {

    static async getAllUsersModel(){
        const [rows] = await pool.query(`SELECT * FROM tbl_users`);
        return rows;
    }

}

module.exports = User;