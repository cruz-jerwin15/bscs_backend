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
    // Get single record
     static async getUserByIdModel(id){
        const [results] = await pool.query(`SELECT * FROM tbl_users WHERE id = ?`,[id]);
        return results[0];

     }

     // Get  record by name
     static async getUserByNameModel(name){
        const [results] = await pool.query(`SELECT * FROM tbl_users WHERE firstname = ?`,[name]);
        return results;

     }
    //  update record
    static async updateUserModel(id,data){
        const {firstname, lastname} = data;
        const [result] = await pool.query(`UPDATE tbl_users 
            SET firstname= ?, lastname = ? WHERE id = ?`,[firstname,lastname,id]);
        return result.affectedRows;
    }
    //delete record
    static async deleteUserModel(id){
        const [result] = await pool.query(`DELETE FROM tbl_users WHERE id = ?`,[id]);
        return result.affectedRows;
    }





}

module.exports = User;