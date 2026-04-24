const pool = require('../config/db');


class User {

    // Get all data
    static async getAllUsersModel(){
        const [rows] = await pool.query(`SELECT * FROM tbl_users`);
        return rows;
    }

    // Add data to the table
    static async addUserModel(user){
        // const firstname2 = user.firstname;
        // const lastname = user.lastname;
        const {firstname,lastname} = user;
        var status = "ACTIVE";

        const [result] = await pool.query(`INSERT INTO tbl_users (firstname, lastname, status) VALUES (?,?,?)`,[firstname,lastname,status]);
        return result;

      
    }


}

module.exports = User;