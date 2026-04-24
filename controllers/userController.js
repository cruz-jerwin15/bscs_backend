const User =  require('../models/userModel');


const getAllUsers = async (req, res) => {

    try{
        const users = await User.getAllUsersModel();
        
        res.status(200).json(
            {
                success:true,
                message:'You have successfully retrieved all users',
                data:users
            }
        );

    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    } 

};

// Add records

const addUser = async (req, res) => {
    try {
         const {firstname, lastname} = req.body;

        if(!firstname || !lastname){
             return res.status(400).json({ success: false, message: 'Firstname and lastname are required!' });
        }

         const newUser = await User.addUserModel({firstname,lastname});
         res.status(201).json({
            success:true,
            message:"You have successfully added a user",
            data:newUser.insertId
         })


    } catch (error) {
         console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}


module.exports ={
    getAllUsers,
    addUser
}