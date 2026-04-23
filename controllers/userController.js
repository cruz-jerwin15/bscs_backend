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

    }catch(err){
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    } 

};


module.exports ={
    getAllUsers
}