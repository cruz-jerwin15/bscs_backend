const Student =  require('../models/studentModel');


const getAllStudents = async (req, res) => {

    try{
        const results = await Student.getAllStudentModel();
        
        res.status(200).json(
            {
                success:true,
                message:'You have successfully retrieved all students information',
                data:results
            }
        );

    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    } 

};

const addStudent = async (req, res) => {
    try {
         const {firstname,lastname,course,gender} = req.body;

        if(!firstname || !lastname || !course || !gender){
             return res.status(400).json({ success: false, message: 'Firstname, lastname, course, gender are required!' });
             
            
        }else if(gender.length > 1){
            return res.status(400).json({ success: false, message: 'Gender must be 1 character.' });
        }
         const newData = await Student.addStudentModel({firstname,lastname,course,gender});
         res.status(201).json({
            success:true,
            message:"You have successfully added a student",
            data:newData.insertId
         })


    } catch (error) {
         console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}


module.exports ={
    getAllStudents,
    addStudent
}