const Admin = require("../Model/admin");


exports.login = async(req, res, next) => {
    try {
        
        const email = req.body.email;  
        const password = req.body.password;

        const user = await Admin.findOne({
            email: email
        });

        if (!user) {
            return res.status(200).json({
                success: false,
                error_message: "User not found",
            });
        }

        const validPassword = password === user.password;
        if (!validPassword) {
            return res.status(200).json({
                success: false,
                error_message: "Incorrect password",
            });
        }

      
        return res.status(200).json({
            success: true,
            user: user,
        });
    } catch (err) {
        next(err);
    }
};

