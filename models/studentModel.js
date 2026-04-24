const pool = require('../config/db');


class Student {

    static async getAllStudentModel(){
        const [rows] = await pool.query(`SELECT * FROM tbl_student`);
        return rows;
    }

     static async addStudentModel(data){
        // const firstname2 = user.firstname;
        // const lastname = user.lastname;
        const {firstname,lastname,course,gender} = data;
        var status = "ACTIVE";

        const [result] = await pool.query(`INSERT INTO tbl_student 
            (firstname, lastname,course, gender, status) VALUES (?,?,?,?,?)`,[firstname,lastname,course,gender,status]);
        return result;

      
    }

}

module.exports = Student;