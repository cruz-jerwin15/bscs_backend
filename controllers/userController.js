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
// get single record
const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const record = await User.getUserByIdModel(id);

        if(!record){
            return res.status(404).json({
                success:false,
                message:"User not found",
                data:null
            });
        }

        return res.status(200).json({
            success:true,
            message:"You have successfully retrieved a user",
            data:record
        });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

// get  record by name
const getUserByName = async (req, res) => {
    try {
        const {name} = req.params;
        const record = await User.getUserByNameModel(name);

        if(!record){
            return res.status(404).json({
                success:false,
                message:"User not found",
                data:null
            });
        }

        return res.status(200).json({
            success:true,
            message:"You have successfully retrieved a user",
            data:record
        });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
// Update record
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {firstname, lastname} = req.body;

        if(!firstname || !lastname){
            return res.status(400).json({ 
                success: false, 
                message: 'Firstname and lastname are required!',
                data:null });
        }
        const result = await User.updateUserModel(id,{firstname,lastname})

        if(result === 0){
            return res.status(404).json({
                success:false,
                message:"User not found",
                data:null
            });
        }
        return res.status(200).json({
            success:true,
            message:"You have successfully updated a user",
            data:result
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
// Delete record
const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await User.deleteUserModel(id);
        if(result === 0){
            return res.status(404).json({
                success:false,
                message:"User not found",
                data:null
            });
        }
        return res.status(200).json({
            success:true,
            message:"You have successfully deleted a user",
            data:result
        });

    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}



module.exports ={
    getAllUsers,
    addUser,
    getUserById,
    getUserByName,
    updateUser,
    deleteUser
}